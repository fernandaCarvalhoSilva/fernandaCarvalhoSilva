import styled from "styled-components";
import { Link } from "react-router-dom"

export const PortfolioSidebar = styled.div`
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 17rem;
  height: 100vh;
  background-color: orange;
  align-items: center;
  padding-top: 20rem;

  @media (max-width: 600px) {
    padding: 1rem 3rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    width: 100%;
    height: auto;
    display: flow;
    text-align: left;
  }
`;

export const SidebarContainer = styled.div`
  span {
    display: none;
  }

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    span {
      display: block;
      color: white;
      font-size: 20px;
    }
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  max-width: 10rem;
  max-height: 10rem;
  border: 0.5rem solid rgba(255, 255, 255, 0.2);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavbarContainer = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  padding-top: 1.5rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
`;

export const NavButton = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: block;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: solid white 2px;
    border-radius: 0.375rem;
    transition: box-shadow 0.15s ease-in-out;
    color: orange;
    padding: 5px;

    svg {
      display: inline-block;
      width: 30px;
      height: 30px;
      vertical-align: middle;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
    }
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: -45rem;

  select {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 30px;
    border: none;
    border-radius: 4px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 126px;
    outline: none;
    color: #495057;
    font-size: small;
  }

  #globe {
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    fill: orange;
  }

  #arrow-down {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    fill: orange;
  }
`;
