import React from "react";
const ComponentJson = () => {
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
          <div className="font-medium text-foreground">components.json</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            components.json
          </h1>
          <p className="text-lg text-muted-foreground">
            <span
              data-br=":Ridttbq6la:"
              data-brr="1"
              className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 340px;"
            >
              Configuration for your project.
            </span>
          </p>
        </div>
        <div className="pb-12 pt-8">
          <div className="mdx">
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                components.json
              </code>{" "}
              file holds configuration for your project.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              We use it to understand how your project is set up and how to
              generate components customized for your project.
            </p>
            <div
              role="alert"
              className="relative w-full rounded-lg border px-4 py-3 text-sm [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground [&amp;>svg~*]:pl-7 bg-background text-foreground mt-6"
            >
              <div className="text-sm [&amp;_p]:leading-relaxed">
                <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                  Note: The{" "}
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    components.json
                  </code>{" "}
                  file is optional and{" "}
                  <strong>only required if you're using the CLI</strong> to add
                  components to your project. If you're using the copy and paste
                  method, you don't need this file.
                </p>
              </div>
            </div>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              You can create a{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                components.json
              </code>{" "}
              file in your project by running the following command:
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
                id="radix-:r0:"
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
              See the{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="/docs/cli"
              >
                CLI section
              </a>{" "}
              for more information.
            </p>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="schema"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#schema"
              >
                <span className="icon icon-link"></span>
              </a>
              $schema
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              You can see the JSON Schema for{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                components.json
              </code>{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://ui.shadcn.com/schema.json"
              >
                here
              </a>
              .
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
                    <span className="color: rgb(255, 255, 255);">$schema</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "https://ui.shadcn.com/schema.json"
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
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="className"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#className"
              >
                <span className="icon icon-link"></span>
              </a>
              className
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The className for your components.{" "}
              <strong>This cannot be changed after initialization.</strong>
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
                    <span className="color: rgb(255, 255, 255);"> | </span>
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
                      aria-controls="radix-:r2:-content-preview"
                      data-state="active"
                      id="radix-:r2:-trigger-preview"
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
                      aria-controls="radix-:r2:-content-code"
                      data-state="inactive"
                      id="radix-:r2:-trigger-code"
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
                  aria-labelledby="radix-:r2:-trigger-preview"
                  id="radix-:r2:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r5:"
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
                  <div className="theme-zinc w-full">
                    <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center">
                      <div className="rounded-xl border bg-card text-card-foreground shadow w-[350px]">
                        <div className="flex flex-col space-y-1.5 p-6">
                          <h3 className="font-semibold leading-none tracking-tight">
                            Create project
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Deploy your new project in one-click.
                          </p>
                        </div>
                        <div className="p-6 pt-0">
                          <form>
                            <div className="grid w-full items-center gap-4">
                              <div className="flex flex-col space-y-1.5">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  Name
                                </label>
                                <input
                                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                  id="name"
                                  placeholder="Name of your project"
                                />
                              </div>
                              <div className="flex flex-col space-y-1.5">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                  Framework
                                </label>
                                <button
                                  type="button"
                                  role="combobox"
                                  aria-controls="radix-:r8:"
                                  aria-expanded="false"
                                  aria-autocomplete="none"
                                  dir="ltr"
                                  data-state="closed"
                                  data-placeholder=""
                                  className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1"
                                  id="framework"
                                >
                                  <span className="pointer-events: none;">
                                    Select
                                  </span>
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
                                <select
                                  aria-hidden="true"
                                  className="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;"
                                >
                                  <option value=""></option>
                                  <option value="next">Next.js</option>
                                  <option value="sveltekit">SvelteKit</option>
                                  <option value="astro">Astro</option>
                                  <option value="nuxt">Nuxt.js</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="items-center p-6 pt-0 flex justify-between">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
                            Cancel
                          </button>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
                            Deploy
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-state="inactive"
                  data-orientation="horizontal"
                  role="tabpanel"
                  aria-labelledby="radix-:r2:-trigger-code"
                  id="radix-:r2:-content-code"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></div>
              </div>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="tailwind"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#tailwind"
              >
                <span className="icon icon-link"></span>
              </a>
              tailwind
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Configuration to help the CLI understand how Tailwind CSS is set
              up in your project.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              See the{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="/docs/installation"
              >
                installation section
              </a>{" "}
              for how to set up Tailwind CSS.
            </p>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="tailwindconfig"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#tailwindconfig"
              >
                <span className="icon icon-link"></span>
              </a>
              tailwind.config
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Path to where your{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                tailwind.config.js
              </code>{" "}
              file is located.
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
                    <span className="color: rgb(255, 255, 255);"> | </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "tailwind.config.ts"
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
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="tailwindcss"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#tailwindcss"
              >
                <span className="icon icon-link"></span>
              </a>
              tailwind.css
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Path to the CSS file that imports Tailwind CSS into your project.
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
                    <span className="color: rgb(255, 255, 255);">css</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "classNames/global.css"
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
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="tailwindbasecolor"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#tailwindbasecolor"
              >
                <span className="icon icon-link"></span>
              </a>
              tailwind.baseColor
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              This is used to generate the default color palette for your
              components.{" "}
              <strong>This cannot be changed after initialization.</strong>
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
                      "gray"
                    </span>
                    <span className="color: rgb(255, 255, 255);"> | </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "neutral"
                    </span>
                    <span className="color: rgb(255, 255, 255);"> | </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "slate"
                    </span>
                    <span className="color: rgb(255, 255, 255);"> | </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "stone"
                    </span>
                    <span className="color: rgb(255, 255, 255);"> | </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "zinc"
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
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="tailwindcssvariables"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#tailwindcssvariables"
              >
                <span className="icon icon-link"></span>
              </a>
              tailwind.cssVariables
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              You can choose between using CSS variables or Tailwind CSS utility
              classNamees for theming.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              To use utility classNamees for theming set{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                tailwind.cssVariables
              </code>{" "}
              to{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                false
              </code>
              . For CSS variables, set{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                tailwind.cssVariables
              </code>{" "}
              to{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                true
              </code>
              .
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
                    <span className="color: rgb(255, 255, 255);">
                      cssVariables
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> `</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      true
                    </span>
                    <span className="color: rgb(255, 255, 255);">` | `</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      false
                    </span>
                    <span className="color: rgb(255, 255, 255);">`</span>
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
              For more information, see the{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="/docs/theming"
              >
                theming docs
              </a>
              .
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              <strong>This cannot be changed after initialization.</strong> To
              switch between CSS variables and utility classNamees, you'll have
              to delete and re-install your components.
            </p>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="tailwindprefix"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#tailwindprefix"
              >
                <span className="icon icon-link"></span>
              </a>
              tailwind.prefix
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The prefix to use for your Tailwind CSS utility classNamees.
              Components will be added with this prefix.
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
                    <span className="color: rgb(255, 255, 255);">prefix</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "tw-"
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
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="rsc"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#rsc"
              >
                <span className="icon icon-link"></span>
              </a>
              rsc
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Whether or not to enable support for React Server Components.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The CLI automatically adds a{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                use client
              </code>{" "}
              directive to client components when set to{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                true
              </code>
              .
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
                    <span className="color: rgb(255, 255, 255);">rsc</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> `</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      true
                    </span>
                    <span className="color: rgb(255, 255, 255);">` | `</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      false
                    </span>
                    <span className="color: rgb(255, 255, 255);">`</span>
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
              id="tsx"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#tsx"
              >
                <span className="icon icon-link"></span>
              </a>
              tsx
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Choose between TypeScript or JavaScript components.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Setting this option to{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                false
              </code>{" "}
              allows components to be added as JavaScript with the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                .jsx
              </code>{" "}
              file extension.
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
                    <span className="color: rgb(255, 255, 255);">tsx</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> `</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      true
                    </span>
                    <span className="color: rgb(255, 255, 255);">` | `</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      false
                    </span>
                    <span className="color: rgb(255, 255, 255);">`</span>
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
              id="aliases"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#aliases"
              >
                <span className="icon icon-link"></span>
              </a>
              aliases
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The CLI uses these values and the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                paths
              </code>{" "}
              config from your{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                tsconfig.json
              </code>{" "}
              or{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                jsconfig.json
              </code>{" "}
              file to place generated components in the correct location.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Path aliases have to be set up in your{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                tsconfig.json
              </code>{" "}
              or{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                jsconfig.json
              </code>{" "}
              file.
            </p>
            <div
              role="alert"
              className="relative w-full rounded-lg border px-4 py-3 text-sm [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground [&amp;>svg~*]:pl-7 bg-background text-foreground mt-6"
            >
              <div className="text-sm [&amp;_p]:leading-relaxed">
                <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                  <strong>Important:</strong> If you're using the{" "}
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    src
                  </code>{" "}
                  directory, make sure it is included under{" "}
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    paths
                  </code>{" "}
                  in your{" "}
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    tsconfig.json
                  </code>{" "}
                  or{" "}
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                    jsconfig.json
                  </code>{" "}
                  file.
                </p>
              </div>
            </div>
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="aliasesutils"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#aliasesutils"
              >
                <span className="icon icon-link"></span>
              </a>
              aliases.utils
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Import alias for your utility functions.
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
            <h3
              className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
              id="aliasescomponents"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#aliasescomponents"
              >
                <span className="icon icon-link"></span>
              </a>
              aliases.components
            </h3>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Import alias for your components.
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
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            href="/docs/installation"
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
            Installation
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
            href="/docs/theming"
          >
            Theming
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
export default ComponentJson;
