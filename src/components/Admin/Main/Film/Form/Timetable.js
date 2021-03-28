import React, { useState, useEffect } from 'react';

const Timetable = () => {
    const [dateTo, setDateTo] = useState(0);
	const [dateFrom, setDateFrom] = useState(0);
	const [timeTable, setTimeTable] = useState([]);

    const time = [
		{ id: 1, value: "8:00 AM" },
		{ id: 2, value: "10:00 AM" },
		{ id: 3, value: "12:00 AM" },
		{ id: 4, value: "14:00 PM" },
		{ id: 5, value: "16:00 PM" },
		{ id: 6, value: "18:00 PM" },
		{ id: 7, value: "20:00 PM" },
	]

    useEffect(() => {
		if (!dateTo || !dateFrom) return setTimeTable([]);
		if (dateFrom - dateTo < 0) return setTimeTable([]);

		let totalDate = (dateFrom - dateTo) / 86400000;
		let timeTable = []

		for (let i = 0; i <= totalDate; i++) {
			timeTable.push(new Date(dateTo + (i*86400000)).toJSON() )
		}

		setTimeTable(timeTable);
	}, [dateTo, dateFrom]);


	const getDateTo = (e) => {
		setDateTo(new Date(e.target.value).getTime());
	}
	const getDateFrom = (e) => {
		setDateFrom(new Date(e.target.value).getTime());
	}

    return (
        <div className="col-12 my-30px">
            <div className="border border-main rounded-lg h-100 p-2 row m-0 bg-sub">
                <div className="col-4 p-0 d-flex align-items-center mb-3">
                    <p className="m-0">Lựa chọn thời gian chiếu</p>
                </div>

                <div className="col-8 row m-0 p-0 mb-3">
                    <div className="form-group col-6 row m-0 px-0">
                        <label htmlFor="" className="col-2 col-form-label-sm m-0">From</label>
                        <div className="col-10 px-0">
                            <input type="date" name="dateTo" id="date" className="form-control-sm form-control bg-main border-main text-light" onChange={getDateTo} />
                        </div>
                    </div>
                    <div className="form-group col-6 row m-0 px-0">
                        <label htmlFor="" className="col-2 col-form-label-sm m-0 text-center">To</label>
                        <div className="col-10 px-0">
                            <input type="date" name="dateForm" id="date" className="form-control-sm form-control bg-main border-main text-light"  onChange={getDateFrom} />
                        </div>
                    </div>
                </div>

                <div className="col-12 p-0">
                    {timeTable.map((timeTable, index) => (
                        <div key={index} className="row m-0">
                            <p className="col-4">{new Date(timeTable).toLocaleDateString()}</p>
                            <div className="col-8 mb-3">
                                {time.map((time)=>(
                                    <div key={time.id} className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" name="timeTable" id="timeTable" value={ `{"${timeTable}" : ${time.id}}` } /> {time.value}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>		
    )
}

export default Timetable
