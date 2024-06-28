import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Next.js Blog",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="text-red-500">ヘッター</header>
          {children}
        <footer>フッター</footer>
        </body>
    </html>
  );
}
