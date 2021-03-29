import {useEffect, useState} from 'react';
import { useRouteMatch } from 'react-router-dom';
import Loading from '../../../Loading/Loading';
// UI
import { Card } from "../../UI/UI";
import { getData } from '../../../../helper/main';
  

const Container = () => {
  const { path } = useRouteMatch();

  const [tabNew, setTabNew] = useState([]);
  const [tabActions, setTabActions] = useState([]);
  const [tabAnimations, setTabAnimations] = useState([]);
  const [tabFantasy, setTabFantasies] = useState([]);

  const tabs = [
    {id: "tab-new", films: tabNew},
    {id: "tab-actions", films: tabActions},
    {id: "tab-animations", films: tabAnimations},
    {id: "tab-fantasies", films: tabFantasy}
  ]
  
  useEffect(() => {
    const HOST = "https://ndthinh48-react-cinema.herokuapp.com";

    const queryTabNew = "?limit=18";
    const tab1 = getData(`${HOST}/api/v.1/films${queryTabNew}`);

    const queryTabActions = "?categories=action&limit=18"
    const tab2 = getData(`${HOST}/api/v.1/films${queryTabActions}`);

    const queryTabAnimations = "?categories=animation&limit=18"
    const tab3 = getData(`${HOST}/api/v.1/films${queryTabAnimations}`);

    const queryTabFantasies = "?categories=fantasy&limit=18"
    const tab4 = getData(`${HOST}/api/v.1/films${queryTabFantasies}`);

    console.log(123123123);

    Promise.all([tab1, tab2, tab3, tab4])
      .then( tabs => {
        setTabNew(tabs[0].data);
        setTabActions(tabs[1].data);
        setTabAnimations(tabs[2].data);
        setTabFantasies(tabs[3].data);
      })
      .catch( err => {throw err})
      
  }, [])

  return [
    tabNew.length, 
    tabActions.length, 
    tabAnimations.length, 
    tabFantasy.length
  ].includes(0) 
    ? <Loading /> 
    : (
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
                      rate={"10"}
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
