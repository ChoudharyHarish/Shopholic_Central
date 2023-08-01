import React from 'react'
import img1 from "../img/banner-01.jpg.webp";
import img2 from "../img/banner-02.jpg.webp";
import img3 from "../img/banner-03.jpg.webp";
import { useNavigate } from 'react-router-dom';
import "./Categories.css";
import { styles } from '../styles';


const categories = [
    {
        title : 'Men',
        substitle: 'Spring 2018',
        img :  img2,
        category:"men",
    },
    {
        title : 'Women',
        substitle: 'Spring 2018',
        img :  img1,
        category:"Women",
    },
    {
        title : 'Accessories',
        substitle: 'New Trend',
        img :  img3,
        category:"Accessories",
    },
]   

const Categories = () => {

    const navigate = useNavigate();

    const handleClick = (category) => {
        
        navigate('/shop',{state:{category}});
    }


  return (
    <div className='px-12 py-20 pb-8'>
           <div className='category-container'>
                {categories.map((category) => {
                   return <div key={category.title}  className='category-item'>
                        <div className='absolute top-8 left-4 z-10'>
                        <h1 className='font-bold'>{category.title}</h1>
                        <p className={`${styles.smallText}`}>{category.substitle}</p>
                        </div>
                        <div className=''>
                        <img src={category.img} alt="" className='img-resp'  />
                        </div>

                        <button 
                        onClick={() => handleClick(category.category)}
                        className='hide cursor-pointer hover-btn shop-now absolute bottom-8 left-4'>Shop Now</button>
                    </div>
                } )}
            </div>
    </div>
  )
}

export default Categories