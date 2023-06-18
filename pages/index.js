import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>As a full stack developer, I excel in building robust web applications with expertise in front-end and back-end technologies. With proficiency in languages like HTML, CSS, JavaScript, and frameworks such as React and Angular, I create seamless user experiences. I also possess strong server-side skills using languages like Node.js and Python, along with frameworks like Express and Django. My database knowledge includes MySQL and MongoDB for efficient data management. Collaborative by nature, I thrive in cross-functional teams and deliver high-quality code to create impactful and user-centric applications.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}