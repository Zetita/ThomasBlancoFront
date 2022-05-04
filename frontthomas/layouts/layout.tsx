import React, { ReactNode } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'


type Props = {
    children: ReactNode;
    title?: string;
    description?: string;
};

const Layout = ({
    children,
    title = 'Thomas Blanco',
    description = 'Work in progress <3'
}: Props) => (

    <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />

            <link rel="icon" href="/favicon.ico" />
        </Head>



        <nav className="p-3 navbar navbar-expand-lg navbar-dark bg-dark ">
            <a className="navbar-brand " href="#">Z</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
              
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                </ul>
             
            </div>
        </nav>

        <main className={styles.main}>{children}</main>

        <footer className={styles.footer}>
            <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by Thomas Blanco
            </a>
        </footer>

    </>
)

export default Layout