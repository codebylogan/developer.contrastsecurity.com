import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import EventLink from '../../components/EventLink';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css'; 

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Events and Resources</h1>
        <p className="hero__subtitle">DevRel @ Contrast - Securing Apps Together</p>
      </div>
    </header>
  );
}

function Events() {
  return (
      
      <div class="eventsContainer row is-multiline">
        <div className={clsx('col', 'col--5', styles.event, styles.video)}>
          <h2>Idaho JUG</h2>
          <h3>February 10</h3>
          <p className={clsx(styles.desc)}>A talk on Log4J, Java 17, the SecurityManager, and other items.</p>
          <EventLink url="https://www.meetup.com/central-iowa-java-users-group/events/283202534/"></EventLink>
        </div>
        <div className={clsx('col', 'col--5', styles.event, styles.video)}>
          <h2>Serverless Security</h2>
          <h3>October 28</h3>
          <p className={clsx(styles.desc)}>A panel of serverless experts will discuss findings and insights from a new report on serverless application security. Attendees will learn what serverless application rates look like, how early serverless adopters are using application security, if serverless applications pose the same risk as traditional application environments, how teams want to consume serverless application security, and much more.</p>
          <EventLink url="https://www.contrastsecurity.com/cs/c/?cta_guid=920e993f-1d4a-443d-8c10-47bbb08deac3&signature=AAH58kENiRxWfBv1WVJnB3gBU3NCd7fiJQ&pageId=33327473111&placement_guid=701a2281-ec79-47a5-a400-752c0aa6b670&click=586f535c-e7ed-46ab-ab2a-da7837e54dc9&hsutk=&canon=https%3A%2F%2Fwww.contrastsecurity.com%2Fevents&portal_id=203759&redirect_url=APefjpFh5I3mA70X_QHPdIAiAh61IjP2omqTvyrp-1jB5d1Qp3rvd65IZMmaWWeivEhAyR9Uy2vbru-6TfFM2cE99t8AbxQIxMs355yrJu8gE6wNxYpJa3lYWY_h65d7UwJbhhKxC1ixd-zoD1S3SxGUUZWR__Evqw"></EventLink>
        </div>
        <div className={clsx('col', 'col--5', styles.event, styles.video)}>
          <h2>GOTO Copenhagen</h2>
          <h3>November 8-12</h3>
          <h3>Copenhagen - Big Bio Nordhaven</h3>
          <p className={clsx(styles.desc)}>Contrast is a gold sponsor of the GOTO Copenhagen conference, a limited space tech event with only 500 attendees.</p>
          <EventLink url="https://www.contrastsecurity.com/cs/c/?cta_guid=920e993f-1d4a-443d-8c10-47bbb08deac3&signature=AAH58kE8Ko-0mEhgkEJo76Z7H-5VwBHuKQ&pageId=33327473111&placement_guid=701a2281-ec79-47a5-a400-752c0aa6b670&click=a0eac031-9855-4af6-ab56-0bc36a7e9c72&hsutk=&canon=https%3A%2F%2Fwww.contrastsecurity.com%2Fevents&portal_id=203759&redirect_url=APefjpERfNi-CDc3TScfrcfvJvoEWHsPs9G_ljfDUoJ4i-xJ2-3ufCN2iUI-tzLS8ZIt0JSXuHsDrpAexxxS_N6lgXmKcruTsQKeivtd-bR6WkEWSIww3S259eHVL20xVodc7jQErmRf1-e4IWvLqJM_7Tofr1XxUA" />
        </div>
        <div className={clsx('col', 'col--5', styles.event, styles.video)}>
          <h2>Securing and Exploiting Java Applications</h2>
          <h3>October 20, 2021</h3>
          <h3>Jacksonville Java User Group<br/>Foojay World Tour.</h3>
          <p className={clsx(styles.desc)}>OpenJDK 17 makes the interesting decision that deprecating a security feature (the SecurityManager) can actually improve security of the platform and running applications, setting out a path to remove a feature that hasn’t been used and hasn’t blocked many exploits.<br/>
            <EventLink url="https://www.meetup.com/Jacksonville-JAVA-User-Group-JaxJUG/events/281219238/" /></p>
        </div>
        <div className={clsx('col', 'col--5', styles.event, styles.video)}>
          <h2>Podcast: Why are there so many JDKs</h2>
          <h3>October 19, 2021</h3>
          <p className={clsx(styles.desc)}>Exploring the topic of why there are so many JDKs: how are they the same, how are they different. We balance the Java perspective with a special guest from the Rust foundation to learn how a peer ecosystem works.<br/>
  Short version: The role of Java as a central system runtime lead to multiple implementations and the companies that make different distributions offer support and sponsor different work. For example Azul and Microsoft worked on Apple M1, and Bellsoft and Microsoft worked on Alpine Musl. All JREs are compatible through the TCK and vendors work together on security patches for the entire ecosystem.<br/>
  Guests:
  <ul>
    <li>Simon Ritter, Deputy CTO of Azul Systems, making the Azul Platform, including the Azul Zulu JDK.</li>
    <li>Dmitry Chuyko, Senior Performance Engineer of Bellsoft, making the Liberica JDK.</li>
    <li>Bruno Borges, Product Manager Microsoft, making Microsoft JDK and Adoptium.</li>
    <li>Ashley Williams, founder and open-source strategist for the Rust Foundation.</li>
    <li>Erik Costlow, Developer Relations for Contrast Security, securing Java and non-Java applications.</li>
  </ul></p>
  <iframe src="https://www.buzzsprout.com/1815553/9389741-why-are-there-so-many-jdks?client_source=small_player&iframe=true" loading="lazy" width="100%" height="200" frameborder="0" scrolling="no" title='Foojay - Friends of OpenJDK, Why are there so many JDKs'></iframe>
        </div>
        <div className={clsx('col', 'col--5', styles.event, styles.video)}>
          <h2>Securing and Exploiting Java Applications</h2>
          <h3>Bangladesh Java User Group<br/>Foojay World Tour.</h3>
          <p className={clsx(styles.desc)}>OpenJDK 17 makes the interesting decision that deprecating a security feature (the SecurityManager) can actually improve security of the platform and running applications, setting out a path to remove a feature that hasn’t been used and hasn’t blocked many exploits.</p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/78O8lmS0jRE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className={clsx('col', 'col--5', styles.event, styles.video)}>
          <h2>Podcast: Journey to Jakarta</h2>
          <h3>Foojay Podcast</h3>
          <p className={clsx(styles.desc)}>Foojay community members discuss the modernization of Jakarta EE applications from the older Java EE form, including backwards-compatibility, as well as forwards-excitement about cool new developments like Microprofile.</p>
          <div id="buzzsprout-player-9111849"></div><script src="https://www.buzzsprout.com/1815553/9111849-journey-to-jakarta.js?container_id=buzzsprout-player-9111849&player=small" type="text/javascript" charset="utf-8"></script>
        </div>
      </div>
  );
}

function Invitation() {
  return (
    <div className={clsx(styles.huhy)}>
      <h2>Help us Help you: Build Your Own Event</h2>
      <div className={clsx('eventsContainer', 'isMultiLine')}>
        <div>We love helping people work on their applications, improve security, and get things done. We don't like selling or pitching advertisements.
        Do you want to hang out and talk about your project or how something get secured? Just reach out and ask!
        </div>
        <div className={clsx('row', styles.invitation)}>
          <div className={clsx('col', 'col--3', styles.meet, styles.video)}>
            <h3>Request Zoom Call</h3>
            We'll talk on Zoom, like you do with any meeting.
          </div>
          <div className={clsx('col', 'col--3', styles.meet, styles.video)}>
            <h3>Present at my event</h3>
            Do you want us to present at your event or help you work on your presentation?
          </div>
          <div className={clsx('col', 'col--3', styles.meet, styles.video)}>
            <h3>Chat on Rambly</h3>
            We'll talk while walking around as video game characters.
          </div>
          <div className={clsx('col', 'col--3', styles.meet, styles.video)}>
            <h3>Meet in Minecraft</h3>
            Let's build something and play a game while talking and call it work.
          </div>
          <div className={clsx('col', 'col--3', styles.meet, styles.video)}>
            <h3>Play Among Us</h3>
            Talk about security while playing games.
          </div>
          <div className={clsx('col', 'col--3', styles.meet, styles.video)}>
            <h3>Meet somewhere else</h3>
            We'll find some way to meet. Start with email, move as needed.
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Contrast Security - ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <Events />
      </main>
    </Layout>
  );
}
