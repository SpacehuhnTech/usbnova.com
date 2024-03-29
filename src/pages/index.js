import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
        <img src='/img/home/nova2-small.png' alt='USB Nova' height='100px' />
        <br />
        <img src='/img/home/feature_logo.png' alt='USB Nova Logo' height='80px' />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{ margin: '0 .5rem' }}
            to="https://spacehuhn.store/collections/usb-nova">
            Buy Now
          </Link>
          <Link
            className="button button--secondary button--lg"
            style={{ margin: '0 .5rem' }}
            to="/docs/about">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="An easy-to-use BadUSB for learning and testing with USB mass storage, support for multiple keyboard layouts, and customizable device IDs.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
