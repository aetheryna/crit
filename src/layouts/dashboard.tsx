import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';
import NavigationBarAside from '../components/NavigationBarAside';
import Header from '../components/Header';
import { PageTitle } from '../helpers/setPageTitle';

interface PropsWithChildren {
  children: React.ReactNode;
  router: NextRouter;
}

const dashboard = ({ children, router }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>CRIT | {PageTitle(router)}</title>
      </Head>

      <main className="dashboard">
        <NavigationBarAside />
        <Header />
        {children}
      </main>
    </>
  );
};

export default withRouter(dashboard);
