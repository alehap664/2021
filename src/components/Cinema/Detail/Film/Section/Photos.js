
const Photos = ({photos}) => {
  return (
    <div className="tab--panel" id="tab-photos">
      <div className="photos">
        <div className="row">
          {photos.map( (ele, index) => (
            <div className="col-12 col-sm-6 col-xl-4" key={index}>
              <img srcSet={ele} className="w-100" alt="Image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Photos
