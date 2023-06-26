import Header from "@/components/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Web development blog | Simple",
  description: "Content for web developers",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className + " leading-none"}>
        <Header />
        {children}
      </body>
    </html>
  );
}
