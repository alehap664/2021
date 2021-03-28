import React, { useState } from 'react';

const Image = ({ ERROR }) => {
    const [filmImg, setFilmImg] = useState("");
    const cutIDfromURL = (e) => {
		const id = e.target.value.slice(32, 32 + 33);
		console.log(id);
		const url = `https://lh3.google.com/u/0/d/${id}=w0-nu-iv1`
		setFilmImg(url)
	}

    return (
        <div className="col-4 d-flex flex-column">
            <div className="border border-main rounded-lg h-100 p-2 bg-sub">
                <div className="form-group row m-0">
                    <label htmlFor="filmImg" className="col-4 col-form-label-sm pr-0">Hình ảnh: </label>
                    <div className="col-8">
                        <input type="text" name="filmImg" id="filmImg" className="form-control form-control-sm bg-main border-main text-light" placeholder="URL" data-error="Hình ảnh" onChange={cutIDfromURL} />
                        <small className="text-danger">{ERROR["filmImg"]}</small>
                    </div>
                </div>

                <div className="filmImg">
                    <img alt="" srcSet={filmImg} className="w-100" />
                </div>
            </div>
        </div>
    )
}

export default Image
