import './App.css';
import styled from 'styled-components'
import useApi from './Hooks/useApi';
import Product from './Component/Product';
//import products from './products.json';


function App() {
  const [products,err]=useApi("products");
  return (
     
        <AppFrame className="app">
        
        {products && products.map((object,index)=>( <Product key={index}  product={object} />))}
      </AppFrame>
      
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;

export default App;
