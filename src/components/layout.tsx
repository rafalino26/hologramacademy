import { ReactNode } from "react";
import Navbar from "./navbar";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-[linear-gradient(to_right,_#00f1ff,_#004dff,_#00f1ff)]">{children}</main>
      <footer className="bg-[linear-gradient(to_right,_#00f1ff,_#004dff,_#00f1ff)] text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} HologramAcademy. All rights reserved.
      </footer>
    </div>
  );
}
