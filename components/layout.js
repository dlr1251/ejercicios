import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/components/Layout.module.scss'

export default function Layout ({children}) {
    return (
        <div className={styles.verde}>
            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )

}