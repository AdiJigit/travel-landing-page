import HomeSection from '@/components/HomeSection';
import Layout from '@/components/Layout';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout title="Home Page">
      <HomeSection />
    </Layout>
  );
}
