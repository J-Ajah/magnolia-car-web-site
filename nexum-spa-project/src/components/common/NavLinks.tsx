import Link from "next/link";
import { useRouter } from "next/router";
import  {setCurrentPage} from "@/utilities/PageUtilities"

type Props = {
  readonly navPagesLink: string;
};

const NavLinks: React.FC<Props> = ({ navPagesLink }) => {
  const route = useRouter();


  let path = route.asPath;
  let pagePath =
    navPagesLink.split("")[0].toLowerCase() +
    navPagesLink.slice(1, navPagesLink.length);

  function classNames(path: string) {
    let current =
      path === pagePath
        ? "bg-gray-100 text-[#d6293a]"
        : "text-black hover:bg-white hover:text-gray";

    return current + " px-3 py-2 rounded-lg text-base font-medium";
  }

  console.log(setCurrentPage(path))


  return (
    <Link href="homepage/about">
      <a className={classNames(setCurrentPage(path))}>{navPagesLink}</a>
    </Link>
  );
};


export default NavLinks;
