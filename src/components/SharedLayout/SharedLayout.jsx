import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SharedLayout.css';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';

const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div className="container">
      <header className="header">
        <Navigation />
        {isLoggedIn && <UserMenu />}
      </header>
      <main>
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
