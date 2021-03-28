import React from 'react'
// UI
import { Card } from "../../UI/UI";

const Container = () => {
  const data = Array(18).fill({
    title: "Ahihi",
    image: "https://dmitryvolkov.me/demo/hotflix2.1/main/img/covers/cover2.jpg",
    category: ["a", "b", "c"],
    rate: "10"
  })
  const arr = [
    {id: "tab-1", data},
    {id: "tab-2", data},
    {id: "tab-3", data},
    {id: "tab-4", data}
  ]
  return (
    <div className="container">
      <div className="tab--content">
        {arr.map( (tab, index) => (
          <div className={`tab--panel ${tab.id === "tab-1" ? "active" : ""}`} id={tab.id} key={index}>
            <div className="row">
              {tab.data.map( (card, index) => (
                <div className="col-6 col-sm-4 col-md-3 col-xl-2 p-0" key={index}>
                  <Card
                    to={"#"}
                    title={tab.id}
                    image={card.image}
                    category={card.category}
                    rate={card.rate}
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