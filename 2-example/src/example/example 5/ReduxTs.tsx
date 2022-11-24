import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigator from './common/Navigation'
import ReduxUserForm from './components/ReduxUserForm'
import ReduxUserList from './components/ReduxUserList'
import store from './store'
import "../example 5/css/styles.css";
import Home from './components/HomePage'
import DetailUser from './components/DetailUser'
import Footer from './common/Footer'

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
          <Route path='/detail/:id' element={<DetailUser />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default ReduxTs