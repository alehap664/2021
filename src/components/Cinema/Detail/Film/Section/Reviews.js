import {Review} from "../../../UI/UI";

const Reviews = () => {
  return (
    <div className="tab--panel" id="tab-reviews">
      <div className="reviews">
        <ul className="reviews__list">
          <li className="reviews__item">
            <Review
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laborum maxime maiores harum rerum, esse optio placeat omnis accusantium sequi nemo incidunt quis, saepe sint eveniet voluptate qui culpa voluptatibus.",
                rating: 5
              }}
            />
          </li>
          
          <li className="reviews__item">
            <Review
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laborum maxime maiores harum rerum, esse optio placeat omnis accusantium sequi nemo incidunt quis, saepe sint eveniet voluptate qui culpa voluptatibus.",
                rating: 7
              }}
            />
          </li>

          <li className="reviews__item">
            <Review
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laborum maxime maiores harum rerum, esse optio placeat omnis accusantium sequi nemo incidunt quis, saepe sint eveniet voluptate qui culpa voluptatibus.",
                rating: 8.5
              }}
            />
          </li>
          
          <li className="reviews__item">
            <Review
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laborum maxime maiores harum rerum, esse optio placeat omnis accusantium sequi nemo incidunt quis, saepe sint eveniet voluptate qui culpa voluptatibus.",
                rating: 7.5
              }}
            />
          </li>
          
          <li className="reviews__item">
            <Review
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti laborum maxime maiores harum rerum, esse optio placeat omnis accusantium sequi nemo incidunt quis, saepe sint eveniet voluptate qui culpa voluptatibus.",
                rating: 10
              }}
            />
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Reviews
