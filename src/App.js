import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Title from './Pages/TitleScreen/Title';
import Story from './Pages/Story/Story';
import Event from './Pages/Event/Event';
import TOP from './Pages/TOP/TOP';
import PVP from './Pages/PVP/PVP';
import Menu from './Pages/Menu/Menu';
import Adventure from './Pages/Adventure/Adventure';
import Characters from './Pages/Characters/Characters';
import Coop from './Pages/Coop/Coop';
import Customize from './Pages/Customize/Customize';
import ExchangeShop from './Pages/ExchangeShop/ExchangeShop';
import Friend from './Pages/Friend/Friend';
import Guild from './Pages/Guild/Guild';
import Item from './Pages/Item/Item';
import Mission from './Pages/Mission/Mission';
import News from './Pages/News/News';
import Other from './Pages/Other/Other';
import Scan from './Pages/Scan/Scan';
import Shop from './Pages/Shop/Shop';
import Summon from './Pages/Summon/Summon';
import Train from './Pages/Train/Train';
import HoiPoi from './Pages/HoiPoi/HoiPoi';
import { useEffect, useState } from 'react';



function App() {
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      ):(

      
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Title />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/story' element={<Story />}></Route>
          <Route path='/event' element={<Event />}></Route>
          <Route path='/top' element={<TOP />}></Route>
          <Route path='/pvp' element={<PVP />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/news' element={<News />}></Route>
          <Route path='/scan' element={<Scan />}></Route>
          <Route path='/customize' element={<Customize />}></Route>
          <Route path='/item' element={<Item />}></Route>
          <Route path='/friend' element={<Friend />}></Route>
          <Route path='/other' element={<Other />}></Route>
          <Route path='/hoipoi' element={<HoiPoi />}></Route>
          <Route path='/exchangeshop' element={<ExchangeShop />}></Route>
          <Route path='/train' element={<Train />}></Route>
          <Route path='/coop' element={<Coop />}></Route>
          <Route path='/guild' element={<Guild />}></Route>
          <Route path='/adventure' element={<Adventure />}></Route>
          <Route path='/event' element={<Menu />}></Route>
          <Route path='/pvp' element={<Menu />}></Route>
          <Route path='/story' element={<Menu />}></Route>
          <Route path='/mission' element={<Mission />}></Route>
          <Route path='/top' element={<Menu />}></Route>
          <Route path='/shop' element={<Shop />}></Route>
          <Route path='/summon' element={<Summon />}></Route>
          <Route path='/characters' element={<Characters />}></Route>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
