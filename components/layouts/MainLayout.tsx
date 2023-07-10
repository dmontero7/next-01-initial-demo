import Head from 'next/head'
import styles from './MainLayout.module.css'
import { Navbar } from '../Navbar'
import { FC, PropsWithChildren } from 'react'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Este es contact</title>
                <meta name="description" content="About page" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}
