import Link from 'next/link';
import {
  Hero,
  Layout,
  Snippet,
  Search,
} from '../components';
import styles from '../styles/Home.module.scss';
import { getPages } from '../helpers/api';
import React from 'react';

const content = {
  title: 'Home - Standards Directory',
  header:
    'Find standards for data and interoperability in health and social care',
  intro:
    'Use this directory to find nationally recognised information standards for interoperable technology in health and adult social care.',
};

export default function Home() {
  return <>
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-full">
        <h2>Browse by care setting</h2>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h3><Link href="/standards?care_setting=Hospital">Hospital</Link></h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h3><Link href="/standards?care_setting=GP+%2F+Primary+care">GP/Primary Care</Link></h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h3><Link href="/standards?care_setting=Social+care">Social care</Link></h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-full">
        <p><Link href="/standards">Browse all care settings</Link></p>
      </div>
    </div>
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-full">
        <h2>Browse by topic</h2>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h3><Link href="#">Something</Link></h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h3><Link href="#">Something</Link></h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h3><Link href="#">Something</Link></h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-full">
        <p><Link href="/standards">Browse all topics</Link></p>
      </div>
    </div>
    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-full">
        <h2>Browse by type</h2>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h3><Link href="#">Something</Link></h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h3><Link href="#">Something</Link></h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h3><Link href="#">Something</Link></h3>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-full">
        <p><Link href="/standards">Browse all standard types</Link></p>
      </div>
    </div>

    <div className="nhsuk-grid-row">
      <div className="nhsuk-grid-column-one-third">
        <h2><Link href="#">Roadmap</Link></h2>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h2><Link href="/what-information-standards-are">Guidance</Link></h2>
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="nhsuk-grid-column-one-third">
        <h2><Link href="#">Community</Link></h2>
        <p>Lorem ipsum dolor</p>
      </div>
    </div>

  </>
}

export function HomepageHero() {
  return (
    <Hero>
      <div className="nhsuk-grid-row">
        <div className="nhsuk-grid-column-two-thirds">
          <h1 className={styles.title}>
            <Snippet inline>header</Snippet>
          </h1>
          <Snippet large>intro</Snippet>
        </div>
        <div className="nhsuk-grid-column-one-third">
          <div className={styles.sidebar}>
            <h2>New standards and APIs</h2>
            <ul>
              <li><Link href="#">Mental health inpatient discharge</Link></li>
              <li><Link href="#">Transfer of care mental health discharge - FIHR</Link></li>
              <li><Link href="#">SNOMED CT</Link></li>
            </ul>
            <p><Link href="/standards">Browse the latest standards and APIs</Link></p>
          </div>
        </div>
      </div>

      <Search placeholder="For example, FHIR, allergies, GP" />
    </Hero>
  );
}

function HomeLayout({ children }) {
  return (
    <Layout Hero={HomepageHero} homepage hideSearch>
      {children}
    </Layout>
  );
}

Home.Layout = HomeLayout;

export async function getServerSideProps() {
  return {
    props: {
      pages: await getPages(),
      content,
    },
  };
}
