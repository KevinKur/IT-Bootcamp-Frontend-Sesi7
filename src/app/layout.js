import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Product Showcase",
  description: "Fake Store API Product Showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
