import Layout from '../../../src/layouts/authentification';
import Login from '../../../src/components/Login';

import type { ReactElement } from 'react';

const index = () => {
  return (
    <>
      <Login />
    </>
  );
};

index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default index;
