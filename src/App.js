import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import ProtectedRoute from './protectedRoute';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(null)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn setIsSignedIn={setIsSignedIn} />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={ <ProtectedRoute isSignedIn={isSignedIn}> <Dashboard /> </ProtectedRoute> } />
      </Routes>
    </Router>
  );
}

export default App;
