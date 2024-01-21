import React from "react";
const ScrollArea = () => {
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
          <div className="font-medium text-foreground">Scroll-area</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Scroll-area
          </h1>
          <p className="text-lg text-muted-foreground">
            <span
              data-br=":r2h:"
              data-brr="1"
              className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 590px;"
            >
              Augments native scroll functionality for custom, cross-browser
              styling.
            </span>
          </p>
        </div>
        <div className="flex items-center space-x-2 pt-4">
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-1"
            href="https://www.radix-ui.com/docs/primitives/components/scroll-area"
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
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 gap-1"
            href="https://www.radix-ui.com/docs/primitives/components/scroll-area#api-reference"
          >
            API Reference
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
                    className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent outline-none p-0"
                    data-orientation="horizontal"
                  >
                    <button
                      type="button"
                      role="tab"
                      aria-selected="true"
                      aria-controls="radix-:r2i:-content-preview"
                      data-state="active"
                      id="radix-:r2i:-trigger-preview"
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
                      aria-controls="radix-:r2i:-content-code"
                      data-state="inactive"
                      id="radix-:r2i:-trigger-code"
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
                  aria-labelledby="radix-:r2i:-trigger-preview"
                  id="radix-:r2i:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r2l:"
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
                      <div
                        dir="ltr"
                        className="relative overflow-scroll h-72 w-48 rounded-md border"
                      >
                        <div
                          data-radix-scroll-area-viewport=""
                          className="h-full w-full rounded-[inherit]"
                        >
                          <div className="min-width: 100%; display: table;">
                            <div className="p-4">
                              <h4 className="mb-4 text-sm font-medium leading-none">
                                Tags
                              </h4>
                              <div className="text-sm">v1.2.0-beta.50</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.49</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.48</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.47</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.46</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.45</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.44</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.43</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.42</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.41</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.40</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.39</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.38</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.37</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.36</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.35</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.34</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.33</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.32</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.31</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.30</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.29</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.28</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.27</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.26</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.25</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.24</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.23</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.22</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.21</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.20</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.19</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.18</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.17</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.16</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.15</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.14</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.13</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.12</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.11</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.10</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.9</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.8</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.7</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.6</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.5</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.4</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.3</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.2</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
                              <div className="text-sm">v1.2.0-beta.1</div>
                              <div
                                data-orientation="horizontal"
                                role="none"
                                className="shrink-0 bg-border h-[1px] w-full my-2"
                              ></div>
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
                  aria-labelledby="radix-:r2i:-trigger-code"
                  id="radix-:r2i:-content-code"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></div>
              </div>
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
                  aria-controls="radix-:r2m:-content-cli"
                  data-state="active"
                  id="radix-:r2m:-trigger-cli"
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
                  aria-controls="radix-:r2m:-content-manual"
                  data-state="inactive"
                  id="radix-:r2m:-trigger-manual"
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
                aria-labelledby="radix-:r2m:-trigger-cli"
                id="radix-:r2m:-content-cli"
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
                          scroll-area
                        </span>
                      </span>
                    </code>
                  </pre>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 absolute right-4 top-4"
                    type="button"
                    id="radix-:r2p:"
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
                aria-labelledby="radix-:r2m:-trigger-manual"
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
                      ScrollArea{" "}
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      from
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "@/components/ui/scroll-area"
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
                      &lt;
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      ScrollArea classNameName
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      =
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "h-[200px] w-[350px] rounded-md border p-4"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &gt;
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      Jokester began sneaking into the castle in the middle of
                      the night and leaving
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      jokes all over the place: under the king's pillow, in his
                      soup, even in the
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      royal toilet. The king was furious, but he couldn't seem
                      to stop Jokester. And
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      then, one day, the people of the kingdom discovered that
                      the jokes left by
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      Jokester were so funny that they couldn't help but laugh.
                      And once they
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);">
                      {" "}
                      started laughing, they couldn't stop.
                    </span>
                  </span>
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      &lt;/
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      ScrollArea
                    </span>
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
              id="horizontal-scrolling"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#horizontal-scrolling"
              >
                <span className="icon icon-link"></span>
              </a>
              Horizontal Scrolling
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
                      aria-controls="radix-:r2r:-content-preview"
                      data-state="active"
                      id="radix-:r2r:-trigger-preview"
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
                      aria-controls="radix-:r2r:-content-code"
                      data-state="inactive"
                      id="radix-:r2r:-trigger-code"
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
                  aria-labelledby="radix-:r2r:-trigger-preview"
                  id="radix-:r2r:-content-preview"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border"
                >
                  <div className="flex items-center justify-between p-4">
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:r2u:"
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
                      <div
                        dir="ltr"
                        className="relative overflow-hidden w-96 whitespace-nowrap rounded-md border"
                      >
                        {" "}
                        <div
                          data-radix-scroll-area-viewport=""
                          className="h-full w-full rounded-[inherit] overflow-scroll"
                        >
                          <div className="min-width: 100%; display: table;">
                            <div className="flex w-max space-x-4 p-4">
                              <figure className="shrink-0">
                                <div className="overflow-hidden rounded-md">
                                  <img
                                    alt="Photo by Ornella Binni"
                                    loading="lazy"
                                    width="300"
                                    height="400"
                                    decoding="async"
                                    data-nimg="1"
                                    className="aspect-[3/4] h-fit w-fit object-cover bg-transparent"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1465869185982-5a1a7522cbcb%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75"
                                  />
                                </div>
                                <figcaption className="pt-2 text-xs text-muted-foreground">
                                  Photo by{" "}
                                  <span className="font-semibold text-foreground">
                                    Ornella Binni
                                  </span>
                                </figcaption>
                              </figure>
                              <figure className="shrink-0">
                                <div className="overflow-hidden rounded-md">
                                  <img
                                    alt="Photo by Tom Byrom"
                                    loading="lazy"
                                    width="300"
                                    height="400"
                                    decoding="async"
                                    data-nimg="1"
                                    className="aspect-[3/4] h-fit w-fit object-cover bg-transparent"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1548516173-3cabfa4607e9%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75"
                                  />
                                </div>
                                <figcaption className="pt-2 text-xs text-muted-foreground">
                                  Photo by{" "}
                                  <span className="font-semibold text-foreground">
                                    Tom Byrom
                                  </span>
                                </figcaption>
                              </figure>
                              <figure className="shrink-0">
                                <div className="overflow-hidden rounded-md">
                                  <img
                                    alt="Photo by Vladimir Malyavko"
                                    loading="lazy"
                                    width="300"
                                    height="400"
                                    decoding="async"
                                    data-nimg="1"
                                    className="aspect-[3/4] h-fit w-fit object-cover text-transparent"
                                    src="/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1494337480532-3725c85fd2ab%3Fauto%3Dformat%26fit%3Dcrop%26w%3D300%26q%3D80&amp;w=640&amp;q=75"
                                  />
                                </div>
                                <figcaption className="pt-2 text-xs text-muted-foreground">
                                  Photo by{" "}
                                  <span className="font-semibold text-foreground">
                                    Vladimir Malyavko
                                  </span>
                                </figcaption>
                              </figure>
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
                  aria-labelledby="radix-:r2r:-trigger-code"
                  id="radix-:r2r:-content-code"
                  className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            href="/docs/components/resizable"
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
            Resizable
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
            href="/docs/components/select"
          >
            Select
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
export default ScrollArea;