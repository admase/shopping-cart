import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import { StoreProvider } from './context/StoreContext';
import ManageNavigation from './ManageNavigation';

const ManageStore = () => {

    return (
        <>
            <main className="main" role="main">
                <StoreProvider>
                    <ManageNavigation></ManageNavigation>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Layout />} />
                            <Route index element={<HomePage />} />
                            <Route path="/store" element={<StorePage />} />
                            <Route path="*" element={<NoPage />} />
                        </Routes>
                    </BrowserRouter>
                </StoreProvider>
            </main>
            <footer className="footer" role="contentinfo">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        <small className="text-start">Made with <i className="fa fa-heart text-decor"></i> by: Danny A. Mase</small>
                        <small className="text-end">Copyright &copy;2023 &ndash; <a href="#page-top"><span className="text-decor">Pacific</span> Tech</a> &middot; All Rights Reserved</small>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default ManageStore;