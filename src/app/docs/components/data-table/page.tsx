import React from "react";
const DataTable = () => {
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
          <div className="font-medium text-foreground">Data Table</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Data Table
          </h1>
          <p className="text-lg text-muted-foreground">
            <span
              data-br=":r1g:"
              data-brr="1"
              className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 472px;"
            >
              Powerful table and datagrids built using TanStack Table.
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2 pt-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-1"
            href="https://tanstack.com/table/v8/docs/guide/introduction"
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
                    className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0 outline-none"
                    data-orientation="horizontal"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r1h:-content-preview"
                      data-state="active"
                      id="radix-:r1h:-trigger-preview"
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
                      aria-controls="radix-:r1h:-content-code"
                      data-state="inactive"
                      id="radix-:r1h:-trigger-code"
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
                  aria-labelledby="radix-:r1h:-trigger-preview"
                  id="radix-:r1h:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r1k:"
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
                      <div className="w-full">
                        <div className="flex items-center py-4">
                          <input
                            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 max-w-sm"
                            placeholder="Filter emails..."
                            value=""
                          />
                          <button
                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
                            type="button"
                            id="radix-:r1u:"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            data-state="closed"
                          >
                            Columns{" "}
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-2 h-4 w-4"
                            >
                              <path
                                d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                                fill="currentColor"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div className="rounded-md border">
                          <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                              <thead className="[&amp;_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                                  <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      type="button"
                                      role="checkbox"
                                      aria-checked="false"
                                      data-state="unchecked"
                                      value="on"
                                      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                      aria-label="Select all"
                                    ></button>
                                  </th>
                                  <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    Status
                                  </th>
                                  <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                                      Email
                                      <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="ml-2 h-4 w-4"
                                      >
                                        <path
                                          d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z"
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </button>
                                  </th>
                                  <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="text-right">Amount</div>
                                  </th>
                                  <th className="h-10 px-2 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]"></th>
                                </tr>
                              </thead>
                              <tbody className="[&amp;_tr:last-child]:border-0">
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                  data-state="false"
                                >
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      type="button"
                                      role="checkbox"
                                      aria-checked="false"
                                      data-state="unchecked"
                                      value="on"
                                      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                      aria-label="Select row"
                                    ></button>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="capitalize">success</div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="lowercase">
                                      ken99@yahoo.com
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="text-right font-medium">
                                      $316.00
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                                      type="button"
                                      id="radix-:r20:"
                                      aria-haspopup="menu"
                                      aria-expanded="false"
                                      data-state="closed"
                                    >
                                      <span className="sr-only">Open menu</span>
                                      <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                      >
                                        <path
                                          d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </button>
                                  </td>
                                </tr>
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                  data-state="false"
                                >
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      type="button"
                                      role="checkbox"
                                      aria-checked="false"
                                      data-state="unchecked"
                                      value="on"
                                      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                      aria-label="Select row"
                                    ></button>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="capitalize">success</div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="lowercase">
                                      Abe45@gmail.com
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="text-right font-medium">
                                      $242.00
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                                      type="button"
                                      id="radix-:r22:"
                                      aria-haspopup="menu"
                                      aria-expanded="false"
                                      data-state="closed"
                                    >
                                      <span className="sr-only">Open menu</span>
                                      <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                      >
                                        <path
                                          d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </button>
                                  </td>
                                </tr>
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                  data-state="false"
                                >
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      type="button"
                                      role="checkbox"
                                      aria-checked="false"
                                      data-state="unchecked"
                                      value="on"
                                      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                      aria-label="Select row"
                                    ></button>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="capitalize">processing</div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="lowercase">
                                      Monserrat44@gmail.com
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="text-right font-medium">
                                      $837.00
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                                      type="button"
                                      id="radix-:r24:"
                                      aria-haspopup="menu"
                                      aria-expanded="false"
                                      data-state="closed"
                                    >
                                      <span className="sr-only">Open menu</span>
                                      <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                      >
                                        <path
                                          d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </button>
                                  </td>
                                </tr>
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                  data-state="false"
                                >
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      type="button"
                                      role="checkbox"
                                      aria-checked="false"
                                      data-state="unchecked"
                                      value="on"
                                      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                      aria-label="Select row"
                                    ></button>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="capitalize">success</div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="lowercase">
                                      Silas22@gmail.com
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="text-right font-medium">
                                      $874.00
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                                      type="button"
                                      id="radix-:r26:"
                                      aria-haspopup="menu"
                                      aria-expanded="false"
                                      data-state="closed"
                                    >
                                      <span className="sr-only">Open menu</span>
                                      <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                      >
                                        <path
                                          d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </button>
                                  </td>
                                </tr>
                                <tr
                                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                                  data-state="false"
                                >
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      type="button"
                                      role="checkbox"
                                      aria-checked="false"
                                      data-state="unchecked"
                                      value="on"
                                      className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                                      aria-label="Select row"
                                    ></button>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="capitalize">failed</div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="lowercase">
                                      carmella@hotmail.com
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <div className="text-right font-medium">
                                      $721.00
                                    </div>
                                  </td>
                                  <td className="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
                                    <button
                                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
                                      type="button"
                                      id="radix-:r28:"
                                      aria-haspopup="menu"
                                      aria-expanded="false"
                                      data-state="closed"
                                    >
                                      <span className="sr-only">Open menu</span>
                                      <svg
                                        width="15"
                                        height="15"
                                        viewBox="0 0 15 15"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                      >
                                        <path
                                          d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                                          fill="currentColor"
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                        ></path>
                                      </svg>
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="flex items-center justify-end space-x-2 py-4">
                          <div className="flex-1 text-sm text-muted-foreground">
                            0 of 5 row(s) selected.
                          </div>
                          <div className="space-x-2">
                            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">
                              Previous
                            </button>
                            <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs">
                              Next
                            </button>
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
                  aria-labelledby="radix-:r1h:-trigger-code"
                  id="radix-:r1h:-content-code"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></div>
              </div>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="introduction"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#introduction"
              >
                <span className="icon icon-link"></span>
              </a>
              Introduction
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Every data table or datagrid I've created has been unique. They
              all behave differently, have specific sorting and filtering
              requirements, and work with different data sources.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              It doesn't make sense to combine all of these variations into a
              single component. If we do that, we'll lose the flexibility that{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://tanstack.com/table/v8/docs/guide/introduction#what-is-headless-ui"
              >
                headless UI
              </a>{" "}
              provides.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              So instead of a data-table component, I thought it would be more
              helpful to provide a guide on how to build your own.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              We'll start with the basic{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                &lt;Table /&gt;
              </code>{" "}
              component and build a complex data table from scratch.
            </p>
            <div
              role="alert"
              className="relative w-full rounded-lg border px-4 py-3 text-sm [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground [&amp;>svg~*]:pl-7 bg-background text-foreground mt-4"
            >
              <div className="text-sm [&amp;_p]:leading-relaxed">
                <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                  <strong>Tip:</strong> If you find yourself using the same
                  table in multiple places in your app, you can always extract
                  it into a reusable component.
                </p>
              </div>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="table-of-contents"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#table-of-contents"
              >
                <span className="icon icon-link"></span>
              </a>
              Table of Contents
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              This guide will show you how to use{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://tanstack.com/table"
              >
                TanStack Table
              </a>{" "}
              and the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                &lt;Table /&gt;
              </code>{" "}
              component to build your own custom data table. We'll cover the
              following topics:
            </p>
            <ul className="my-6 ml-6 list-disc">
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#basic-table"
                >
                  Basic Table
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#row-actions"
                >
                  Row Actions
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#pagination"
                >
                  Pagination
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#sorting"
                >
                  Sorting
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#filtering"
                >
                  Filtering
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#visibility"
                >
                  Visibility
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#row-selection"
                >
                  Row Selection
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#reusable-components"
                >
                  Reusable Components
                </a>
              </li>
            </ul>
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
            <ol className="my-6 ml-6 list-decimal">
              <li className="mt-2">
                Add the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;Table /&gt;
                </code>{" "}
                component to your project:
              </li>
            </ol>
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
                      table
                    </span>
                  </span>
                </code>
              </pre>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
                type="button"
                id="radix-:r1l:"
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
            <ol className="my-6 ml-6 list-decimal">
              <li className="mt-2">
                Add{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  tanstack/react-table
                </code>{" "}
                dependency:
              </li>
            </ol>
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
                    <span className="color: rgb(255, 255, 255);">npm </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      install
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      @tanstack/react-table
                    </span>
                  </span>
                </code>
              </pre>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
                type="button"
                id="radix-:r1n:"
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
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="prerequisites"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#prerequisites"
              >
                <span className="icon icon-link"></span>
              </a>
              Prerequisites
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              We are going to build a table to show recent payments. Here's what
              our data looks like:
            </p>
            <div data-rehype-pretty-code-fragment="">
              <pre
                className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="tsx"
                data-theme="default"
              >
                <code
                  className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  data-line-numbers=""
                  data-language="tsx"
                  data-theme="default"
                >
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      type
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      Payment
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> id</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> string</span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> amount</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> number</span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> status</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "pending"
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      |
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "processing"
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      |
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "success"
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      |
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "failed"
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> email</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> string</span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      export
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      payments
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      Payment
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      []
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      [
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> id</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "728ed52f"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> amount</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      100,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> status</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "pending"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> email</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "m@example.com"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> id</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "489e1d42"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> amount</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      125,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> status</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "processing"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> email</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "example@gmail.com"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                      //
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.267);">
                      {" "}
                      ...
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ]
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
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="project-structure"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#project-structure"
              >
                <span className="icon icon-link"></span>
              </a>
              Project Structure
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Start by creating the following file structure:
            </p>
            <div data-rehype-pretty-code-fragment="">
              <pre
                className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="txt"
                data-theme="default"
              >
                <code
                  className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  data-language="txt"
                  data-theme="default"
                >
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">app</span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      └── payments
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      ├── columns.tsx
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      ├── data-table.tsx
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      └── page.tsx
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
              I'm using a Next.js example here but this works for any other
              React framework.
            </p>
            <ul className="my-6 ml-6 list-disc">
              <li className="mt-2">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  columns.tsx
                </code>{" "}
                (client component) will contain our column definitions.
              </li>
              <li className="mt-2">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  data-table.tsx
                </code>{" "}
                (client component) will contain our{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;DataTable /&gt;
                </code>{" "}
                component.
              </li>
              <li className="mt-2">
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  page.tsx
                </code>{" "}
                (server component) is where we'll fetch data and render our
                table.
              </li>
            </ul>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="basic-table"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#basic-table"
              >
                <span className="icon icon-link"></span>
              </a>
              Basic Table
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Let's start by building a basic table.
            </p>
            <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="column-definitions"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#column-definitions"
                >
                  <span className="icon icon-link"></span>
                </a>
                Column Definitions
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                First, we'll define our columns.
              </p>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/columns.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "use client"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnDef{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@tanstack/react-table"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        This type is used to define the shape of our data.
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        You can use a Zod schema here if you want.
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        type
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        Payment
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        string
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        amount
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        number
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        status
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "pending"
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        |
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "processing"
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        |
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "success"
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        |
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "failed"
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> email</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        string
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line"> </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        Payment
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;[]
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        accessorKey
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "status"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        header
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "Status"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        accessorKey
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "email"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        header
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "Email"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        accessorKey
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "amount"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        header
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "Amount"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ]
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
              <div
                role="alert"
                className="relative w-full rounded-lg border px-4 py-3 text-sm [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground [&amp;>svg~*]:pl-7 bg-background text-foreground mt-4"
              >
                <div className="text-sm [&amp;_p]:leading-relaxed">
                  <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                    <strong>Note:</strong> Columns are where you define the core
                    of what your table will look like. They define the data that
                    will be displayed, how it will be formatted, sorted and
                    filtered.
                  </p>
                </div>
              </div>
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="datatable--component"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#datatable--component"
                >
                  <span className="icon icon-link"></span>
                </a>
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;DataTable /&gt;
                </code>{" "}
                component
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Next, we'll create a{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;DataTable /&gt;
                </code>{" "}
                component to render our table.
              </p>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/data-table.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "use client"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        flexRender
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@tanstack/react-table"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        TableBody
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        TableCell
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        TableHead
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        TableHeader
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        TableRow
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/table"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        interface
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTableProps
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;[]
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        []
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;(
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTableProps
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;)
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        table{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "rounded-md border"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableHeader
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getHeaderGroups
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ().
                      </span>
                      <span className="color: rgb(255, 255, 255);">map</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ((
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        headerGroup
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
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
                      <span className="color: rgb(255, 255, 255);">
                        TableRow key
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        headerGroup
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);">
                        headerGroup
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        headers
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">map</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ((
                      </span>
                      <span className="color: rgb(255, 255, 255);">header</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        TableHead key
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">header</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);">header</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        isPlaceholder
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ?
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        null
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        flexRender
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        header
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">column</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        columnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">header</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        header
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getContext
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableHead
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableRow
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ))
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableHeader
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableBody
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ().
                      </span>
                      <span className="color: rgb(255, 255, 255);">rows</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ?.
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        length{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ?
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ().
                      </span>
                      <span className="color: rgb(255, 255, 255);">rows</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">map</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ((
                      </span>
                      <span className="color: rgb(255, 255, 255);">row</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
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
                      <span className="color: rgb(255, 255, 255);">
                        TableRow
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> key</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">row</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        data-state
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">row</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getIsSelected
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &amp;&amp;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "selected"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);">row</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getVisibleCells
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ().
                      </span>
                      <span className="color: rgb(255, 255, 255);">map</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ((
                      </span>
                      <span className="color: rgb(255, 255, 255);">cell</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
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
                      <span className="color: rgb(255, 255, 255);">
                        TableCell key
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">cell</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);">
                        flexRender
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">cell</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">column</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        columnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">cell</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> cell</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getContext
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ())
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableCell
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ))
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableRow
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ))
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
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
                      <span className="color: rgb(255, 255, 255);">
                        TableRow
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableCell colSpan
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">length</span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "h-24 text-center"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        No results.
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableCell
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableRow
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        TableBody
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
              <div
                role="alert"
                className="relative w-full rounded-lg border px-4 py-3 text-sm [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground [&amp;>svg~*]:pl-7 bg-background text-foreground"
              >
                <div className="text-sm [&amp;_p]:leading-relaxed">
                  <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                    <strong>Tip</strong>: If you find yourself using{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      &lt;DataTable /&gt;
                    </code>{" "}
                    in multiple places, this is the component you could make
                    reusable by extracting it to{" "}
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      components/ui/data-table.tsx
                    </code>
                    .
                  </p>
                  <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                      &lt;DataTable /&gt;
                    </code>
                  </p>
                </div>
              </div>
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="render-the-table"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#render-the-table"
                >
                  <span className="icon icon-link"></span>
                </a>
                Render the table
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Finally, we'll render our table in our page component.
              </p>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/page.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
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
                        Payment
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "./columns"
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DataTable{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "./data-table"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        async
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        getData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ():
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        Promise
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        Payment
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        []&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        Fetch data from your API here.
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        return
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "728ed52f"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        amount
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        100,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        status
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "pending"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> email</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "m@example.com"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        ...
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ]
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        default
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        async
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DemoPage
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> data </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        await
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "container mx-auto py-10"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DataTable columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ={" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ={" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="cell-formatting"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#cell-formatting"
              >
                <span className="icon icon-link"></span>
              </a>
              Cell Formatting
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Let's format the amount cell to display the dollar amount. We'll
              also align the cell to the right.
            </p>
            <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="update-columns-definition"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#update-columns-definition"
                >
                  <span className="icon icon-link"></span>
                </a>
                Update columns definition
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Update the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  header
                </code>{" "}
                and{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  cell
                </code>{" "}
                definitions for amount as follows:
              </p>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/columns.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        Payment
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;[]
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        accessorKey
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "amount"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        header
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "text-right"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Amount</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        cell
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> row </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        amount{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        parseFloat
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">row</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "amount"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ))
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        formatted{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        new
                      </span>
                      <span className="color: rgb(255, 255, 255);"> Intl</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        NumberFormat
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "en-US"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        className
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "currency"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        currency
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "USD"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ).
                      </span>
                      <span className="color: rgb(255, 255, 255);">format</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">amount</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line line--highlighted"> </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        return
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "text-right font-medium"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;{" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        formatted
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ]
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
                You can use the same approach to format other cells and headers.
              </p>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="row-actions"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#row-actions"
              >
                <span className="icon icon-link"></span>
              </a>
              Row Actions
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Let's add row actions to our table. We'll use a{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                &lt;Dropdown /&gt;
              </code>{" "}
              component for this.
            </p>
            <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="update-columns-definition-1"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#update-columns-definition-1"
                >
                  <span className="icon icon-link"></span>
                </a>
                Update columns definition
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Update our columns definition to add a new{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  actions
                </code>{" "}
                column. The{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  actions
                </code>{" "}
                cell returns a{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;Dropdown /&gt;
                </code>{" "}
                component.
              </p>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/columns.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "use client"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnDef{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@tanstack/react-table"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        MoreHorizontal{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "lucide-react"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Button{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/button"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenu
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenuContent
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenuItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenuLabel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenuSeparator
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenuTrigger
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/dropdown-menu"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        Payment
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;[]
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        ...
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "actions"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        cell
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> row </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        payment{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> row</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        original
                      </span>
                    </span>
                    <span className="line line--highlighted"> </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        return
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenu
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuTrigger asChild
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        Button variant
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "ghost"
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "h-8 w-8 p-0"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        span classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "sr-only"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        Open menu
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">span</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        MoreHorizontal classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "h-4 w-4"
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Button</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuTrigger
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuContent align
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "end"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuLabel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        Actions
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuLabel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuItem
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onClick
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        navigator
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        clipboard
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        writeText
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        payment
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Copy payment ID
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuSeparator{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        View customer
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        View payment details
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuContent
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenu
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        ...
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ]
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
                You can access the row data using{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  row.original
                </code>{" "}
                in the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  cell
                </code>{" "}
                function. Use this to handle actions for your row eg. use the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  id
                </code>{" "}
                to make a DELETE call to your API.
              </p>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="pagination"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#pagination"
              >
                <span className="icon icon-link"></span>
              </a>
              Pagination
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Next, we'll add pagination to our table.
            </p>
            <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="update-datatable"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#update-datatable"
                >
                  <span className="icon icon-link"></span>
                </a>
                Update{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;DataTable&gt;
                </code>
              </h3>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/data-table.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        flexRender
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@tanstack/react-table"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTableProps
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;)
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        table{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        ...
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
                This will automatically paginate your rows into pages of 10. See
                the{" "}
                <a
                  className="font-medium underline underline-offset-4"
                  href="https://tanstack.com/table/v8/docs/api/features/pagination"
                >
                  pagination docs
                </a>{" "}
                for more information on customizing page size and implementing
                manual pagination.
              </p>
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="add-pagination-controls"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#add-pagination-controls"
                >
                  <span className="icon icon-link"></span>
                </a>
                Add pagination controls
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                We can add pagination controls to our table using the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;Button /&gt;
                </code>{" "}
                component and the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  table.previousPage()
                </code>
                ,{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  table.nextPage()
                </code>{" "}
                API methods.
              </p>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/data-table.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Button{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/button"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTableProps
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;)
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        table{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        return
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "rounded-md border"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        ....{" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "flex items-center justify-end space-x-2 py-4"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Button</span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        variant
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "outline"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> size</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "sm"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onClick
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        previousPage
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        disabled
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = !
                      </span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getCanPreviousPage
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Previous
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Button</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Button</span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        variant
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "outline"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> size</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "sm"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onClick
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        nextPage
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        disabled
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = !
                      </span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getCanNextPage
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> Next</span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Button</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> )</span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
                See{" "}
                <a
                  className="font-medium underline underline-offset-4"
                  href="#reusable-components"
                >
                  Reusable Components
                </a>{" "}
                section for a more advanced pagination component.
              </p>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="sorting"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#sorting"
              >
                <span className="icon icon-link"></span>
              </a>
              Sorting
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Let's make the email column sortable.
            </p>
            <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="update-datatable-1"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#update-datatable-1"
                >
                  <span className="icon icon-link"></span>
                </a>
                Update{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;DataTable&gt;
                </code>
              </h3>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/data-table.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "use client"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        *
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        as
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        React{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "react"
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        SortingState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        flexRender
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@tanstack/react-table"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTableProps
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;)
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        sorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setSorting
                      </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        SortingState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;([])
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        table{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onSortingChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setSorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> state</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        sorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
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
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "rounded-md border"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;{" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ...
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="make-header-cell-sortable"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#make-header-cell-sortable"
                >
                  <span className="icon icon-link"></span>
                </a>
                Make header cell sortable
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                We can now update the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  email
                </code>{" "}
                header cell to add sorting controls.
              </p>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/columns.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "use client"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnDef{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@tanstack/react-table"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ArrowUpDown
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        MoreHorizontal{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "lucide-react"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        Payment
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;[]
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        accessorKey
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "email"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        header
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        column{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        return
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Button</span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        variant
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "ghost"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onClick
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        column
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        toggleSorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">column</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getIsSorted
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ===
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "asc"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> Email</span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        ArrowUpDown classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "ml-2 h-4 w-4"
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Button</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ]
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
                This will automatically sort the table (asc and desc) when the
                user toggles on the header cell.
              </p>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="filtering"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#filtering"
              >
                <span className="icon icon-link"></span>
              </a>
              Filtering
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Let's add a search input to filter emails in our table.
            </p>
            <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="update-datatable-2"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#update-datatable-2"
                >
                  <span className="icon icon-link"></span>
                </a>
                Update{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;DataTable&gt;
                </code>
              </h3>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/data-table.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "use client"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        *
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        as
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        React{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "react"
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnFiltersState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        SortingState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        flexRender
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getFilteredRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@tanstack/react-table"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Button{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/button"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Input{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/input"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTableProps
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;)
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        sorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setSorting
                      </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        SortingState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;([])
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        columnFilters
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnFilters
                      </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        ColumnFiltersState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;(
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        []
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        table{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onSortingChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setSorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onColumnFiltersChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnFilters
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getFilteredRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getFilteredRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> state</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        sorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columnFilters
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
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
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "flex items-center py-4"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Input</span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        placeholder
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "Filter emails..."
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = (
                      </span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getColumn
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "email"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )?.
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getFilterValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        as
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        string
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ??
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ""
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = (
                      </span>
                      <span className="color: rgb(255, 255, 255);">event</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getColumn
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "email"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )?.
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        setFilterValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">event</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">target</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "max-w-sm"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "rounded-md border"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;{" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ...
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
                Filtering is now enabled for the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  email
                </code>{" "}
                column. You can add filters to other columns as well. See the{" "}
                <a
                  className="font-medium underline underline-offset-4"
                  href="https://tanstack.com/table/v8/docs/guide/filters"
                >
                  filtering docs
                </a>{" "}
                for more information on customizing filters.
              </p>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="visibility"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#visibility"
              >
                <span className="icon icon-link"></span>
              </a>
              Visibility
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Adding column visibility is fairly simple using{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                @tanstack/react-table
              </code>{" "}
              visibility API.
            </p>
            <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="update-datatable-3"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#update-datatable-3"
                >
                  <span className="icon icon-link"></span>
                </a>
                Update{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;DataTable&gt;
                </code>
              </h3>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/data-table.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "use client"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        *
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        as
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        React{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "react"
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnFiltersState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        SortingState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        VisibilityState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        flexRender
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getFilteredRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@tanstack/react-table"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Button{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/button"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenu
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenuCheckboxItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenuContent
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        DropdownMenuTrigger
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/dropdown-menu"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTableProps
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;)
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        sorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setSorting
                      </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        SortingState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;([])
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        columnFilters
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnFilters
                      </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        ColumnFiltersState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;(
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        []
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        columnVisibility
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnVisibility
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ]
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> React</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        VisibilityState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;( )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        table{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onSortingChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setSorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onColumnFiltersChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnFilters
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getFilteredRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getFilteredRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onColumnVisibilityChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnVisibility
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> state</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        sorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columnFilters
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columnVisibility
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
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
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "flex items-center py-4"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Input</span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        placeholder
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "Filter emails..."
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ={" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getColumn
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "email"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )?.
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getFilterValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        as
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        string
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = (
                      </span>
                      <span className="color: rgb(255, 255, 255);">event</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getColumn
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "email"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )?.
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        setFilterValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">event</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">target</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
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
                        "max-w-sm"
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenu
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuTrigger asChild
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        Button variant
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "outline"
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "ml-auto"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Columns
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Button</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuTrigger
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuContent align
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "end"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getAllColumns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">filter</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">column</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        column
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getCanHide
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">map</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ((
                      </span>
                      <span className="color: rgb(255, 255, 255);">column</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        return
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuCheckboxItem
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> key</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ={" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">column</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "capitalize"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        checked
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ={" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">column</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getIsVisible
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onCheckedChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = (
                      </span>
                      <span className="color: rgb(255, 255, 255);">value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        column
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        toggleVisibility
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (!!
                      </span>
                      <span className="color: rgb(255, 255, 255);">value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">column</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuCheckboxItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenuContent
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        DropdownMenu
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "rounded-md border"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;{" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ...
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
                This adds a dropdown menu that you can use to toggle column
                visibility.
              </p>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="row-selection"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#row-selection"
              >
                <span className="icon icon-link"></span>
              </a>
              Row Selection
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Next, we're going to add row selection to our table.
            </p>
            <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="update-column-definitions"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#update-column-definitions"
                >
                  <span className="icon icon-link"></span>
                </a>
                Update column definitions
              </h3>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/columns.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "use client"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        ColumnDef{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@tanstack/react-table"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Badge{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/badge"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        import
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        Checkbox{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "@/components/ui/checkbox"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        ColumnDef
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        Payment
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;[]
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> id</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "select"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        header
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        table{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        Checkbox
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        checked
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ={" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getIsAllPageRowsSelected
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ||
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getIsSomePageRowsSelected
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &amp;&amp;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "indeterminate"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onCheckedChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = (
                      </span>
                      <span className="color: rgb(255, 255, 255);">value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        toggleAllPageRowsSelected
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (!!
                      </span>
                      <span className="color: rgb(255, 255, 255);">value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        aria-label
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "Select all"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ),
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        cell
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> row </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        Checkbox
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        checked
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ={" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">row</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getIsSelected
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onCheckedChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = (
                      </span>
                      <span className="color: rgb(255, 255, 255);">value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =&gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);"> row</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        toggleSelected
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (!!
                      </span>
                      <span className="color: rgb(255, 255, 255);">value</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ){" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        aria-label
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "Select row"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        enableSorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        false,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        enableHiding
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        false,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ]
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="update-datatable-4"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#update-datatable-4"
                >
                  <span className="icon icon-link"></span>
                </a>
                Update{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;DataTable&gt;
                </code>
              </h3>
              <div data-rehype-pretty-code-fragment="">
                <div
                  data-rehype-pretty-code-title=""
                  data-language="tsx"
                  data-theme="default"
                >
                  app/payments/data-table.tsx
                </div>
                <pre
                  className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                  data-language="tsx"
                  data-theme="default"
                >
                  <code
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                    data-line-numbers=""
                    data-language="tsx"
                    data-theme="default"
                  >
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        export
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        DataTableProps
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TData
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        TValue
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;)
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        sorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setSorting
                      </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        SortingState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;([])
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        columnFilters
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnFilters
                      </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        ColumnFiltersState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;(
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        []
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        columnVisibility
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnVisibility
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ]
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> React</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        VisibilityState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;( )
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        [
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        rowSelection
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setRowSelection
                      </span>
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
                      <span className="color: rgb(255, 255, 255);">
                        useState
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ( )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        table{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useReactTable
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> data</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columns
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onSortingChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setSorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onColumnFiltersChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnFilters
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getCoreRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getPaginationRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getSortedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getFilteredRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        getFilteredRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onColumnVisibilityChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setColumnVisibility
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        onRowSelectionChange
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        setRowSelection
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> state</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        sorting
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columnFilters
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        columnVisibility
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        rowSelection
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
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
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "rounded-md border"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Table </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        )
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                  </code>
                </pre>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-16">
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
                This adds a checkbox to each row and a checkbox in the header to
                select all rows.
              </p>
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="show-selected-rows"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#show-selected-rows"
                >
                  <span className="icon icon-link"></span>
                </a>
                Show selected rows
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                You can show the number of selected rows using the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  table.getFilteredSelectedRowModel()
                </code>{" "}
                API.
              </p>
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
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        div classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "flex-1 text-sm text-muted-foreground"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getFilteredSelectedRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ().
                      </span>
                      <span className="color: rgb(255, 255, 255);">rows</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">length</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);"> of</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        " "
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">table</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        getFilteredRowModel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ().
                      </span>
                      <span className="color: rgb(255, 255, 255);">rows</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">length</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        row(s) selected.
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">div</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
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
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="reusable-components"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#reusable-components"
              >
                <span className="icon icon-link"></span>
              </a>
              Reusable Components
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Here are some components you can use to build your data tables.
              This is from the{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="/examples/tasks"
              >
                Tasks
              </a>{" "}
              demo.
            </p>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="column-header"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#column-header"
              >
                <span className="icon icon-link"></span>
              </a>
              Column header
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Make any column header sortable and hideable.
            </p>
            <div data-state="closed">
              <div className="relative my-6 overflow-hidden rounded-md">
                <div
                  data-state="closed"
                  id="radix-:r1p:"
                  className="overflow-hidden max-h-32"
                >
                  <div className="[&amp;_pre]:my-0 [&amp;_pre]:max-h-[650px] [&amp;_pre]:pb-[100px] [&amp;_pre]:overflow-hidden">
                    <div data-rehype-pretty-code-fragment=""></div>
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
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              ArrowDownIcon
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              ArrowUpIcon
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              CaretSortIcon
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              EyeNoneIcon
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@radix-ui/react-icons"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Column{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@tanstack/react-table"
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              cn{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@/lib/utils"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Button{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@/components/ui/button"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenu
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenuContent
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenuItem
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenuSeparator
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenuTrigger
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@/components/ui/dropdown-menu"
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              interface
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              DataTableColumnHeaderProps
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TValue
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              extends
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              React
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              HTMLAttributes
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              HTMLDivElement
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              :
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              Column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TValue
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              title
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              :
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              string
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              export
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              function
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              DataTableColumnHeader
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TValue
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;({" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              title
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              :
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              DataTableColumnHeaderProps
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TValue
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;)
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              if
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (!
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getCanSort
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ())
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              return
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ={" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              cn
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ) &gt;{" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              title
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              return
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ={" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              cn
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "flex items-center space-x-2"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ) &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenu
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuTrigger asChild
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              variant
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "ghost"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              size
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "sm"
                            </span>
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
                              "-ml-3 h-8 data-[state=open]:bg-accent"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;{" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              title
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getIsSorted
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ===
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "desc"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ?
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              ArrowDownIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "ml-2 h-4 w-4"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              :
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getIsSorted
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ===
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "asc"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ?
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              ArrowUpIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "ml-2 h-4 w-4"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              :
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              CaretSortIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "ml-2 h-4 w-4"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuTrigger
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuContent align
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "start"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuItem onClick
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              toggleSorting
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (false) &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              ArrowUpIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Asc
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuItem
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuItem onClick
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              toggleSorting
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (true) &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              ArrowDownIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Desc
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuItem
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuSeparator{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuItem onClick
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              toggleVisibility
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (false) &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              EyeNoneIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "mr-2 h-3.5 w-3.5 text-muted-foreground/70"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Hide
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuItem
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuContent
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenu
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
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
                  </div>
                </div>
                <div className="absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2 inset-0">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 px-4 py-2 h-8 text-xs"
                    type="button"
                    aria-controls="radix-:r1p:"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    Expand
                  </button>
                </div>
              </div>
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
                      export
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      columns{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      [
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      accessorKey
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "email"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      header
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ({" "}
                    </span>
                    <span className="color: rgb(255, 255, 255);"> column </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                      )
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =&gt;
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                  </span>
                  <span className="line line--highlighted">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      DataTableColumnHeader column
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ={" "}
                    </span>
                    <span className="color: rgb(255, 255, 255);">column</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                    </span>
                    <span className="color: rgb(255, 255, 255);"> title</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "Email"
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ),
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ]
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
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="pagination-1"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#pagination-1"
              >
                <span className="icon icon-link"></span>
              </a>
              Pagination
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Add pagination controls to your table including page size and
              selection count.
            </p>
            <div data-state="closed">
              <div className="relative my-6 overflow-hidden rounded-md">
                <div
                  data-state="closed"
                  id="radix-:r1q:"
                  className="overflow-hidden max-h-32"
                >
                  <div className="[&amp;_pre]:my-0 [&amp;_pre]:max-h-[650px] [&amp;_pre]:pb-[100px] [&amp;_pre]:overflow-hidden">
                    <div data-rehype-pretty-code-fragment=""></div>
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
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              ChevronLeftIcon
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              ChevronRightIcon
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DoubleArrowLeftIcon
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DoubleArrowRightIcon
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@radix-ui/react-icons"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Table{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@tanstack/react-table"
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Button{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@/components/ui/button"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Select
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              SelectContent
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              SelectItem
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              SelectTrigger
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              SelectValue
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@/components/ui/select"
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              interface
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              DataTablePaginationProps
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              :
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              Table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              export
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              function
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              DataTablePagination
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;({" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              :
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              DataTablePaginationProps
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;)
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              return
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "flex items-center justify-between px-2"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "flex-1 text-sm text-muted-foreground"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getFilteredSelectedRowModel
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ().
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              rows
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              length
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              of
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              " "
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getFilteredRowModel
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ().
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              rows
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              length
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              row(s) selected.
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "flex items-center space-x-6 lg:space-x-8"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "flex items-center space-x-2"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              p classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "text-sm font-medium"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Rows per page
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              p
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Select
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              value
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ={" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              `${" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getState
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ().
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pagination
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pageSize
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              `
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              onValueChange
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = (
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              value
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              setPageSize
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Number
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              value
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ))
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              SelectTrigger classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "h-8 w-[70px]"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              SelectValue placeholder
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ={" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getState
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ().
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pagination
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pageSize
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              SelectTrigger
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              SelectContent side
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "top"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              [10,
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              20,
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              30,
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              40,
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              50].
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              map
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ((
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pageSize
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              SelectItem key
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ={" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pageSize
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              value
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ={" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              `${" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pageSize
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              `
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pageSize
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              SelectItem
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              SelectContent
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Select
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "flex w-[100px] items-center justify-center
                              text-sm font-medium"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Page{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getState
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ().
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pagination
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              pageIndex{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              +
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              1{" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              of
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              " "
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getPageCount
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "flex items-center space-x-2"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              variant
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "outline"
                            </span>
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
                              "hidden h-8 w-8 p-0 lg:flex"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              onClick
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              setPageIndex
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (0){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              disabled
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = !
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getCanPreviousPage
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "sr-only"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Go to first page
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DoubleArrowLeftIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "h-4 w-4"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              variant
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "outline"
                            </span>
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
                              "h-8 w-8 p-0"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              onClick
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              previousPage
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              disabled
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = !
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getCanPreviousPage
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "sr-only"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Go to previous page
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              ChevronLeftIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "h-4 w-4"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              variant
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "outline"
                            </span>
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
                              "h-8 w-8 p-0"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              onClick
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              nextPage
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              disabled
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = !
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getCanNextPage
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "sr-only"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Go to next page
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              ChevronRightIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "h-4 w-4"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              variant
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "outline"
                            </span>
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
                              "hidden h-8 w-8 p-0 lg:flex"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              onClick
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              setPageIndex
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getPageCount
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ()
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              -
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              1){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              disabled
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = !
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getCanNextPage
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "sr-only"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Go to last page
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              span
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DoubleArrowRightIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "h-4 w-4"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              div
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
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
                  </div>
                </div>
                <div className="absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2 inset-0">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 px-4 py-2 h-8 text-xs"
                    type="button"
                    aria-controls="radix-:r1q:"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    Expand
                  </button>
                </div>
              </div>
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
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      DataTablePagination table
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ={" "}
                    </span>
                    <span className="color: rgb(255, 255, 255);">table</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
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
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="column-toggle"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#column-toggle"
              >
                <span className="icon icon-link"></span>
              </a>
              Column toggle
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              A component to toggle column visibility.
            </p>
            <div data-state="closed">
              <div className="relative my-6 overflow-hidden rounded-md">
                <div
                  data-state="closed"
                  id="radix-:r1r:"
                  className="overflow-hidden max-h-32"
                >
                  <div className="[&amp;_pre]:my-0 [&amp;_pre]:max-h-[650px] [&amp;_pre]:pb-[100px] [&amp;_pre]:overflow-hidden">
                    <div data-rehype-pretty-code-fragment=""></div>
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
                              "use client"
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenuTrigger{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@radix-ui/react-dropdown-menu"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              MixerHorizontalIcon{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@radix-ui/react-icons"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Table{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@tanstack/react-table"
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              Button{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@/components/ui/button"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              import
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenu
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenuCheckboxItem
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenuContent
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenuLabel
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              DropdownMenuSeparator
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              from
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "@/components/ui/dropdown-menu"
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              interface
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              DataTableViewOptionsProps
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              :
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              Table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line"> </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              export
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              function
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              DataTableViewOptions
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;({" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              table
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ,
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              :
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              DataTableViewOptionsProps
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255); font-weight: bold;">
                              TData
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;)
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              return
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenu
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuTrigger asChild
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              variant
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "outline"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              size
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "sm"
                            </span>
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
                              "ml-auto hidden h-8 lg:flex"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              MixerHorizontalIcon classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "mr-2 h-4 w-4"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              View
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Button
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuTrigger
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuContent align
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "end"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              classNameName
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "w-[150px]"
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuLabel
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              Toggle columns
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuLabel
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuSeparator{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              /&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              table
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getAllColumns
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ()
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              filter
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              typeof
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              accessorFn{" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              !==
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              "undefined"
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &amp;&amp;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getCanHide
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ()
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              map
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ((
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              return
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuCheckboxItem
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              key
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ={" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              id
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
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
                              "capitalize"
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              checked
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ={" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              getIsVisible
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              onCheckedChange
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              = (
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              value
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              =&gt;
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              toggleVisibility
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              (!!
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              value
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              ){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              column
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              .
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              id
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuCheckboxItem
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
                              ){" "}
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenuContent
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &lt;/
                            </span>
                            <span className="color: rgb(255, 255, 255);">
                              DropdownMenu
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              &gt;
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgb(255, 255, 255);">
                              {" "}
                            </span>
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              )
                            </span>
                          </span>
                          <span className="line">
                            <span className="color: rgba(255, 255, 255, 0.533);">
                              {" "}
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
                  </div>
                </div>
                <div className="absolute flex items-center justify-center bg-gradient-to-b from-zinc-700/30 to-zinc-950/90 p-2 inset-0">
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 px-4 py-2 h-8 text-xs"
                    type="button"
                    aria-controls="radix-:r1r:"
                    aria-expanded="false"
                    data-state="closed"
                  >
                    Expand
                  </button>
                </div>
              </div>
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
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      DataTableViewOptions table
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ={" "}
                    </span>
                    <span className="color: rgb(255, 255, 255);">table</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
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
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            href="/docs/components/context-menu"
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
            Context Menu
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
            href="/docs/components/date-picker"
          >
            Date Picker
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
export default DataTable;
