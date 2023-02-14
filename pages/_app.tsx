import "@/styles/globals.css";

import { Source_Code_Pro } from "@next/font/google";

const customFont = Source_Code_Pro({
  weight: "400",
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
