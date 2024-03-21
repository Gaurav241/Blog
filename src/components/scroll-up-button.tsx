'use client';

import { useCallback, useEffect, useState } from 'react';
import { IoMdArrowRoundUp } from 'react-icons/io';

export default function ScrollUpButton() {
  const [show, setShow] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true);
    if (show && window.scrollY <= 500) setShow(false);
  }, [show]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <>
      {show && (
        <div className="fixed bottom-4 right-4 z-20" style={{ opacity: 1 }}>
          <button
            onClick={scrollToTop}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-red-500 text-2xl text-white opacity-70 transition-all duration-300 md:bottom-20 md:right-20 md:h-14 md:w-14 md:text-3xl"
          >
            <IoMdArrowRoundUp />
          </button>
        </div>
      )}
    </>
  );
}
