import { useState } from 'react';
import {Outlet, BrowserRouter, Route, Routes} from 'react-router';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  return (
    <BrowserRouter>
	<Routes>
	    <Route element={<Layout />}>
	        <Route path="/" element={<Home />} />
	    </Route>
	</Routes>
    </BrowserRouter>
  );
}

export default App;
