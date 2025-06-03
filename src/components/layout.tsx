import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col text-white animated-bg">
      <Navbar />
      <main className="flex-1 px-4 sm:px-6 md:px-8 backdrop-blur-md bg-white/10">
        {children}
      </main>
    </div>
  );
}

