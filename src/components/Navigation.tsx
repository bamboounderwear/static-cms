"use client";

// Navigation.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Burger from './Burger';

const Navigation: React.FC = () => {
  const router = useRouter();
  const [active, setActive] = useState(false);
  const isActive = (path: string) => router.pathname.startsWith(path);

  return (
    <>
      <Burger active={active} onClick={() => setActive(!active)} />
      <nav className="w-0 md:w-28 md:block">
        <ul
          className={{
            'opacity-0 w-full h-screen text-center m-0 p-0 fixed top-0 bg-white flex flex-col justify-center z-[1] translate-y-full transition-opacity md:opacity-100 md:w-28 md:top-auto md:block md:translate-y-0': true,
            'opacity-100 translate-y-0': active,
          }}
        >
          <li className="mb-7 text-3xl p-0 pr-6 last:mb-0 md:text-lg md:pr-0">
            <Link href="/">
              <a className={isActive('/') ? 'text-gray-900 font-bold' : ''}>About</a>
            </Link>
          </li>
          <li className="mb-7 text-3xl p-0 pr-6 last:mb-0 md:text-lg md:pr-0">
            <Link href="/posts">
              <a className={isActive('/posts') ? 'text-gray-900 font-bold' : ''}>Blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;