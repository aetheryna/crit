import Layout from '../../src/layouts/base';

import type { ReactElement } from 'react';

const index = () => {
  return <div>index</div>;
};

index.getLayout = function getLayout(page: ReactElement) {
  return <Layout> {page}</Layout>;
};

export default index;
