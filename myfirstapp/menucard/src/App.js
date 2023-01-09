import logo from './logo.svg';
import './App.css';
import Menulist from './components/Menulist';
import Itemlist from './components/Itemlist';
import Classitemlist from './components/Classitemlist';
import Customerform from './components/Customerform';


function App() {
  return (
    <div className ="Itemlist" >
      
      <h1> Welcome to Priya's kitchen </h1>
    <p> The warmth of a traditional kitchen is still a valued characteristic for the heart of the home for many homeowners. On the other hand, the simple, clean lines of a contemporary-style kitchen tend to offer a more workable feeling space, and function is also highly valued by those who spend a lot of time cooking, dining in and using their kitchen.
If you want to create a space that reflects your personal aesthetic for your upcoming kitchen remodel, here are some tips to help you choose one style over the other for your home. Let's take a look at how to do it!

</p>

<Menulist></Menulist>
<Itemlist></Itemlist>
<Classitemlist></Classitemlist>
<Customerform></Customerform>






</div>
  );
     
}

export default App;
