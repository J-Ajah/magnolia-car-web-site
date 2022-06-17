import { EditableArea } from "@magnolia/react-editor";
import "animate.css";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "@/components/layouts/Layout";
import type { AuthorPageProps } from "@/types/page-helper-types";
import FooterCopyright from "../common/FooterCopyright";
// import { getRightArea } from "@/components/common/Footer";
import { useEffect, useState } from "react";

// Dynamic import of the scroll component
const Scroll = dynamic(
  () => {
    return import("../common/Scroll");
  },
  { ssr: false }
);


export const Homepage: NextPage<AuthorPageProps> = ({
  title,
  metadata,
  ...props
}) => {
  // const [rightArea, setRightArea] = useState(getRightArea());
  // useEffect(() => {
  //   let area = getRightArea();
  //   setRightArea(area);
  // }, []);

  console.log(props);
  const areaTypes: Object = props;

  return (
    <div className="page-container relative mr-auto ml-auto">
      <Scroll />
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>

      <Layout>
        <div className="Basic">
          {/* <Navbar /> */}
          <section>
            {props["navArea"] && (
              <EditableArea key="Area" content={props["navArea"]} />
            )}
          </section>
          <section>
            {props["main"] && (
              <EditableArea key="Area" content={props["main"]} />
            )}
          </section>

          <section className="Footer mt-20 relative lg:pt-[30px] ">
            {props["footer"] && (
              <EditableArea
                className="pt-1"
                key="Area"
                content={props["footer"]}
              />
            )}
            {/* Copyright Area  */}
            {props["rightArea"] && (
              <FooterCopyright key="rightArea" content={areaTypes} />
            )}
          </section>
        </div>

        <img
          className="to-top hide animate-pulse fixed top-[73%] right-2 md:right-4 md:top-[89%] lg:top-[75%] shadow-lg lg:right-5 z-50 cursor-pointer 
                    hover:scale-150 hover:tansition hover:duration-500
                    lg:w-[35px]
                    "
          src="/img/scrollToTop.svg"
          alt="scroll to top"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        />
      </Layout>
    </div>
  );
};
