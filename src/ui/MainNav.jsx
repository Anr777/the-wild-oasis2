import { NavLink } from 'react-router-dom';
import styled from "styled-components";

import { HiOutlineCalendarDays, HiOutlineCog6Tooth, HiOutlineHome, HiOutlineHomeModern, HiOutlineUsers, HiMiniBars3CenterLeft } from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

 
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    position: relative; /* Necesario para el tooltip */
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  /* Tooltip para el texto */
  & span {
    @media (max-width: 768px) {
      display: none; /* Oculta el texto en pantallas pequeñas */
    }
  }

  /* Tooltip visible solo en pantallas pequeñas */
  &:hover::after {
    @media (max-width: 768px) {
      content: attr(data-tooltip); /* Usa el atributo personalizado data-tooltip */
      position: absolute;
      left: 100%; /* Posiciona el texto fuera del enlace */
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--color-grey-800);
      color: white;
      padding: 0.4rem 0.8rem;
      border-radius: 0.4rem;
      white-space: nowrap;
      font-size: 1.2rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      pointer-events: none;
    }
  }
`;

export default function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to='/dashboard' data-tooltip='Home'>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
          
        </li>
        <li>
          <StyledNavLink to='/bookings' data-tooltip='Bookings'>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/cabins' data-tooltip='Cabins'>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/users' data-tooltip='Users'>
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/settings' data-tooltip='Settings'>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
        
      </NavList>
    </nav>
  )
}