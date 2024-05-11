import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/Single";
import { Howitworks } from "./pages/howitworks";
import { Pricing } from "./pages/pricing";
import injectContext from "./store/appContext";
import {Form} from "./pages/form";
import { Login } from "./pages/login";
import { Testimonials } from "./pages/Testimonials";
import {Dashboard} from "./pages/Dashboard";
import {Learn} from "./pages/Learn";
import {History} from "./pages/History";
import {Favorites} from "./pages/Favorites";
import {Profile} from "./pages/Profile";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Register2 } from "./pages/register2";
import { Register3 } from "./pages/register3";
import { Register4 } from "./pages/register4";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Howitworks />} path="/howitworks"/>
                        <Route element={<Pricing/>} path="/pricing"/>
                        <Route element={<Testimonials/>} path="/testimonials"/>
                        <Route element={<Login />} path="/login" />
                        <Route element={<Form />} path="/form" />
                        <Route element={<Register2/>} path="/register2" />
                        <Route element={<Register3/>} path="/register3" />
                        <Route element={<Register4/>} path="/register4"/>
                        <Route element={<Dashboard />} path="/dashboard" />
                        <Route element={<History />} path="/history" />
                        <Route element={<Learn />} path="/learn" />
                        <Route element={<Profile />} path="/profile/" />
                        <Route element={<Favorites />} path="/favorites" />
                        <Route element={<Single />} path="/single/:id"/>
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
