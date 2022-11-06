'use client';
import { CustomConnectButton } from '@/components/utils';
import { useUser } from '@/hooks';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Login = () => {
  const { login, logout, status } = useUser();
  const router = useRouter();

  // console.log(status);
  // console.log(router.query?.callback);
  // console.log(status === 'authenticated' && router.query?.callback);
  // if (status === 'authenticated' && router.query?.callback)
  //   router.push( router.query.callback as string);

  return (
    <>
      <CustomConnectButton />
      <br />
      <button onClick={logout}>logout</button>
      <br />
      <Link href="/signup">signup</Link>
      <br />
    </>
  );
};

export default Login;
