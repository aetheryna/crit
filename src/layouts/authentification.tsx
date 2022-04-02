import Head from "next/head"

interface PropsWithChildren {
  children: React.ReactNode
}

const authentification = ({children}: PropsWithChildren) => {
  return (
    <>
      <Head>
        <title> Welcome to CRIT </title>
      </Head>

      <main className="app-auth">
        {children}
      </main>
    </>
  )
}

export default authentification
