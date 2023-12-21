import * as React from "react";

const PlayGround = () => {
  return (
    <>
      <div>
        <div>
          <h1>Playground </h1>
          <div>
            <button></button>
            <button>Save</button>
            <button> View Code </button>
            <button>share</button>
            <button>...</button>
          </div>
        </div>
        <div>
          <div className="container h-full py-6">
            <div className="grid h-full items-stretch gap-6 md:grid-cols-[1fr_200px]">
              <div className="hidden flex-col space-y-4 sm:flex md:order-2">
                <div className="grid gap-2">
                  <span
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    data-state="closed"
                  >
                    Mode
                  </span>
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground grid grid-cols-3"
                    // tabindex="0"
                    data-orientation="horizontal"
                    // style="outline: none;"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:ri3:-content-complete"
                      data-state="active"
                      id="radix-:ri3:-trigger-complete"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      <span className="sr-only">Complete</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <rect
                          x="4"
                          y="3"
                          width="12"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="4"
                          y="7"
                          width="12"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="4"
                          y="11"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="4"
                          y="15"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="8.5"
                          y="11"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="8.5"
                          y="15"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="13"
                          y="11"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                      </svg>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:ri3:-content-insert"
                      data-state="inactive"
                      id="radix-:ri3:-trigger-insert"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      <span className="sr-only">Insert</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M14.491 7.769a.888.888 0 0 1 .287.648.888.888 0 0 1-.287.648l-3.916 3.667a1.013 1.013 0 0 1-.692.268c-.26 0-.509-.097-.692-.268L5.275 9.065A.886.886 0 0 1 5 8.42a.889.889 0 0 1 .287-.64c.181-.17.427-.267.683-.269.257-.002.504.09.69.258L8.903 9.87V3.917c0-.243.103-.477.287-.649.183-.171.432-.268.692-.268.26 0 .509.097.692.268a.888.888 0 0 1 .287.649V9.87l2.245-2.102c.183-.172.432-.269.692-.269.26 0 .508.097.692.269Z"
                          fill="currentColor"
                        ></path>
                        <rect
                          x="4"
                          y="15"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="8.5"
                          y="15"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="13"
                          y="15"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                      </svg>
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:ri3:-content-edit"
                      data-state="inactive"
                      id="radix-:ri3:-trigger-edit"
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      <span className="sr-only">Edit</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <rect
                          x="4"
                          y="3"
                          width="12"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="4"
                          y="7"
                          width="12"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="4"
                          y="11"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="4"
                          y="15"
                          width="4"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <rect
                          x="8.5"
                          y="11"
                          width="3"
                          height="2"
                          rx="1"
                          fill="currentColor"
                        ></rect>
                        <path
                          d="M17.154 11.346a1.182 1.182 0 0 0-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 0 0 0-1.671Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    data-state="closed"
                  >
                    Model
                  </label>
                  <button
                    className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full justify-between"
                    role="combobox"
                    aria-expanded="false"
                    aria-label="Select a model"
                    type="button"
                    aria-haspopup="dialog"
                    aria-controls="radix-:ri7:"
                    data-state="closed"
                  >
                    text-davinci-003
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4 shrink-0 opacity-50"
                    >
                      <path
                        d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="grid gap-2 pt-2">
                  <div className="grid gap-4" data-state="closed">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Temperature
                      </label>
                      <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                        0.56
                      </span>
                    </div>
                    <span
                      dir="ltr"
                      data-orientation="horizontal"
                      aria-disabled="false"
                      className="relative flex w-full touch-none select-none items-center [&amp;_[role=slider]]:h-4 [&amp;_[role=slider]]:w-4"
                      id="temperature"
                      aria-label="Temperature"
                      // style="--radix-slider-thumb-transform: translateX(-50%);"
                    >
                      <span
                        data-orientation="horizontal"
                        className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"
                      >
                        <span
                          data-orientation="horizontal"
                          className="absolute h-full bg-primary"
                          // style="left: 0%; right: 44%;"
                        ></span>
                      </span>
                      <span
                      // style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(56% - 0.96px);"
                      >
                        <span
                          // role="slider"
                          // aria-valuemin="0"
                          // aria-valuemax="1"
                          aria-orientation="horizontal"
                          data-orientation="horizontal"
                          // tabindex="0"
                          className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          data-radix-collection-item=""
                          // aria-valuenow="0.56"
                          // style=""
                        ></span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="grid gap-2 pt-2">
                  <div className="grid gap-4" data-state="closed">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Maximum Length
                      </label>
                      <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                        256
                      </span>
                    </div>
                    <span
                      dir="ltr"
                      data-orientation="horizontal"
                      aria-disabled="false"
                      className="relative flex w-full touch-none select-none items-center [&amp;_[role=slider]]:h-4 [&amp;_[role=slider]]:w-4"
                      id="maxlength"
                      aria-label="Maximum Length"
                      // style="--radix-slider-thumb-transform: translateX(-50%);"
                    >
                      <span
                        data-orientation="horizontal"
                        className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"
                      >
                        <span
                          data-orientation="horizontal"
                          className="absolute h-full bg-primary"
                          // style="left: 0%; right: 93.6%;"
                        ></span>
                      </span>
                      <span
                      // style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(6.4% + 6.976px);"
                      >
                        <span
                          //  role="slider"
                          //  aria-valuemin="0"
                          //  aria-valuemax="4000"
                          //  aria-orientation="horizontal"
                          //  data-orientation="horizontal"
                          className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          data-radix-collection-item=""
                          //  aria-valuenow="256"
                        ></span>
                      </span>
                    </span>
                  </div>
                </div>
                <div className="grid gap-2 pt-2">
                  <div className="grid gap-4" data-state="closed">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Top P
                      </label>
                      <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
                        0.9
                      </span>
                    </div>
                    <span
                      dir="ltr"
                      data-orientation="horizontal"
                      aria-disabled="false"
                      className="relative flex w-full touch-none select-none items-center [&amp;_[role=slider]]:h-4 [&amp;_[role=slider]]:w-4"
                      id="top-p"
                      aria-label="Top P"
                      // style="--radix-slider-thumb-transform: translateX(-50%);"
                    >
                      <span
                        data-orientation="horizontal"
                        className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20"
                      >
                        <span
                          data-orientation="horizontal"
                          className="absolute h-full bg-primary"
                          // style="left: 0%; right: 10%;"
                        ></span>
                      </span>
                      <span
                      // style="transform: var(--radix-slider-thumb-transform); position: absolute; left: calc(90% - 6.4px);"
                      >
                        <span
                          role="slider"
                          // aria-valuemin="0"
                          // aria-valuemax="1"
                          aria-orientation="horizontal"
                          data-orientation="horizontal"
                          // tabindex="0"
                          className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                          data-radix-collection-item=""
                          // aria-valuenow="0.9"
                          // style=""
                        ></span>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="md:order-1">
                <div
                  data-state="active"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:ri3:-trigger-complete"
                  id="radix-:ri3:-content-complete"
                  // //    tabindex="0"
                  //    class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0"
                  // //    style="animation-duration: 0s;"
                >
                  <div className="flex h-full flex-col space-y-4">
                    <textarea
                      className="flex w-full rounded-md border border-input bg-transparent text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
                      placeholder="Write a tagline for an ice cream shop"
                    ></textarea>
                    <div className="flex items-center space-x-2">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                        Submit
                      </button>
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 h-9 px-4 py-2">
                        <span className="sr-only">Show history</span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                        >
                          <path
                            d="M13.15 7.49998C13.15 4.66458 10.9402 1.84998 7.50002 1.84998C4.72167 1.84998 3.34849 3.9064 2.76335 5H4.5C4.77614 5 5 5.22386 5 5.5C5 5.77614 4.77614 6 4.5 6H1.5C1.22386 6 1 5.77614 1 5.5V2.5C1 2.22386 1.22386 2 1.5 2C1.77614 2 2 2.22386 2 2.5V4.31318C2.70453 3.07126 4.33406 0.849976 7.50002 0.849976C11.5628 0.849976 14.15 4.18537 14.15 7.49998C14.15 10.8146 11.5628 14.15 7.50002 14.15C5.55618 14.15 3.93778 13.3808 2.78548 12.2084C2.16852 11.5806 1.68668 10.839 1.35816 10.0407C1.25306 9.78536 1.37488 9.49315 1.63024 9.38806C1.8856 9.28296 2.17781 9.40478 2.2829 9.66014C2.56374 10.3425 2.97495 10.9745 3.4987 11.5074C4.47052 12.4963 5.83496 13.15 7.50002 13.15C10.9402 13.15 13.15 10.3354 13.15 7.49998ZM7.5 4.00001C7.77614 4.00001 8 4.22387 8 4.50001V7.29291L9.85355 9.14646C10.0488 9.34172 10.0488 9.65831 9.85355 9.85357C9.65829 10.0488 9.34171 10.0488 9.14645 9.85357L7.14645 7.85357C7.05268 7.7598 7 7.63262 7 7.50001V4.50001C7 4.22387 7.22386 4.00001 7.5 4.00001Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-state="inactive"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:ri3:-trigger-insert"
                  id="radix-:ri3:-content-insert"
                  className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0"
                ></div>
                <div
                  data-state="inactive"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:ri3:-trigger-edit"
                  id="radix-:ri3:-content-edit"
                  className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0 border-0 p-0"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PlayGround;
