import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { EditableArea } from "@magnolia/react-editor";
import { setCurrentPage } from "@/utilities/PageUtilities";

type Props = {
  readonly image?: string;
  readonly navLinksArea?: Object;
};

function classNames(...classes: string[]) {
  // console.log(classes.filter(Boolean).join(" "));
  return classes.filter(Boolean).join(" ");
}

export const Navbar: React.FC<Props> = (props) => {
  const route = useRouter();
  let path = route.asPath;
  let activePage = setCurrentPage(path);
  console.log(props)
  

  const navLinks: Array<Object> = Array(props.navLinksArea);
  const links = [];

  // IIFE Gets the navLinks for mobile display
  (() => {
    const navLinkValues = Object.entries(navLinks["0"]).map(
      ([_key, value], _index) => {
        return value.navPagesLink;
      }
    );
  

    navLinkValues.forEach((value) => {
      if (typeof value === "string") {
        links.push(value);
      }
    });
  })();
  // IIFE Ends here

  console.log(Object.keys(props?.["logoArea"]).length > 0)

  return (
    <Disclosure as="nav" className="bg-gray-100 border-2 border-gray-200">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0 border-2 border-gray-200">
            <div className="relative flex items-center justify-between py-2">
              <div className="inset-y-0 left-0 flex items-center md:hidden w-full justify-between">
                {/* Mobile menu button*/}
                {Object.keys(props?.["logoArea"]).length > 0 && (
                  <EditableArea key="logoArea" content={props?.["logoArea"]} />
                )}
                {/* <h3 className="font-bold text-xl tracking-wide">Car Dealer</h3> */}
                <Disclosure.Button className="inline-flex h-10 items-center justify-center p-2 rounded-md text-black bg-gray-200 hover:text-white hover:bg-[#d6293a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-0 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center hidden md:block">
                  {Object.keys(props?.["logoArea"]).length > 0 && (
                    <EditableArea
                      key="logoArea"
                      content={props?.["logoArea"]}
                    />
                  )}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-4">
                <div className="flex-0 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden md:block sm:ml-2 pr-8">
                    <div className="nav-links flex space-x-4 flex-wrap">
                      {Object.keys(props?.["navLinksArea"]).length > 0 && (
                        <EditableArea
                          key="navLinksArea"
                          content={props?.["navLinksArea"]}
                        />
                      )}
                      <div />
                    </div>
                  </div>
                </div>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-6 pt-2 pb-3 space-y-1">
              {links.map((item, key) => (
                <Disclosure.Button
                  key={key}
                  as="a"
                  href={item}
                  className={`block px-3 py-2 rounded-md text-base font-medium 
                   ${
                     activePage === item.toLowerCase()
                       ? "text-[#d6293a]"
                       : "text-black hover:bg-white hover:text-gray"
                   }`}
                >
                  {item}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
