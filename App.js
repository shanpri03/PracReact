import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Menu from './components/Menu';

function App() {
  const mainCourse = [
    {
      title: "Sahi Paneer",
      price: 240
    },
    {
      title: "Naan",
      price: 20
    }
  ]
  const drinksItem = [
    {
      title: "Coffee",
      price: 20
    },
    {
      title: "Tea",
      price: 10
    },
    {
      title: "Lemon Tea",
      price: 10
    },
    {
      title: "Herbal Tea",
      price: 20
    },
    {
      title: "Green Tea",
      price: 50
    }
    // {
    //   title: {
    //     title1: "Green Tea",
    //     title2: "XYZ Tea"
    //   },
    //   price: 50
    // }
  ]
  return (
    <div className="App">
      <Heading title="Main Course"></Heading>
      <Menu item="Matar Paneer" price="180"></Menu>
      <Menu item="Chicken Biryani" price="280"></Menu>
      <Menu item={mainCourse[0].title} price={mainCourse[0].price}></Menu>
      <Menu item={mainCourse[1].title} price={mainCourse[1].price}></Menu>
      <Heading title="Drinks"></Heading>
      {drinksItem.map(i => <Menu item={i.title} price={i.price}></Menu>)}
      <Heading title="Dessert"></Heading>
     
    </div>
  );
}

export default App;
