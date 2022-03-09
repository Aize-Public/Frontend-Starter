import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Footer from './footer';

const container = document.querySelector('#card-container');
const recomend = async () =>{

  let uri = 'http://localhost:8080/recommendeds';
  let res = await fetch(uri);
  let recomendProd = await res.json();
  
  console.log(recomendProd);


  let template = '';

  recomendProd.forEach((recs, index )=> {
    
    var count = index;
    
    template += 
     

    `
    <div id="card${count}" class="card">
          <img src="${recs.images[0]}" style="width:100%">
          <h3>${recs.name}</h3>
          <p class="price">£${recs.price}</p>
          <p><small>${recs.description}</small></p>
          <p><button>Add to Cart</button></p>
    </div>
     
    `
    
  });
 
  

  container.innerHTML = template;
}
  


window.addEventListener('DOMContentLoaded', () => recomend());

ReactDOM.render(<App />, document.getElementById('#card-container'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
