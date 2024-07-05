import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "내가 만든 포켓몬 도감",
  description: "My First Next.js App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#131313]`}>
        <p className="bg-[#ec0000] w-full h-8 flex justify-center items-center font-bold">
          POKEMONSTER
        </p>
        <div className="bg-[#f7f7f7] w-full h-8"></div>
        {children}
      </body>
    </html>
  );
}
