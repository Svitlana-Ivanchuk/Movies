import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from '../Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
    </>
  );
};
