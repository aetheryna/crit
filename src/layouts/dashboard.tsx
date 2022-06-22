import Head from 'next/head';
import { withRouter, NextRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import NavigationBarAside from '../components/NavigationBarAside';
import Header from '../components/Header';
import UtilityWheel from '../components/UtilityWheel';
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
        <Provider store={store}>
          <NavigationBarAside />
          <Header />
          <UtilityWheel />
        </Provider>
        {children}
      </main>
    </>
  );
};

export default withRouter(dashboard);
