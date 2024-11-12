import localFont from "next/font/local";
import "./globals.css";
import Layout from "../layouts/Layout";

const iranianSans = localFont({
  src: "./fonts/IranianSans.ttf",
});

export const metadata = {
  title: "خوابگاه آرامش",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={iranianSans.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
