import React from 'react';

import PageContent from './components/PageContent';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

import './App.scss';

function App() {
  return (
    <div className="">
      <Header />

      <Sidebar />

      <PageContent />
    </div>
  );
}

export default App;
