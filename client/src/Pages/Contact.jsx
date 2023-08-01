import React,{useState} from 'react'
import BackgroundWrapper from '../components/BackgroundWrapper';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Cart from '../components/Cart';
import Auth from '../components/Auth';  
import { useSelector } from 'react-redux';
import emailjs from '@emailjs/browser';

const ContactWrapper  = ({icon : Icon,title,text}) => {
  return (
    <div className='flex items-start gap-4'>
         <div className='mt-1'>
          {Icon}
         </div>
          <div className='flex flex-col'>
            <h2>{title}</h2>
            <p className=''>{text}</p>
          </div>
    </div>
  )
}

const Contact = () => {

  const {cart} = useSelector((state) => state.user);

  const [isLoading,setIsLoading]=useState(false);

  const [form,setForm] = useState({
    email:"",
    message:""
  })
  

  const handleChange = (e) => {
    const {name,value} = e.target;
    setForm({...form, [name]:value})
  } 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(process.env.REACT_APP_SERVICE1_ID,process.env.REACT_APP_TEMPLATE1_ID,{
        from_name:JSON.parse(localStorage.getItem('user')).name,
        to_name : "Harish",
        from_email:form.email,
        message : form.message
      },process.env.REACT_APP_key).then(() => {
        setIsLoading(false)
        alert("Your message is recieved by me,I will reach you soon.")
        setForm({
        name:"",
        email:"",
        message:""})

      },(error)=> {
        setIsLoading(false);
        console.log(error);
        alert("Something went wrong")
      })
      
}

  return (
    <>
    <div className='py-20'>
      <BackgroundWrapper title = 'Contact'/>

      <div className = 'flex mx-12 lg:mx-28 mt-24 flex-col-reverse md:flex-row' style={{border:'1px solid grey'}}>
        <div className='flex flex-col p-12 flex-1 gap-4' style={{borderRight:"1px solid grey"}}>
          <h3>Send Us a Message</h3>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
          <label htmlFor="email" className='font-bold' >Your Email</label>
          <input type = "email" className='bg-tertiary  mt-2 py-3 px-6 rounded-lg placeholder:text-secondary text-white outline-none' name = 'email' id = "email"value={form.email} placeholder = "What's your email" onChange={handleChange} />
            
            <label htmlFor="name" className='font-bold' >Your Message</label>
            <textarea rows= '7' className='bg-tertiary p-2  rounded-lg placeholder:text-secondary text-white outline-none' name = 'message' id = "name"value={form.message} placeholder = "Write your message" onChange={handleChange} />
            <button type='submit' className='bg-tertiary px-8 py-3 w-fit rounded-xl font-bold outline-none shadow-md shadow-primary text-white' >{isLoading ? 'Sending...' :  'Submit'}</button>

          </form>
        </div>

        <div className ='p-12 flex flex-1 flex-col gap-4 justify-center border-b-2  md:border-none'>
            <ContactWrapper icon = {<LocationOnIcon sx = {{fontSize:"24px"}}/>} title='Address' text = 'Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US'/>
            <ContactWrapper icon = {<CallIcon/>} title='Lets Talk' text = '+1 800 1236879'/>
            <ContactWrapper icon = {<MailOutlineIcon/>} title='Sale Support' text = 'contact@example.com'/>

        </div>
      </div>

    </div>
    <Cart title="Cart" cart={cart} />
    <Auth/>
    </>
  )
}

export default Contact