import React from 'react'
import Header from './Header'
import { BrowserRouter,
  Routes,
  Route
    } from 'react-router-dom';
  import About from './About';
import Client from './Client';
import Home from './Home';
import Footer from './Footer'
import Recruitment from './Recruitment';
import Policies from './Policies'
import Contact from './Contact' 
import Jobs from './Jobs';
import Submit from './Submit'
import Manager from './Manager';
import Account from './Account';
import Business from './Business';
import Three from './Three';
import Develop from './Develop';





function App() {
  return (
   <BrowserRouter>
   <Header />
   <div className="app">
   <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='develop' element={<Develop />}></Route>
    <Route path='three' element={<Three />}></Route>
    <Route path='business' element={<Business />}></Route>
    <Route path='account' element={<Account />}></Route>
    <Route path='manager' element={<Manager />}></Route>
    <Route path='submit' element={<Submit />}></Route>
    <Route path='jobs' element={<Jobs />}></Route>
    <Route path='contact' element={<Contact />}></Route>
    <Route path='recruitment' element={<Recruitment />}></Route>
    <Route path='about' element={<About />}></Route>
    <Route path='policies' element={<Policies />}></Route>
    <Route path='client' element={<Client />}></Route>
   </Routes>
   </div>
   <Footer />
   </BrowserRouter>
  )
}

export default App