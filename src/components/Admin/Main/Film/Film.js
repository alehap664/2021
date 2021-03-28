import React, { useState } from "react";
import Image from "./Form/Image";
import Detail from "./Form/Detail";
import Timetable from "./Form/Timetable";

import helper from "./helper";

import axios from "axios";

const Film = () => {
  const listInputText = [
    "filmImg",
    "filmName",
    "director",
    "actor",
    "category",
    "premiere",
    "time",
    "description",
    "language",
    "rate",
  ];
  const listInputCheckbox = ["timeTable"];

  const [ERROR, setERROR] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    setERROR({});

    const formData = {};
    const listNodeInput = [
      ...helper.selector(listInputText),
      ...helper.selectorAll(listInputCheckbox, "checked"),
    ];

    listNodeInput.forEach((ele) => {
      let key = ele.localName ? ele.id : "timeTable";
      let value = ele.localName ? ele.value : [...ele].map((ele) => ele.value);
      formData[key] = value;
    });

    helper.checkValidFormData(listNodeInput, (err) => {
      if (!helper.isEmpty(err)) {
        setERROR(err);
        return;
      }
      formData.director = formData.director.split(", ");
      formData.actor = formData.actor.split(", ");
      formData.category = formData.category.split(", ");
      formData.premiere = new Date(formData.premiere).toJSON();
      formData.language = formData.language.split(", ");
      formData.timeTable = helper.convertTimeTable(formData.timeTable);
      axios.post('http://localhost:5000/films', formData)
      	.then(res => {
					setERROR(res.data)
					console.log(res.data);
				});
      console.log(formData);
    });
  };

  return (
    <div className="main flex-grow-1 text-light d-flex flex-row flex-wrap align-content-start">
      <header className="h-80px w-100 border-main border-bottom d-flex align-items-center justify-content-between">
        <p className="m-0 text-size-22px">Add Film</p>
        <button type="submit" className="btn text-light border-orange px-5">
          ADD
        </button>
      </header>
      <main className="d-flex flex-column flex-grow-1">
        <div className="row m-0">
					<div className="col-2"></div>
          <div className="col-8">
            <div className="alert alert-danger m-0" role="alert" style={{"display": ERROR["error"] ? "block" : "none"}}>
              <strong>{ERROR["error"]}</strong>
            </div>
						<div className="alert alert-success" role="alert" style={{"display": ERROR["success"] ? "block" : "none"}}>
						<strong>{ERROR["success"]}</strong>
						</div>
          </div>
					<div className="col-2"></div>
        </div>
        
        <form id="form-addfilm" onSubmit={onSubmit}>
					<div className="row m-0">
						<Image ERROR={ERROR} />

						<Detail ERROR={ERROR} />

						<Timetable />

						<div className="col-12">
							<div className="border border-main rounded-lg h-100 p-2 bg-sub">
								<div className="form-group">
									<label htmlFor="description">Description</label>
									<textarea
										className="form-control-sm form-control bg-main border-main text-light"
										name="description"
										id="description"
										rows="3"
										placeholder="Description"
										data-error="description"
									></textarea>
									<small className="text-danger">{ERROR["description"]}</small>
								</div>
							</div>
						</div>

						<div className="col-12 text-center bg-sub">
							<button className="btn text-light border-orange px-5">
								ADD FILM
							</button>
						</div>
					</div>
				</form>
      </main>
    </div>
  );
};

export default Film;
