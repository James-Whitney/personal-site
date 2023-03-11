import "@/styles/globals.css";

import { Inter } from "@next/font/google";

const customFont = Inter({
  weight: "variable",
  subsets: ["latin"],
});

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={customFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
