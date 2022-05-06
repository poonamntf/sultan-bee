import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from './component/Loader'
import Map from './component/Map'
import Main from './component/Main'
import "./App.css"
import HotelDetail from './component/HotelDetail'
import HotelFood from './component/HotelFood'
import Login from './component/Login';
import SignUp from './component/SignUp';
import PayRoute from './component/PayRoute';
// import Test from './component/QrScanner';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import HotelLocation from './component/HotelLocation'
import ViewMore from './component/ViewMore'
import History from './component/History'
import Scan from './component/Scan'
import Dummy from './component/Dummy'
// import Paypal from './component/Paypal';

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)

    }, 2000)

  }, [])
  return (
    <Routes>
      <Route path="/" element={loading ? <Loader /> : <Map />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signup/card' element={<PayRoute />} />
      {/* <Route exact path="/signup/card" element={<PayRoute />} /> */}
      {/* <Route path='/signup/payment/paypal' element={<Paypal />} />
      <Route path='/signup/payment/card' element={<Paypal />} /> */}
      {/* <Route path='/qrscanner' element={<Test />} /> */}
      <Route path='/cart' element={<Cart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path="/main" element={<Main />} />
      <Route path="/hotel" element={<HotelDetail />} />
      <Route path="/hotelfood" element={<HotelFood />} />
      <Route path='/hotel-location' element={<HotelLocation />} />
      <Route path='/viewmore' element={<ViewMore />} />
      <Route path='/history' element={<History />} />
      <Route path='/scan' element={<Scan />} />
      <Route path='/dummy' element={<Dummy />} />


    </Routes>
  )
}

export default App