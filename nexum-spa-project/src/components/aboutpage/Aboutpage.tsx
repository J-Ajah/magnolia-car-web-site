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

          <section>


            <PageConstruction />
            {props["main"] && (
              <EditableArea key="Area" content={props["main"]} />
            )}
          </section>

          <section className="Footer">
            <div>
              {footer ? <EditableArea key="Area" content={footer} /> : null}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};
