'use client';

import { Role } from '@tipdapp/types';

type Props = {
  params: {
    role: Role;
  };
};

export default function Page({ params }: Props) {
  return <main>Show all page connected to given role {params.role}</main>;
}
