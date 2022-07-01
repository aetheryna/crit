import Layout from '../../src/layouts/dashboard';

import type { ReactElement } from 'react';

const index = () => {
  return <div></div>;
};

index.getLayout = function getLayout(page: ReactElement) {
  return <Layout> {page}</Layout>;
};

export default index;
