import React, { useState } from "react";

export default function FreelanceProfile() {
    
  return (
    <main className="profile-page">
      <section className="relative block h-[400px]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
          }}>
          <span
            id="blackOverlay"
            className="absolute w-full h-full bg-black opacity-50"
          />
        </div>
        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 top-auto h-[70px] w-full overflow-hidden"
          style={{ transform: "translateZ(0px)" }}>
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}>
            <polygon
              className="fill-current text-blueGray-200"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
      </section>
      <section className="relative py-16 bg-blueGray-200">
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-col w-full min-w-0 mb-6 -mt-64 break-words bg-white rounded-lg shadow-xl">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex justify-center w-full px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <img
                      alt="..."
                      src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
                      className="absolute -m-16 -ml-20 h-auto max-w-[150px] rounded-full border-none align-middle shadow-xl lg:-ml-16"
                    />
                  </div>
                </div>
                <div className="w-full px-4 lg:order-3 lg:w-4/12 lg:self-center lg:text-right">
                  <div className="px-3 py-6 sm:mt-0">
                    <button
                      className="px-4 py-2 mb-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-pink-500 rounded shadow outline-none focus:outline-none hover:shadow-md active:bg-pink-600 sm:mr-2"
                      type="button">
                      Connect
                    </button>
                  </div>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="p-3 mr-4 text-center">
                      <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                        22
                      </span>
                      <span className="text-sm text-blueGray-400">Friends</span>
                    </div>
                    <div className="p-3 mr-4 text-center">
                      <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">Photos</span>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <span className="block text-xl font-bold tracking-wide uppercase text-blueGray-600">
                        89
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Comments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-12 text-center">
                <h3 className="mb-2 text-4xl font-semibold leading-normal text-blueGray-700">
                  Jenna Stones
                </h3>
                <div className="mt-0 mb-2 text-sm font-bold leading-normal uppercase text-blueGray-400">
                  <i className="mr-2 text-lg fas fa-map-marker-alt text-blueGray-400" />
                  Los Angeles, California
                </div>
                <div className="mt-10 mb-2 text-blueGray-600">
                  <i className="mr-2 text-lg fas fa-briefcase text-blueGray-400" />
                  Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="mr-2 text-lg fas fa-university text-blueGray-400" />
                  University of Computer Science
                </div>
              </div>
              <div className="py-10 mt-10 text-center border-t border-blueGray-200">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4 lg:w-9/12">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a href="#pablo" className="font-normal text-pink-500">
                      Show more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative pt-8 pb-6 mt-8 bg-blueGray-200">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-center md:justify-between">
              <div className="w-full px-4 mx-auto text-center md:w-6/12">
                <div className="py-1 text-sm font-semibold text-blueGray-500">
                  Made with{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank">
                    Notus JS
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank">
                    {" "}
                    Creative Tim
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}
