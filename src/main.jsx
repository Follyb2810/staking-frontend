import ReactDOM from 'react-dom';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import React from 'react';
import Layout from './component/Shared/Layout';
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import SwapPage from './component/Pages/Swap';
import StakingContext from './component/Shared/StakingContext';
const router = createBrowserRouter(createRoutesFromElements(
<Route path="/" element={<Layout />}>
<Route path='' element={<App/>}/>
<Route path='swap' element={<SwapPage/>}/>
</Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <StakingContext>
            <RouterProvider router={router} />
    </StakingContext>
</React.StrictMode>
);