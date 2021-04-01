// import {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router-dom';
// import Loading from '../../../Loading/Loading';
// UI
import { Card } from "../../UI/UI";
// import { getData } from '../../../../helper/main';
  

const Container = ({filsNew, filmActions, filmAnimations, filmFantasies}) => {
  const { path } = useRouteMatch();

  const tabs = [
    {id: "tab-new", films: filsNew},
    {id: "tab-actions", films: filmActions},
    {id: "tab-animations", films: filmAnimations},
    {id: "tab-fantasies", films: filmFantasies}
  ]

  return (
    <div className="container">
      <div className="tab--content">
        {tabs.map( (tab, index) => (
          <div className={`tab--panel ${index === 0 ? "active" : ""}`} id={tab.id} key={tab.id}>
            <div className="row">
              {tab.films.map( film => (
                <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-0" key={film.id}>
                  <Card
                    to={`${path}/detail/${film.id}`}
                    title={film.film__title}
                    image={film.film__cover}
                    categories={film.film__categories}
                    rate={film.film__rate}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Container
