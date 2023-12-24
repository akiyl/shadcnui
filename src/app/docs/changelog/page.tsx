import React from "react";
const ChangeLog = () => {
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
          <div className="font-medium text-foreground">Changelog</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Changelog
          </h1>
          <p className="text-lg text-muted-foreground">
            <span
              data-br=":r8j:"
              data-brr="1"
              className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 340px;"
            >
              Latest updates and announcements.
            </span>
          </p>
        </div>
        <div className="pb-12 pt-8">
          <div className="mdx">
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="december-2023---new-components-cli-and-more"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#december-2023---new-components-cli-and-more"
              >
                <span className="icon icon-link"></span>
              </a>
              December 2023 - New components, CLI and more
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              We've added new components to shadcn/ui and made a lot of
              improvements to the CLI.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Here's a quick overview of what's new:
            </p>
            <ul className="my-6 ml-6 list-disc">
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#carousel"
                >
                  <strong>Carousel</strong>
                </a>{" "}
                - A carousel component with motion, swipe gestures and keyboard
                support.
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#drawer"
                >
                  <strong>Drawer</strong>
                </a>{" "}
                - A drawer component that looks amazing on mobile.
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#pagination"
                >
                  <strong>Pagination</strong>
                </a>{" "}
                - A pagination component with page navigation, previous and next
                buttons.
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#resizable"
                >
                  <strong>Resizable</strong>
                </a>{" "}
                - A resizable component for building resizable panel groups and
                layouts.
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#sonner"
                >
                  <strong>Sonner</strong>
                </a>{" "}
                - The last toast component you'll ever need.
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="#cli-updates"
                >
                  <strong>CLI updates</strong>
                </a>{" "}
                - Support for custom <strong>Tailwind prefix</strong> and{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  tailwind.config.ts
                </code>
                .
              </li>
            </ul>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="carousel"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#carousel"
              >
                <span className="icon icon-link"></span>
              </a>
              Carousel
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              We've added a fully featured carousel component with motion, swipe
              gestures and keyboard support. Built on top of{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://www.embla-carousel.com"
              >
                Embla Carousel
              </a>
              .
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              It has support for infinite looping, autoplay, vertical
              orientation, and more.
            </p>
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
                      aria-controls="radix-:r8k:-content-preview"
                      data-state="active"
                      id="radix-:r8k:-trigger-preview"
                      className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                      data-radix-collection-item=""
                    >
                      Preview
                    </button>
                    <button
                      type="button"
                      role="tab"
                      aria-selected="false"
                      aria-controls="radix-:r8k:-content-code"
                      data-state="inactive"
                      id="radix-:r8k:-trigger-code"
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
                  aria-labelledby="radix-:r8k:-trigger-preview"
                  id="radix-:r8k:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r8n:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                    >
                      <span className="text-muted-foreground">className: </span>
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
                      <div
                        className="relative w-full max-w-xs"
                        role="region"
                        aria-roledescription="carousel"
                      >
                        <div className="overflow-hidden">
                          <div className="flex -ml-4">
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                            >
                              <div className="p-1">
                                <div className="rounded-xl border bg-card text-card-foreground shadow">
                                  <div className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">
                                      1
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                            >
                              <div className="p-1">
                                <div className="rounded-xl border bg-card text-card-foreground shadow">
                                  <div className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">
                                      2
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                            >
                              <div className="p-1">
                                <div className="rounded-xl border bg-card text-card-foreground shadow">
                                  <div className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">
                                      3
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                            >
                              <div className="p-1">
                                <div className="rounded-xl border bg-card text-card-foreground shadow">
                                  <div className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">
                                      4
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              role="group"
                              aria-roledescription="slide"
                              className="min-w-0 shrink-0 grow-0 basis-full pl-4"
                            >
                              <div className="p-1">
                                <div className="rounded-xl border bg-card text-card-foreground shadow">
                                  <div className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">
                                      5
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -left-12 top-1/2 -translate-y-1/2">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                          >
                            <path
                              d="M6.85355 3.14645C7.04882 3.34171 7.04882 3.65829 6.85355 3.85355L3.70711 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H3.70711L6.85355 11.1464C7.04882 11.3417 7.04882 11.6583 6.85355 11.8536C6.65829 12.0488 6.34171 12.0488 6.14645 11.8536L2.14645 7.85355C1.95118 7.65829 1.95118 7.34171 2.14645 7.14645L6.14645 3.14645C6.34171 2.95118 6.65829 2.95118 6.85355 3.14645Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Previous slide</span>
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground absolute h-8 w-8 rounded-full -right-12 top-1/2 -translate-y-1/2">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                          >
                            <path
                              d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                              fill="currentColor"
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <span className="sr-only">Next slide</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-state="inactive"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r8k:-trigger-code"
                  id="radix-:r8k:-content-code"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></div>
              </div>
            </div>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="drawer"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#drawer"
              >
                <span className="icon icon-link"></span>
              </a>
              Drawer
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Oh the drawer component 😍. Built on top of{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://github.com/emilkowalski/vaul"
              >
                Vaul
              </a>{" "}
              by{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://twitter.com/emilkowalski_"
              >
                emilkowalski_
              </a>
              .
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Try opening the following drawer on mobile. It looks amazing!
            </p>
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
                    className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-lg border-b bg-transparent p-0"
                    data-orientation="horizontal"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r8o:-content-preview"
                      data-state="active"
                      id="radix-:r8o:-trigger-preview"
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
                      aria-controls="radix-:r8o:-content-code"
                      data-state="inactive"
                      id="radix-:r8o:-trigger-code"
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
                  aria-labelledby="radix-:r8o:-trigger-preview"
                  id="radix-:r8o:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r8r:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                    >
                      <span className="text-muted-foreground">className: </span>
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
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:rba:"
                        data-state="closed"
                      >
                        Open Drawer
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  data-state="inactive"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r8o:-trigger-code"
                  id="radix-:r8o:-content-code"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></div>
              </div>
            </div>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
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
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              We've added a pagination component with page navigation, previous
              and next buttons. Simple, flexible and works with your framework's{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                &lt;Link /&gt;
              </code>{" "}
              component.
            </p>
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
                    className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-lg border-b bg-transparent p-0"
                    data-orientation="horizontal"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r8s:-content-preview"
                      data-state="active"
                      id="radix-:r8s:-trigger-preview"
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
                      aria-controls="radix-:r8s:-content-code"
                      data-state="inactive"
                      id="radix-:r8s:-trigger-code"
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
                  aria-labelledby="radix-:r8s:-trigger-preview"
                  id="radix-:r8s:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r8v:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                    >
                      <span className="text-muted-foreground">className: </span>
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
                      <nav
                        role="navigation"
                        aria-label="pagination"
                        className="mx-auto flex w-full justify-center"
                      >
                        <ul className="flex flex-row items-center gap-1">
                          <li className="">
                            <li className="">
                              <a
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pl-2.5"
                                aria-label="Go to previous page"
                                href="#"
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
                                <span>Previous</span>
                              </a>
                            </li>
                          </li>
                          <li className="">
                            <li className="">
                              <a
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                href="#"
                              >
                                1
                              </a>
                            </li>
                          </li>
                          <li className="">
                            <li className="">
                              <a
                                aria-current="page"
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                href="#"
                              >
                                2
                              </a>
                            </li>
                          </li>
                          <li className="">
                            <li className="">
                              <a
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9"
                                href="#"
                              >
                                3
                              </a>
                            </li>
                          </li>
                          <li className="">
                            <span
                              aria-hidden="true"
                              className="flex h-9 w-9 items-center justify-center"
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
                                  d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                                  fill="currentColor"
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <span className="sr-only">More pages</span>
                            </span>
                          </li>
                          <li className="">
                            <li className="">
                              <a
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 gap-1 pr-2.5"
                                aria-label="Go to next page"
                                href="#"
                              >
                                <span>Next</span>
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
                              </a>
                            </li>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div
                  data-state="inactive"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r8s:-trigger-code"
                  id="radix-:r8s:-content-code"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></div>
              </div>
            </div>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="resizable"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#resizable"
              >
                <span className="icon icon-link"></span>
              </a>
              Resizable
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Build resizable panel groups and layouts with this{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                &lt;Resizable /&gt;
              </code>{" "}
              component.
            </p>
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
                    className="inline-flex h-9 items-center text-muted-foreground w-full justify-start  border-b bg-transparent p-0 rounded-lg"
                    data-orientation="horizontal"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r90:-content-preview"
                      data-state="active"
                      id="radix-:r90:-trigger-preview"
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
                      aria-controls="radix-:r90:-content-code"
                      data-state="inactive"
                      id="radix-:r90:-trigger-code"
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
                  aria-labelledby="radix-:r90:-trigger-preview"
                  id="radix-:r90:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r93:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                    >
                      <span className="text-muted-foreground">className: </span>
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
                      <div
                        className="flex h-full w-full data-[panel-group-direction=vertical]:flex-col max-w-md rounded-lg border"
                        data-panel-group=""
                        data-panel-group-direction="horizontal"
                        data-panel-group-id=":rbd:"
                        data-panel-group-units="percentages"
                      >
                        <div
                          data-panel=""
                          data-panel-id=":rbe:"
                          data-panel-size="50.0"
                          id="data-panel-id-:rbe:"
                          className="flex: 50 1 0px; overflow: hidden;"
                        >
                          <div className="flex h-[200px] items-center justify-center p-6">
                            <span className="font-semibold">One</span>
                          </div>
                        </div>
                        <div className="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 "></div>
                        <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-2.5 w-2.5"
                          >
                            <circle cx="9" cy="12" r="1"></circle>
                            <circle cx="9" cy="5" r="1"></circle>
                            <circle cx="9" cy="19" r="1"></circle>
                            <circle cx="15" cy="12" r="1"></circle>
                            <circle cx="15" cy="5" r="1"></circle>
                            <circle cx="15" cy="19" r="1"></circle>
                          </svg>
                        </div>
                      </div>
                      <div
                        data-panel=""
                        data-panel-id=":rbg:"
                        data-panel-size="50.0"
                        id="data-panel-id-:rbg:"
                        className="flex: 50 1 0px; overflow: hidden;"
                      >
                        <div
                          className="flex h-full w-full data-[panel-group-direction=vertical]:flex-col"
                          data-panel-group=""
                          data-panel-group-direction="vertical"
                          data-panel-group-id=":rbh:"
                          data-panel-group-units="percentages"
                        >
                          <div
                            data-panel=""
                            data-panel-id=":rbi:"
                            data-panel-size="25.0"
                            id="data-panel-id-:rbi:"
                            className="flex: 25 1 0px; overflow: hidden;"
                          >
                            <div className="flex h-full items-center justify-center p-6">
                              <span className="font-semibold">Two</span>
                            </div>
                          </div>
                          <div className="relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0">
                            <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="h-2.5 w-2.5"
                              >
                                <circle cx="9" cy="12" r="1"></circle>
                                <circle cx="9" cy="5" r="1"></circle>
                                <circle cx="9" cy="19" r="1"></circle>
                                <circle cx="15" cy="12" r="1"></circle>
                                <circle cx="15" cy="5" r="1"></circle>
                                <circle cx="15" cy="19" r="1"></circle>
                              </svg>
                            </div>
                          </div>
                          <div
                            data-panel=""
                            data-panel-id=":rbk:"
                            data-panel-size="75.0"
                            id="data-panel-id-:rbk:"
                            className="flex: 75 1 0px; overflow: hidden;"
                          >
                            <div className="flex h-full items-center justify-center p-6">
                              <span className="font-semibold">Three</span>
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
                aria-labelledby="radix-:r90:-trigger-code"
                id="radix-:r90:-content-code"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
            </div>
          </div>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              &lt;Resizable /&gt;
            </code>{" "}
            is built using{" "}
            <a
              className="font-medium underline underline-offset-4"
              href="https://github.com/bvaughn/react-resizable-panels"
            >
              react-resizable-panels
            </a>{" "}
            by{" "}
            <a
              className="font-medium underline underline-offset-4"
              href="https://github.com/bvaughn"
            >
              bvaughn
            </a>
            . It has support for mouse, touch and keyboard.
          </p>
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="sonner"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#sonner"
            >
              <span className="icon icon-link"></span>
            </a>
            Sonner
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            Another one by{" "}
            <a
              className="font-medium underline underline-offset-4"
              href="https://twitter.com/emilkowalski_"
            >
              emilkowalski_
            </a>
            . The last toast component you'll ever need. Sonner is now availabe
            in shadcn/ui.
          </p>
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
                    aria-controls="radix-:r94:-content-preview"
                    data-state="active"
                    id="radix-:r94:-trigger-preview"
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
                    aria-controls="radix-:r94:-content-code"
                    data-state="inactive"
                    id="radix-:r94:-trigger-code"
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
                aria-labelledby="radix-:r94:-trigger-preview"
                id="radix-:r94:-content-preview"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
              >
                <div className="flex items-center justify-between p-4">
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r97:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                  >
                    <span className="text-muted-foreground">className: </span>
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
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                      Show Toast
                    </button>
                  </div>
                </div>
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r94:-trigger-code"
                id="radix-:r94:-content-code"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
            </div>
          </div>
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="cli-updates"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#cli-updates"
            >
              <span className="icon icon-link"></span>
            </a>
            CLI updates
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            This has been one of the most requested features. You can now
            configure a custom Tailwind prefix and the cli will automatically
            prefix your utility classNamees when adding components.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            This means you can now easily add shadcn/ui components to existing
            projects like Docusaurus, Nextra...etc. A drop-in for your existing
            design system with no conflict. 🔥
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
                    AlertDialog classNameName
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">=</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="word--highlighted">tw-</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    grid{" "}
                  </span>
                  <span className="word--highlighted">tw-</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    gap-4{" "}
                  </span>
                  <span className="word--highlighted">tw-</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    border{" "}
                  </span>
                  <span className="word--highlighted">tw-</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    bg-background{" "}
                  </span>
                  <span className="word--highlighted">tw-</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    shadow-lg"
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
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            It works with{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              cn
            </code>
            ,{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              cva
            </code>{" "}
            and CSS variables.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            The cli can now also detect{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              tailwind.config.ts
            </code>{" "}
            and add the TypeScript version of the config for you.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            That's it. Happy Holidays.
          </p>
          <h2
            className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
            id="july-2023---javascript"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#july-2023---javascript"
            >
              <span className="icon icon-link"></span>
            </a>
            July 2023 - JavaScript
          </h2>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            This project and the components are written in TypeScript.{" "}
            <strong>
              We recommend using TypeScript for your project as well
            </strong>
            .
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            However we provide a JavaScript version of the components, available
            via the{" "}
            <a
              className="font-medium underline underline-offset-4"
              href="/docs/cli"
            >
              cli
            </a>
            .
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
                  <span className="color: rgb(255, 255, 255);">
                    Would you like to use TypeScript (recommended)? no
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
            To opt-out of TypeScript, you can use the{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              tsx
            </code>{" "}
            flag in your{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              components.json
            </code>{" "}
            file.
          </p>
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="json"
              data-theme="default"
            >
              components.json
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="json"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="json"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">className</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "default"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">tailwind</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">config</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "tailwind.config.js"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">css</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "src/app/globals.css"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">baseColor</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "zinc"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">
                    cssVariables
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    true
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">rsc</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    false,
                  </span>
                </span>
                <span className="line line--highlighted">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">tsx</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    false,
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">aliases</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">utils</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "~/lib/utils"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">components</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "~/components"
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            To configure import aliases, you can use the following{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              jsconfig.json
            </code>
            :
          </p>
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="json"
              data-theme="default"
            >
              jsconfig.json
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="json"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="json"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">
                    compilerOptions
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">paths</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line line--highlighted">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">@/*</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">[</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "./*"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">]</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
          <h2
            className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
            id="june-2023---new-cli-classNames-and-more"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#june-2023---new-cli-classNames-and-more"
            >
              <span className="icon icon-link"></span>
            </a>
            June 2023 - New CLI, classNames and more
          </h2>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            I have a lot of updates to share with you today:
          </p>
          <ul className="my-6 ml-6 list-disc">
            <li className="mt-2">
              <a
                className="font-medium underline underline-offset-4"
                href="#new-cli"
              >
                <strong>New CLI</strong>
              </a>{" "}
              - Rewrote the CLI from scratch. You can now add components,
              dependencies and configure import paths.
            </li>
            <li className="mt-2">
              <a
                className="font-medium underline underline-offset-4"
                href="#theming-with-css-variables-or-tailwind-colors"
              >
                <strong>Theming</strong>
              </a>{" "}
              - Choose between using CSS variables or Tailwind CSS utility
              classNamees for theming.
            </li>
            <li className="mt-2">
              <a
                className="font-medium underline underline-offset-4"
                href="#base-color"
              >
                <strong>Base color</strong>
              </a>{" "}
              - Configure the base color for your project. This will be used to
              generate the default color palette for your components.
            </li>
            <li className="mt-2">
              <a
                className="font-medium underline underline-offset-4"
                href="#react-server-components"
              >
                <strong>React Server Components</strong>
              </a>{" "}
              - Opt out of using React Server Components. The CLI will
              automatically append or remove the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                use client
              </code>{" "}
              directive.
            </li>
            <li className="mt-2">
              <a
                className="font-medium underline underline-offset-4"
                href="#classNames"
              >
                <strong>classNames</strong>
              </a>{" "}
              - Introducing a new concept called <em>className</em>. A className
              comes with its own set of components, animations, icons and more.
            </li>
            <li className="mt-2">
              <a
                className="font-medium underline underline-offset-4"
                href="#exit-animations"
              >
                <strong>Exit animations</strong>
              </a>{" "}
              - Added exit animations to all components.
            </li>
            <li className="mt-2">
              <a
                className="font-medium underline underline-offset-4"
                href="#other-updates"
              >
                <strong>Other updates</strong>
              </a>{" "}
              - New{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                icon
              </code>{" "}
              button size, updated{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                sheet
              </code>{" "}
              component and more.
            </li>
            <li className="mt-2">
              <a
                className="font-medium underline underline-offset-4"
                href="#updating-your-project"
              >
                <strong>Updating your project</strong>
              </a>{" "}
              - How to update your project to get the latest changes.
            </li>
          </ul>
          <hr className="my-4 md:my-8" />
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="new-cli"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#new-cli"
            >
              <span className="icon icon-link"></span>
            </a>
            New CLI
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            I've been working on a new CLI for the past few weeks. It's a
            complete rewrite. It comes with a lot of new features and
            improvements.
          </p>
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="init"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#init"
            >
              <span className="icon icon-link"></span>
            </a>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              init
            </code>
          </h3>
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
                    init
                  </span>
                </span>
              </code>
            </pre>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
              type="button"
              id="radix-:r98:"
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
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            When you run the{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              init
            </code>{" "}
            command, you will be asked a few questions to configure{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              components.json
            </code>
            :
          </p>
          <div data-rehype-pretty-code-fragment="">
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="txt"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-line-numbers=""
                data-language="txt"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    Which className would you like to use? › Default
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    Which color would you like to use as base color? › Slate
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    Where is your global CSS file? › › app/globals.css
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    Do you want to use CSS variables for colors? › no / yes
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    Where is your tailwind.config.js located? ›
                    tailwind.config.js
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    Configure the import alias for components: › @/components
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    Configure the import alias for utils: › @/lib/utils
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    Are you using React Server Components? › no / yes
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
            This file contains all the information about your components: where
            to install them, the import paths, how they are classNamed...etc.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            You can use this file to change the import path of a component, set
            a baseColor or change the styling method.
          </p>
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="json"
              data-theme="default"
            >
              components.json
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="json"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="json"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">className</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "default"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">tailwind</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">config</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "tailwind.config.ts"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">css</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "src/app/globals.css"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">baseColor</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "zinc"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">
                    cssVariables
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    true
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">rsc</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    false,
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">aliases</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">utils</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "~/lib/utils"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">components</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "~/components"
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            This means you can now use the CLI with any directory structure
            including{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              src
            </code>{" "}
            and{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              app
            </code>{" "}
            directories.
          </p>
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="add"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#add"
            >
              <span className="icon icon-link"></span>
            </a>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              add
            </code>
          </h3>
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
                </span>
              </code>
            </pre>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
              type="button"
              id="radix-:r9a:"
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
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            The{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              add
            </code>{" "}
            command is now much more capable. You can now add UI components but
            also import more complex components (coming soon).
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            The CLI will automatically resolve all components and dependencies,
            format them based on your custom config and add them to your
            project.
          </p>
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="diff-experimental"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#diff-experimental"
            >
              <span className="icon icon-link"></span>
            </a>
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              diff
            </code>{" "}
            (experimental)
          </h3>
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
                    shadcn-ui
                  </span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    diff
                  </span>
                </span>
              </code>
            </pre>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
              type="button"
              id="radix-:r9c:"
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
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            We're also introducing a new{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              diff
            </code>{" "}
            command to help you keep track of upstream updates.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            You can use this command to see what has changed in the upstream
            repository and update your project accordingly.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            Run the{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              diff
            </code>{" "}
            command to get a list of components that have updates available:
          </p>
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
                    shadcn-ui
                  </span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    diff
                  </span>
                </span>
              </code>
            </pre>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
              type="button"
              id="radix-:r9e:"
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
                  <span className="color: rgb(255, 255, 255);">
                    The following components have updates available:
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">- button</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    {" "}
                    - /path/to/my-app/components/ui/button.tsx
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">- toast</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    {" "}
                    - /path/to/my-app/components/ui/use-toast.ts
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    {" "}
                    - /path/to/my-app/components/ui/toaster.tsx
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
            Then run{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              diff [component]
            </code>{" "}
            to see the changes:
          </p>
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
                    shadcn-ui
                  </span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    diff
                  </span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    alert
                  </span>
                </span>
              </code>
            </pre>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
              type="button"
              id="radix-:r9g:"
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
          <div data-rehype-pretty-code-fragment="">
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="diff"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="diff"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    const alertVariants = cva(
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);">-</span>
                  <span className="color: rgb(255, 255, 255);">
                    {" "}
                    "relative w-full rounded-lg border",
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);">+</span>
                  <span className="color: rgb(255, 255, 255);">
                    {" "}
                    "relative w-full{" "}
                  </span>
                  <span className="word--highlighted">pl-12</span>
                  <span className="color: rgb(255, 255, 255);">
                    {" "}
                    rounded-lg border"
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">)</span>
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
          <hr className="my-4 md:my-8" />
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="theming-with-css-variables-or-tailwind-colors"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#theming-with-css-variables-or-tailwind-colors"
            >
              <span className="icon icon-link"></span>
            </a>
            Theming with CSS Variables or Tailwind Colors
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            You can choose between using CSS variables or Tailwind CSS utility
            classNamees for theming.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            When you add new components, the CLI will automatically use the
            correct theming methods based on your{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              components.json
            </code>{" "}
            configuration.
          </p>
          <h4
            className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
            id="utility-classNamees"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#utility-classNamees"
            >
              <span className="icon icon-link"></span>
            </a>
            Utility classNamees
          </h4>
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
                  <span className="color: rgba(255, 255, 255, 0.533);">=</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="word--highlighted">bg-zinc-950</span>
                  <span className="color: rgba(255, 255, 255, 0.533);"> </span>
                  <span className="word--highlighted">dark:bg-white</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
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
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            To use utility classNamees for theming set{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              tailwind.cssVariables
            </code>{" "}
            to{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              false
            </code>{" "}
            in your{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              components.json
            </code>{" "}
            file.
          </p>
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="json"
              data-theme="default"
            >
              components.json
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="json"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="json"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">tailwind</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">config</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "tailwind.config.js"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">css</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "app/globals.css"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">baseColor</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "slate"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line line--highlighted">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">
                    cssVariables
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    false
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
          <h4
            className="font-heading mt-8 scroll-m-20 text-lg font-semibold tracking-tight"
            id="css-variables"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#css-variables"
            >
              <span className="icon icon-link"></span>
            </a>
            CSS Variables
          </h4>
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
                  <span className="color: rgba(255, 255, 255, 0.533);">=</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="word--highlighted">bg-background</span>
                  <span className="color: rgba(255, 255, 255, 0.533);"> </span>
                  <span className="word--highlighted">text-foreground</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
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
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            To use CSS variables classNamees for theming set{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              tailwind.cssVariables
            </code>{" "}
            to{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              true
            </code>{" "}
            in your{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              components.json
            </code>{" "}
            file.
          </p>
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="json"
              data-theme="default"
            >
              components.json
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="json"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="json"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">tailwind</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">config</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "tailwind.config.js"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">css</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "app/globals.css"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">baseColor</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "slate"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line line--highlighted">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">
                    cssVariables
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    true
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
          <hr className="my-4 md:my-8" />
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="base-color"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#base-color"
            >
              <span className="icon icon-link"></span>
            </a>
            Base color
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            You can now configure the base color for your project. This will be
            used to generate the default color palette for your components.
          </p>
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="json"
              data-theme="default"
            >
              components.json
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="json"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="json"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">tailwind</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">config</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "tailwind.config.js"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">css</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "app/globals.css"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line line--highlighted">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">baseColor</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "zinc"
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">,</span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">
                    cssVariables
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    false
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            Choose between{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              gray
            </code>
            ,{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              neutral
            </code>
            ,{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              slate
            </code>
            ,{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              stone
            </code>{" "}
            or{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              zinc
            </code>
            .
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            If you have{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              cssVariables
            </code>{" "}
            set to{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              true
            </code>
            , we will set the base colors as CSS variables in your{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              globals.css
            </code>{" "}
            file. If you have{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              cssVariables
            </code>{" "}
            set to{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              false
            </code>
            , we will inline the Tailwind CSS utility classNamees in your
            components.
          </p>
          <hr className="my-4 md:my-8" />
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="react-server-components"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#react-server-components"
            >
              <span className="icon icon-link"></span>
            </a>
            React Server Components
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            If you're using a framework that does not support React Server
            Components, you can now opt out by setting{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              rsc
            </code>{" "}
            to{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              false
            </code>
            . We will automatically append or remove the{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              use client
            </code>{" "}
            directive when adding components.
          </p>
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="json"
              data-theme="default"
            >
              components.json
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="json"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="json"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">rsc</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    false
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
          <hr className="my-4 md:my-8" />
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="classNames"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#classNames"
            >
              <span className="icon icon-link"></span>
            </a>
            classNames
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            We are introducing a new concept called <em>className</em>.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            <em>
              You can think of className as the visual foundation: shapes,
              icons, animations &amp; typography.
            </em>{" "}
            A className comes with its own set of components, animations, icons
            and more.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            We are shipping two classNames:{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              default
            </code>{" "}
            and{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              new-york
            </code>{" "}
            (with more coming soon).
          </p>
          <img
            alt="Default vs New York className"
            loading="lazy"
            width="716"
            height="402"
            decoding="async"
            data-nimg="1"
            className="border rounded-lg overflow-hidden mt-6"
            src="/_next/image?url=%2Fimages%2FclassName.jpg&amp;w=1920&amp;q=75"
          />
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            The{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              default
            </code>{" "}
            className is the one you are used to. It's the one we've been using
            since the beginning of this project. It uses{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              lucide-react
            </code>{" "}
            for icons and{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              tailwindcss-animate
            </code>{" "}
            for animations.
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            The{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              new-york
            </code>{" "}
            className is a new className. It ships with smaller buttons, cards
            with shadows and a new set of icons from{" "}
            <a
              className="font-medium underline underline-offset-4"
              href="https://icons.radix-ui.com"
            >
              Radix Icons
            </a>
            .
          </p>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            When you run the{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              init
            </code>{" "}
            command, you will be asked which className you would like to use.
            This is saved in your{" "}
            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
              components.json
            </code>{" "}
            file.
          </p>
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="json"
              data-theme="default"
            >
              components.json
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="json"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="json"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgba(255, 255, 255, 0.533);"></span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgb(255, 255, 255);">className</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                  <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                  <span className="color: rgb(255, 255, 255);"> </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">
                    "new-york"
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
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="theming"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#theming"
            >
              <span className="icon icon-link"></span>
            </a>
            Theming
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            Start with a className as the base then theme using CSS variables or
            Tailwind CSS utility classNamees to completely change the look of
            your components.
          </p>
          <img
            alt="className with theming"
            loading="lazy"
            width="716"
            height="402"
            decoding="async"
            data-nimg="1"
            className="border rounded-lg overflow-hidden mt-6"
            src="/_next/image?url=%2Fimages%2FclassName-with-theming.jpg&amp;w=1920&amp;q=75"
          />
          <hr className="my-4 md:my-8" />
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="exit-animations"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#exit-animations"
            >
              <span className="icon icon-link"></span>
            </a>
            Exit animations
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            I added exit animations to all components. Click on the combobox
            below to see the subtle exit animation.
          </p>
          <div className="group relative my-4 flex flex-col space-y-2 [&amp;_.preview]:items-start">
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
                    aria-controls="radix-:r9i:-content-preview"
                    data-state="active"
                    id="radix-:r9i:-trigger-preview"
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
                    aria-controls="radix-:r9i:-content-code"
                    data-state="inactive"
                    id="radix-:r9i:-trigger-code"
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
                aria-labelledby="radix-:r9i:-trigger-preview"
                id="radix-:r9i:-content-preview"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
              >
                <div className="flex items-center justify-between p-4">
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r9l:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                  >
                    <span className="text-muted-foreground">className: </span>
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
                    <button
                      className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-[200px] justify-between"
                      role="combobox"
                      aria-expanded="false"
                      type="button"
                      aria-haspopup="dialog"
                      aria-controls="radix-:rbl:"
                      data-state="closed"
                    >
                      Select framework...
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
                </div>
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r9i:-trigger-code"
                id="radix-:r9i:-content-code"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
            </div>
          </div>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            The animations can be customized using utility classNamees.
          </p>
          <hr className="my-4 md:my-8" />
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="other-updates"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#other-updates"
            >
              <span className="icon icon-link"></span>
            </a>
            Other updates
          </h3>
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="button"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#button"
            >
              <span className="icon icon-link"></span>
            </a>
            Button
          </h3>
          <ul className="my-6 ml-6 list-disc">
            <li className="mt-2">
              Added a new button size{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                icon
              </code>
              :
            </li>
          </ul>
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
                    aria-controls="radix-:r9m:-content-preview"
                    data-state="active"
                    id="radix-:r9m:-trigger-preview"
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
                    aria-controls="radix-:r9m:-content-code"
                    data-state="inactive"
                    id="radix-:r9m:-trigger-code"
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
                aria-labelledby="radix-:r9m:-trigger-preview"
                id="radix-:r9m:-content-preview"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
              >
                <div className="flex items-center justify-between p-4">
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r9p:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                  >
                    <span className="text-muted-foreground">className: </span>
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
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9">
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
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r9m:-trigger-code"
                id="radix-:r9m:-content-code"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
            </div>
          </div>
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="sheet"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#sheet"
            >
              <span className="icon icon-link"></span>
            </a>
            Sheet
          </h3>
          <ul className="my-6 ml-6 list-disc">
            <li className="mt-2">
              Renamed{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                position
              </code>{" "}
              to{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                side
              </code>{" "}
              to match the other elements.
            </li>
          </ul>
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
                  className="inline-flex h-9 items-center text-muted-foreground w-full justify-start  border-b bg-transparent p-0 rounded-lg"
                  data-orientation="horizontal"
                >
                  <button
                    type="button"
                    role="tab"
                    aria-selected="true"
                    aria-controls="radix-:r9q:-content-preview"
                    data-state="active"
                    id="radix-:r9q:-trigger-preview"
                    className="inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
                    data-orientation="horizontal"
                    data-radix-collection-item=""
                  >
                    Preview
                  </button>
                  <button
                    type="button"
                    aria-selected="false"
                    aria-controls="radix-:r9q:-content-code"
                    data-state="inactive"
                    id="radix-:r9q:-trigger-code"
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
                aria-labelledby="radix-:r9q:-trigger-preview"
                id="radix-:r9q:-content-preview"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
              >
                <div className="flex items-center justify-between p-4">
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r9t:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 h-7 w-[145px] text-xs [&amp;_svg]:h-4 [&amp;_svg]:w-4"
                  >
                    <span className="text-muted-foreground">className: </span>
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
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:rbm:"
                        data-state="closed"
                      >
                        top
                      </button>
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:rbp:"
                        data-state="closed"
                      >
                        right
                      </button>
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:rbs:"
                        data-state="closed"
                      >
                        bottom
                      </button>
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:rbv:"
                        data-state="closed"
                      >
                        left
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r9q:-trigger-code"
                id="radix-:r9q:-content-code"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></div>
            </div>
          </div>
          <ul className="my-6 ml-6 list-disc">
            <li className="mt-2">
              Removed the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                size
              </code>{" "}
              props. Use{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                classNameName="w-[200px] md:w-[450px]"
              </code>{" "}
              for responsive sizing.
            </li>
          </ul>
          <hr className="my-4 md:my-8" />
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="updating-your-project"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#updating-your-project"
            >
              <span className="icon icon-link"></span>
            </a>
            Updating your project
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            Since we follow a copy and paste approach, you will need to manually
            update your project to get the latest changes.
          </p>
          <div
            role="alert"
            className="relative w-full rounded-lg border px-4 py-3 text-sm [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground [&amp;>svg~*]:pl-7 bg-background text-foreground mt-4"
          >
            <div className="text-sm [&amp;_p]:leading-relaxed">
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Note: we are working on a{" "}
                <a
                  className="font-medium underline underline-offset-4"
                  href="#diff-experimental"
                >
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    diff
                  </code>
                </a>{" "}
                command to help you keep track of upstream updates.
              </p>
            </div>
          </div>
          <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="add-componentsjson"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#add-componentsjson"
              >
                <span className="icon icon-link"></span>
              </a>
              Add{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                components.json
              </code>
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Creating a{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                components.json
              </code>{" "}
              file at the root:
            </p>
            <div data-rehype-pretty-code-fragment="">
              <div
                data-rehype-pretty-code-title=""
                data-language="json"
                data-theme="default"
              >
                components.json
              </div>
              <pre
                className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="json"
                data-theme="default"
              >
                <code
                  className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  data-language="json"
                  data-theme="default"
                >
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      className
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "default"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">rsc</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      true,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">tailwind</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">config</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "tailwind.config.js"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">css</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "app/globals.css"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      baseColor
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "slate"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      cssVariables
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      true
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
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">aliases</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      components
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "@/components"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">utils</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "@/lib/utils"
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Update the values for{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                tailwind.css
              </code>{" "}
              and{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                aliases
              </code>{" "}
              to match your project structure.
            </p>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="button-1"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#button-1"
              >
                <span className="icon icon-link"></span>
              </a>
              Button
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Add the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                icon
              </code>{" "}
              size to the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                buttonVariants
              </code>
              :
            </p>
            <div data-rehype-pretty-code-fragment="">
              <div
                data-rehype-pretty-code-title=""
                data-language="tsx"
                data-theme="default"
              >
                components/ui/button.tsx
              </div>
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
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      buttonVariants{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> cva</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      variants
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> size</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> default</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "h-10 px-4 py-2"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> sm</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "h-9 rounded-md px-3"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> lg</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "h-11 rounded-md px-8"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line line--highlighted">
                    <span className="color: rgb(255, 255, 255);"> icon</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "h-10 w-10"
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
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
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
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="sheet-1"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#sheet-1"
              >
                <span className="icon icon-link"></span>
              </a>
              Sheet
            </h3>
            <ol className="my-6 ml-6 list-decimal">
              <li className="mt-2">
                Replace the content of{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  sheet.tsx
                </code>{" "}
                with the following:
              </li>
            </ol>
            <div data-rehype-pretty-code-fragment="">
              <div
                data-rehype-pretty-code-title=""
                data-language="tsx"
                data-theme="default"
              >
                components/ui/sheet.tsx
              </div>
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
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      *
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      as
                    </span>
                    <span className="color: rgb(255, 255, 255);"> React </span>
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
                      *
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      as
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      from
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "@radix-ui/react-dialog"
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      import
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> cva</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      type
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      VariantProps{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      from
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "className-variance-authority"
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      import
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> X </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
                      import
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> cn </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      from
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "@/lib/utils"
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);"> Sheet </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Root</span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetTrigger{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Trigger</span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetClose{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Close</span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      SheetPortal
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ...
                    </span>
                    <span className="color: rgb(255, 255, 255);">props</span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      DialogPortalProps
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
                      SheetPrimitive.Portal classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">cn</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">props</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      SheetPortal
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Portal</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetOverlay{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      forwardRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      ElementRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;typeof
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Overlay</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      ComponentPropsWithoutRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;typeof
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Overlay</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ...
                    </span>
                    <span className="color: rgb(255, 255, 255);">props </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> ref</span>
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
                      SheetPrimitive.Overlay
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
                    <span className="color: rgb(255, 255, 255);">cn</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">props</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> ref</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">ref</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      SheetOverlay
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Overlay</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      sheetVariants{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> cva</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "fixed z-50 gap-4 bg-background p-6 shadow-lg transition
                      ease-in-out data-[state=open]:animate-in
                      data-[state=closed]:animate-out
                      data-[state=closed]:duration-300
                      data-[state=open]:duration-500"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      variants
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> side</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> top</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "inset-x-0 top-0 border-b
                      data-[state=closed]:slide-out-to-top
                      data-[state=open]:slide-in-from-top"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> bottom</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "inset-x-0 bottom-0 border-t
                      data-[state=closed]:slide-out-to-bottom
                      data-[state=open]:slide-in-from-bottom"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> left</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "inset-y-0 left-0 h-full w-3/4 border-r
                      data-[state=closed]:slide-out-to-left
                      data-[state=open]:slide-in-from-left sm:max-w-sm"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> right</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "inset-y-0 right-0 h-full w-3/4 border-l
                      data-[state=closed]:slide-out-to-right
                      data-[state=open]:slide-in-from-right sm:max-w-sm"
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
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      defaultVariants
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> side</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "right"
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
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      )
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      interface
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      SheetContentProps
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      extends
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      React
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      ComponentPropsWithoutRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;typeof
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Content</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      VariantProps
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;typeof
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      sheetVariants
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {}
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetContent{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      forwardRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      ElementRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;typeof
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Content</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetContentProps
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                    <span className="color: rgb(255, 255, 255);"> side </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "right"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      children
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ...
                    </span>
                    <span className="color: rgb(255, 255, 255);">props </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> ref</span>
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
                      SheetPortal
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
                      SheetOverlay{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      SheetPrimitive.Content
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> ref</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">ref</span>
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
                    <span className="color: rgb(255, 255, 255);">cn</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      sheetVariants
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> side </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">props</span>
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
                    <span className="color: rgb(255, 255, 255);">children</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      SheetPrimitive.Close classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "absolute right-4 top-4 rounded-sm opacity-70
                      ring-offset-background transition-opacity
                      hover:opacity-100 focus:outline-none focus:ring-2
                      focus:ring-ring focus:ring-offset-2
                      disabled:pointer-events-none
                      data-[state=open]:bg-secondary"
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
                      X classNameName
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
                  <span className="line">
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
                    <span className="color: rgb(255, 255, 255);">Close</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;/
                    </span>
                    <span className="color: rgb(255, 255, 255);">span</span>
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
                      SheetPrimitive.Close
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
                      SheetPrimitive.Content
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
                      SheetPortal
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ))
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      SheetContent
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Content</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      SheetHeader
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ...
                    </span>
                    <span className="color: rgb(255, 255, 255);">props</span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> </span>
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
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
                    <span className="color: rgb(255, 255, 255);">div</span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">cn</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "flex flex-col space-y-2 text-center sm:text-left"
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
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">props</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      SheetHeader
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "SheetHeader"
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgb(255, 255, 255); font-weight: bold;">
                      SheetFooter
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ...
                    </span>
                    <span className="color: rgb(255, 255, 255);">props</span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> </span>
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
                      &gt;)
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
                    <span className="color: rgb(255, 255, 255);">div</span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">cn</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "flex flex-col-reverse sm:flex-row sm:justify-end
                      sm:space-x-2"
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
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">props</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
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
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      SheetFooter
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "SheetFooter"
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetTitle{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      forwardRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      ElementRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;typeof
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Title</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      ComponentPropsWithoutRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;typeof
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Title</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ...
                    </span>
                    <span className="color: rgb(255, 255, 255);">props </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> ref</span>
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
                      SheetPrimitive.Title
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> ref</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">ref</span>
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
                    <span className="color: rgb(255, 255, 255);">cn</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "text-lg font-semibold text-foreground"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      )
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">props</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ))
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      SheetTitle
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">Title</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetDescription{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      forwardRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      ElementRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;typeof
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      Description
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> React</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      ComponentPropsWithoutRef
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;typeof
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      Description
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ...
                    </span>
                    <span className="color: rgb(255, 255, 255);">props </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);"> ref</span>
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
                      SheetPrimitive.Description
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> ref</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">ref</span>
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
                    <span className="color: rgb(255, 255, 255);">cn</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      (
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "text-sm text-muted-foreground"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);">props</span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ))
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      SheetDescription
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetPrimitive
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      Description
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      displayName
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      export
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> Sheet</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetTrigger
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetClose
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetContent
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetHeader
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetFooter
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetTitle
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      SheetDescription
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ,
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
            <ol className="my-6 ml-6 list-decimal">
              <li className="mt-2">
                Rename{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  position
                </code>{" "}
                to{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  side
                </code>
              </li>
            </ol>
            <div data-rehype-pretty-code-fragment="">
              <pre
                className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="diff"
                data-theme="default"
              >
                <code
                  className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  data-language="diff"
                  data-theme="default"
                >
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      -
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      &lt;Sheet{" "}
                    </span>
                    <span className="word--highlighted">position</span>
                    <span className="color: rgb(255, 255, 255);">
                      ="right" /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      +
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      &lt;Sheet{" "}
                    </span>
                    <span className="word--highlighted">side</span>
                    <span className="color: rgb(255, 255, 255);">
                      ="right" /&gt;
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
          <h3
            className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
            id="thank-you"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#thank-you"
            >
              <span className="icon icon-link"></span>
            </a>
            Thank you
          </h3>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            I'd like to thank everyone who has been using this project,
            providing feedback and contributing to it. I really appreciate it.
            Thank you 🙏
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <a
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
          href="/docs/figma"
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
          Figma
        </a>
        <a
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
          href="/docs/components/accordion"
        >
          Accordion
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
    </>
  );
};
export default ChangeLog;
