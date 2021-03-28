import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import { Tab } from "../../../../helper/main";

const Head = () => {
  const {changeTab, dropdownContent, getLabel} = Tab;
  const [label, setLabel] = useState("")

  const tabData = [
    { id: "tab-new", label: "NEW RELEASES" },
    { id: "tab-movie", label: "MOVIES" },
    { id: "tab-tv", label: "SERIES" },
    { id: "tab-cartoon", label: "CARTOONS" }
  ]

  useEffect(() => {
    changeTab("tab-new", "NEW RELEASES");
    setLabel(getLabel());
  }, [])

  return (
    <div className="content__head">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="content__title">New items</h2>
            <ul className="content__tabs">
              {tabData.map( (ele, index) => (
                <li key={ele.id}>
                  <Link 
                    to="#" id={ele.id} className={`tab ${index === 0 ? "tab--active" : ""}`}
                    onClick={() => {changeTab(ele.id, ele.label)}} >{ele.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="content__mobile">
              <div className="content__mobile--btn" onClick={dropdownContent}>
                <input type="button" value={label} />
                <span></span>
              </div>
              <div className="content__mobile--dropdown">
                <ul className="content__mobile--nav">
                  {tabData.map( (ele, index) => (
                    <li key={ele.id}>
                      <Link 
                        to="#" id={ele.id} className={`tab ${index === 0 ? "tab--active" : ""}`}
                        onClick={() => {changeTab(ele.id, ele.label)}} >{ele.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head
