import { EditableArea } from "@magnolia/react-editor";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@/components/common/Navbar";
import car1 from "@/assets/car1.jpg";

import { Layout } from "@/components/layouts/Layout";
import type { AuthorPageProps } from "@/types/page-helper-types";
import { Carousel } from "./Carousel";
import { LatestCar } from "./LatestCar";
import { LinkDetails } from "../common/LinkDetails";
import { FooterPosts } from "../common/FooterPosts";
import { FooterSubscribe } from "../common/FooterSubscribe";

export const Homepage: NextPage<AuthorPageProps> = ({
  title,
  metadata,
  ...props
}) => {
  console.log("props", props);
  return (
    <div className=" mr-auto ml-auto">
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

          <section className="Footer mt-20 relative  bg-[rgba(0,0,0,0.9)] ">
            {props["footer"] && (
              <EditableArea className="pt-1" key="Area" content={props["footer"]} />
            )}
            <img
              className="absolute w-full  object-cover lg:h-[366px] top-0  opacity-5"
              src={car1.src}
            />
          </section>
        </div>
      </Layout>
    </div>
  );
};
