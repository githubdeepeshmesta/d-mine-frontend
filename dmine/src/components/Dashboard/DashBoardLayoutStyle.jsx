import styled from "styled-components";
import BackgrounImage from '../../Images/MainPageImage.jpg';
export const Sidebar = styled.div`
  width: 200px;
  background-color: #333;
  color: white;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const SidebarLink = styled.button`
  color: white;
  text-decoration: none;
  padding: 10px;
  margin: 5px 0;
  border-radius: 4px;
  background-color: #555;
  box-shadow: 0 2px 4px 0 #9b9b9b;
  &:hover {
    background-color: #fff5ee;
    color: black;
  }
`;

export const LogoutLayout = styled.div`
  margin-top: 30px;
`;

// Main Content Area
export const MainContent = styled.div`
background-image: url('${BackgrounImage}'); 
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
  padding: 20px;
  z-index: 10;
`;

export const MainContentWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #f4f4f4;
  background-image: url('${BackgrounImage}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  z-index: 0;
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