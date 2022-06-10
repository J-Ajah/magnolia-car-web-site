import { EditableArea } from "@magnolia/react-editor";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@/components/common/Navbar";
import car1 from "@/assets/car1.jpg";

import { Layout } from "@/components/layouts/Layout";
import type { AuthorPageProps } from "@/types/page-helper-types";
import { Carousel } from "./Carousel";
import { LatestCar } from "./LatestCar";

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

          <section className="Footer mt-20 relative h-[600px] bg-[rgba(0,0,0)]">
            {props["footer"] && (
              <EditableArea
                className="footerArea flex flex-wrap"
                key="Area"
                content={props["footer"]}
              />
            )}
            <img
              className="absolute w-full object-cover opacity-10 h-[400px]"
              src={car1.src}
            />
          </section>
        </div>
      </Layout>
    </div>
  );
};
