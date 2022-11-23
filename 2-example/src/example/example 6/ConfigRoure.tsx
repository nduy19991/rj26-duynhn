import React from 'react'
import "./styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormUser from './FormUser'
import ListUser from './ListUser'
import Navigator from './common/Navigation'
import DetailUser from './DetailUser'
import Home from './Home'
import Footer from './common/Footer'

function ConfigRoure() {
    return (
        <BrowserRouter>
            <div>
                <Navigator/>
            </div>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/list' element={<ListUser />} />
                <Route path='/form' element={<FormUser />} />
                <Route path='/form/:id' element={<FormUser />} />
                <Route path='/detail/:id' element={<DetailUser />} />
                <Route path='*' element={
                    <main style={{ padding: '1rem' }}>
                        <p>404 Page not found 😂😂😂</p>
                    </main>
                } />
            </Routes>
            <div>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default ConfigRoure