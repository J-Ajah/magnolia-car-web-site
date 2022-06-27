import { EditableArea } from "@magnolia/react-editor";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@/components/common/Navbar";
import { Layout } from "@/components/layouts/Layout";
import type { AuthorPageProps } from "@/types/page-helper-types";
import { useEffect, useState } from "react";
import PageConstruction from "../common/PageConstruction";

export const Aboutpage: NextPage<AuthorPageProps> = ({
  title,
  //   metadata,
  ...props
}) => {
  const [navArea, setNavArea] = useState();
  const [footer, setFooterArea] = useState();

  useEffect(() => {
    (async () => {
      // Fetches the navigation bar and the footer
      const navBar = await fetch(
        "http://localhost:8080/magnoliaAuthor/.rest/delivery/pages/v1/homepage/navArea"
      );

      const navBarResponse = await navBar.json();
      setNavArea(navBarResponse);

      // fetches the footer for the page
      const footer = await fetch(
        "http://localhost:8080/magnoliaAuthor/.rest/delivery/pages/v1/homepage/footer"
      );
      const footerResponse = await footer.json();
      setFooterArea(footerResponse);
    })();
  }, []);

  return (
    <div className=" mr-auto ml-auto">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
      </Head>

      <Layout>
        <div className="Basic">
          <section className="navigationArea">
            <div>
              {navArea ? <EditableArea key="Area" content={navArea} /> : null}
            </div>
          </section>

          <section className="relative  overflow-hidden">
            <div
              className="aboutBanner-container relative overflow-x-hidden overflow-y-hidden p-8
             md:flex  md:h-[300px]  md:justify-self-center 
             lg:h-[400px] lg:static xl:h-[500px]"
            >
              <div
                className="about-Information relative space-y-3 z-30 
              md:mt-5 md:w-[50%] md:border-[1.5px] md:rounded-xl md:pl-5
              lg:w-[430px] lg:h-[250px] lg:left-[6%] lg:top-5  lg:backdrop-blur-md  lg:border-l-4 lg:border-[tomato]
              lg:border-0 lg:shadow-md  xl:left-[11%] xl:top-10
              "
              >
                <p
                  className="heading-text top-1 relative text-sm  text-[#d6293a] md:text-[16px] md:top-[10px]
                lg:relative lg:top-5 "
                >
                  Curious?
                </p>
                <h3
                  className="font-bold p-0 leading-[18px] text-lg w-[60%] antialiased
                 md:w-[90%] md:text-2xl lg:relative lg:top-5 lg:text-2xl"
                >
                  Get to know about us and relive our Journey
                </h3>
                <p
                  className="text-[13px] w-[60%] md:text-[17px]  md:w-[80%]
                 lg:w-[55%] lg:relative lg:top-5 xl:text-[16px]"
                >
                  Get well acquainted with our team and understand how we work
                  and proceed towards success.
                </p>
              </div>
              <img
                className="absolute top-0 z-10 w-[100%] md:top-[-130px]
                lg:top-[-220px] xl:top-[-330px]"
                src="/img/AboutBg.jpg"
              />
            </div>

            {/* <PageConstruction /> */}
            {props["main"] && (
              <EditableArea key="Area" content={props["main"]} />
            )}
          </section>

          {/* Core value and Goals starts here */}
          <section className="bg-[#f7f7f7] p-8">
            <div className="core-values space-y-4">
              <div className="values">
                <p className="text-[14px] font-semibold text-[black] border-b-2 border-[#d6293a] w-[10%] mx-auto">
                  {" "}
                  OUR{" "}
                </p>
                <div className="text-[18px] font-semibold text-[black]   w-[17%] mx-auto">
                  Values
                </div>

                <div className="values-container border-r-4 border-[#d6293a] mt-5 rounded p-3">
                  <div className="value-item flex space-x-4">
                    <img
                      src="/img/Handshake.svg"
                      className="w-[120px]"
                      alt=""
                    />
                    <div className="text-black">
                      <p className="font-bold text-xl  ">Commitment</p>
                      <p className="font-semibold">
                        Our commitment to our work and our clients is an
                        unbreakable bond.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="values-container border-l-4 border-[#d6293a] mt-5 rounded p-3">
                  <div className="value-item flex space-x-4">
                    <img src="/img/passion.svg" className="w-[120px]" alt="" />
                    <div className="text-black">
                      <p className="font-bold text-xl  ">Passion</p>
                      <p className="font-semibold">
                        Passion motivates us to better and progress effectively.
                        Making stronger the bond that exists between us and our
                        customers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="values-container border-r-4 border-[#d6293a] mt-5 rounded p-3">
                  <div className="value-item flex space-x-4">
                    <img
                      src="/img/Handshake.svg"
                      className="w-[120px]"
                      alt=""
                    />
                    <div className="text-black">
                      <p className="font-bold text-xl  ">Integrity</p>
                      <p className="font-semibold">
                        Honesty is one of our principal, which helps us meet our
                        required expectation.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="values-container border-l-4 border-[#d6293a] mt-5 rounded p-3">
                  <div className="value-item flex space-x-4">
                    <img src="/img/learning.svg" className="w-[120px]" alt="" />
                    <div className="text-black">
                      <p className="font-bold text-xl  ">Learning</p>
                      <p className="font-semibold">
                        We are always striving to improve our services so as to
                        serve our customers more better
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="goals"></div>
            </div>
          </section>
          {/* Core values and Goals ends here */}

          <section className="Footer">
            <div>
              {footer ? (
                <EditableArea key="Area" className="pt-1" content={footer} />
              ) : null}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};
