"use client";
import { Spin as Hamburger } from "hamburger-react";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeToggle } from "../themeToggle/ThemeToggle";

export const AuthLinks = () => {
  const [isOpen, setOpen] = useState(false);

  //temporario
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className="hidden md:flex">
          Login
        </Link>
      ) : (
        <>
          <Link href="/write">Escrever</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
      <div className="visible md:invisible">
        <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
      </div>
      {isOpen && (
        <div className="absolute flex flex-col gap-12 h-[calc(100vh-12rem)] w-full text-3xl top-24 left-0 items-center justify-center font-bold bg-white dark:bg-slate-950">
          <Link href="/">Início</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Sobre</Link>

          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Escrever</Link>
              <span className="cursor-pointer">Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};
