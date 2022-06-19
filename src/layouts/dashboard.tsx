import Head from 'next/head';
import NavigationBarAside from '../components/NavigationBarAside';

interface PropsWithChildren {
  children: React.ReactNode;
}

const dashboard = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Crit</title>
      </Head>

      <main className="dashboard">
        <NavigationBarAside />
        {children}
      </main>
    </>
  );
};

export default dashboard;
