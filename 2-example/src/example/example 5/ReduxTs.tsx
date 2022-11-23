import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigator from './common/Navigation'
import ReduxUserForm from './components/ReduxUserForm'
import ReduxUserList from './components/ReduxUserList'
import store from './store'
import "../example 5/css/styles.css";

function ReduxTs() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Navigator />
        </div>
        <Routes>
          <Route path='/list' element={<ReduxUserList />} />
          <Route path='/form' element={<ReduxUserForm />} />
          <Route
            path='*'
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default ReduxTs