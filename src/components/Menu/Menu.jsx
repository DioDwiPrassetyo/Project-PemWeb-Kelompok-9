import React from 'react'
import Img1 from '../../assets/Menu/Tteokboki.jpg'
import Img2 from '../../assets/Menu/Kimbap.jpeg'
import Img3 from '../../assets/Menu/bimbimbap.png'

const MenuData = [
  {
    Id: 1,
    Img: Img1,
    Name: 'Tteokbokki',
    Description: "A Korean dish of rice flour cooked in a spicy and sweet gochujang seasoning.",
  },
  {
    Id: 2,
    Img: Img2,
    Name: 'Kimbap',
    Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo assumenda soluta iure ullam magnam similique hic modi dolorem officia, libero quis perferendis porro nam vero delectus facere sed mollitia.",
  },
  {
    Id: 3,
    Img: Img3,
    Name: 'Bimbimbap',
    Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit explicabo assumenda soluta iure ullam magnam similique hic modi dolorem officia, libero quis perferendis porro nam vero delectus facere sed mollitia.",
  },
]

const Menu = () => {
  return (
    <>
      <div className='py-10'>
        <div className='container'>
          {/* Header Section */}
          <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
              Our Menu
            </p>
            <h1 className='text-3xl font-bold text-white'>Menu</h1>
            <p className='text-x5 text-white'>
              {" "}Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam repellendus, nesciunt assumenda porro consectetur impedit enim distinctio illum. Labore, provident.
            </p>
          </div>
          {/* Card Section */}
          <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center '>
              {MenuData.map(({ Id, Img, Name, Description }) => {
                return (
                  <div key={Id}
                    className='max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 p-4 shadow-xl'>
                    <div className='h-[100px]'>
                      <img
                        src={Img}
                        alt={Name}
                        className='max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300'
                      />
                    </div>
                    <div className='p-4 text-center'>
                      <h1 className='text-xl font-bold'>{Name}</h1>
                      <p className='text-gray-500 text-sm line-clamp-2'>{Description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Menu
