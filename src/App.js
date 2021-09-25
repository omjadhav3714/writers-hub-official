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
import Quotes from './pages/Quotes';
import Kavita from './pages/Kavita';
import Blog from './pages/Blog';
import SignUp from './components/forms/SignUp';
import LogIn from './components/forms/LogIn';
import { AuthProvider } from './context/AuthContext';
import ForgetPassword from './components/forms/ForgetPassword';
import UserProfile from './pages/UserProfile';
import Approvals from './pages/Approvals';
import KavitaApprovals from './pages/approvals/KavitaApprovals';
import QuoteApprovals from './pages/approvals/quoteApproval';
import ShayriApprovals from './pages/approvals/ShayriApproval';

const App = () => {
  return (
    <AuthProvider>
      <AnimatePresence>
        <Switch>
          <Route path='/approvals/shayris/:id' component={ShayriApprovals} />
          <Route path='/approvals/quotes/:id' component={QuoteApprovals} />
          <Route path='/approvals/kavitas/:id' component={KavitaApprovals} />
          <Route path='/approvals' component={Approvals} />
          <Route path='/users/:id' component={UserProfile} />
          <Route path='/blogs/:id' component={Blog} />
          <Route path='/kavitas/:id' component={Kavita} />
          <Route path='/quotes/:id' component={Quotes} />
          <Route path='/shayaris/:id' component={Shayri} />
          <Route path='/quotes' component={QuotePage} />
          <Route path='/kavitas' component={KavitaPage} />
          <Route path='/shayaris' component={ShayariPage} />
          <Route path='/blogs' component={BlogPage} />
          <Route path='/resetpassword' component={ForgetPassword} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={LogIn} />
          <Route exact path='/' component={HomePage} />
        </Switch>
      </AnimatePresence>
    </AuthProvider>
  );
};

export default App;
