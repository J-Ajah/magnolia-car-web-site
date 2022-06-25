import Link from "next/link";
import { useRouter } from "next/router";
import { setCurrentPage } from "@/utilities/PageUtilities";

type Props = {
  readonly navPagesLink: string;
  readonly linkedPage: string;
};

const NavLinks: React.FC<Props> = (props) => {
  const route = useRouter();

  let path = route.asPath;
  let pagePath =
    props.navPagesLink.split("")[0].toLowerCase() +
    props.navPagesLink.slice(1, props.navPagesLink.length);

  function classNames(currentPath: string) {
    let current =
      currentPath === pagePath || pagePath.includes(currentPath)
        ? "bg-gray-100 text-[#d6293a]"
        : "text-black hover:bg-white hover:text-gray";

    return current + " px-3 py-2 rounded-lg text-base font-medium";
  }

  return (
    <Link href={props?.linkedPage}>
      <a className={classNames(setCurrentPage(path))}>{props.navPagesLink}</a>
    </Link>
  );
};

export default NavLinks;
