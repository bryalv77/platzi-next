import React from 'react'
import Navbar from '@components/Navbar/Navbar';
import styles from './Layout.module.css';

const Layout: React.FC = ({children}) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <footer className='footer'>{new Date().getFullYear()}</footer>

      <style jsx>
        {
          `
          .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 50px;
            text-align: center;
          }`
        }
      </style>
    </div>
  )
}

export default Layout