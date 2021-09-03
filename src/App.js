import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import ShayariPage from './pages/ShayariPage';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <AnimatePresence>
      <Switch>
        <Route path='/kavitas' component={ShayariPage} />
        <Route path='/shayaris' component={ShayariPage} />
        <Route path='/blogs' component={BlogPage} />
        <Route exact path='/' component={HomePage} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
