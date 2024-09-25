// import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Account from '../pages/Account/Account'
import Profile from '../pages/Profile/Profile'
import ViewEvent from '../pages/ViewEvent/ViewEvent'
import CreateEvent from '../pages/CreateEvent/CreateEvent'
import EditEvent from '../pages/EditEvent/EditEvent'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/account/login"} />} />

            <Route path="/account/login" element={<Account /> } />
            <Route path="/account/register" element={<Account />} />
            <Route path="/events" element={<Home />} />
            <Route path="/events/create" element={<CreateEvent />} />
            <Route path="/events/edit/:id" element={<EditEvent/>} />
            <Route path="/events/view/:id" element={<ViewEvent />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    )
}

export default AppRoutes