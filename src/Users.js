import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export const Users = () => {
  const fetchUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res);
    return res.data;
  };

  const { isLoading, error, data } = useQuery('posts', fetchUsers);
  if (isLoading) return <div> Loading users... </div>;
  if (error) return <div>Error while loading: {error.message}</div>;
  return <div>No of fetched users: {data.length}</div>;
};
