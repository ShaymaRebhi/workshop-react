import './App.css';
import styled from 'styled-components'
import Product from './Component/Product';
import products from './products.json';

function App() {
    const menu = (<div>
            <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
  return (
     
        <AppFrame className="app">
        {products.map((product , index)=> (
          <Product product = {product} key={index}></Product>
        ))}
      </AppFrame>
      
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;

export default App;
