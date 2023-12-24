import React from "react";

const IntroductionDocs = () => {
  return (
    <>
      <main className="relative overflow-scroll h-screen py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          <div className="mb-4 flex items-center space-x-1 text-[10px] text-muted-foreground">
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
            <div className="font-medium text-foreground text-[10px]">
              Introduction
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight">
              Introduction
            </h1>
            <p className="text-[10px] text-muted-foreground">
              <span
                data-br=":rr:"
                data-brr="1"
                className="inline-block align-text-top decoration-inherit  max-w-screen-md: 522px;"
              >
                Re-usable components built using Radix UI and Tailwind CSS.
              </span>
            </p>
          </div>
          <div className="pb-12 pt-8">
            <div className="mdx text-[10px]">
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                This is <strong>NOT</strong> a component library. It's a
                collection of re-usable components that you can copy and paste
                into your apps.
              </p>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                <strong>What do you mean by not a component library?</strong>
              </p>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                I mean you do not install it as a dependency. It is not
                available or distributed via npm.
              </p>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                Pick the components you need. Copy and paste the code into your
                project and customize to your needs. The code is yours.
              </p>
              <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
                <em>
                  Use this as a reference to build your own component libraries.
                </em>
              </p>
              <h2
                className="font-heading mt-12 scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0"
                id="faq"
              >
                <a
                  className="font-medium underline underline-offset-4 subheading-anchor"
                  aria-label="Link to section"
                  href="#faq"
                >
                  <span className="icon icon-link"></span>
                </a>
                FAQ
              </h2>
              <div data-orientation="vertical">
                <div
                  data-state="closed"
                  data-orientation="vertical"
                  className="border-b"
                >
                  <h3
                    data-orientation="vertical"
                    data-state="closed"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-:rt:"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="radix-:rs:"
                      className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                      data-radix-collection-item=""
                    >
                      <p className="leading-7 text-[10px] [&amp;:not(:first-child)]:mt-6">
                        Why copy/paste and not packaged as a dependency?
                      </p>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="radix-:rt:"
                    role="region"
                    aria-labelledby="radix-:rs:"
                    data-orientation="vertical"
                    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  ></div>
                </div>
                <div
                  data-state="closed"
                  data-orientation="vertical"
                  className="border-b"
                >
                  <h3
                    data-orientation="vertical"
                    data-state="closed"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-:rv:"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="radix-:ru:"
                      className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                      data-radix-collection-item=""
                    >
                      <p className="leading-7 text-[10px] [&amp;:not(:first-child)]:mt-6">
                        Do you plan to publish it as an npm package?
                      </p>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="radix-:rv:"
                    role="region"
                    aria-labelledby="radix-:ru:"
                    data-orientation="vertical"
                    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  ></div>
                </div>
                <div
                  data-state="closed"
                  data-orientation="vertical"
                  className="border-b"
                >
                  <h3
                    data-orientation="vertical"
                    data-state="closed"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-:r11:"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="radix-:r10:"
                      className="flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                      data-radix-collection-item=""
                    >
                      <p className="leading-7 text-[8px] [&amp;:not(:first-child)]:mt-6">
                        Which frameworks are supported?
                      </p>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="radix-:r11:"
                    role="region"
                    aria-labelledby="radix-:r10:"
                    data-orientation="vertical"
                    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  ></div>
                </div>
                <div
                  data-state="closed"
                  data-orientation="vertical"
                  className="border-b"
                >
                  <h3
                    data-orientation="vertical"
                    data-state="closed"
                    className="flex"
                  >
                    <button
                      type="button"
                      aria-controls="radix-:r13:"
                      aria-expanded="false"
                      data-state="closed"
                      data-orientation="vertical"
                      id="radix-:r12:"
                      className="flex flex-1 items-center justify-between py-4 text-xs font-medium transition-all hover:underline [&amp;[data-state=open]>svg]:rotate-180"
                      data-radix-collection-item=""
                    >
                      <p className="leading-7 text-[10px] [&amp;:not(:first-child)]:mt-6">
                        Can I use this in my project?
                      </p>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </h3>
                  <div
                    data-state="closed"
                    id="radix-:r13:"
                    role="region"
                    aria-labelledby="radix-:r12:"
                    data-orientation="vertical"
                    className="overflow-hidden text-xs data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            <a
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-[12px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
              href="/docs/installation"
            >
              Installation
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
        <div className="hidden text-sm xl:block">
          <div className="sticky top-16 -mt-10 pt-4">
            <div dir="ltr" className="relative overflow-hidden pb-10">
              <div
                data-radix-scroll-area-viewport=""
                className="h-full w-full rounded-[inherit] overflow-x-hidden scroll;"
              >
                <div className="min-w-screen-md: 100%; display: table;">
                  <div className="sticky top-16 -mt-10 h-[calc(100vh-3.5rem)] py-12">
                    <div className="space-y-2">
                      <p className="font-medium">On This Page</p>
                      <ul className="m-0 list-none">
                        <li className="mt-0 pt-2">
                          <a
                            href="#faq"
                            className="inline-block no-underline transition-colors hover:text-foreground text-muted-foreground"
                          >
                            FAQ
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default IntroductionDocs;
