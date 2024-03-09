import { Outlet } from 'react-router-dom';
import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
// import css from './SharedLayout.module.css';
import Loader from 'components/Loader/Loader';
import { Header, HeaderLink, HeaderNav } from './SharedLayout.styled';

let activeClassName = {
  color: 'red',
};

const SharedLayout = () => {
  return (
    <div>
      <Header>
        <HeaderNav>
          <HeaderLink
            to="/"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Home
          </HeaderLink>
          <HeaderLink
            to="/catalog"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Catalog
          </HeaderLink>
          <HeaderLink
            to="/favorites"
            style={({ isActive }) => (isActive ? activeClassName : undefined)}
          >
            Favorite
          </HeaderLink>
        </HeaderNav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
