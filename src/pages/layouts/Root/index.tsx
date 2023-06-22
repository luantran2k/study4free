import { Outlet } from 'react-router-dom';
import { Header } from '../../../components/common/Header';
import { Footer } from '../../../components/common/Footer';
import React, { useEffect, useRef, useState } from 'react';
import Tools from '../../../components/common/Tools';
import { useInView } from 'react-intersection-observer';
const RootLayout = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      // console.log(e.target.);
    });
    // const myObserver = new IntersectionObserver(
    //   ([entry]) => {
    //     setIsIntersecting(entry.isIntersecting);
    //   },
    //   { rootMargin: '-10px' }
    // );
    // if (ref.current) {
    //   myObserver.observe(ref.current);
    // }
  }, []);

  return (
    <div className="h-full relative">
      <Header />
      <div ref={ref}>asdasdsd</div>
      <Outlet />
      <Footer />
      <Tools />
    </div>
  );
};

export default RootLayout;
