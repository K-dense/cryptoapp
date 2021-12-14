import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Layout, Typography, Space } from 'antd';

import { Navbar, Homepage, Exchanges, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

// Ant-Design for Styling and Icons, Redux and Redux toolkit, axios for API request, chart.js to create charts
// html-react-parser to parse some html data, millify to transform large numbers into readable strings, moment
// to parse time and dates and react-chartjs-2 to render the charts from chart.js into the application.

const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
        <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  <Route exact path="/" element={<Homepage/>}/>
                  <Route exact path="/exchanges" element={<Exchanges/>}/>
                  <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                  <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
                  <Route exact path="/news" element={<News/>}/>
                </Routes>
              </div>
            </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            Cryptoverse <br />
            All rights reserved
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default App;
