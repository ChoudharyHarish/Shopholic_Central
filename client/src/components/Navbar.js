import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import Auth from "./Auth";
import { Avatar } from "@mui/material";
import { useLocation ,useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { filterProducts,setCategory } from "../redux/userSlice";

import logo from "../img/Logo.png";


//Category must be equal then only will get matche name can be anything


const Navbarr = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  // const [showmodal, setShowModal] = useState(false);
  const { totalQty,isAuthenticated } = useSelector((state) => state.user);


  // const [focused, setFocused] = useState(false)
  const [user,setUser] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem("user")))
 },[isAuthenticated]);

  useEffect(() => {
    const scroll = () => {
      window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
    };
    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  const openCart = (e,elem) => {
    e.preventDefault();
    const el = document.querySelector(elem);
    // console.log(el);
    el?.classList.add("showCart");
    el?.classList.remove("hidecart");
  };

  const handleChange = (e) => {
    const { value } = e.target;
    if(value === 'Men' || searchVal === 'MEn' || searchVal === "MEN" || value === "mEn" || value === "mEN"){
      setSearchVal("men");
  }
    else if(value === 'women' || value === 'WOMEN') setSearchVal("Women")
    else if(value === "accessories" || value === "ACCESSORIES") setSearchVal("Accessories")
    else if(value === 'bags' || value === "BAGS" || value === 'bag' || value === 'Bag') setSearchVal("Bags");
    else if(value === 'watch' || value === "WATCH") setSearchVal("Watch");
    else setSearchVal(value);
  };

  const handleSearch = () => {
    dispatch(setCategory(searchVal));
    // console.log(searchVal);
    dispatch(filterProducts({ page:1, category:searchVal}));
    navigate(`/shop/search?page=1&category=${searchVal}`);
  } 


  const handleKeyPress = (e)=> {
    if (e.keyCode === 13 || e.keyCode === 9)  handleSearch()
  }

  return (
    <Navbar className={scrolled ? "scrolled" : ""} expand="lg">
      <Container>
        <Navbar.Brand href="/" className="flex gap-2" >
        <img src={logo} alt="" height={36} width={36} />
        Shopoholic Central
        </Navbar.Brand>
        <Navbar.Toggle className="hamburger" aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("Home")}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={
                activeLink === "shop" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("shop")}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className={
                activeLink === "about" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("about")}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={
                activeLink === "contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("contact")}
            >
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-text w-full  lg:w-auto relative">
          <div className="social-icons justify-between text-black">
            <div className="md:mx-3 flex w-3/4 items-center" style={{border: "1px solid grey",
                  borderRadius: "10px",padding: "0.5rem",backgroundColor:'white'}}>
              <input
                type="text"
                name="search"
                value={searchVal}
                className="w-full"
                onChange={handleChange}
                onKeyDown={(e) => handleKeyPress(e)}
                placeholder="Enter category,subcategory"
                style={{
                  marginRight: "0.2rem",
                  outline: "none", 
                }}
              />
              <SearchIcon style={{ color: `${styles.iconBg}`,cursor:"pointer" }} onClick = {handleSearch}   />
            </div>
            <Badge badgeContent={totalQty} color="secondary">
              <ShoppingCartIcon
                color="action"
                className="cursor-pointer"
                onClick={(e) => openCart(e,'.cart')}
              />
            </Badge>

            {user ? (
              user.imageUrl ? <Avatar  sx={{ backgroundColor: "#6c7ae0", cursor:"pointer" }}  onClick={(e) => openCart(e,'.user')} src={user.imageUrl} />  :
              <Avatar  sx={{ backgroundColor: "#6c7ae0", cursor:"pointer" }}  onClick={(e) => openCart(e,'.user')} > {user?.name.slice(0,1)} </Avatar>
              )
    
             : (
              <PersonIcon
                className="cursor-pointer"
                color="action"
                style={{ fontSize: 28 }}
                onClick={(e) => openCart(e,'.user')}
              />
            )}
            {/* {showmodal && <Auth  setShowModal = {setShowModal} />} */}
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
