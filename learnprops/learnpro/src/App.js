import logo from './logo.svg';
import './App.css';
import Menuheading from './Components/Menuheading';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Sfoodname from './Components/Sfoodname';
import Cart from './Components/Cart';
function App() {
  const mainCourse = 
  [
    {
      item : "Sahi paneer",
      price : "120",
      type : "veg"
    },
    {
      item : "Fried rice",
      price : "18\
      0",
      type : "veg"
    },
    {
      item : "Chicken Fried rice",
      price : "180",
      type : "Non-veg"
    },
    {
      item : "Egg Fried rice",
      price : "150",
      type : "Non-veg"
    }

  ]
  const drinks = 
  [
    {
      item : "Lemon Tea",
      price : "240",
      type : "hot"
    },
    {
      item : "Ginger Tea",
      price : "18",
      type : "cold"
    },
    {
      item : "Iced Tea",
      price : "180",
      type : "cold"
    }

  ]
  
  return (
    <div className="App">
       <h1>Priya Restaurant</h1>
      <h2> Menu to order </h2>
      <Menuheading title = "Main course"></Menuheading>
      <Menu item = "Mushroom Briyani" price ="200" type = "veg"></Menu>
      <Menu item = "Egg Briyani" price ="180" type = "Non-veg"></Menu>
      <Menu item = "Mutton Briyani" price ="220" type = "Non-veg"></Menu>
      <Menu item = "Paneer Briyani" price ="250" type = "veg"></Menu>
      <Menu item ={mainCourse[0].item} price={mainCourse[0].price} type={mainCourse[0].type}></Menu>
      <Menu item ={mainCourse[1].item} price={mainCourse[1].price} type={mainCourse[1].type}></Menu>
      <Menu item ={mainCourse[2].item} price={mainCourse[2].price} type={mainCourse[2].type}></Menu>
      <Menuheading title = "Starters"></Menuheading>
      <Menu item = "Chicken 65" price ="250" type = "Non-veg"></Menu>
      <Menu item = "Paneer Tikka" price ="270" type = "veg"></Menu>
      <Menu item = "Dragon chicken" price ="280" type = "Non-veg"></Menu>
      <Menuheading title = "Drinks"></Menuheading>
      <Menu item = "Lime Soda" price ="250" type = "hot"></Menu>
      <Menu item = "Sweet Lime" price ="27" type = "cold"></Menu>
      <Menu item = "juice" price ="280" type = "hot"></Menu>
      {drinks.map(i=> <Menu item={i.item} price={i.price} type={i.type}></Menu>)}
      <Footer name = "Priya"></Footer>
<Sfoodname></Sfoodname>
<Cart></Cart>
    </div>
  );
}

export default App;
