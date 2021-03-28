import React from 'react';
import {Comment} from "../../UI/UI";

const Comments = () => {
  return (
    <div className="tab--panel active" id="tab-comments">
      <div className="comments">
        <ul className="comments__list">
          <li className="comments__item">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item --answer">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item --answer">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          <li className="comments__item --answer">
            <Comment
              user={{
                avatar: "",
                name: "Thịnh",
                time: "123",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi in, voluptatem doloribus, modi vitae adipisci dolorem officia id mollitia odio accusantium reprehenderit delectus possimus est recusandae laudantium sit? Corporis, nisi?",
                rate: {like: 10, dislike: 1}
              }}
            />
          </li>
          
        </ul>
      </div>
    </div>
  )
}

export default Comments
