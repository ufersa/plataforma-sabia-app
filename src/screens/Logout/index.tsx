import React, { useEffect } from 'react';
import { useAuth } from '@hooks/useAuth';

const Logout = (): JSX.Element => {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, []);

  return (<></>);
};

export default Logout;
