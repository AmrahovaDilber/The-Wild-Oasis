import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "The Wild Oasis",
  description: "We have some cabins in our page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Logo></Logo>
          <Navigation></Navigation>
        </header>
        <main>{children}</main>
        <footer>Copyright by the wild oasis</footer>
      </body>
    </html>
  );
}
