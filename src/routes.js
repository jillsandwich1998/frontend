import React from "react";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from "./pages/User";
import Profile from "./pages/Profile";

export default function routes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<User />} />
                <Route path="/create" element={<Profile />} />
                <Route path="/update:id" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}