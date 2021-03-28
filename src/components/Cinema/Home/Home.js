import React from 'react';
import Content from './Content/Content';
import Header from "./Header/Header";
import Section from './Section/Section';

const Home = () => {
  return (
    <article className="home">
      <Header />
      <Content />
      <Section />
    </article>
  )
}

export default Home
