import { SignInForm } from '@/components/SignInForm/SignInForm';

const Signin = () => {
  return (
    <div className="max-w-md m-2 p-3 px-2 border-2 rounded shadow-xl bg-neutral-50 shadow-neutral-200 md:w-full md:p-5 md:position-center">
      <SignInForm />
    </div>
  );
};

export default Signin;

//useOtherLayeout
Signin.getLayout = (page) => <>{page}</>;
