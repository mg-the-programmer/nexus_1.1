import React from "react";
import ProjectCard from "../../components/ProjectCard";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

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
export default function ProjectsView() {
  return (
    <div className="bg-gray-100 dark:bg-darkBg">
      <Header title={"Projects"} />
      <div className="mx-auto h-[100vh] max-w-7xl px-8">
        {/* <Filter /> */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <form className="hidden p-3 bg-white rounded-md shadow lg:block">
            <h3 className="pt-1 pb-4 font-medium">Categories</h3>
            <ul
              role="list"
              className="pb-6 space-y-4 text-sm font-medium text-gray-900 border-b border-gray-200"
            >
              {subCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href}>{category.name}</a>
                </li>
              ))}
            </ul>

            {filters.map((section) => (
              <Disclosure
                as="div"
                key={section.id}
                className="py-6 border-b border-gray-200"
              >
                {({ open }) => (
                  <>
                    <h3 className="flow-root -my-3">
                      <Disclosure.Button className="flex items-center justify-between w-full py-3 text-sm text-gray-400 bg-white hover:text-gray-500">
                        <span className="font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="flex items-center ml-6">
                          {open ? (
                            <MinusIcon className="w-5 h-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="w-5 h-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              defaultChecked={option.checked}
                              className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`filter-${section.id}-${optionIdx}`}
                              className="ml-3 text-sm text-gray-600"
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
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}
