import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
// import { useSession } from 'next-auth/react'
import {useAuth} from '../context/authContext'

const Home: NextPage = () => {
  // const { data: session, status } = useSession()
  // const loading = status === "loading"
  const {user} = useAuth();
  console.log(user)

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs | Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Authentication in Next.js app using Next-Auth</h1>
        <div className={styles.user}>
          {/* {loading && <div className={styles.title}>Loading...</div>} */}
          {user && <> <p style={{ marginBottom: '10px' }}> Welcome, {user?.displayName ?? user?.email}</p> <br />
            <img src={user?.photoURL ?? ''} alt="" className={styles.avatar} />
          </>}
          {!user &&
            <>
              <p className={styles.title}>Please Sign in</p>
            </>
          }
        </div>
      </main>
    </div>
  )
}

export default Home
