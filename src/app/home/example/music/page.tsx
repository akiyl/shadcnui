import exp from "constants";
import * as React from "react";
const MusicPage = () => {
  return (
    <>
      <div className="overflow-hidden rounded-[0.5rem] border bg-background shadow">
        <div className="md:hidden">
          <img
            alt="Music"
            loading="lazy"
            width="1280"
            height="1114"
            decoding="async"
            data-nimg="1"
            className="block dark:hidden"
            src="/_next/image?url=%2Fexamples%2Fmusic-light.png&amp;w=3840&amp;q=75"
          />
          <img
            alt="Music"
            loading="lazy"
            width="1280"
            height="1114"
            decoding="async"
            data-nimg="1"
            className="hidden dark:block"
            src="/_next/image?url=%2Fexamples%2Fmusic-dark.png&amp;w=3840&amp;q=75"
          />
        </div>
        <div className="hidden md:block">
          <div
            role="menubar"
            className="flex h-9 items-center space-x-1 border bg-background p-1 shadow-sm rounded-none border-b border-none px-2 lg:px-4"
            //   tabindex="0"
            data-orientation="horizontal"
            //   style="outline: none;"
          >
            <button
              type="button"
              role="menuitem"
              id="radix-:rkb:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-bold"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Music
            </button>
            <button
              type="button"
              role="menuitem"
              id="radix-:rkf:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              File
            </button>
            <button
              type="button"
              role="menuitem"
              id="radix-:rkj:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Edit
            </button>
            <button
              type="button"
              role="menuitem"
              id="radix-:rkn:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              View
            </button>
            <button
              type="button"
              role="menuitem"
              id="radix-:rkr:"
              aria-haspopup="menu"
              aria-expanded="false"
              data-state="closed"
              className="cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground hidden md:block"
              data-orientation="horizontal"
              data-radix-collection-item=""
            >
              Account
            </button>
          </div>
          <div className="border-t">
            <div className="bg-background">
              <div className="grid lg:grid-cols-5">
                <div className="pb-12 hidden lg:block">
                  <div className="space-y-4 py-4">
                    <div className="px-3 py-2">
                      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Discover
                      </h2>
                      <div className="space-y-1">
                        <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2 w-full justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polygon points="10 8 16 12 10 16 10 8"></polygon>
                          </svg>
                          Listen Now
                        </button>
                        <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <rect
                              width="7"
                              height="7"
                              x="3"
                              y="3"
                              rx="1"
                            ></rect>
                            <rect
                              width="7"
                              height="7"
                              x="14"
                              y="3"
                              rx="1"
                            ></rect>
                            <rect
                              width="7"
                              height="7"
                              x="14"
                              y="14"
                              rx="1"
                            ></rect>
                            <rect
                              width="7"
                              height="7"
                              x="3"
                              y="14"
                              rx="1"
                            ></rect>
                          </svg>
                          Browse
                        </button>
                        <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                            <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                            <circle cx="12" cy="12" r="2"></circle>
                            <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                            <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                          </svg>
                          Radio
                        </button>
                      </div>
                    </div>
                    <div className="px-3 py-2">
                      <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Library
                      </h2>
                      <div className="space-y-1">
                        <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <path d="M21 15V6"></path>
                            <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                            <path d="M12 12H3"></path>
                            <path d="M16 6H3"></path>
                            <path d="M12 18H3"></path>
                          </svg>
                          Playlists
                        </button>
                        <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <circle cx="8" cy="18" r="4"></circle>
                            <path d="M12 18V2l7 4"></path>
                          </svg>
                          Songs
                        </button>
                        <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                          </svg>
                          Made for You
                        </button>
                        <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"></path>
                            <circle cx="17" cy="7" r="5"></circle>
                          </svg>
                          Artists
                        </button>
                        <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="mr-2 h-4 w-4"
                          >
                            <path d="m16 6 4 14"></path>
                            <path d="M12 6v14"></path>
                            <path d="M8 8v12"></path>
                            <path d="M4 4v16"></path>
                          </svg>
                          Albums
                        </button>
                      </div>
                    </div>
                    <div className="py-2">
                      <h2 className="relative px-7 text-lg font-semibold tracking-tight">
                        Playlists
                      </h2>
                      <div
                        dir="ltr"
                        className="relative overflow-hidden h-[300px] px-1"
                        //     style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                      >
                        <style>[data-radix-scroll-area-viewport]</style>
                        <div
                          data-radix-scroll-area-viewport=""
                          className="h-full w-full rounded-[inherit]"
                          //  style="overflow: hidden scroll;"
                        >
                          <div
                          //   style="min-width: 100%; display: table;"
                          >
                            <div className="space-y-1 p-2">
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Recently Added
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Recently Played
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Top Songs
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Top Albums
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Top Artists
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Logic Discography
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Bedtime Beats
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Feeling Happy
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                I miss Y2K Pop
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Runtober
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Mellow Days
                              </button>
                              <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-start font-normal">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="mr-2 h-4 w-4"
                                >
                                  <path d="M21 15V6"></path>
                                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                                  <path d="M12 12H3"></path>
                                  <path d="M16 6H3"></path>
                                  <path d="M12 18H3"></path>
                                </svg>
                                Eminem Essentials
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 lg:col-span-4 lg:border-l">
                  <div className="h-full px-4 py-6 lg:px-8">
                    <div
                      dir="ltr"
                      data-orientation="horizontal"
                      className="h-full space-y-6"
                    >
                      <div className="space-between flex items-center">
                        <div
                          role="tablist"
                          aria-orientation="horizontal"
                          className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground"
                          //  tabindex="0"
                          data-orientation="horizontal"
                          //  style="outline: none;"
                        >
                          <button
                            type="button"
                            role="tab"
                            aria-selected="true"
                            aria-controls="radix-:rku:-content-music"
                            data-state="active"
                            id="radix-:rku:-trigger-music"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow relative"
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                          >
                            Music
                          </button>
                          <button
                            type="button"
                            role="tab"
                            aria-selected="false"
                            aria-controls="radix-:rku:-content-podcasts"
                            data-state="inactive"
                            id="radix-:rku:-trigger-podcasts"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                          >
                            Podcasts
                          </button>
                          <button
                            type="button"
                            role="tab"
                            aria-selected="false"
                            aria-controls="radix-:rku:-content-live"
                            data-state="inactive"
                            data-disabled=""
                            id="radix-:rku:-trigger-live"
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                            data-orientation="horizontal"
                            data-radix-collection-item=""
                          >
                            Live
                          </button>
                        </div>
                        <div className="ml-auto mr-4">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-2 h-4 w-4"
                            >
                              <path
                                d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                            Add music
                          </button>
                        </div>
                      </div>
                      <div
                        data-state="active"
                        data-orientation="horizontal"
                        role="tabpanel"
                        aria-labelledby="radix-:rku:-trigger-music"
                        id="radix-:rku:-content-music"
                        //     tabindex="0"
                        className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-none p-0 outline-none"
                        //     style="animation-duration: 0s;"
                      >
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                              Listen Now
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              Top picks for you. Updated daily.
                            </p>
                          </div>
                        </div>
                        <div
                          data-orientation="horizontal"
                          role="none"
                          className="shrink-0 bg-border h-[1px] w-full my-4"
                        ></div>
                        <div className="relative">
                          <div dir="ltr" className="relative overflow-hidden">
                            <div
                              data-radix-scroll-area-viewport=""
                              className="h-full w-full rounded-[inherit]"
                            >
                              <div>
                                <div className="flex space-x-4 pb-4">
                                  <div className="space-y-3 w-[250px]">
                                    <span data-state="closed">
                                      <div className="overflow-hidden rounded-md">
                                        <img
                                          alt="React Rendezvous"
                                          loading="lazy"
                                          width="250"
                                          height="330"
                                          decoding="async"
                                          data-nimg="1"
                                          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                          src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1611348586804-61bf6c080437%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                        />
                                      </div>
                                    </span>
                                    <div className="space-y-1 text-sm">
                                      <h3 className="font-medium leading-none">
                                        React Rendezvous
                                      </h3>
                                      <p className="text-xs text-muted-foreground">
                                        Ethan Byte
                                      </p>
                                    </div>
                                  </div>
                                  <div className="space-y-3 w-[250px]">
                                    <span data-state="closed">
                                      <div className="overflow-hidden rounded-md">
                                        <img
                                          alt="Async Awakenings"
                                          loading="lazy"
                                          width="250"
                                          height="330"
                                          decoding="async"
                                          data-nimg="1"
                                          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                          src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                        />
                                      </div>
                                    </span>
                                    <div className="space-y-1 text-sm">
                                      <h3 className="font-medium leading-none">
                                        Async Awakenings
                                      </h3>
                                      <p className="text-xs text-muted-foreground">
                                        Nina Netcode
                                      </p>
                                    </div>
                                  </div>
                                  <div className="space-y-3 w-[250px]">
                                    <span data-state="closed">
                                      <div className="overflow-hidden rounded-md">
                                        <img
                                          alt="The Art of Reusability"
                                          loading="lazy"
                                          width="250"
                                          height="330"
                                          decoding="async"
                                          data-nimg="1"
                                          className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                          src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1528143358888-6d3c7f67bd5d%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=640&amp;q=75"
                                        />
                                      </div>
                                    </span>
                                    <div className="space-y-1 text-sm" />
                                    <h3 className="font-medium leading-none">
                                      The Art of Reusability
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      Lena Logic
                                    </p>
                                  </div>
                                </div>
                                <div className="space-y-3 w-[250px]">
                                  <span data-state="closed">
                                    <div className="overflow-hidden rounded-md">
                                      <img
                                        alt="Stateful Symphony"
                                        loading="lazy"
                                        width="250"
                                        height="330"
                                        decoding="async"
                                        data-nimg="1"
                                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-[3/4]"
                                      />
                                    </div>
                                  </span>
                                  <div className="space-y-1 text-sm">
                                    <h3 className="font-medium leading-none">
                                      Stateful Symphony
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      Beth Binary
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 space-y-1">
                        <h2 className="text-2xl font-semibold tracking-tight">
                          Made for You
                        </h2>
                        <p className="text-sm text-muted-foreground">
                          Your personal playlists. Updated daily.
                        </p>
                      </div>
                      <div
                        data-orientation="horizontal"
                        role="none"
                        className="shrink-0 bg-border h-[1px] w-full my-4"
                      ></div>
                      <div className="relative">
                        <div
                          dir="ltr"
                          className="relative overflow-hidden"
                          //  style="position: relative; --radix-scroll-area-corner-width: 0px; --radix-scroll-area-corner-height: 0px;"
                        >
                          <div
                            data-radix-scroll-area-viewport=""
                            className="h-full w-full rounded-[inherit]"
                            //    style="overflow: scroll;"
                          >
                            <div
                            //     style="min-width: 100%; display: table;"
                            >
                              <div className="flex space-x-4 pb-4">
                                <div className="space-y-3 w-[150px]">
                                  <span data-state="closed">
                                    <div className="overflow-hidden rounded-md">
                                      <img
                                        alt="Thinking Components"
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        data-nimg="1"
                                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                        src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1615247001958-f4bc92fa6a4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      />
                                    </div>
                                  </span>
                                  <div className="space-y-1 text-sm">
                                    <h3 className="font-medium leading-none">
                                      Thinking Components
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      Lena Logic
                                    </p>
                                  </div>
                                </div>
                                <div className="space-y-3 w-[150px]">
                                  <span data-state="closed">
                                    <div className="overflow-hidden rounded-md">
                                      <img
                                        alt="Functional Fury"
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        data-nimg="1"
                                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                        src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1513745405825-efaf9a49315f%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      />
                                    </div>
                                  </span>
                                  <div className="space-y-1 text-sm">
                                    <h3 className="font-medium leading-none">
                                      Functional Fury
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      Beth Binary
                                    </p>
                                  </div>
                                </div>
                                <div className="space-y-3 w-[150px]">
                                  <span data-state="closed">
                                    <div className="overflow-hidden rounded-md">
                                      <img
                                        alt="React Rendezvous"
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        data-nimg="1"
                                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                        src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1614113489855-66422ad300a4%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      />
                                    </div>
                                  </span>
                                  <div className="space-y-1 text-sm">
                                    <h3 className="font-medium leading-none">
                                      React Rendezvous
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      Ethan Byte
                                    </p>
                                  </div>
                                </div>
                                <div className="space-y-3 w-[150px]">
                                  <span data-state="closed">
                                    <div className="overflow-hidden rounded-md">
                                      <img
                                        alt="Stateful Symphony"
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        data-nimg="1"
                                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                        src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1446185250204-f94591f7d702%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      />
                                    </div>
                                  </span>
                                  <div className="space-y-1 text-sm">
                                    <h3 className="font-medium leading-none">
                                      Stateful Symphony
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      Beth Binary
                                    </p>
                                  </div>
                                </div>
                                <div className="space-y-3 w-[150px]">
                                  <span data-state="closed">
                                    <div className="overflow-hidden rounded-md">
                                      <img
                                        alt="Async Awakenings"
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        data-nimg="1"
                                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                        src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1468817814611-b7edf94b5d60%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      />
                                    </div>
                                  </span>
                                  <div className="space-y-1 text-sm">
                                    <h3 className="font-medium leading-none">
                                      Async Awakenings
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      Nina Netcode
                                    </p>
                                  </div>
                                </div>
                                <div className="space-y-3 w-[150px]">
                                  <span data-state="closed">
                                    <div className="overflow-hidden rounded-md">
                                      <img
                                        alt="The Art of Reusability"
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        data-nimg="1"
                                        className="h-auto w-auto object-cover transition-all hover:scale-105 aspect-square"
                                        src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1490300472339-79e4adc6be4a%3Fw%3D300%26dpr%3D2%26q%3D80&amp;w=384&amp;q=75"
                                      />
                                    </div>
                                  </span>
                                  <div className="space-y-1 text-sm">
                                    <h3 className="font-medium leading-none">
                                      The Art of Reusability
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                      Lena Logic
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      data-state="inactive"
                      data-orientation="horizontal"
                      role="tabpanel"
                      aria-labelledby="radix-:rku:-trigger-podcasts"
                      id="radix-:rku:-content-podcasts"
                      className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-full flex-col border-none p-0 data-[state=active]:flex"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MusicPage;
