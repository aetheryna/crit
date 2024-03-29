import Layout from '../../../src/layouts/authentification';
import Registration from '../../../src/components/Registration';

import type { ReactElement } from 'react';

const index = () => {
  return (
    <>
      <Registration />
    </>
  );
};

index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default index;
