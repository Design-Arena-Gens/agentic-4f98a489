import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lumina Learning | Unlock Your Potential",
  description: "Lumina Learning helps students craft personalized learning journeys with live mentors, AI insights, and measurable outcomes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
