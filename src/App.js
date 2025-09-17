import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Row, Col } from 'antd';
import './App.css';
import Home from './pages/Home';
import All from './pages/All';
import History from './pages/History';
import ManageFeed from './pages/ManageFeed';
import ManageData from './pages/ManageData';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App" style={{height: "100vh", display: "flex", flexDirection: "column"}}>
      <Row>
        <Col span={24}>
          <Navbar></Navbar>
        </Col>
      </Row>
      <Row style={{height: "100%", flex: 1}}>
        <Router>
            <Col span={3} style={{display: 'flex', flex: 1}}>
              <Sidebar></Sidebar>
            </Col>
            <Col span={21} style={{height: "100%", display: 'flex'}}>
              <Routes>
                <Route path="/" element={<Home />} style={{height: "100%"}}/>
                <Route path="/all" element={<All />} style={{height: "100%"}}/>
                <Route path="/history" element={<History />} style={{height: "100%"}}/>
                <Route path="/manage_feed" element={<ManageFeed />} style={{height: "100%"}}/>
                <Route path="/manage_data" element={<ManageData />} style={{height: "100%"}}/>
              </Routes>
            </Col>
        </Router>
      </Row>
    </div>
  );
}

export default App;