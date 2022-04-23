import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Head from 'next/head';
import Image from 'next/image';

import { login } from '../src/redux/userSlice';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(login({ email: 'jannowak@gmail.com', password: 'haslo123' }));
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-3xl font-bold underline text-red-600">Test 2</h1>
      </main>
    </div>
  );
}
