import { FC, PropsWithChildren } from 'react';

import { useRouter } from 'next/router';

import Header from './Header/Header';
import DefaultHeader from './DefaultHeader/DefaultHeader';
import Footer from './Footer/Footer';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const isHomePage = router.pathname === '/';

  return (
    <>
      {isHomePage ? <Header /> : <DefaultHeader />}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
