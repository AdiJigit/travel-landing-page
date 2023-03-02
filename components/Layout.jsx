import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children,title}) {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
      <Navbar />
      <main className='h-full w-full'>{children}</main>
      <Footer />
    </>
  )
}
