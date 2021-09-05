import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import ShayariPage from './pages/ShayariPage';
import QuotePage from './pages/QuotePage';
import { AnimatePresence } from 'framer-motion';
import KavitaPage from './pages/KavitaPage';
import { db } from './firebase';
import Shayri from './pages/Shayri';

const App = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route path='/shayaris/:id' component={Shayri} />
        <Route path='/quotes' component={QuotePage} />
        <Route path='/kavitas' component={KavitaPage} />
        <Route path='/shayaris' component={ShayariPage} />
        <Route path='/blogs' component={BlogPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
