import React from 'react';
import './App.css';
import NavBar from './mainpage/NavBar';
import { SplitLayout } from './mainpage/SplitLayout';
import { DiscoverProducts } from './mainpage/DiscoverProducts';

function App() {
  return (
      <SplitLayout
        navBar={<NavBar/>}
        leftSide={
          <DiscoverProducts
            banner={<div>banner</div>}
            search={<div>search</div>}
            productlist={<div>productlist</div>}
          />}
        rightSide={<div>right</div>}
      />
  );
}

export default App;
