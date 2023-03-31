import "../styles/globals.css";
import type { AppProps } from "next/app";
import MainScrollProvider from "../src/utils/mainScroll";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MainScrollProvider>
      <Component {...pageProps} />
    </MainScrollProvider>
  );
}
