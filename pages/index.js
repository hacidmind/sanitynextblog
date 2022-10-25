import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Sanity Next App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Here is Our Landing Page
        </h1>
        <p className={styles.description}>
         <Link href="/blog">Go to Blog</Link>
        </p>
      </main>

      <footer className={styles.footer}>
        <p>
          This is the footer
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            
          </span>
        </p>
      </footer>
    </div>
  )
}
