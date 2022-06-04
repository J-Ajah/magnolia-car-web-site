import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { EditableArea } from "@magnolia/react-editor";

type Props = {
  readonly image: string;
};

function classNames(...classes) {
  console.log(classes.filter(Boolean).join(" "));
  return classes.filter(Boolean).join(" ");
}
export const Navbar: React.FC<Props> = (props) => {
  const imageLink: string | undefined = props.image?.["@link"] || undefined;
  const hostUrl: string = process.env["NEXT_PUBLIC_MGNL_HOST"];
  const navigation = [
    { name: "Home", href: "#", current: false },
    { name: "About", href: "#", current: true },
    { name: "Contact", href: "#", current: false },
    { name: "Feedback", href: "#", current: false },
  ];
  console.log(props);
  return (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-0">
            <div className="relative flex items-center justify-between h-16">
              <div className=" absolute inset-y-0 left-0 flex items-center md:hidden w-full justify-between">
                {/* Mobile menu button*/}
                {props["logoArea"] && (
                  <EditableArea key="logoArea" content={props["logoArea"]} />
                )}
                {/* <h3 className="font-bold text-xl tracking-wide">Car Dealer</h3> */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-black bg-gray-200 hover:text-white hover:bg-[#d6293a] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                  {props["logoArea"] && (
                    <EditableArea key="logoArea" content={props["logoArea"]} />
                  )}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-4">
                <div className="flex-0 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden md:block sm:ml-2 pr-8">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-[#d6293a]"
                              : "text-black hover:bg-white hover:text-gray",
                            "px-3 py-2 rounded-lg text-base font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-red-500 text-white"
                      : "text-black hover:bg-white hover:text-gray",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
