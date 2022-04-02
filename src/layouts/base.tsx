import Head from 'next/head'

interface PropsWithChildren {
  children: React.ReactNode
}

const authentification = ({children}: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Crit</title>
      </Head>
      
      <main className="app-main">
        {children}
      </main>
    </>
  )
}

export default authentification
