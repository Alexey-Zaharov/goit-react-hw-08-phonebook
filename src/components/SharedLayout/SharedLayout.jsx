import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SharedLayout.css';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';
import InfoTitle from 'components/InfoTitle/InfoTitle';

const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div className="container">
      <header className="header">
        <Navigation />
        <h1 className="title">Phone Book</h1>
        {isLoggedIn && <UserMenu />}
      </header>
      <main>
        {!isLoggedIn && <InfoTitle />}
        <Suspense fallback={<div>Loading....</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

export default SharedLayout;
