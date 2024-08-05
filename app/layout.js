import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";
import Navigation from "./_components/Navigation";
import Logo from "./_components/Logo";
import Header from "./_components/Header";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  default: "The Wild Oasis",
  title: "%s The Wild Oasis",
  description: "We have some cabins in our page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen text-primary-100 bg-primary-950 flex flex-col`}
      >
        <header>
          <Header></Header>
        </header>
        <div className="flex-1 px-8 py-12 grid">
          <main className="w-full max-w-7xl mx-auto ">{children}</main>
        </div>
      </body>
    </html>
  );
}
