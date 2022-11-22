import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FormUser from './FormUser'
import ListUser from './ListUser'
import Navigator from './common/Navigation'
import DetailUser from './DetailUser'

function ConfigRoure() {
    return (
        <BrowserRouter>
            <div>
                <Navigator/>
            </div>
            <Routes>
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
        </BrowserRouter>
    )
}

export default ConfigRoure