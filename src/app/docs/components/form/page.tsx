import React from "react";
const Form = () => {
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
          <div className="font-medium text-foreground">React Hook Form</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            React Hook Form
          </h1>
          <p className="text-lg text-muted-foreground">
            <span
              data-br=":r5a:"
              data-brr="1"
              className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 385px;"
            >
              Building forms with React Hook Form and Zod.
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2 pt-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-1"
            href="https://react-hook-form.com"
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
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Forms are tricky. They are one of the most common things you'll
              build in a web application, but also one of the most complex.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              Well-designed HTML forms are:
            </p>
            <ul className="my-6 ml-6 list-disc">
              <li className="mt-2">
                Well-structured and semantically correct.
              </li>
              <li className="mt-2">Easy to use and navigate (keyboard).</li>
              <li className="mt-2">
                Accessible with ARIA attributes and proper labels.
              </li>
              <li className="mt-2">
                Has support for client and server side validation.
              </li>
              <li className="mt-2">
                Well- classNamed and consistent with the rest of the
                application.
              </li>
            </ul>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              In this guide, we will take a look at building forms with{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://react-hook-form.com/"
              >
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  react-hook-form
                </code>
              </a>{" "}
              and{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="https://zod.dev"
              >
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  zod
                </code>
              </a>
              . We're going to use a{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                &lt;FormField&gt;
              </code>{" "}
              component to compose accessible forms using Radix UI components.
            </p>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="features"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#features"
              >
                <span className="icon icon-link"></span>
              </a>
              Features
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              The{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                &lt;Form /&gt;
              </code>{" "}
              component is a wrapper around the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                react-hook-form
              </code>{" "}
              library. It provides a few things:
            </p>
            <ul className="my-6 ml-6 list-disc">
              <li className="mt-2">
                Composable components for building forms.
              </li>
              <li className="mt-2">
                A{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;FormField /&gt;
                </code>{" "}
                component for building controlled form fields.
              </li>
              <li className="mt-2">
                Form validation using{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  zod
                </code>
                .
              </li>
              <li className="mt-2">
                Handles accessibility and error messages.
              </li>
              <li className="mt-2">
                Uses{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  React.useId()
                </code>{" "}
                for generating unique IDs.
              </li>
              <li className="mt-2">
                Applies the correct{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  aria
                </code>{" "}
                attributes to form fields based on states.
              </li>
              <li className="mt-2">
                Built to work with all Radix UI components.
              </li>
              <li className="mt-2">
                Bring your own schema library. We use{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  zod
                </code>{" "}
                but you can use anything you want.
              </li>
              <li className="mt-2">
                <strong>
                  You have full control over the markup and styling.
                </strong>
              </li>
            </ul>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="anatomy"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#anatomy"
              >
                <span className="icon icon-link"></span>
              </a>
              Anatomy
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
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">Form</span>
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
                      FormField
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> control</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      = ...{" "}
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> name</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "..."
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> render</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      = ()
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
                    <span className="color: rgb(255, 255, 255);">FormItem</span>
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
                      FormLabel{" "}
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
                      FormControl
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
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /*
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.267);">
                      {" "}
                      Your form field{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      */
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;/
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      FormControl
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
                      FormDescription{" "}
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
                      FormMessage{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;/
                    </span>
                    <span className="color: rgb(255, 255, 255);">FormItem</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ){" "}
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
                      &lt;/
                    </span>
                    <span className="color: rgb(255, 255, 255);">Form</span>
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
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="example"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#example"
              >
                <span className="icon icon-link"></span>
              </a>
              Example
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
                      const
                    </span>
                    <span className="color: rgb(255, 255, 255);"> form </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgb(255, 255, 255);"> useForm</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ()
                    </span>
                  </span>
                  <span className="line"> </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      FormField
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> control</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ={" "}
                    </span>
                    <span className="color: rgb(255, 255, 255);">form</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      .
                    </span>
                    <span className="color: rgb(255, 255, 255);">control</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> name</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "username"
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> render</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      = ({" "}
                    </span>
                    <span className="color: rgb(255, 255, 255);"> field </span>
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
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">FormItem</span>
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
                      FormLabel
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">Username</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;/
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      FormLabel
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
                      FormControl
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
                      Input placeholder
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "shadcn"
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      {" "}
                      ...
                    </span>
                    <span className="color: rgb(255, 255, 255);">field</span>
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
                    <span className="color: rgb(255, 255, 255);">
                      FormControl
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
                      FormDescription
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      This is your public display name.
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;/
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      FormDescription
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
                      FormMessage{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      /&gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;/
                    </span>
                    <span className="color: rgb(255, 255, 255);">FormItem</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ){" "}
                    </span>
                  </span>
                  <span className="line">
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
                  aria-controls="radix-:r5b:-content-cli"
                  data-state="active"
                  id="radix-:r5b:-trigger-cli"
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
                  aria-controls="radix-:r5b:-content-manual"
                  data-state="inactive"
                  id="radix-:r5b:-trigger-manual"
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
                aria-labelledby="radix-:r5b:-trigger-cli"
                id="radix-:r5b:-content-cli"
                className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative [&amp;_h3.font-heading]:text-base [&amp;_h3.font-heading]:font-semibold"
              >
                <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
                  <h3
                    className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                    id="command"
                  >
                    <a
                      className="font-medium underline underline-offset-4 subheading-anchor"
                      aria-label="Link to section"
                      href="#command"
                    >
                      <span className="icon icon-link"></span>
                    </a>
                    Command
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
                          <span className="color: rgb(255, 255, 255);">
                            npx{" "}
                          </span>
                          <span className="color: rgba(255, 255, 255, 0.533);">
                            shadcn-ui@latest
                          </span>
                          <span className="color: rgb(255, 255, 255);"> </span>
                          <span className="color: rgba(255, 255, 255, 0.533);">
                            add
                          </span>
                          <span className="color: rgb(255, 255, 255);"> </span>
                          <span className="color: rgba(255, 255, 255, 0.533);">
                            form
                          </span>
                        </span>
                      </code>
                    </pre>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
                      type="button"
                      id="radix-:r5e:"
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
              </div>
              <div
                data-state="inactive"
                data-orientation="horizontal"
                role="tabpanel"
                aria-labelledby="radix-:r5b:-trigger-manual"
                id="radix-:r5b:-content-manual"
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
            <div className="[&amp;>h3]:step steps mb-12 ml-4 border-l pl-8 [counter-reset:step]">
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="create-a-form-schema"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#create-a-form-schema"
                >
                  <span className="icon icon-link"></span>
                </a>
                Create a form schema
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Define the shape of your form using a Zod schema. You can read
                more about using Zod in the{" "}
                <a
                  className="font-medium underline underline-offset-4"
                  href="https://zod.dev"
                >
                  Zod documentation
                </a>
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
                      <span className="color: rgb(255, 255, 255);"> z </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "zod"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        formSchema{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> z</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">object</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        username
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> z</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">string</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ().
                      </span>
                      <span className="color: rgb(255, 255, 255);">min</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (2).
                      </span>
                      <span className="color: rgb(255, 255, 255);">max</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (50),
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
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
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="define-a-form"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#define-a-form"
                >
                  <span className="icon icon-link"></span>
                </a>
                Define a form
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Use the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  useForm
                </code>{" "}
                hook from{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  react-hook-form
                </code>{" "}
                to create a form.
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
                        {" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        zodResolver{" "}
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
                        "@hookform/resolvers/zod"
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
                        useForm{" "}
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
                        "react-hook-form"
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
                      <span className="color: rgb(255, 255, 255);"> z </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "zod"
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        formSchema{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> z</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">object</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        username
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> z</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">string</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ().
                      </span>
                      <span className="color: rgb(255, 255, 255);">min</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (2,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        message
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "Username must be at least 2 characters."
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
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
                        ProfileForm
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ()
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        1. Define your form.
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);"> form </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useForm
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        z
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        infer
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;typeof
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        formSchema
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;&gt;({" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        resolver
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        zodResolver
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        formSchema
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ),
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        defaultValues
                      </span>
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
                        username
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ""
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
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
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
                      </span>
                    </span>
                    <span className="line"> </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        2. Define a submit handler.
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        function
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        onSubmit
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">values</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        z
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255); font-weight: bold;">
                        infer
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;typeof
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        formSchema
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
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        Do something with the form values.
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        ✅ This will be type-safe and validated.
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        console
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">log</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">values</span>
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
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Since{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  FormField
                </code>{" "}
                is using a controlled component, you need to provide a default
                value for the field. See the{" "}
                <a
                  className="font-medium underline underline-offset-4"
                  href="https://react-hook-form.com/docs/usecontroller"
                >
                  React Hook Form docs
                </a>{" "}
                to learn more about controlled components.
              </p>
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="build-your-form"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#build-your-form"
                >
                  <span className="icon icon-link"></span>
                </a>
                Build your form
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                We can now use the{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                  &lt;Form /&gt;
                </code>{" "}
                components to build our form.
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
                        zodResolver{" "}
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
                        "@hookform/resolvers/zod"
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
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        useForm{" "}
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
                        "react-hook-form"
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
                      <span className="color: rgb(255, 255, 255);"> z </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        from
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "zod"
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
                      <span className="color: rgb(255, 255, 255);"> Form</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        FormControl
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        FormDescription
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        FormField
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        FormItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        FormLabel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        FormMessage
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
                        "@/components/ui/form"
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
                        const
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        formSchema{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgb(255, 255, 255);"> z</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">object</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ({" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        username
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> z</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">string</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ().
                      </span>
                      <span className="color: rgb(255, 255, 255);">min</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (2,
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        message
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        :
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "Username must be at least 2 characters."
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ,
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ),
                      </span>
                    </span>
                    <span className="line">
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        )
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
                        ProfileForm
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
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        //
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.267);">
                        {" "}
                        ...
                      </span>
                    </span>
                    <span className="line"> </span>
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
                      <span className="color: rgb(255, 255, 255);">Form </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ...
                      </span>
                      <span className="color: rgb(255, 255, 255);">form</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        form onSubmit
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ={" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">form</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        handleSubmit
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        (
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        onSubmit
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ){" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        classNameName
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "space-y-8"
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
                        FormField
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        control
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ={" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">form</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        .
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        control
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> name</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "username"
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        render
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        = ({" "}
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        field{" "}
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
                        FormItem
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
                        FormLabel
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        Username
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        FormLabel
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
                        FormControl
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
                        Input placeholder
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "shadcn"
                      </span>
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
                        ...
                      </span>
                      <span className="color: rgb(255, 255, 255);">field</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        {" "}
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
                      <span className="color: rgb(255, 255, 255);">
                        FormControl
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
                        FormDescription
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);">
                        {" "}
                        This is your public display name.
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        FormDescription
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
                        FormMessage{" "}
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        /&gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        FormItem
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        ){" "}
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
                        &lt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">
                        Button type
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        =
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        "submit"
                      </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                      <span className="color: rgb(255, 255, 255);">Submit</span>
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
                      <span className="color: rgb(255, 255, 255);">form</span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &gt;
                      </span>
                    </span>
                    <span className="line line--highlighted">
                      <span className="color: rgb(255, 255, 255);"> </span>
                      <span className="color: rgba(255, 255, 255, 0.533);">
                        &lt;/
                      </span>
                      <span className="color: rgb(255, 255, 255);">Form</span>
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
              <h3
                className="font-heading mt-8 scroll-m-20 text-xl font-semibold tracking-tight"
                id="done"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#done"
                >
                  <span className="icon icon-link"></span>
                </a>
                Done
              </h3>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                That's it. You now have a fully accessible form that is
                type-safe with client-side validation.
              </p>
              <div className="group relative my-4 flex flex-col space-y-2 [&amp;_[role=tablist]]:hidden [&amp;>div>div:first-child]:hidden">
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
                        aria-controls="radix-:r5g:-content-preview"
                        data-state="active"
                        id="radix-:r5g:-trigger-preview"
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
                        aria-controls="radix-:r5g:-content-code"
                        data-state="inactive"
                        id="radix-:r5g:-trigger-code"
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
                    aria-labelledby="radix-:r5g:-trigger-preview"
                    id="radix-:r5g:-content-preview"
                    className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                  >
                    <div className="flex items-center justify-between p-4">
                      <button
                        type="button"
                        role="combobox"
                        aria-controls="radix-:r5j:"
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
                        <form className="w-2/3 space-y-6">
                          <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Username
                            </label>
                            <input
                              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="shadcn"
                              id=":r5r:-form-item"
                              aria-describedby=":r5r:-form-item-description"
                              aria-invalid="false"
                              value=""
                              name="username"
                            />
                            <p
                              id=":r5r:-form-item-description"
                              className="text-[0.8rem] text-muted-foreground"
                            >
                              This is your public display name.
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
                    aria-labelledby="radix-:r5g:-trigger-code"
                    id="radix-:r5g:-content-code"
                    className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  ></div>
                </div>
              </div>
            </div>
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
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              See the following links for more examples on how to use the{" "}
              <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
                &lt;Form /&gt;
              </code>{" "}
              component with other components:
            </p>
            <ul className="my-6 ml-6 list-disc">
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="/docs/components/checkbox#form"
                >
                  Checkbox
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="/docs/components/date-picker#form"
                >
                  Date Picker
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="/docs/components/input#form"
                >
                  Input
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="/docs/components/radio-group#form"
                >
                  Radio Group
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="/docs/components/select#form"
                >
                  Select
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="/docs/components/switch#form"
                >
                  Switch
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="/docs/components/textarea#form"
                >
                  Textarea
                </a>
              </li>
              <li className="mt-2">
                <a
                  className="font-medium underline underline-offset-4"
                  href="/docs/components/combobox#form"
                >
                  Combobox
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            href="/docs/components/dropdown-menu"
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
            Dropdown Menu
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
            href="/docs/components/hover-card"
          >
            Hover Card
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
export default Form;
