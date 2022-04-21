import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Learn',
    Svg: require('@site/static/img/undraw_knowledge.svg').default,
    description: (
      <>
        Learn about the UDOT application, architecture, features and uses.
      </>
    ),
  },
  {
    title: 'Participate',
    Svg: require('@site/static/img/undraw_building_blocks.svg').default,
    description: (
      <>
        Participate in the future of work by joining the network, starting node 
        or simply creating a profile
      </>
    ),
  },
  {
    title: 'Build',
    Svg: require('@site/static/img/undraw_pair_programming.svg').default,
    description: (
      <>
        Access the development documentation and build with UDOT.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
