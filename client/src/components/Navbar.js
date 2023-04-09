import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  BookmarkIcon,
  ChatBubbleOvalLeftIcon,
  InboxIcon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import MainLogo from "../Assests/mainlogo.png";
import { Link } from "@mui/material";
import axios from "axios";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "/dashboard", current: false },
  { name: "Projects", href: "/projects", current: false },
];

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example(props) {
  const [isdarkmode, setisdarkmode] = useState();

  // useEffect(() => {
  //   axios
  //     .get("/freelancer/64115415247d2e83c2af8532")
  //     .then((res) => {
  //       console.log(res.data.darkMode);
  //       setisdarkmode(res.data.darkMode);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // change the darkmode in the database
  const changeDarkmode = () => {
    setisdarkmode(!isdarkmode);
    props.onDarkModeChange(!isdarkmode);
  };

  useEffect(() => {
    axios
      .put("/freelancer/darkmode/64115415247d2e83c2af8532", {
        darkMode: isdarkmode,
      })
      .then((res) => {
        console.log(res.data.darkMode);
        // alert("success");
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isdarkmode]);

  //use the darkmode from /freelancer/info api

  return (
    <>
      <div className="sticky top-0 z-50 w-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <a href="dashboard">
                        <img
                          className="h-[1.2rem] hover:cursor-pointer"
                          src={MainLogo}
                          alt="Your Company"
                        />
                      </a>
                    </div>
                    <div className="hidden md:block">
                      <div className="flex items-center justify-center ml-10 space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="flex items-center ml-4 gap-x-2 md:ml-6">
                      <button onClick={() => changeDarkmode()}>
                        {isdarkmode ? (
                          <MoonIcon className="w-6 h-6 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
                        ) : (
                          <SunIcon className="w-6 h-6 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
                        )}
                      </button>

                      <button
                        type="button"
                        className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">View notifications</span>

                        <a href="/messages">
                          <ChatBubbleOvalLeftIcon
                            className="w-6 h-6"
                            aria-hidden="true"
                          />
                        </a>
                      </button>
                      <button className="p-1 -m-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none ">
                        <BookmarkIcon className={`h-6 w-6`} />
                      </button>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="w-8 h-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95">
                          <Menu.Items className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}>
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="flex -mr-2 md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block w-6 h-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">View notifications</span>
                      <a href="/messages">
                        <ChatBubbleOvalLeftIcon
                          className="w-6 h-6"
                          aria-hidden="true"
                        />
                      </a>
                    </button>
                  </div>
                  <div className="px-2 mt-3 space-y-1">
                    <Disclosure.Button
                      key="Your Profile"
                      as="a"
                      href="/profile"
                      className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
                      Your Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                      key="Settings"
                      as="a"
                      href="/settings"
                      className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
                      Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                      key="Sign out"
                      as="a"
                      onClick={() => {
                        axios.get("/logout").then((res) => {
                          window.location.href = res.data;
                        });
                      }}
                      className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:bg-gray-700 hover:text-white">
                      Sign out
                    </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
