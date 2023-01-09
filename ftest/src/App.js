import logo from './logo.svg';
import './App.css';
import Loginform1 from './Components/Loginform1';
import Listplaces from './Components/Listplaces';
import Plce from './Components/Plce';
import fa from './Components/fa.css';
import './Components/Plce.css';




function App() {

  const placedesc1 = 
  [
    { place : "MARINA BEACH",
      desc : "Predominantly a sandy beach,  Mesmerizing sunset, horse rides, hot air balloons, and some snacks",
      timings : "5a.m to 10p.m ",
      location : "Chennai,TamilNadu",
      fun : "Exploring an aquarium, ice house, kite flying"
    },
    {
      place : "VANDALUR ZOO",
      desc : "A favorite among kids as well as adults, this zoological park is a conservation site for flora and fauna ",
      timings : "10a.m to 7p.m ",
      location : "Grand Southern Trunk Rd, Vandalur,TamilNadu",
      fun : "Visit Aquarium, deer safari, lion safari"
    },
    {
      place : "EXPRESS AVENUE MALL",
      desc : "one-stop destination for all your shopping needs. Eight-screen cineplex and kids play zone are there",
      timings : "10a.m to 10p.m ",
      location : "17, Pattullos Rd, Express Estate, Thousand Lights",
      fun : "Play your favorite game at the gaming arcade"
    },
    {
      place : "MGM DIZEE WORLD",
      desc : "Family time can be best spent where children love to go and enjoy to the fullest.  ",
      timings : "10:30a.m to 6p.m ",
      location : "1/74, SH 49, Muthukadu",
      fun : "Explore Big wheel, Disc saucer, Roll o Roll, Tomb Raider, shoe house."
    },
    {
      place : "BIRLA PLANETARIUM",
      desc : "Birla Planetarium organized simulated tours of the universe, solar system, and cosmic shows.",
      timings : "9a.m to 6p.m ",
      location : "Gandhi Mandapam Rd, Duraisamy Nagar, Kotturpuram",
      fun : "Enjoy the shows on extra-terrestrial objects and the universe"
    }


  ]
  return (
    <div className="Plce">
      <header className="App-header">
      <Loginform1></Loginform1>
      
      <Listplaces></Listplaces>
    
      {placedesc1.map(i=> <Plce place={i.place} desc={i.desc} timings={i.timings} location={i.location} fun={i.fun}></Plce>)}
      
      <div className = "fa">
        <p>Follow me on</p>
      <a href="#" class="fa fa-facebook"></a>
     <a href="#" class="fa fa-twitter"></a>
     <a href="#" class="fa fa-google"></a>
     <a href="#" class="fa fa-linkedin"></a>
    </div>

      </header>
      </div>
  
  );
}

export default App;
