import styled from 'styled-components';
import FullScreenImage from '../../Images/honnavar-tourism-3.jpg';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  background-image: url('${FullScreenImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;


  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.2);  
    z-index: 1;
  }


  h2 {
    z-index: 2;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
    font-size: 3.5rem;  
    font-family: 'Helvetica Neue', Arial, sans-serif; 
    text-align: center;
    font-weight: bold;  
    letter-spacing: 2px; 
    color: #f0f0f0;  
    margin: 0;  
  }
`;
