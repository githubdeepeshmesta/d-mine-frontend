// DashboardLayoutStyle.js
import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgrounImage from '../../Images/MainPageImage.jpg';

export const Sidebar = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  &:hover {
    background-color: #555;
  }
`;
export const LogoutLayout = styled.div`
margin-top :30px
`
export const MainContent = styled.div`
color : 1px solid black;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
`;
export const MainContent2 = styled.div`
display:flex;
  background-color: #f4f4f4;
  width: 1400px;
  background-image: url('${BackgrounImage}'); 
  background-size: cover;  
  background-position: center; 
  background-repeat: no-repeat; 
  
`;
export const Header = styled.div`
  background-color: #222;
  color: white;
  padding: 10px 20px 10px 20px;
  display: flex;
  justify-content: space-between;
`;

export const Footer = styled.footer`
  background-color: #222;
  color: white;
  text-align: center;
  padding: 10px;
`;
