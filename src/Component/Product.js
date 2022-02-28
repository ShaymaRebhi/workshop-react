import { useState } from 'react';
import styled from 'styled-components';

export default function Product (props){
    const [product] = useState(props.product);
    const [update , setUpdate] = useState(0);
    const [likes , setLikes] = useState(0);
        
    const addLike = () => {
      setLikes(likes+1);
      setUpdate(update+1);
    }
        
    if(likes < 5){
        return (
        <ProductFrame>
            <ProductImageWrapper>
              <ProductImage src={product.img}>
              </ProductImage>
              </ProductImageWrapper>
              <ProductInfoWrapper>
                  <span>{product.name}</span>
                  <span>{product.price}</span>
                  <span>Likes : {likes}</span>
                  <button onClick={addLike}>Like</button>
              </ProductInfoWrapper>
  </ProductFrame>
        ) ;
      } 
      return (
        <ProductFrameBest>
          <ProductImageWrapperBest>
            <ProductImageBest src={product.img}></ProductImageBest>
          </ProductImageWrapperBest>
          <ProductInfoWrapperBest>
          <span>{product.name}</span>
          <h4>Best Product !!</h4>
                  <span>{product.price}</span>
                  <span>Likes : {likes}</span>
                  <button onClick={addLike}>Like</button>
          </ProductInfoWrapperBest>
        </ProductFrameBest>

      )
}

    const ProductFrame = styled.div`
    border-radius: 25px;
    min-height: 150px;
    min-width: 150px;
    background-color: rgb(110, 110, 110, 0.7);
    margin: 10px;
    display: flex;
    flex-direction: column;
  `;
  const ProductImageWrapper = styled.div`
    margin: 5px;
    max-width: 150px;
  `;
  const ProductImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
  `;
  const ProductInfoWrapper = styled.div`
    margin-top: auto;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    & > span {
      text-align: center`;
      const ProductFrameBest = styled.div`
      border-radius: 25px;
      min-height: 200px;
      min-width: 200px;
      background-color: #DB7093;
      margin: 10px;
      display: flex;
      flex-direction: column;
      animation:  clignote 2s linear infinite;
      @keyframes clignote {  
      50% { opacity: 0.5; }
    }
    `;
    const ProductImageWrapperBest = styled.div`
      margin: 5px;
      max-width: 200px;
    `;
    const ProductImageBest = styled.img`
      width: 100%;
      height: 100%;
      border-radius: 25px;
    `;
    const ProductInfoWrapperBest = styled.div`
      color:white;
      margin-top: auto;
      margin-bottom: 5px;
      display: flex;
      flex-direction: column;
      & > span {
        text-align: center;
      }
    `;


