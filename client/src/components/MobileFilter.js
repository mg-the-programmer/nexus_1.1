import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function MobileFilter(mobileFiltersOpen, setMobileFiltersOpen) {
  const subCategories = [
    { name: "Full-Stack Developer", href: "#" },
    { name: "Android Developer", href: "#" },
    { name: "Blockchain Developer", href: "#" },
    { name: "Web3 Developer", href: "#" },
    { name: "JavaScript Development", href: "#" },
  ];
  const filters = [
    {
      id: "amount",
      name: "Amount",
      options: [
        {
          value: "Any Amount Earned",
          label: "Any Amount Earned",
          checked: false,
        },
        { value: "₹10k+ Earned", label: "₹10k Earned", checked: false },
        { value: "₹50k+ Earned", label: "₹50k+ Earned", checked: true },
        { value: "₹100k+ Earned", label: "₹100k+ Earned", checked: false },
      ],
    },
    {
      id: "category",
      name: "Category",
      options: [
        {
          value: "Full-Stack Developer",
          label: "Full-Stack Developer",
          checked: false,
        },
        {
          value: "Android Developer",
          label: "Android Developer",
          checked: false,
        },
        {
          value: "Blockchain Developer",
          label: "Blockchain Developer",
          checked: true,
        },
        { value: "Web3 Developer", label: "Web3 Developer", checked: false },
        {
          value: "JavaScript Development",
          label: "JavaScript Development",
          checked: false,
        },
      ],
    },
    {
      id: "employement",
      name: "Employement",
      options: [
        { value: "full-time", label: "Full Time", checked: false },
        { value: "Senior Level", label: "Senior Level", checked: false },
        { value: "Remote", label: "Remote", checked: false },
        { value: "Contract", label: "Contract", checked: false },
      ],
    },
  ];
  return (
    <div>
      <Transition.Root show={mobileFiltersOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full h-full max-w-xs py-4 pb-12 mt-16 ml-auto overflow-y-auto bg-white shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="flex items-center justify-center w-10 h-10 p-2 -mr-2 text-gray-400 bg-white rounded-md"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Filters */}
                <form className="mt-4 border-t border-gray-200 ">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="block px-2 py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="px-4 py-6 border-t border-gray-200"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="flow-root -mx-2 -my-3">
                            <Disclosure.Button className="flex items-center justify-between w-full px-2 py-3 text-gray-400 bg-white hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="flex items-center ml-6">
                                {open ? (
                                  <MinusIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="w-5 h-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                    className="flex-1 min-w-0 ml-3 text-gray-500"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
