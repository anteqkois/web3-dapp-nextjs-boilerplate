import { useConfirmationToast } from '@/shared/hooks';
import {
  errorToast,
  transactionToast,
  waitToast,
} from '@/shared/ui/customToasts';
import { useUser } from '@/shared/User/hooks/useUser';
import { constants } from '@/utils/constants';
import { selectWeb3Error } from '@/utils/selectWeb3Error';
import { HandledNetworksCapitalize } from '@tipdapp/types';
import { Hash } from '@wagmi/core';
import { useState } from 'react';
import {
  useContract,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useProvider,
} from 'wagmi';
import { RegisterUserTransaction } from '../components/RegisterUserTransaction';
import { userFacetInstance } from '../contractInstances';

export const useUserFacet = () => {
  const provider = useProvider();
  const [hashToObserve, setHashToObserve] = useState<Hash>();

  const { user, refreshUser } = useUser();
  const { chain } = useNetwork();
  useConfirmationToast(hashToObserve, 5);

  // USER TOKEN
  const userToken = useContractRead({
    ...userFacetInstance[chain?.name as HandledNetworksCapitalize],
    functionName: 'userToken',
    args: [user!.address],
    // watch: true,
  });

  // REGISTER USER
  const { config } = usePrepareContractWrite({
    ...userFacetInstance[chain?.name as HandledNetworksCapitalize],
    functionName: 'registerUser',
    args: ['', ''],
    enabled: userToken.data === constants.ethereum.AddressZero,
  });

  const contract = useContract({
    ...userFacetInstance[chain?.name as HandledNetworksCapitalize],
    signerOrProvider: provider,
  });

  const registerUser = useContractWrite({
    ...config,
    onMutate() {
      waitToast('Waiting for transaction confirmation in wallet.', {
        id: 'registerUser',
        duration: Infinity,
      });
    },
    onSettled: async (data, error: any) => {
      waitToast(
        'Transaction was send. After confirming with 5 blocks, you will be automatically redirected to the token panel.',
        {
          id: 'registerUser',
          duration: Infinity,
        }
      );

      if (error) {
        console.log(error);
        errorToast(selectWeb3Error(error), {
          id: 'registerUser',
          duration: Infinity,
        });
      } else if (data?.hash) {
        setHashToObserve(data.hash);
        await data.wait(1);

        const newTokenAddress = await userToken.refetch();

        transactionToast(
          <RegisterUserTransaction
            hash={data.hash}
            tokenAddress={newTokenAddress.data!}
          />,
          data.hash,
          { id: 'registerUser', duration: Infinity }
        );
        (await data.wait(4)) && (await refreshUser());
      }
    },
  });

  const registerUserCall = async (symbol: string, name: string) => {
    // if (contract && registerUser && registerUser.writeAsync) {
    if (contract && registerUser.writeAsync) {
      // @ts-expect-error
      await registerUser.writeAsync({
        recklesslySetUnpreparedArgs: [symbol, name],
        recklesslySetUnpreparedOverrides: {
          gasLimit: await contract.estimateGas.registerUser(symbol, name),
        },
      });
    }
  };

  return {
    contract,
    // registerUser: { ...registerUser, call: registerUserCall },
    registerUser: { ...registerUser, call: registerUserCall },
    userToken,
  };
};
