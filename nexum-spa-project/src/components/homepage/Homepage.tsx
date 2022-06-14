import { EditableArea } from "@magnolia/react-editor";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@/components/common/Navbar";
import car1 from "@/assets/car1.jpg";
import { Layout } from "@/components/layouts/Layout";
import type { AuthorPageProps } from "@/types/page-helper-types";
import FooterCopyright from "../common/FooterCopyright";


// Dynamic import of component
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
  console.log("props", props);


  return (
    <div className="page-container relative mr-auto ml-auto">
      <Scroll/>
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
            <FooterCopyright />
          </section>
        </div>

        <img
          className="absolute top-[93%] right-10 z-50 cursor-pointer 
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
