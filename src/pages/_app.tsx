import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import Axios from "axios";
import { config } from "config";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Axios.defaults.baseURL = config?.restPrefix;
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="max-w-[720px] mx-auto pt-2">
        <Component {...pageProps} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
    </>
  );
}
