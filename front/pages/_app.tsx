import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Layout from "../components/Layout";

const geistSans = localFont({
  src: "./Geist.ttf",
  variable: "--font-geist-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={`${geistSans.className} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}
