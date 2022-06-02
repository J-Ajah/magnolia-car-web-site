import { EditablePage } from "@magnolia/react-editor";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Error from "next/error";

import { PageLoading } from "@/components/loader/PageLoader";
import { config } from "@/page-config"; // config for component mappings
import type { AuthorProps } from "@/types/page-helper-types"; // page helper types (ref magnolia headless demo)
import { ParsedNextUrl } from "next/dist/shared/lib/router/utils/parse-next-url";

const authorInstance: string | undefined =
  process.env["NEXT_PUBLIC_MAGNOLIA_INSTANCE"]; // magnolia instance baseURL
const pagesApi = `${authorInstance}/.rest/delivery/pages/v1`;
const templateAnnotationsApi = `${authorInstance}/.rest/template-annotations/v1`;

export const getStaticPaths: GetStaticPaths<{}> = () => ({
  paths: [],
  fallback: true,
});

// get page content, template annotations from magnolia author instance (rest endpoint)
const getAuthorPageData = async (path: string) => {
  let newPath = path;
  if (path === "/") {
    newPath = path + "homepage";
  } else {
    newPath = `/${path}`;
  }

  // Fetches the page
  const pageContentResponse = await fetch(`${pagesApi}${newPath}`);
  const pageContent = await pageContentResponse.json();

  // Fetches the template annotation
  const templateAnnotationsResponse = await fetch(
    `${templateAnnotationsApi}${newPath}`
  );
  const templateAnnotations = await templateAnnotationsResponse.json();

  return { pageContent, templateAnnotations };
};

export const getStaticProps: GetStaticProps<AuthorProps> = async ({
  params,
}) => {
  let newParams: any;
  let path: string | string[] = params.pathname;

  if (Object.keys(params).length === 0) {
    newParams = "/";
  } else {
    newParams = path[0];
  }

  const { pageContent, templateAnnotations } = await getAuthorPageData(
    newParams
  );
  console.log("page content: ", pageContent);
  console.log("page annotation: ", templateAnnotations);

  if (
    pageContent.error?.code === "pathNotFound" ||
    templateAnnotations.error?.code === "pathNotFound"
  )
    return {
      notFound: true,
      revalidate: 1,
    };

  return {
    props: {
      pageContent,
      templateAnnotations,
    },
    revalidate: 1,
  };
};

const PageFactory: NextPage<AuthorProps> = ({
  pageContent,
  templateAnnotations,
}) => {
  const router = useRouter();

  if (router.isFallback || !pageContent || !templateAnnotations)
    return <PageLoading />;
  return (
    <EditablePage
      config={config}
      content={pageContent}
      templateAnnotations={templateAnnotations}
    />
  );
};

export default PageFactory;
