import React,{useState} from 'react';
import { Link } from "react-router-dom";

const Head = () => {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const [tabLabel, setTabLabel] = useState("NEW RELEASES");
  
  const dropdownContent = () => {
    const btn = $(".content__mobile--btn");
    const dropdown = $(".content__mobile--dropdown");
    btn.classList.toggle("content__mobile--btn--active");
    dropdown.classList.toggle("content__mobile--dropdown--active")
  }

  const changeTab = (e) => {
    const label = e.target.innerHTML;
    const id = e.target.id;

    const tabLabels = $$(".content__tabs .tab");
    const tabPanels = $$(".tab--panel");
    const panelSelected = $(`.tab--panel#${id}`);
    const labelSelected = $(`.tab#${id}`);

    tabLabels.forEach( ele => ele.classList.remove("tab--active"));
    tabPanels.forEach( ele => ele.classList.remove("active"));

    labelSelected.classList.add("tab--active");
    panelSelected.classList.add("active");

    setTabLabel(label);
  }
  return (
    <div className="content__head">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="content__title">New items</h2>
            <ul className="content__tabs">
              <li><Link to="#" id="tab-1" className="tab tab--active" onClick={changeTab}>NEW RELEASES</Link></li>
              <li><Link to="#" id="tab-2" className="tab" onClick={changeTab}>MOVIES</Link></li>
              <li><Link to="#" id="tab-3" className="tab" onClick={changeTab}>TV SERIES</Link></li>
              <li><Link to="#" id="tab-4" className="tab" onClick={changeTab}>CARTOONS</Link></li>
            </ul>

            <div className="content__mobile">
              <div className="content__mobile--btn" onClick={dropdownContent}>
                <input type="button" value={tabLabel} />
                <span></span>
              </div>
              <div className="content__mobile--dropdown">
                <ul className="content__mobile--nav">
                  <li><Link to="#" id="tab-1" onClick={(e) => { changeTab(e); dropdownContent() }}>NEW RELEASES</Link></li>
                  <li><Link to="#" id="tab-2" onClick={(e) => { changeTab(e); dropdownContent() }}>MOVIES</Link></li>
                  <li><Link to="#" id="tab-3" onClick={(e) => { changeTab(e); dropdownContent() }}>TV SERIES</Link></li>
                  <li><Link to="#" id="tab-4" onClick={(e) => { changeTab(e); dropdownContent() }}>CARTOONS</Link></li>
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
