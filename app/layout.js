import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


const inter = Inter({subsets:["latin"]}); 

export const metadata = {
  title: "Finance Management",
  description: "AI Integrated Finance Management",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">

      <head>
          <link rel="icon" href="/finlogo.png" sizes="any" />
      </head>
      
      <body className={`${inter.className}`}>
        {/* header */}
        <Header/>
        <main className="min-h-screen">{children}</main>
        <Toaster richColors/>
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>This is footer</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
