import React from 'react';

const Detail = ({ ERROR }) => {
    const input = [
        { label: "Tên phim", name: "filmName", id: "filmName", placeholder: "Tên phim", type: "text" },
        { label: "Đạo diễn", name: "director", id: "director", placeholder: "Đạo diễn", type: "text" },
        { label: "Diễn viên", name: "actor", id: "actor", placeholder: "Diễn viên", type: "text" },
        { label: "Thể loại", name: "category", id: "category", placeholder: "Thể loại", type: "text" },
        { label: "khởi chiếu", name: "premiere", id: "premiere", placeholder: "khởi chiếu", type: "date" },
        { label: "Thời lượng", name: "time", id: "time", placeholder: "Thời lượng", type: "number" },
        { label: "Ngôn ngữ", name: "language", id: "language", placeholder: "Ngôn ngữ", type: "text" },
        // { label: "Rated", name: "rate", id: "rate", placeholder: "Rated", type: "text" },
    ]


    return (
        <div className="col-8">

            <div className="border border-main rounded-lg h-100 p-2 bg-sub">
                {input.map((input, index) => (
                    <div className="form-group" key={index}>
                        <input type={input.type} name={input.name} id={input.id} className="form-control form-control-sm bg-main border-main text-light" placeholder={input.placeholder} data-error={input.placeholder} />
                        <small className="text-danger">{ERROR[input.id]}</small>
                    </div>
                ))}
                <div className="form-group">
                    <select className="form-control form-control-sm bg-main border-main text-light" name="rate" id="rate" data-error="rate">
                        <option value="">Chọn mức độ kiểm duyệt</option>
                        <option value="P">P</option>
                        <option value="C13">C13</option>
                        <option value="C16">C16</option>
                        <option value="C18">C18</option>
                    </select>
                    <small className="text-danger">{ERROR["rate"]}</small>
                </div>
            </div>
        </div>
    )
}

export default Detail
