import React from "react";
const Calendar = () => {
  return (
    <>
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
          >
            <path
              d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
          <div className="font-medium text-foreground">Calendar</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Calendar
          </h1>
          <p className="text-lg text-muted-foreground">
            <span
              data-br=":r4t:"
              data-brr="1"
              className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 531px;"
            >
              A date field component that allows users to enter and edit date.
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2 pt-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-1"
            href="https://react-day-picker.js.org"
          >
            Docs
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
            >
              <path
                d="M3 2C2.44772 2 2 2.44772 2 3V12C2 12.5523 2.44772 13 3 13H12C12.5523 13 13 12.5523 13 12V8.5C13 8.22386 12.7761 8 12.5 8C12.2239 8 12 8.22386 12 8.5V12H3V3L6.5 3C6.77614 3 7 2.77614 7 2.5C7 2.22386 6.77614 2 6.5 2H3ZM12.8536 2.14645C12.9015 2.19439 12.9377 2.24964 12.9621 2.30861C12.9861 2.36669 12.9996 2.4303 13 2.497L13 2.5V2.50049V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V3.70711L6.85355 8.85355C6.65829 9.04882 6.34171 9.04882 6.14645 8.85355C5.95118 8.65829 5.95118 8.34171 6.14645 8.14645L11.2929 3H9.5C9.22386 3 9 2.77614 9 2.5C9 2.22386 9.22386 2 9.5 2H12.4999H12.5C12.5678 2 12.6324 2.01349 12.6914 2.03794C12.7504 2.06234 12.8056 2.09851 12.8536 2.14645Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="pb-12 pt-8">
          <div className="mdx">
            <div className="group relative my-4 flex flex-col space-y-2">
              <div
                dir="ltr"
                data-orientation="horizontal"
                className="relative mr-auto w-full"
              >
                <div className="flex items-center justify-between pb-3">
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0"
                    data-orientation="horizontal"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r4u:-content-preview"
                      data-state="active"
                      id="radix-:r4u:-trigger-preview"
                      className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Preview
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:r4u:-content-code"
                      data-state="inactive"
                      id="radix-:r4u:-trigger-code"
                      className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Code
                    </button>
                  </div>
                </div>
                <div
                  data-state="active"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r4u:-trigger-preview"
                  id="radix-:r4u:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r51:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                    >
                      <span className="text-muted-foreground">
                        {" "}
                        className:{" "}
                      </span>
                      <span className="pointer-events: none;">New York</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 opacity-50"
                        aria-hidden="true"
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
                  <div className="theme-zinc w-full rounded-lg">
                    <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
                      <div className="rdp p-3 rounded-md border shadow">
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0">
                          <div className="space-y-4 rdp-caption_start rdp-caption_end">
                            <div className="flex justify-center pt-1 relative items-center">
                              <div
                                className="text-sm font-medium"
                                aria-live="polite"
                                role="presentation"
                                id="react-day-picker-1"
                              >
                                December 2023
                              </div>
                              <div className="space-x-1 flex items-center">
                                <button
                                  name="previous-month"
                                  aria-label="Go to previous month"
                                  className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute left-1"
                                  type="button"
                                >
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                  >
                                    <path
                                      d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                                      fill="currentColor"
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </button>
                                <button
                                  name="next-month"
                                  aria-label="Go to next month"
                                  className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute right-1"
                                  type="button"
                                >
                                  <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                  >
                                    <path
                                      d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                                      fill="currentColor"
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                            <table
                              className="w-full border-collapse space-y-1"
                              role="grid"
                              aria-labelledby="react-day-picker-1"
                            >
                              <thead className="rdp-head">
                                <tr className="flex">
                                  <th
                                    scope="col"
                                    className="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                                    aria-label="Sunday"
                                  >
                                    Su
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                                    aria-label="Monday"
                                  >
                                    Mo
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                                    aria-label="Tuesday"
                                  >
                                    Tu
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                                    aria-label="Wednesday"
                                  >
                                    We
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                                    aria-label="Thursday"
                                  >
                                    Th
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                                    aria-label="Friday"
                                  >
                                    Fr
                                  </th>
                                  <th
                                    scope="col"
                                    className="text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]"
                                    aria-label="Saturday"
                                  >
                                    Sa
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="rdp-tbody" role="rowgroup">
                                <tr className="flex w-full mt-2">
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      26
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      27
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      28
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      29
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      30
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      1
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      2
                                    </button>
                                  </td>
                                </tr>
                                <tr className="flex w-full mt-2">
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      3
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      4
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      5
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      6
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      7
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      8
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      9
                                    </button>
                                  </td>
                                </tr>
                                <tr className="flex w-full mt-2">
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      10
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      11
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      12
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      13
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      14
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      15
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      16
                                    </button>
                                  </td>
                                </tr>
                                <tr className="flex w-full mt-2">
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      17
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      18
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      19
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      20
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      21
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      22
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      23
                                    </button>
                                  </td>
                                </tr>
                                <tr className="flex w-full mt-2">
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground bg-accent text-accent-foreground"
                                      role="gridcell"
                                      aria-selected="true"
                                      type="button"
                                    >
                                      24
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      25
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      26
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      27
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      28
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      29
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      30
                                    </button>
                                  </td>
                                </tr>
                                <tr className="flex w-full mt-2">
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal    "
                                      role="gridcell"
                                      type="button"
                                    >
                                      31
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      1
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      2
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      3
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      4
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      5
                                    </button>
                                  </td>
                                  <td
                                    className="relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&amp;:has([aria-selected])]:bg-accent [&amp;:has([aria-selected].day-outside)]:bg-accent/50 [&amp;:has([aria-selected].day-range-end)]:rounded-r-md [&amp;:has([aria-selected])]:rounded-md"
                                    role="presentation"
                                  >
                                    <button
                                      name="day"
                                      className="rdp-button_reset rdp-button inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0 font-normal     day-outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30"
                                      role="gridcell"
                                      type="button"
                                    >
                                      6
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
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
                  aria-labelledby="radix-:r4u:-trigger-code"
                  id="radix-:r4u:-content-code"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></div>
              </div>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="about"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#about"
              >
                <span className="icon icon-link"></span>
              </a>
              About
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                Calendar
              </code>{" "}
              component is built on top of{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://react-day-picker.js.org"
              >
                React DayPicker
              </a>
              .
            </p>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="installation"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#installation"
              >
                <span className="icon icon-link"></span>
              </a>
              Installation
            </h2>
            <div
              dir="ltr"
              data-orientation="horizontal"
              className="relative mt-6 w-full"
            >
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0 outline-none"
                data-orientation="horizontal"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected="true"
                  aria-controls="radix-:r52:-content-cli"
                  data-state="active"
                  id="radix-:r52:-trigger-cli"
                  className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  CLI
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected="false"
                  aria-controls="radix-:r52:-content-manual"
                  data-state="inactive"
                  id="radix-:r52:-trigger-manual"
                  className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                  data-orientation="horizontal"
                  data-radix-collection-item=""
                >
                  Manual
                </button>
              </div>
              <div
                data-state="active"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r52:-trigger-cli"
                id="radix-:r52:-content-cli"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative [&amp;_h3.font-heading]:text-base [&amp;_h3.font-heading]:font-semibold"
              >
                <div data-rehype-pretty-code-fragment="">
                  <pre
                    className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                    data-language="bash"
                    data-theme="default"
                  >
                    <code
                      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                      data-language="bash"
                      data-theme="default"
                    >
                      <span className="line">
                        <span className="color: rgb(255, 255, 255);">npx </span>
                        <span className="color: rgba(255, 255, 255, 0.533);">
                          shadcn-ui@latest
                        </span>
                        <span className="color: rgb(255, 255, 255);"> </span>
                        <span className="color: rgba(255, 255, 255, 0.533);">
                          add
                        </span>
                        <span className="color: rgb(255, 255, 255);"> </span>
                        <span className="color: rgba(255, 255, 255, 0.533);">
                          calendar
                        </span>
                      </span>
                    </code>
                  </pre>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
                    type="button"
                    id="radix-:r55:"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                    >
                      <path
                        d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                        fill="currentColor"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Copy</span>
                  </button>
                </div>
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r52:-trigger-manual"
                id="radix-:r52:-content-manual"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative [&amp;_h3.font-heading]:text-base [&amp;_h3.font-heading]:font-semibold"
              ></div>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="usage"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#usage"
              >
                <span className="icon icon-link"></span>
              </a>
              Usage
            </h2>
            <div data-rehype-pretty-code-fragment="">
              <pre
                className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="tsx"
                data-theme="default"
              >
                <code
                  className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  data-language="tsx"
                  data-theme="default"
                >
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      import
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      Calendar{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      from
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "@/components/ui/calendar"
                    </span>
                  </span>
                </code>
              </pre>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4">
                <span className="sr-only">Copy</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                >
                  <path
                    d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div data-rehype-pretty-code-fragment="">
              <pre
                className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="tsx"
                data-theme="default"
              >
                <code
                  className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  data-language="tsx"
                  data-theme="default"
                >
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      [
                    </span>
                    <span className="color: rgb(255, 255, 255);">date</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> setDate</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ]
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">useState</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      Date
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      |
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      undefined
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;(new
                    </span>
                    <span className="color: rgb(255, 255, 255);"> Date</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ())
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      return
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">Calendar</span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> mode</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "single"
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      selected
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">date</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      onSelect
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">setDate</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "rounded-md border"
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      )
                    </span>
                  </span>
                </code>
              </pre>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4">
                <span className="sr-only">Copy</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                >
                  <path
                    d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              See the{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://react-day-picker.js.org"
              >
                React DayPicker
              </a>{" "}
              documentation for more information.
            </p>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="date-picker"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#date-picker"
              >
                <span className="icon icon-link"></span>
              </a>
              Date Picker
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              You can use the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                &lt;Calendar&gt;
              </code>{" "}
              component to build a date picker. See the{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="/docs/components/date-picker"
              >
                Date Picker
              </a>{" "}
              page for more information.
            </p>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="examples"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#examples"
              >
                <span className="icon icon-link"></span>
              </a>
              Examples
            </h2>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="form"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#form"
              >
                <span className="icon icon-link"></span>
              </a>
              Form
            </h3>
            <div className="group relative my-4 flex flex-col space-y-2">
              <div
                dir="ltr"
                data-orientation="horizontal"
                className="relative mr-auto w-full"
              >
                <div className="flex items-center justify-between pb-3">
                  <div
                    role="tablist"
                    aria-orientation="horizontal"
                    className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0 outline-none"
                    data-orientation="horizontal"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r57:-content-preview"
                      data-state="active"
                      id="radix-:r57:-trigger-preview"
                      className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Preview
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:r57:-content-code"
                      data-state="inactive"
                      id="radix-:r57:-trigger-code"
                      className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      data-orientation="horizontal"
                      data-radix-collection-item=""
                    >
                      Code
                    </button>
                  </div>
                </div>
                <div
                  data-state="active"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r57:-trigger-preview"
                  id="radix-:r57:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r5a:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                    >
                      <span className="text-muted-foreground"> style: </span>
                      <span className="pointer-events: none;">New York</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 opacity-50"
                        aria-hidden="true"
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
                  <div className="theme-zinc w-full rounded-lg">
                    <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
                      <form className="space-y-8">
                        <div className="space-y-2 flex flex-col">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Date of birth
                          </label>
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[240px] pl-3 text-left font-normal text-muted-foreground"
                            id=":r5f:-form-item"
                            aria-describedby=":r5f:-form-item-description"
                            aria-invalid="false"
                            type="button"
                            aria-haspopup="dialog"
                            aria-expanded="false"
                            aria-controls="radix-:r5g:"
                            data-state="closed"
                          >
                            <span>Pick a date</span>
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-auto h-4 w-4 opacity-50"
                            >
                              <path
                                d="M4.5 1C4.77614 1 5 1.22386 5 1.5V2H10V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V2H12.5C13.3284 2 14 2.67157 14 3.5V12.5C14 13.3284 13.3284 14 12.5 14H2.5C1.67157 14 1 13.3284 1 12.5V3.5C1 2.67157 1.67157 2 2.5 2H4V1.5C4 1.22386 4.22386 1 4.5 1ZM10 3V3.5C10 3.77614 10.2239 4 10.5 4C10.7761 4 11 3.77614 11 3.5V3H12.5C12.7761 3 13 3.22386 13 3.5V5H2V3.5C2 3.22386 2.22386 3 2.5 3H4V3.5C4 3.77614 4.22386 4 4.5 4C4.77614 4 5 3.77614 5 3.5V3H10ZM2 6V12.5C2 12.7761 2.22386 13 2.5 13H12.5C12.7761 13 13 12.7761 13 12.5V6H2ZM7 7.5C7 7.22386 7.22386 7 7.5 7C7.77614 7 8 7.22386 8 7.5C8 7.77614 7.77614 8 7.5 8C7.22386 8 7 7.77614 7 7.5ZM9.5 7C9.22386 7 9 7.22386 9 7.5C9 7.77614 9.22386 8 9.5 8C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7ZM11 7.5C11 7.22386 11.2239 7 11.5 7C11.7761 7 12 7.22386 12 7.5C12 7.77614 11.7761 8 11.5 8C11.2239 8 11 7.77614 11 7.5ZM11.5 9C11.2239 9 11 9.22386 11 9.5C11 9.77614 11.2239 10 11.5 10C11.7761 10 12 9.77614 12 9.5C12 9.22386 11.7761 9 11.5 9ZM9 9.5C9 9.22386 9.22386 9 9.5 9C9.77614 9 10 9.22386 10 9.5C10 9.77614 9.77614 10 9.5 10C9.22386 10 9 9.77614 9 9.5ZM7.5 9C7.22386 9 7 9.22386 7 9.5C7 9.77614 7.22386 10 7.5 10C7.77614 10 8 9.77614 8 9.5C8 9.22386 7.77614 9 7.5 9ZM5 9.5C5 9.22386 5.22386 9 5.5 9C5.77614 9 6 9.22386 6 9.5C6 9.77614 5.77614 10 5.5 10C5.22386 10 5 9.77614 5 9.5ZM3.5 9C3.22386 9 3 9.22386 3 9.5C3 9.77614 3.22386 10 3.5 10C3.77614 10 4 9.77614 4 9.5C4 9.22386 3.77614 9 3.5 9ZM3 11.5C3 11.2239 3.22386 11 3.5 11C3.77614 11 4 11.2239 4 11.5C4 11.7761 3.77614 12 3.5 12C3.22386 12 3 11.7761 3 11.5ZM5.5 11C5.22386 11 5 11.2239 5 11.5C5 11.7761 5.22386 12 5.5 12C5.77614 12 6 11.7761 6 11.5C6 11.2239 5.77614 11 5.5 11ZM7 11.5C7 11.2239 7.22386 11 7.5 11C7.77614 11 8 11.2239 8 11.5C8 11.7761 7.77614 12 7.5 12C7.22386 12 7 11.7761 7 11.5ZM9.5 11C9.22386 11 9 11.2239 9 11.5C9 11.7761 9.22386 12 9.5 12C9.77614 12 10 11.7761 10 11.5C10 11.2239 9.77614 11 9.5 11Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <p
                            id=":r5f:-form-item-description"
                            className="text-[0.8rem] text-muted-foreground"
                          >
                            Your date of birth is used to calculate your age.
                          </p>
                        </div>
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  data-state="inactive"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r57:-trigger-code"
                  id="radix-:r57:-content-code"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            href="/docs/components/button"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-2 h-4 w-4"
            >
              <path
                d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
            Button
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
            href="/docs/components/card"
          >
            Card
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
            >
              <path
                d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
export default Calendar;
