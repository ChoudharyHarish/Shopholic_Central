import {
  Bag1,
  Bag2,
  Bag3,
  Bag4,
  MenClothes1,
  MenClothes2,
  MenClothes3,
  MenClothes4,
  MenClothes5,
  Shoe1,
  Shoe2,
  Shoe3,
  Shoe4,
  Slider1,
  Slider2,
  Slider3,
  Watch1,
  Watch2,
  Watch3,
  Watch4,
  Watch5,
  WomenClothes1,
  WomenClothes2,
  WomenClothes3,
  WomenClothes4,
  WomenClothes5,
  WomenClothes6,
  WomenClothes7,
  WomenClothes8,
  WomenClothes9,
  Accessiores1,
} from "../img";

const products = [
  {
    id:1,
    category:'Accessories',
    name: "Kids Bag",
    subCategory:"Bags",
    price: 5,
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Bag1,
  },
  {
    id:2,
    category:'Accessories',
    name: "Tourist Bag",
    subCategory:"Bags",
    price: 6,
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Bag2,
  },
  {
    id:3,
    category:'Accessories',
    name: "College Bag",
    subCategory:"Bags",
    price: "3.5",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Bag3,
  },
  {
    id:4,
    category:'Accessories',
    name: "Leather Bag",
    subCategory:"Bags",
    price: "3.3",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Bag4,
  },
  {
    id:5,
    category:'Accessories',
    subCategory:"Watch",
    name: "Sonata Watch",
    price: 4.1,
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Watch1,
  },
  {
    id:6,
    category:'Accessories',
    subCategory:"Watch",
    name: "Rolex Premium Watch",
    price: "15",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Watch2,
  },
  {
    id:28,
    category:'Accessories',
    subCategory:"Watch",
    name: "Rolex Watch",
    price: "32.12",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Watch3,
  },
  {
    id:26,
    category:'Accessories',
    subCategory:"Watch",
    name: "Fatrack Watch",
    price: "10.12",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Watch4,
  },
  {
    id:27,
    category:'Accessories',
    subCategory:"Watch",
    name: "Premium Amazon Brand Watch",
    price: "18.12",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Watch5,
  },
  {
    id:7,
    category:'Shoes',
    name: "Puma Sneakers",
    price: "8.7",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Shoe1,
  },
  {
    id:8,
    category:'Shoes',
    name: "Nike Air force",
    price: "12.3",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Shoe2,
  },
  {
    id:9,
    category:'Shoes',
    name: "Leather Sneakers",
    price: "10",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Shoe3,
  },
  {
    id:10,
    category:'Shoes',
    name: "High Ankle Shoes",
    price: "9",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Shoe4,
  },
  {
    id:11,
    category:'Accessories',
    name: "Leather Belt",
    price: "5",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: Accessiores1,
  },
  {
    id:25,
    category:"Women's Clothing",
    name: "Half Sleeve's Shirt",
    price: "5",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: MenClothes1,
  },
  {
    id:12,
    category:"Men's Clothing",
    name: "US polo Shirt",
    price: "7.5",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: MenClothes2,
  },
  {
    id:13,
    category:"Men's Clothing",
    name: "Levi's full sleeves shirt",
    price: "15",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: MenClothes3,
  },
  {
    id:14,
    category:"Men's Clothing",
    name: "Men's premium jacket",
    price: "20",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: MenClothes4,
  },
  {
    id:15,
    category:"Men's Clothing",
    name: "Comfy Jeans",
    price: "18",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: MenClothes5,
  },
  {
    id:16,
    category:"Women's Clothing",
    name: "Half Sleeve's T-Shirt",
    price: "16.5",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: WomenClothes1,
  },
  {
    id:17,
    category:"Women's Clothing",
    name: "Women's Winter Jacket",
    price: "12",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: WomenClothes2,
  },
  {
    id:18,
    category:"Women's Clothing",
    name: "Party Wear for women",
    price: "18.6",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: WomenClothes3,
  },
  {
    id:19,
    category:"Women's Clothing",
    name: "Jacket",
    price: "5.12",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: WomenClothes4,
  },
  {
    id:20,
    category:"Women's Clothing",
    name: "Cactus Tshirt",
    price: "5.6",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: WomenClothes5,
  },
  {
    id:21,
    category:"Women's Clothing",
    name: "Black T-Shirt",
    price: "9.7",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: WomenClothes6,
  },
  {
    id:22,
    category:"Women's Clothing",
    name: "White T-Shirt",
    price: "5",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: WomenClothes7,
  },
  {
    id:23,
    category:"Women's Clothing",
    name: "Crop T-Shirt",
    price: "9.6",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: WomenClothes8,
  },
  {
    id:24,
    category:"Women's Clothing",
    name: "Comfy T-Shirt",
    price: "5.8",
    description:
      "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
    img: WomenClothes9,
  },
];

const slider = [
  {
    title: "Women's Collection 2023",
    subtitile: "NEW SEASON",
    img: Slider1,
  },
  {
    title: "Mens Best Collection",
    subtitile: "JACKETS & COATS",
    img: Slider2,
  },
  {
    title: "Men's Collection 2023",
    subtitile: "NEW ARRIVALS",
    img: Slider3,
  },
];


export {slider, products };







// {
//   "name": "Kids Bag",
//   "price": 5.6,
//   "category": "Accessories",
//   "subCategory": "Bags",
//   "company": "American Tourister",
//   "inventory": 12,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/1407354/pexels-photo-1407354.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Accessories",
//   "name": "Tourist Bag",
//   "subCategory": "Bags",
//   "company": "American Tourister",
//   "inventory": 12,
//   "price": 6.5,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/1031955/pexels-photo-1031955.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Accessories",
//   "name": "College Bag",
//   "subCategory": "Bags",
//   "company": "Sky Bags",
//   "inventory": 12,
//   "price": 12.4,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260"
// },
// {
//   "category": "Men's Clothing",
//   "name": "Men's Polo Tshirt",
//   "company": "US Polo",
//   "inventory": 12,
//   "price": 21.23,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/16841839/pexels-photo-16841839/free-photo-of-young-man-sitting-on-carpet.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "name": "Women's Handbag",
//   "price": 32.99,
//   "category": "Accessories",
//   "subCategory": "Bags",
//   "company": "Michael Kors",
//   "inventory": 8,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/1749940/pexels-photo-1749940.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "name": "Men's Leather Jacket",
//   "price": 89.99,
//   "category": "Men's Clothing",
//   "subCategory": "Jackets",
//   "company": "Zara",
//   "inventory": 10,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/4527389/pexels-photo-4527389.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Women's Clothing",
//   "name": "Women's Dress",
//   "subCategory": "Dresses",
//   "company": "H&M",
//   "inventory": 15,
//   "price": 39.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/2694296/pexels-photo-2694296.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Electronics",
//   "name": "Smartphone",
//   "subCategory": "Mobile Phones",
//   "company": "Samsung",
//   "inventory": 20,
//   "price": 699.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/4596545/pexels-photo-4596545.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Home Decor",
//   "name": "Throw Pillow",
//   "subCategory": "Pillows",
//   "company": "IKEA",
//   "inventory": 25,
//   "price": 12.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/3228767/pexels-photo-3228767.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Accessories",
//   "name": "Unisex Sunglasses",
//   "subCategory": "Eyewear",
//   "company": "Ray-Ban",
//   "inventory": 18,
//   "price": 129.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/210661/pexels-photo-210661.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Books",
//   "name": "Fantasy Novel",
//   "subCategory": "Fiction",
//   "company": "Penguin Random House",
//   "inventory": 30,
//   "price": 16.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/277599/pexels-photo-277599.jpeg?auto=compress&cs=tinysrgb&w=800l"
// },
// {
//   "name": "Wireless Headphones",
//   "price": 79.99,
//   "category": "Electronics",
//   "subCategory": "Audio",
//   "company": "Sony",
//   "inventory": 15,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/929245/pexels-photo-929245.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Women's Clothing",
//   "name": "Women's Blouse",
//   "subCategory": "Tops",
//   "company": "Zara",
//   "inventory": 20,
//   "price": 29.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Men's Clothing",
//   "name": "Men's Jeans",
//   "subCategory": "Pants",
//   "company": "Levi's",
//   "inventory": 18,
//   "price": 49.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/2973554/pexels-photo-2973554.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Accessories",
//   "name": "Leather Wallet",
//   "subCategory": "Wallets",
//   "company": "Fossil",
//   "inventory": 22,
//   "price": 39.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/186769/pexels-photo-186769.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Sports",
//   "name": "Yoga Mat",
//   "subCategory": "Fitness",
//   "company": "Liforme",
//   "inventory": 25,
//   "price": 69.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/4628988/pexels-photo-4628988.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Electronics",
//   "name": "Smartphone",
//   "subCategory": "Mobile",
//   "company": "Apple",
//   "inventory": 10,
//   "price": 999.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/4065080/pexels-photo-4065080.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Women's Clothing",
//   "name": "Maxi Dress",
//   "subCategory": "Dresses",
//   "company": "H&M",
//   "inventory": 15,
//   "price": 39.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/3136903/pexels-photo-3136903.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Home Decor",
//   "name": "Throw Pillow",
//   "subCategory": "Pillows",
//   "company": "IKEA",
//   "inventory": 20,
//   "price": 9.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Men's Clothing",
//   "name": "Men's Hoodie",
//   "subCategory": "Sweatshirts",
//   "company": "Nike",
//   "inventory": 12,
//   "price": 59.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/7164117/pexels-photo-7164117.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Books",
//   "name": "The Great Gatsby",
//   "subCategory": "Fiction",
//   "company": "Penguin Books",
//   "inventory": 8,
//   "price": 12.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/393387/pexels-photo-393387.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Beauty",
//   "name": "Lipstick",
//   "subCategory": "Makeup",
//   "company": "MAC Cosmetics",
//   "inventory": 25,
//   "price": 19.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/2166726/pexels-photo-2166726.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Home Appliances",
//   "name": "Coffee Maker",
//   "subCategory": "Kitchen Appliances",
//   "company": "Breville",
//   "inventory": 10,
//   "price": 79.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/64776/pexels-photo-64776.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Toys",
//   "name": "LEGO Set",
//   "subCategory": "Building Blocks",
//   "company": "LEGO",
//   "inventory": 15,
//   "price": 49.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/6185333/pexels-photo-6185333.jpeg?auto=compress&cs=tinysrgb&w=800"
// },
// {
//   "category": "Electronics",
//   "name": "Wireless Headphones",
//   "subCategory": "Audio",
//   "company": "Sony",
//   "inventory": 20,
//   "price": 129.99,
//   "description": "Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.",
//   "img": "https://images.pexels.com/photos/1484286/pexels-photo-1484286.jpeg?auto=compress&cs=tinysrgb&w=800"
// }