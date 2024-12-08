import styled from "styled-components";
import BackgrounImage from '../../Images/MainPageImage.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url('${BackgrounImage}'); 
  background-size: cover; 
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 100px;
`;


export const Image = styled.img`
  max-width: 80%;
  max-height: 80%;
  border-radius: 8px;
  transition: opacity 1s ease-in-out;
  position: static; 
  z-index: 1; 
`;