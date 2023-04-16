import React from 'react'

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/fashion.png",
      cateName: "Fashion",
    },
    {
      cateImg: "./images/category/books.png",
      cateName: "Books",
    },
    {
      cateImg: "./images/category/kid_toys.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "./images/category/sport.png",
      cateName: "Sport",
    },
    {
      cateImg: "./images/category/gym.png",
      cateName: "Gym",
    },
    {
      cateImg: "./images/category/bike.png",
      cateName: "Bike",
    },
    {
      cateImg: "./images/category/cars.png",
      cateName: "Cars",
    },
    {
      cateImg: "./images/category/music.png",
      cateName: "Music",
    },
    {
      cateImg: "./images/category/gadgets.png",
      cateName: "Gadget",
    },
    {
      cateImg: "./images/category/grocerries.png",
      cateName: "Grocerries",
    },
    {
      cateImg: "./images/category/camp.png",
      cateName: "Camp Stuff",
    },
  ]
  return (
    <>
      <div className="category">
        {
          data.map((value, index) => {
            return(
              <div className="box f_flex" key={index}>
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Categories
