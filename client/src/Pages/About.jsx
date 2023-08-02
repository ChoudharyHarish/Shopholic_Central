import React from 'react'
import about1 from "../img/about.jpeg";
import about2 from "../img/about2.jpeg"
import Cart from '../components/Cart';
import Auth from '../components/Auth';
import { useSelector } from 'react-redux';


import BackgroundWrapper from '../components/BackgroundWrapper';

const Wrapper = ({img,title,text1,text2,text3,direction}) => {
  return (
    <div className=''>
    <h2 className='text-center md:text-left'>{title}</h2>
    <div className={`flex flex-col-reverse mt-4  ${direction === '1' ? `lg:flex-row-reverse` : 'lg:flex-row'} justify-end  gap-4`}>
    <div className='mx-10'>
         <p className='text-[14px] text-grey'>{text1}</p>
         <div className={direction === '1' ? 'border-solid border-l-2 pl-4 border-gray-300' : ''}>
         <p className='text-[14px] text-grey'>{text2}</p>
         <p className='text-[14px] text-grey'>{text3}</p>
         </div>


    </div>
    <div className='flex justify-center px-4 sm:px-0'>
          <img className= {`h-auto  max-w-full lg:h-full object-cover  md:max-w-md lg:max-w-full ${direction === '1' ? 'right-3' : 'left-3'} bottom-3`} src={img} alt=""/>
    </div>
  </div>
  </div>
  )
}


const About = () => {

  const {cart} = useSelector((state) => state.user);

  return (
    <>
    <div className='py-32 lg:py-20'>
        <BackgroundWrapper title='About'/>

      <div className='flex flex-col sm:mx-4 gap-8 lg:mx-12 xl:mx-20  mt-20'>
      <Wrapper img = {about1} title = 'Our Story' direction = '0' text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat consequat enim, non auctor massa ultrices non. Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas varius egestas diam, eu sodales metus scelerisque congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim."
      text2 =  'Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam. Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit. Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna. vel tincidunt erat arcu ut sem. Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula.'
      text3 =  'Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879' />

      <Wrapper img = {about2} title = 'Our Mission' direction = '1' text1 = "Mauris non lacinia magna. Sed nec lobortis dolor. Vestibulum rhoncus dignissim risus, sed consectetur erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis."
      text2 =  "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while."
      text3 =  '- Steve Job’s' />

      
      </div>
   
    </div>

    <Cart title="Cart" cart={cart} />
    <Auth/>

    </>
  )
}

export default About