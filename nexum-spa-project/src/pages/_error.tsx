import type { ErrorProps } from "next/error";
import type { MarkOptional } from "ts-essentials";
import { Layout } from "@/components/layouts/Layout";
import Lottie from "react-lottie-player";
import lottieJson from "@/Lottie/75352-404-error-baloon.json";

export default function MyError(props) {
  // console.log("status code is logged here: ", title);

  return (
    <Layout>
      <div className="text-lg font-bold">
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: '100%', height: 500 }}
        />
        <h3 className="text-center text-1xl text-slate-600 relative bottom-20 md:bottom-0 md:text-2xl"> Sorry, this Page was not found</h3>
      </div>
    </Layout>
  );
}
