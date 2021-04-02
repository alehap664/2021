import React from 'react';
// 
import Head from "./Head";
import Container from "./Container";

const Content = ({ films }) => {
  const filsNew = films.slice(0, 18)
  const filmActions = films.filter(ele => ele.film__categories.includes("Action"));
  filmActions.length = 18
  const filmAnimations = films.filter(ele => ele.film__categories.includes("Animation"))
  filmAnimations.length = 18;
  const filmFantasies = films.filter(ele => ele.film__categories.includes("Fantasy"))
  filmFantasies.length = 18;

  return (
    <section className="content">
      <Head />
      <Container 
        filsNew={filsNew} 
        filmActions={filmActions} 
        filmAnimations={filmAnimations} 
        filmFantasies={filmFantasies} 
      />
    </section>
  )
}

export default Content
