import { EditableArea } from "@magnolia/react-editor";
import type { NextPage } from "next";
import Head from "next/head";
import { Navbar } from "@/components/common/Navbar";
import { Layout } from "@/components/layouts/Layout";
import type { AuthorPageProps } from "@/types/page-helper-types";

const Servicespage: NextPage<AuthorPageProps> = ({
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
          <h3>Services page has been Rendered</h3>
          <section>
            {props["navArea"] && (
              <EditableArea key="Area" content={props["navArea"]} />
            )}
          </section>
          {/* <Navbar /> */}
          <section>
            {props["main"] && (
              <EditableArea key="Area" content={props["main"]} />
            )}
          </section>

          <section className="Footer">
            <section>
              {props["footer"] && (
                <EditableArea key="Area" content={props["footer"]} />
              )}
            </section>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default Servicespage;
