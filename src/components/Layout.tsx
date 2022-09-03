import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Layout = (props: Props) => {
  return (
    <div>
      <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
        <Header />
        <main className="mx-4 sm:mx-20">{props.children}</main>
        <Footer />
      </div>
    </div>
  );
};
