"use client";

import Link from "next/link";
import Nav from "./Nav";
import CartSideBar from "./CartSideBar";
import { CgShoppingBag } from "react-icons/cg";
import { Bike } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const Header = () => {
  const { cartCount, handleCartClick } = useShoppingCart();
  return (
    <header className="bg-white shadow-lg sticky top-0 py-6 z-40">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex gap-2 hover:text-current">
          <Bike />
          <h1 className="text-[26px]">
            <span className="text-accent">B</span>iker's Club
          </h1>
        </Link>
        <div className="flex items-center gap-[26px]">
          <Nav containerStyle="flex gap-[36px]" />
          <div
            onClick={() => handleCartClick()}
            className="relative cursor-pointer"
          >
            <CgShoppingBag className="text-[26px]" />
            <div className="absolute -right-1 -bottom-1 w-[18px] h-[18px] bg-accent rounded-full text-white flex justify-center items-center text-sm font-medium">
              {cartCount}
            </div>
          </div>
          <CartSideBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
