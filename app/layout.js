import Footer from "@/components/footer";
import Navbar from "../components/navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import LoadingScreen from "@/components/loadingScreen";
import WhatsappButton from "@/components/whatsappButton";
import AccessibilityMenu from "@/components/accessibilityMenu";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tomer Cashiyado - Photography",
  description: "Tomer Cashiyado - צלם, עורך ויוצר תוכן ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <LoadingScreen />
        <Navbar />
        {children}
        <AccessibilityMenu />
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
