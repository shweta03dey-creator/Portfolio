import "./globals.css";
import { Chakra_Petch, Source_Sans_3 } from "next/font/google";

const display = Chakra_Petch({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--f-display" });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--f-body" });

export const metadata = {
  title: "Shweta Dey | Electronics & Communication Engineer",
  description: "VLSI, embedded systems, IoT and deep learning projects by Shweta Dey.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
