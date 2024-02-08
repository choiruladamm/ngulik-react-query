'use client';

import React, { FC } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { User } from '@/types/user';
import Image from 'next/image';

interface ListUserProps {}

async function getUsers() {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data);
}

const ListUser: FC<ListUserProps> = ({}) => {
  const { data } = useQuery<User[]>({
    queryKey: ['random'],
    queryFn: () => getUsers(),
    staleTime: 5 * 1000,
  });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      <div className="grid grid-cols-4 gap-20">
        {data?.map((user) => (
          <div
            key={user.id}
            className="border border-gray-300 text-center mx-auto"
          >
            <Image
              src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
              alt={user.name}
              width={180}
              height={180}
            />
            <h3 className="text-2xl font-semibold">{user.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListUser;
