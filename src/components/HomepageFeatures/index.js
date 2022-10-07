import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/1.svg').default,
    description: (
      <>
        Drag and drop scripts, easily switch between attack and setup mode, 
        or quickly adjust USB VID & PID. 
      </>
    ),
  },
  {
    title: 'Mass Storage Support',
    Svg: require('@site/static/img/2.svg').default,
    description: (
      <>
        Exfiltrate data by enabling the USB drive feature in attack mode.
      </>
    ),
  },
  {
    title: 'BadUSB Script',
    Svg: require('@site/static/img/3.svg').default,
    description: (
      <>
        Create payloads with an easy scripting language that's feature rich and compatible to Ducky Script.
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
