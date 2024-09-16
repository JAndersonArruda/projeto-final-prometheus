// import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import Account from '../pages/Account/Account'
import Profile from '../pages/Profile/Profile'
import TicketEvent from '../pages/TicketEvent/TicketEvent'
import ViewEvent from '../pages/ViewEvent/ViewEvent'


const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/criate" element={<Home />} />
            <Route path="/events/edit/:id" element={<Home />} />
            <Route path="/events/view" element={<ViewEvent />} />
            <Route path="/account/login" element={<Account /> } />
            <Route path="/account/register" element={<Account />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/ticket-event" element={<TicketEvent />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    )
}

export default AppRoutes