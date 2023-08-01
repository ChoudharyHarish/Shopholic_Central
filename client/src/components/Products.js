import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowDownward,
  ArrowUpward,
  CloseOutlined,
  Filter,
  Search,
} from "@mui/icons-material";
import { HeartBroken } from "@mui/icons-material";
import "./Product.css";
import { styles } from "../styles";

import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchProducts,
  filterProducts,
  setIsLoading,
} from "../redux/userSlice";

// Men,Women,Bags,Shoes,Watch,Acessories

const ProductCard = ({ img, name, price, _id }) => {
  return (
    <div className="flex flex-col max-w-sm">
      <div className="img-container flex-1 relative overflow-hidden">
        <img className="h-full object-cover" src={img} alt="" />
        <Link
          to={`/products/${_id}`}
          className="hide cursor-pointer special-btn shop-now absolute bottom-8 left-4 text-decoration-none"
        >
          Quick View
        </Link>
      </div>
      <div className="price-container mt-4 flex items-center justify-between">
        <div>
          <h4 className="text-sm font-bold">{name.slice(0, 40)}</h4>
          <p className={`text-sm ${styles.smallText}`}>₹{price}</p>
        </div>
        <HeartBroken />
      </div>
    </div>
  );
};

const CustomButton = ({ icon, text, func }) => {
  return (
    <button className="special-btn flex z-30" onClick={(e) => func(e)}>
      <div className="mr-2">{icon}</div>
      {text}
    </button>
  );
};

const CustomInput = ({ val, placeholder, setVal }) => {
  return (
    <input
      className="p-1 w-1/2"
      type="text"
      value={val}
      onChange={(e) => setVal(e.target.value)}
      placeholder={`₹ ${placeholder}`}
      style={{
        outline: "none",
        border: "1px solid",
      }}
    />
  );
};

const ListViewer = ({ title, data, handleCheckboxChange, mainIndex }) => {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-bold text-lg">{title}</span>
      <div className="list-none flex flex-col justify-center items-start">
        {data.map((item, index) => (
          <div key={index} className="flex justify-between w-full">
            <li>{item.title}</li>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(e) => handleCheckboxChange(mainIndex, index)}
            ></input>
          </div>
        ))}
      </div>
    </div>
  );
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Products = ({ title, category: recievedCategory }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();


  const {
    products,
    category: searchCategory,
    totalPage
  } = useSelector((state) => state.user);

  const [disabled, setDisabled] = useState(false);
  const [showFilter, setShowFilter] = useState(true);

  const page = Number(query.get("page")) || 1;
  const [min, setMin] = useState(1e7);
  const [max, setMax] = useState(0);
  const [category, setCategory] = useState(searchCategory || query.get('category') || recievedCategory);
  const [sort, setSort] = useState(query.get("sort") || null);

  const url = `${category ? `&category=${category}`:``}${min !== 1e7 && max !== 0 ? `&numericFilters=price>=${min},price<=${max}`:''}${sort !== null && sort !== undefined ? `&sort=${sort}` : ``}`;
  // console.log(url);

  // const [userQuery, setUserQuery] = useState('');

  const [list, setList] = useState([
    {
      title: "Price",
      data: [
        { title: "Under ₹1,000", checked: false, min: 0, max: 1000 },
        { title: "₹2000 - ₹3000", checked: false, min: 2000, max: 3000 },
        { title: "₹3000 - ₹4000", checked: false, min: 3000, max: 4000 },
        { title: "Above ₹5000", checked: false, min: 5000, max: 1000000 },
      ],
    },
    {
      title: "Sort By",
      data: [
        { title: "Price : Low to high", checked: false, sort: "price" },
        { title: "Price : High to Low", checked: false, sort: "-price" },
      ],
    },
  ]);


  useEffect(() => {
    if (page) {
      dispatch(setIsLoading(true));
      // console.log(searchCategory);
      if(searchCategory){
        dispatch(
          filterProducts({ page: page === 1 ? page : page + 1, category:searchCategory,sort,min,max})
        );
      }
      else if (category || sort || min || max){
        // console.log(page);
        dispatch(
          filterProducts({ page, category,sort,min,max})
        );
        // console.log('here in inner');
        }
      else{
         dispatch(fetchProducts(page));
        //  console.log('here in outer');
      }
    }
    if(page !== totalPage && disabled === true) setDisabled(false);
    if(page === totalPage) setDisabled(true);
  }, [dispatch, page,category,totalPage,disabled]);

  const handleQuery = async(queryType) => {
    setCategory(queryType);
    // dispatch(filterProducts({ page:1, category:queryType }));
    navigate(`/shop/search?page=1&category=${queryType}`);
  };

  const handleView = () => {
    if (searchCategory) {
      dispatch(
        filterProducts({ page, category: searchCategory, min, max, sort })
      );
    } else {
      // console.log("Hee");
      dispatch(filterProducts({ page: page + 1, category, min, max, sort }));
    }
    navigate(`/shop/search?page=${page+1}${url}`);
  };

  const openFilterMenu = (e) => {
    setShowFilter(false);
    e.preventDefault();
    const el = document.querySelector(".filter");
    el?.classList.add("showcart");
    el?.classList.remove("hidecart");
  };

  const closeFilterMenu = (e) => {
    setShowFilter(true);
    e.preventDefault();
    const el = document.querySelector(".filter");
    el.classList.remove("showCart");
    el.classList.add("hidecart");
  };

  const handleCheckboxChange = (mainIndex, itemInd) => {
    const newList = [...list];
    newList[mainIndex].data[itemInd].checked =
      !list[mainIndex].data[itemInd].checked;
    if (newList[mainIndex].data.length === 2) {
      if (itemInd === 0) newList[mainIndex].data[1].checked = false;
      else newList[mainIndex].data[0].checked = false;
    }
    setList(newList);

    let mini = list[mainIndex].data[itemInd].min
    let maxi = list[mainIndex].data[itemInd].max;
    let sort = list[mainIndex].data[itemInd].sort;

    // for(let i = 0; i<4;i++){

    // }

    if (list[mainIndex].data[itemInd].checked === true) {
        mini = mini < min ? mini : min;
        maxi = maxi > max ? maxi : max;
        setMin(mini);
        setMax(maxi);
    }
    if(list[mainIndex].data[itemInd].checked === false){
        setMax(0);
        setMin(1e7);
        let cnt=0;
        for(let i=0; i<4;i++){
          if(list[0].data[i].checked === true){
            let mini = list[0].data[i].min;
            let maxi = list[0].data[i].max;
            if(cnt === 0){
              setMin(mini);
              setMax(maxi);
              cnt++;
            }
            else{
              setMin(min < mini ? min : mini);
              setMax(max > maxi ? max : maxi);
            }
          }
        }
    }
  
    if (list[mainIndex].data[itemInd].checked === true) {
        setSort(sort);
    }
    else if(list[mainIndex].data[itemInd].checked === false){
        setSort(null);
    }
  };

  const customSearch = () => {
    dispatch(filterProducts({ page, category, min, max, sort }));
    navigate(`/shop/search?page=1${url}`)
  };

  return (
    <div className="px-12 py-32 lg:py-20 pb-8">
      <h1 className={`${styles.subHeading}`}>{title}</h1>
      <div className="flex flex-wrap items-center justify-between mt-4 p-2 gap-2  relative">
        <div className="flex flex-wrap justify-center items-center ">
          <p
            className="mr-5 my-auto cursor-pointer hover:text-[#6c7ae0]"
            onClick={() => handleQuery("All Products")}
          >
            All Products
          </p>
          <p
            className="mr-5 my-auto cursor-pointer hover:text-[#6c7ae0]"
            onClick={() => handleQuery("men")}
          >
            Men
          </p>
          <p
            className="mr-5 my-auto cursor-pointer hover:text-[#6c7ae0]"
            onClick={() => handleQuery("Women")}
          >
            Women
          </p>
          <p
            className="mr-5 my-auto cursor-pointer hover:text-[#6c7ae0]"
            onClick={() => handleQuery("Accessories")}
          >
            Accessories
          </p>
        </div>

        {showFilter ? <CustomButton icon={<Filter />} text="Filter" func={openFilterMenu} /> :  
           <button className="hidden special-btn md:flex z-30" onClick={(e) => closeFilterMenu(e)}>
            <div className="mr-2"><CloseOutlined /></div>
            Close
          </button>
          
          }

        <div className="filter hidecart">
          <div>
            <ListViewer
              {...list[0]}
              mainIndex={0}
              handleCheckboxChange={handleCheckboxChange}
            />
            <div className="flex gap-x-2 mt-2">
              <CustomInput val={min} setVal={setMin} placeholder="min" />
              <CustomInput val={max} setVal={setMax} placeholder="max" />
            </div>
          </div>

          <ListViewer
            {...list[1]}
            mainIndex={1}
            handleCheckboxChange={handleCheckboxChange}
          />

          <CustomButton
            icon={<Filter />}
            text="Filter Products"
            func={customSearch}
          />
           <button className="flex special-btn md:hidden z-30" onClick={(e) => closeFilterMenu(e)}>
            <div className="mr-2"><CloseOutlined /></div>
            Close
          </button>
          

           
        </div>
      </div>

      <div className="flex flex-col justify-center gap-y-4 flex-1">
        <div className="products-container">
          {products?.map((product, i) => {
            return <ProductCard key={product._id} {...product} />;
          })}
        </div>

        <button
          className="view-more"
          disabled={disabled}
          onClick={() => handleView()}
        >
          {!disabled ? "View More" : "No more products"}
        </button>
      </div>
    </div>
  );
};

export default Products;
