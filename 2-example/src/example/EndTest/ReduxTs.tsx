import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigator from './common/Navigation'
import ReduxUserForm from './components/ReduxUserForm'
import ReduxUserList from './components/ReduxUserList'
import store from './store'
import "../EndTest/css/styles.css";
import Home from './components/HomePage'
import Footer from './common/Footer'
import Login from './components/Login'

function ReduxTs() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navigator />
        </div>
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/list' element={<ReduxUserList />} />
          <Route path='/form' element={<ReduxUserForm />} />
          <Route path='/form/:id' element={<ReduxUserForm />} />
          <Route path='/' element={<Login />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default ReduxTs