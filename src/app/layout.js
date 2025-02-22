import Footer from "@/components/shared/footer/Footer";
import Header from "@/components/shared/header/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <main>
          <Header/>
          <div>{ children }</div>
          <Footer/>
        </main>
      </body>
    </html>
  );
}
