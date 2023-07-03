'use client';

import React from 'react';
import Cart from '../cart';
import { NextUIProvider } from '@nextui-org/react';
import Navbar from '../sidebarMobile';
import Sidebar from '../sidebar';

export default function Home() {
  return (
    <NextUIProvider>
      <div className="flex h-screen w-full">
        <Sidebar />
        <Navbar />
        <div className="z-0 md:ml-[16.6vw] mt-[110px] md:mt-0 w-full sm:w-5/6 bg-white p-4">
          <h2>Cart</h2>
          <Cart />
        </div>
      </div>

    </NextUIProvider>
  );
}
