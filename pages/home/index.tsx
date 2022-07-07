import Layout from '../../src/layouts/dashboard';
import useLoggedInStatus from '../../src/hooks/useLoggedInStatus';

import { useState } from 'react';
import type { ReactElement } from 'react';

const Index = () => {
  const { isLoading, isLoggedIn } = useLoggedInStatus();

  console.log(isLoggedIn);

  return <div></div>;
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;
