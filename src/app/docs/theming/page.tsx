import React from "react";
const Theming = () => {
  return (
    <>
      <div className="mdx">
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          You can choose between using CSS variables or Tailwind CSS utility
          classNamees for theming.
        </p>
        <h2
          className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
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
                <span className="color: rgba(255, 255, 255, 0.533);">&lt;</span>
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
                <span className="color: rgb(255, 255, 255);">rsc</span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  true,
                </span>
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
                <span className="color: rgb(255, 255, 255);">cssVariables</span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  false
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">,</span>
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
                <span className="color: rgb(255, 255, 255);">components</span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  "@/components"
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">,</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgb(255, 255, 255);">utils</span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
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
        <h2
          className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
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
                <span className="color: rgba(255, 255, 255, 0.533);">&lt;</span>
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
          To use CSS variables for theming set{" "}
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
                <span className="color: rgb(255, 255, 255);">rsc</span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  true,
                </span>
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
                <span className="color: rgb(255, 255, 255);">cssVariables</span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">true</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">,</span>
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
                <span className="color: rgb(255, 255, 255);">components</span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  "@/components"
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">,</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgb(255, 255, 255);">utils</span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
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
          id="convention"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#convention"
          >
            <span className="icon icon-link"></span>
          </a>
          Convention
        </h3>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          We use a simple{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            background
          </code>{" "}
          and{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            foreground
          </code>{" "}
          convention for colors. The{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            background
          </code>{" "}
          variable is used for the background color of the component and the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            foreground
          </code>{" "}
          variable is used for the text color.
        </p>
        <div
          role="alert"
          className="relative w-full rounded-lg border px-4 py-3 text-sm [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground [&amp;>svg~*]:pl-7 bg-background text-foreground mt-4"
        >
          <div className="text-sm [&amp;_p]:leading-relaxed">
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                background
              </code>{" "}
              suffix is omitted when the variable is used for the background
              color of the component.
            </p>
          </div>
        </div>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          Given the following CSS variables:
        </p>
        <div data-rehype-pretty-code-fragment="">
          <pre
            className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
            data-language="css"
            data-theme="default"
          >
            <code
              className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
              data-language="css"
              data-theme="default"
            >
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  --primary: 222
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                <span className="color: rgb(255, 255, 255);">
                  2 47.4% 11.2%;
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  --primary-foreground: 210 40% 98%;
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
          The{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            background
          </code>{" "}
          color of the following component will be{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            hsl(var(--primary))
          </code>{" "}
          and the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            foreground
          </code>{" "}
          color will be{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            hsl(var(--primary-foreground))
          </code>
          .
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
                <span className="color: rgba(255, 255, 255, 0.533);">&lt;</span>
                <span className="color: rgb(255, 255, 255);">
                  div classNameName
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">=</span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  "bg-primary text-primary-foreground"
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">&gt;</span>
                <span className="color: rgb(255, 255, 255);">Hello</span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  &lt;/
                </span>
                <span className="color: rgb(255, 255, 255);">div</span>
                <span className="color: rgba(255, 255, 255, 0.533);">&gt;</span>
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
        <div
          role="alert"
          className="relative w-full rounded-lg border px-4 py-3 text-sm [&amp;>svg+div]:translate-y-[-3px] [&amp;>svg]:absolute [&amp;>svg]:left-4 [&amp;>svg]:top-4 [&amp;>svg]:text-foreground [&amp;>svg~*]:pl-7 bg-background text-foreground"
        >
          <div className="text-sm [&amp;_p]:leading-relaxed">
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              <strong>
                CSS variables must be defined without color space function
              </strong>
              . See the{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://tailwindcss.com/docs/customizing-colors#using-css-variables"
              >
                Tailwind CSS documentation
              </a>{" "}
              for more information.
            </p>
          </div>
        </div>
        <h3
          className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
          id="list-of-variables"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#list-of-variables"
          >
            <span className="icon icon-link"></span>
          </a>
          List of variables
        </h3>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          Here's the list of variables available for customization:
        </p>
        <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Default background color of &lt;body /&gt;...etc
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --background: 0 0% 100%;
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --foreground: 222
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                  <span className="color: rgb(255, 255, 255);">
                    2 47.4% 11.2%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Muted backgrounds such as &lt;TabsList /&gt;, &lt;Skeleton /&gt;
              and &lt;Switch /&gt;
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --muted: 210 40% 96.1%;
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --muted-foreground: 215
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                  <span className="color: rgb(255, 255, 255);">
                    4 16.3% 46.9%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Background color for &lt;Card /&gt;
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --card: 0 0% 100%;
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --card-foreground: 222
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                  <span className="color: rgb(255, 255, 255);">
                    2 47.4% 11.2%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Background color for popovers such as &lt;DropdownMenu /&gt;,
              &lt;HoverCard /&gt;, &lt;Popover /&gt;
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --popover: 0 0% 100%;
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --popover-foreground: 222
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                  <span className="color: rgb(255, 255, 255);">
                    2 47.4% 11.2%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Default border color
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --border: 214
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                  <span className="color: rgb(255, 255, 255);">
                    3 31.8% 91.4%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Border color for inputs such as &lt;Input /&gt;, &lt;Select /&gt;,
              &lt;Textarea /&gt;
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --input: 214
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                  <span className="color: rgb(255, 255, 255);">
                    3 31.8% 91.4%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Primary colors for &lt;Button /&gt;
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --primary: 222
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                  <span className="color: rgb(255, 255, 255);">
                    2 47.4% 11.2%;
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --primary-foreground: 210 40% 98%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Secondary colors for &lt;Button /&gt;
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --secondary: 210 40% 96.1%;
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --secondary-foreground: 222
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                  <span className="color: rgb(255, 255, 255);">
                    2 47.4% 11.2%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Used for accents such as hover effects on
              &lt;DropdownMenuItem&gt;, &lt;SelectItem&gt;...etc
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --accent: 210 40% 96.1%;
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --accent-foreground: 222
                  </span>
                  <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                  <span className="color: rgb(255, 255, 255);">
                    2 47.4% 11.2%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Used for destructive actions such as &lt;Button
              variant="destructive"&gt;
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --destructive: 0 100% 50%;
                  </span>
                </span>
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --destructive-foreground: 210 40% 98%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Used for focus ring
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --ring: 215 20.2% 65.1%;
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
          <div data-rehype-pretty-code-fragment="">
            <div
              data-rehype-pretty-code-title=""
              data-language="css"
              data-theme="default"
            >
              Border radius for card, input and buttons
            </div>
            <pre
              className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
              data-language="css"
              data-theme="default"
            >
              <code
                className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                data-language="css"
                data-theme="default"
              >
                <span className="line">
                  <span className="color: rgb(255, 255, 255);">
                    --radius: 0.5rem;
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
        <h3
          className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
          id="adding-new-colors"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#adding-new-colors"
          >
            <span className="icon icon-link"></span>
          </a>
          Adding new colors
        </h3>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          To add new colors, you need to add them to your CSS file and to your{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            tailwind.config.js
          </code>{" "}
          file.
        </p>
        <div data-rehype-pretty-code-fragment="">
          <div
            data-rehype-pretty-code-title=""
            data-language="css"
            data-theme="default"
          >
            app/globals.css
          </div>
          <pre
            className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
            data-language="css"
            data-theme="default"
          >
            <code
              className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
              data-language="css"
              data-theme="default"
            >
              <span className="line">
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);">root </span>
                <span className="color: rgba(255, 255, 255, 0.533);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> --warning</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">38</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">92%</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">50%;</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  --warning-foreground
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">48</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">96%</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">89%;</span>
              </span>
              <span className="line">
                <span className="color: rgba(255, 255, 255, 0.533);"></span>
              </span>
              <span className="line"> </span>
              <span className="line">
                <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                <span className="color: rgb(255, 255, 255);">dark </span>
                <span className="color: rgba(255, 255, 255, 0.533);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> --warning</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">48</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">96%</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">89%;</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  --warning-foreground
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">38</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">92%</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">50%;</span>
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
        <div data-rehype-pretty-code-fragment="">
          <div
            data-rehype-pretty-code-title=""
            data-language="js"
            data-theme="default"
          >
            tailwind.config.js
          </div>
          <pre
            className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
            data-language="js"
            data-theme="default"
          >
            <code
              className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
              data-language="js"
              data-theme="default"
            >
              <span className="line">
                <span className="color: rgb(255, 255, 255);">module</span>
                <span className="color: rgba(255, 255, 255, 0.533);">.</span>
                <span className="color: rgb(255, 255, 255);">exports </span>
                <span className="color: rgba(255, 255, 255, 0.533);">=</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> theme</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> extend</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> colors</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);"></span>
              </span>
              <span className="line line--highlighted">
                <span className="color: rgb(255, 255, 255);"> warning</span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  "hsl(var(--warning))"
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">,</span>
              </span>
              <span className="line line--highlighted">
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  "warning-foreground"
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">:</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">
                  "hsl(var(--warning-foreground))"
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">,</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">,</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">,</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">,</span>
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
          You can now use the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            warning
          </code>{" "}
          utility className in your components.
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
                <span className="color: rgba(255, 255, 255, 0.533);">&lt;</span>
                <span className="color: rgb(255, 255, 255);">
                  div classNameName
                </span>
                <span className="color: rgba(255, 255, 255, 0.533);">=</span>
                <span className="color: rgba(255, 255, 255, 0.533);">"</span>
                <span className="word--highlighted">bg-warning</span>
                <span className="color: rgba(255, 255, 255, 0.533);"> </span>
                <span className="word--highlighted">
                  text-warning-foreground
                </span>
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
        <h3
          className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
          id="other-color-formats"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#other-color-formats"
          >
            <span className="icon icon-link"></span>
          </a>
          Other color formats
        </h3>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          I recommend using{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://www.smashingmagazine.com/2021/07/hsl-colors-css/"
          >
            HSL colors
          </a>{" "}
          for theming but you can also use other color formats if you prefer.
        </p>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          See the{" "}
          <a
            className="font-medium underline underline-offset-4"
            href="https://tailwindcss.com/docs/customizing-colors#using-css-variables"
          >
            Tailwind CSS documentation
          </a>{" "}
          for more information on using{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            rgb
          </code>
          ,{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            rgba
          </code>{" "}
          or{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            hsl
          </code>{" "}
          colors.
        </p>
      </div>
    </>
  );
};

export default Theming;
