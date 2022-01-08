import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Notice from "./components/Notice";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

class AppShell extends React.Component {
    render() {
        return (
            <>
                <Header />

                <main>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/intro" element={<Intro />} />
                        <Route exact path="/notice" element={<Notice />} />
                        <Route exact path="/contact" element={<Contact />} />
                    </Routes>
                </main>

                <Footer />
            </>
        );
    };
};

export default AppShell;

