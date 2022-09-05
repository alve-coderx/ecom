import './App.css';
import Home from './Layout/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar, SecondCorner, TopBar, TopCorner, TopFooter,ProductOverview, Sidebar } from './Components';
import Banners from './Layout/Dashboard/Banners';
import ManageProducts from './Layout/Dashboard/ManageProducts'
import DashboardHome from './Layout/Dashboard/DashboardHome';
import Corners from './Layout/Dashboard/Corners';
import CetagoryOverview from './Components/CetagoryOverview';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {setProducts} from './Redux/Actions/productActions';
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    fetch('http://localhost:8000/products')
    .then(res=>res.json())
    .then(data=>dispatch(setProducts(data)))
  },[])

  

  

  return (
    <div className="App">
        <BrowserRouter>
          <TopBar/>
          <Routes>
              <Route exact path='/' element={<Home/>}/>
              <Route path='/home' element={<Home/>}/>
              <Route path='/womens' element={<TopCorner/>}/>
              <Route path='/mens' element={<SecondCorner/>}/>
              <Route path='/products/:productId' element={<ProductOverview/>}/>
              <Route path='/mens/:cetagory' element={<CetagoryOverview/>}/>
              <Route path='/womens/:cetagory' element={<CetagoryOverview/>}/>
              <Route path='/dashboard' element={<Sidebar/>}>
                <Route path="/dashboard/home" element={<DashboardHome/>}/>
                <Route path="/dashboard/products" element={<ManageProducts/>} />
                <Route path="/dashboard/banners" element={<Banners/>} />
                <Route path="/dashboard/corners" element={<Corners/>} />
              </Route>
          </Routes>
          <TopFooter/>
          <Footer/> 
        </BrowserRouter> 
    </div>
  );
}

export default App; 
