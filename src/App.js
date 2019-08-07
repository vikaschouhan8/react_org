import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main/Main';
import HeadPart from './components/headPart/HeadPart';
import MainContent from './components/mainContent/MainContent';
import FooterSection from './components/footerSection/FooterSection';

function App() {
  return (
    <div className="container-fluid">
      <HeadPart />
      <Main />
      <MainContent />
      <FooterSection />
    </div>
  );
}

export default App;
