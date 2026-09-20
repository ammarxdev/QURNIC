import "./globals.css";
import React from "react";

export const metadata = {
  title: "IEDO Academy",
  description: "Learn Quran online with IEDO Academy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
