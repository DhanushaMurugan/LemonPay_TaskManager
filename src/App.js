
import './App.css';
// import HomePage from './components/HomePage';

import './index.css'


import React from "react";


import HomePage from './components/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// import Signup from './components/Signup';
import Login from './components/Login';

// import TaskManager from './components/TaskManager';




function App() {
  
  return (
    <div className="App">
      
      
      <Router>
      <Routes>
        {/* <Route path="/signup" element={ <Signup/>} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<HomePage/>} />
        {/* <Route path="/tasks" element={ <TaskManager/>} /> */}
        {/* <Route path="/" element={ <PrivateRoute/>}>
          
        </Route> */}
      </Routes>
    </Router>
 
    </div>
  );
}

export default App;
