import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to learn</>,
    imageUrl: 'img/undraw_researching_22gp.svg',
    description: (
      <>
        Our goal was to make tool that is powerful but easy to learn as well. We
        promise you won't waste your time with us.
      </>
    ),
  },
  {
    title: <>Focus on coding</>,
    imageUrl: 'img/undraw_developer_activity_bv83.svg',
    description: (
      <>
        Trecli was designed to speed up development process. Trecli lets you
        focus on real coding. We&apos;ll make necessary files for you.
      </>
    ),
  },
  {
    title: <>Modern approach</>,
    imageUrl: 'img/undraw_web_development_w2vv.svg',
    description: (
      <>We like React with Typescript and hooks. We hope you too :)</>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title} - Typescript React CLI`}
      description="Description will go into a meta tag in <head />"
    >
      <header className={classnames('hero hero--dark', styles.heroBanner)}>
        <div className="container">
          <img
            className={styles.landingPageLogo}
            src={useBaseUrl('img/trecli_logo_3.svg')}
            alt={'Trecli Logo'}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--primary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/installation')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
