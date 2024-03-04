import Link from "next/link";
import React from "react";

export const AuthLinks = () => {
  //temporario
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Escrever</Link>
          <span className="cursor-pointer">Logout</span>
        </>
      )}
    </>
  );
};
