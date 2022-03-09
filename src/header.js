import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


function Header(){
        return(
            <Header>
            <img src="/Users/adilarif/Frontend-Starter/public/logo.png" alt="logo" width="80" height="80"/>

      <ul>
        <li><div id="login">Login</div></li>
        <li><img src="/Users/adilarif/Frontend-Starter/public/shopping-cart.png" id="cart" alt="cart" width="50" height="50"/></li>
      </ul>
      
      <div class="topnav">
        <a class="active" href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#about">Products</a>
        <a href="#contact">Contact</a>
        <input type="text" id="searchBox" placeholder="Search.."/>
      </div>

      <ul>

        <li>UK Mainland Next Working Day
          Delivery available, Order by 12pm</li>
        <li>Free In-Store Collection
          Choose from over 30 stores</li>
        
      </ul>
      </Header>
        )

    
    
}

export default Header;