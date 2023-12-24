import React from "react";
const Cli = () => {
  return (
    <>
      <div className="mdx">
        <h2
          className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
          id="init"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#init"
          >
            <span className="icon icon-link"></span>
          </a>
          init
        </h2>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          Use the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            init
          </code>{" "}
          command to initialize configuration and dependencies for a new
          project.
        </p>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          The{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            init
          </code>{" "}
          command installs dependencies, adds the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            cn
          </code>{" "}
          util, configures{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            tailwind.config.js
          </code>
          , and CSS variables for the project.
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
                <span className="color: rgba(255, 255, 255, 0.533);">init</span>
              </span>
            </code>
          </pre>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
            type="button"
            id="radix-:r1:"
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
          You will be asked a few questions to configure{" "}
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
                  Would you like to use TypeScript (recommended)? no/yes
                </span>
              </span>
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
                  Where is your tailwind.config.js located? › tailwind.config.js
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
        <h3
          className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
          id="options"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#options"
          >
            <span className="icon icon-link"></span>
          </a>
          Options
        </h3>
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
                  Usage: shadcn-ui init [options]
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  initialize your project and install dependencies
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">Options:</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -y, --yes skip confirmation prompt. (default: false)
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -c, --cwd &lt;cwd&gt; the working directory. defaults to the
                  current directory.
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -h, --help display help for command
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
          id="add"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#add"
          >
            <span className="icon icon-link"></span>
          </a>
          add
        </h2>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          Use the{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            add
          </code>{" "}
          command to add components and dependencies to your project.
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
                <span className="color: rgba(255, 255, 255, 0.533);">add</span>
                <span className="color: rgb(255, 255, 255);"> </span>
                <span className="color: rgba(255, 255, 255, 0.533);">[</span>
                <span className="color: rgb(255, 255, 255);">component</span>
                <span className="color: rgba(255, 255, 255, 0.533);">]</span>
              </span>
            </code>
          </pre>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
            type="button"
            id="radix-:r3:"
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
          You will be presented with a list of components to choose from:
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
                  Which components would you like to add? › Space to select. A
                  to toggle all.
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  Enter to submit.
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">◯ accordion</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">◯ alert</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  ◯ alert-dialog
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  ◯ aspect-ratio
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">◯ avatar</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">◯ badge</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">◯ button</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">◯ calendar</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">◯ card</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">◯ checkbox</span>
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
          id="options-1"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#options-1"
          >
            <span className="icon icon-link"></span>
          </a>
          Options
        </h3>
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
                  Usage: shadcn-ui add [options] [components...]
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  add a component to your project
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">Arguments:</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  components the components to add
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">Options:</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -y, --yes skip confirmation prompt. (default: false)
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -o, --overwrite overwrite existing files. (default: false)
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -c, --cwd &lt;cwd&gt; the working directory. defaults to the
                  current directory.
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -p, --path &lt;path&gt; the path to add the component to.
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -h, --help display help for command
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
          id="diff-experimental"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#diff-experimental"
          >
            <span className="icon icon-link"></span>
          </a>
          diff (experimental)
        </h2>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          You can use the diff command to check for updates against the
          registry.
        </p>
        <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
          Run the following command to get a list of components that have
          updates available:
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
                <span className="color: rgba(255, 255, 255, 0.533);">diff</span>
              </span>
            </code>
          </pre>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
            type="button"
            id="radix-:r5:"
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
                <span className="color: rgb(255, 255, 255);">- alert</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  - /path/to/my-app/components/ui/alert.tsx
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
                <span className="color: rgba(255, 255, 255, 0.533);">diff</span>
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
            id="radix-:r7:"
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
        <h3
          className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
          id="options-2"
        >
          <a
            className="font-medium underline underline-offset-4 subheading-anchor"
            aria-label="Link to section"
            href="#options-2"
          >
            <span className="icon icon-link"></span>
          </a>
          Options
        </h3>
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
                  Usage: shadcn-ui diff [options] [component]
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  check for updates against the registry
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">Arguments:</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  component the component name
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);"></span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">Options:</span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -y, --yes skip confirmation prompt. (default: false)
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -c, --cwd &lt;cwd&gt; the working directory. defaults to the
                  current directory.
                </span>
              </span>
              <span className="line">
                <span className="color: rgb(255, 255, 255);">
                  {" "}
                  -h, --help display help for command
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
    </>
  );
};
export default Cli;
