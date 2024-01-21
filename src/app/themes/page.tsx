"use client";
import * as React from "react";
import { useState } from "react";
import CustomCalendar from "./components/calendar";
import PaymentsPage from "./components/Payment chart";
import FormTheme from "./components/form";
import Calendar from "react-calendar";
import ReportTheme from "./components/reporttheme";
import LinkTheme from "./components/linkTheme";
import CaloriesTheme from "./components/calorieTheme";
import HandleCookies from "./components/cookies";
const Themes = () => {
  const [themeColor, setThemeColor] = useState<string>("#52525b");

  return (
    <>
      <main className="pt-11">
        <div>
          <h1>Add colors. Make it yours</h1>
          <p>Hnad-picked themes that you can copy into your apps</p>

          <div>
            <div className="mr-2  items-center space-x-0.5 flex">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs border-transparent"
                data-state="closed"
                onClick={() => {
                  setThemeColor("#52525b");
                }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#52525b]"></span>
                <span className="sr-only">Zinc</span>
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs border-transparent"
                data-state="closed"
                onClick={() => {
                  setThemeColor("#e11d48");
                }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#e11d48]"></span>
                <span className="sr-only">Rose</span>
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs border-transparent"
                data-state="closed"
                onClick={() => {
                  setThemeColor("#3b84f6");
                }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3b84f6]"></span>
                <span className="sr-only">Blue</span>
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs border-transparent"
                data-state="closed"
                onClick={() => {
                  setThemeColor("#22c55e");
                }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#22c55e]"></span>
                <span className="sr-only">Green</span>
              </button>
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs border-[--theme-primary]"
                data-state="closed"
                onClick={() => {
                  setThemeColor("#ea580c");
                }}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ea580c]">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                  >
                    <path
                      d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span className="sr-only">Orange</span>
              </button>
            </div>
            <div>
              {" "}
              <button>
                {" "}
                <span>
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
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"></path>
                    <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"></path>
                    <path d="M14.5 17.5 4.5 15"></path>
                  </svg>
                </span>
                customize
              </button>
              <button> copy code</button>{" "}
            </div>
          </div>
        </div>
        <section>
          <div className="flex w-[50vw]">
            <div>
              <div className="grid  gap-3 grid-cols-2 ">
                <div className="rounded-lg border w-36 h-52 bg-red/30 text-card-foreground shadow-sm ">
                  <div className="p-6  flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="tracking-tight text-sm  font-normal">
                      Total Revenue
                    </h3>
                  </div>
                  <div className="p-5 pt-0">
                    <div className=" text-lg font-bold">$15,231.89</div>
                    <p className=" text-[12px] text-muted-foreground">
                      +20.1% from last month
                    </p>
                    <div className="h-[80px]">
                      <div className="recharts-responsive-container">
                        <div className="recharts-wrapper" role="region">
                          <svg
                            className="recharts-surface"
                            width="15vw"
                            height="80"
                            viewBox="0 0 392 80"
                          >
                            <title></title>
                            <desc></desc>
                            <defs>
                              <clipPath id="recharts17-clip">
                                <rect
                                  x="10"
                                  y="5"
                                  height="75"
                                  width="372"
                                ></rect>
                              </clipPath>
                            </defs>
                            <g className="recharts-layer recharts-line">
                              <path
                                stroke-width="2"
                                stroke={themeColor}
                                fill="none"
                                width="372"
                                height="75"
                                className="recharts-curve recharts-line-curve"
                                d="M10,52.143C27.714,46.779,45.429,41.415,63.143,41.415C80.857,41.415,98.571,52.679,116.286,54.821C134,56.964,151.714,56.964,169.429,58.036C187.143,59.107,204.857,61.25,222.571,61.25C240.286,61.25,258,56.18,275.714,54.286C293.429,52.391,311.143,52.818,328.857,49.882C346.571,46.946,364.286,28.016,382,9.085"
                              ></path>
                              <g className="recharts-layer"></g>
                              <g
                                className="recharts-layer recharts-line-dots"
                                role="img"
                              >
                                <circle
                                  r="3"
                                  stroke-width="2"
                                  stroke={themeColor}
                                  fill="#fff"
                                  width="372"
                                  height="75"
                                  cx="10"
                                  cy="52.14285714285714"
                                  className="recharts-dot recharts-line-dot"
                                ></circle>
                                <circle
                                  r="3"
                                  stroke-width="2"
                                  stroke={themeColor}
                                  fill="#fff"
                                  width="372"
                                  height="75"
                                  cx="63.142857142857146"
                                  cy="41.41517857142857"
                                  className="recharts-dot recharts-line-dot"
                                ></circle>
                                <circle
                                  r="3"
                                  stroke-width="2"
                                  stroke={themeColor}
                                  fill="#fff"
                                  width="372"
                                  height="75"
                                  cx="116.28571428571429"
                                  cy="54.821428571428584"
                                  className="recharts-dot recharts-line-dot"
                                ></circle>
                                <circle
                                  r="3"
                                  stroke-width="2"
                                  stroke={themeColor}
                                  fill="#fff"
                                  width="372"
                                  height="75"
                                  cx="169.42857142857144"
                                  cy="58.035714285714285"
                                  className="recharts-dot recharts-line-dot"
                                ></circle>
                                <circle
                                  r="3"
                                  stroke-width="2"
                                  stroke={themeColor}
                                  fill="#fff"
                                  width="372"
                                  height="75"
                                  cx="222.57142857142858"
                                  cy="61.25"
                                  className="recharts-dot recharts-line-dot"
                                ></circle>
                                <circle
                                  r="3"
                                  stroke-width="2"
                                  stroke={themeColor}
                                  fill="#fff"
                                  width="372"
                                  height="75"
                                  cx="275.7142857142857"
                                  cy="54.285714285714285"
                                  className="recharts-dot recharts-line-dot"
                                ></circle>
                                <circle
                                  r="3"
                                  stroke-width="2"
                                  stroke={themeColor}
                                  fill="#fff"
                                  width="372"
                                  height="75"
                                  cx="328.8571428571429"
                                  cy="49.88214285714285"
                                  className="recharts-dot recharts-line-dot"
                                ></circle>
                                <circle
                                  r="3"
                                  stroke-width="2"
                                  stroke={themeColor}
                                  fill="#fff"
                                  width="372"
                                  height="75"
                                  cx="382"
                                  cy="9.08482142857143"
                                  className="recharts-dot recharts-line-dot"
                                ></circle>
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border w-36   h-52 bg-card text-card-foreground  bg-[#0c0c0c]/30 backdrop-blur-md  shadow-sm">
                  <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                    <h3 className="tracking-tight text-base font-normal">
                      Subscriptions
                    </h3>
                  </div>
                  <div className="p-6 pt-0">
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                    <div className="mt-4 h-[80px]">
                      <div className="recharts-responsive-container">
                        <div className="recharts-wrapper" role="region">
                          <svg
                            className="recharts-surface"
                            width="15vw"
                            height="8vw"
                            viewBox="0 0 152 80"
                          >
                            <title></title>
                            <desc></desc>
                            <defs>
                              <clipPath id="recharts20-clip">
                                <rect
                                  x="5"
                                  y="5"
                                  height="70"
                                  width="142"
                                ></rect>
                              </clipPath>
                            </defs>
                            <g className="recharts-layer recharts-bar">
                              <g className="recharts-layer recharts-bar-rectangles">
                                <g className="recharts-layer">
                                  <g
                                    className="recharts-layer recharts-bar-rectangle"
                                    role="img"
                                  >
                                    <path
                                      width="14"
                                      height="56"
                                      x="6.775"
                                      y="18.999999999999996"
                                      radius="0"
                                      className="recharts-rectangle"
                                      d="M 6.775,18.999999999999996 h 14 v 56 h -14 Z"
                                      fill={themeColor}
                                    ></path>
                                  </g>
                                  <g
                                    className="recharts-layer recharts-bar-rectangle"
                                    role="img"
                                  >
                                    <path
                                      width="14"
                                      height="70"
                                      x="24.525"
                                      y="5"
                                      radius="0"
                                      className="recharts-rectangle"
                                      d="M 24.525,5 h 14 v 70 h -14 Z"
                                      fill={themeColor}
                                    ></path>
                                  </g>
                                  <g
                                    className="recharts-layer recharts-bar-rectangle"
                                    role="img"
                                  >
                                    <path
                                      width="14"
                                      height="46.666666666666664"
                                      x="42.275"
                                      y="28.333333333333336"
                                      radius="0"
                                      className="recharts-rectangle"
                                      d="M 42.275,28.333333333333336 h 14 v 46.666666666666664 h -14 Z"
                                      fill={themeColor}
                                    ></path>
                                  </g>
                                  <g
                                    className="recharts-layer recharts-bar-rectangle"
                                    role="img"
                                  >
                                    <path
                                      width="14"
                                      height="64.86666666666666"
                                      x="60.025"
                                      y="10.133333333333335"
                                      radius="0"
                                      className="recharts-rectangle"
                                      d="M 60.025,10.133333333333335 h 14 v 64.86666666666666 h -14 Z"
                                      fill={themeColor}
                                    ></path>
                                  </g>
                                  <g
                                    className="recharts-layer recharts-bar-rectangle"
                                    role="img"
                                  >
                                    <path
                                      width="14"
                                      height="44.1"
                                      x="77.775"
                                      y="30.9"
                                      radius="0"
                                      className="recharts-rectangle"
                                      d="M 77.775,30.9 h 14 v 44.1 h -14 Z"
                                      fill={themeColor}
                                    ></path>
                                  </g>
                                  <g
                                    className="recharts-layer recharts-bar-rectangle"
                                    role="img"
                                  >
                                    <path
                                      width="14"
                                      height="55.766666666666666"
                                      x="95.525"
                                      y="19.233333333333334"
                                      radius="0"
                                      className="recharts-rectangle"
                                      d="M 95.525,19.233333333333334 h 14 v 55.766666666666666 h -14 Z"
                                      fill={themeColor}
                                    ></path>
                                  </g>
                                  <g
                                    className="recharts-layer recharts-bar-rectangle"
                                    role="img"
                                  >
                                    <path
                                      width="14"
                                      height="64.86666666666666"
                                      x="113.275"
                                      y="10.133333333333335"
                                      radius="0"
                                      className="recharts-rectangle"
                                      d="M 113.275,10.133333333333335 h 14 v 64.86666666666666 h -14 Z"
                                      fill={themeColor}
                                    ></path>
                                  </g>
                                  <g
                                    className="recharts-layer recharts-bar-rectangle"
                                    role="img"
                                  >
                                    <path
                                      width="14"
                                      height="44.1"
                                      x="131.025"
                                      y="30.9"
                                      radius="0"
                                      className="recharts-rectangle"
                                      d="M 131.025,30.9 h 14 v 44.1 h -14 Z"
                                      fill={themeColor}
                                    ></path>
                                  </g>
                                </g>
                              </g>
                              <g className="recharts-layer"></g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                  <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="text-2xl font-semibold leading-none tracking-tight">
                      Team Members
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Invite your team members to collaborate.
                    </p>
                  </div>
                  <div className="p-6 pt-0 grid gap-6">
                    <div className="flex items-center justify-between space-x-4">
                      <div className="flex items-center space-x-4">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                          <img
                            className="aspect-square h-full w-full"
                            alt="Image"
                            src="/avatars/01.png"
                          />
                        </span>
                        <div>
                          <p className="text-sm font-medium leading-none">
                            Sofia Davis
                          </p>
                          <p className="text-sm text-muted-foreground">
                            m@example.com
                          </p>
                        </div>
                      </div>
                      <select
                        className="flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none   w-28 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-black hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 ml-auto"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:r3v:"
                        data-state="closed"
                      >
                        <option value="">Owner </option>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4 text-muted-foreground"
                        >
                          <path
                            d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                            fill="currentColor"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                        <option>
                          <div className="flex-col">
                            <h4>viewer</h4>
                            <p>can view this comment</p>
                          </div>
                        </option>
                      </select>
                    </div>
                    <div className="flex items-center justify-between space-x-4">
                      <div className="flex items-center space-x-4">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                          <img
                            className="aspect-square h-full w-full"
                            alt="Image"
                            src="/avatars/02.png"
                          />
                        </span>
                        <div>
                          <p className="text-sm font-medium leading-none">
                            Jackson Lee
                          </p>
                          <p className="text-sm text-muted-foreground">
                            p@example.com
                          </p>
                        </div>
                      </div>
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 ml-auto"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:r40:"
                        data-state="closed"
                      >
                        Member{" "}
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4 text-muted-foreground"
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
                    <div className="flex items-center justify-between space-x-4">
                      <div className="flex items-center space-x-4">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-8 w-8">
                          <img
                            className="aspect-square h-full w-full"
                            alt="Image"
                            src="/avatars/03.png"
                          />
                        </span>
                        <div>
                          <p className="text-sm font-medium leading-none">
                            Isabella Nguyen
                          </p>
                          <p className="text-sm text-muted-foreground">
                            i@example.com
                          </p>
                        </div>
                      </div>
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 ml-auto"
                        type="button"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-:r41:"
                        data-state="closed"
                      >
                        Member{" "}
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2 h-4 w-4 text-muted-foreground"
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
                  </div>
                </div>
                <div className="space-y-4 xl:space-y-4">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="space-y-1.5 p-6 flex flex-row items-center">
                      <div className="flex items-center space-x-4">
                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                          <img
                            className="aspect-square h-full w-full"
                            alt="Image"
                            src="/avatars/01.png"
                          />
                        </span>
                        <div>
                          <p className="text-sm font-medium leading-none">
                            Sofia Davis
                          </p>
                          <p className="text-sm text-muted-foreground">
                            m@example.com
                          </p>
                        </div>
                      </div>
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10 ml-auto rounded-full"
                        data-state="closed"
                      >
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
                          className="h-4 w-4"
                        >
                          <line x1="12" x2="12" y1="5" y2="19"></line>
                          <line x1="5" x2="19" y1="12" y2="12"></line>
                        </svg>
                        <span className="sr-only">New message</span>
                      </button>
                    </div>
                    <div className="p-6 pt-0">
                      <div className="space-y-4">
                        <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
                          Hi, how can I help you today?
                        </div>
                        <div
                          className={`flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-[${themeColor}] text-primary-foreground`}
                        >
                          Hey, I'm having trouble with my account.
                        </div>
                        <div className="flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ">
                          What seems to be the problem?
                        </div>
                        <div
                          className={`flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm ml-auto bg-[${themeColor}] text-primary-foreground`}
                        >
                          I can't log in.
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center p-6 pt-0">
                      <form className="flex w-full items-center space-x-2">
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                          id="message"
                          placeholder="Type your message..."
                          value=""
                        />
                        <button
                          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 w-10"
                          type="submit"
                        >
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
                            className="h-4 w-4"
                          >
                            <line x1="22" x2="11" y1="2" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                          </svg>
                          <span className="sr-only">Send</span>
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <div className="flex flex-col p-6 space-y-1">
                      <h3 className="font-semibold tracking-tight text-2xl">
                        Create an account
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Enter your email below to create your account
                      </p>
                    </div>
                    <div className="p-6 pt-0 grid gap-4">
                      <div className="grid grid-cols-2 gap-6">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                          <svg
                            viewBox="0 0 438.549 438.549"
                            className="mr-2 h-4 w-4"
                          >
                            <path
                              fill="currentColor"
                              d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
                            ></path>
                          </svg>
                          Github
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                          <svg
                            role="img"
                            viewBox="0 0 24 24"
                            className="mr-2 h-4 w-4"
                          >
                            <path
                              fill="currentColor"
                              d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                            ></path>
                          </svg>
                          Google
                        </button>
                      </div>
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                          <span className="w-full border-t"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                          <span className="bg-background px-2 text-muted-foreground">
                            Or continue with
                          </span>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Email
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="email"
                          placeholder="m@example.com"
                          type="email"
                        />
                      </div>
                      <div className="grid gap-2">
                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Password
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="password"
                          type="password"
                        />
                      </div>
                    </div>
                    <div className="flex items-center p-6 pt-0">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                        Create account
                      </button>
                    </div>
                  </div>
                  <div className="hidden xl:block">
                    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                      <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="text-2xl font-semibold leading-none tracking-tight">
                          Report an issue
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          What area are you having problems with?
                        </p>
                      </div>
                      <div className="p-6 pt-0 grid gap-6">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Area
                            </label>
                            <button
                              type="button"
                              role="combobox"
                              aria-controls="radix-:r4c:"
                              aria-expanded="false"
                              aria-autocomplete="none"
                              dir="ltr"
                              data-state="closed"
                              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1"
                              id="area-:r4b:"
                              aria-label="Area"
                            >
                              <span>Billing</span>
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
                                className="h-4 w-4 opacity-50"
                                aria-hidden="true"
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </button>
                          </div>
                          <div className="grid gap-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                              Security Level
                            </label>
                            <button
                              type="button"
                              role="combobox"
                              aria-controls="radix-:r4d:"
                              aria-expanded="false"
                              aria-autocomplete="none"
                              dir="ltr"
                              data-state="closed"
                              className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1 line-clamp-1 w-full truncate"
                              id="security-level-:r4b:"
                              aria-label="Security Level"
                            >
                              <span>Severity 2</span>
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
                                className="h-4 w-4 opacity-50"
                                aria-hidden="true"
                              >
                                <polyline points="6 9 12 15 18 9"></polyline>
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Subject
                          </label>
                          <input
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="subject-:r4b:"
                            placeholder="I need help with..."
                          />
                        </div>
                        <div className="grid gap-2">
                          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            Description
                          </label>
                          <textarea
                            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="description-:r4b:"
                            placeholder="Please include all information relevant to your issue."
                          ></textarea>
                        </div>
                      </div>
                      <div className="flex items-center p-6 pt-0 justify-between space-x-2">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                          Cancel
                        </button>
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <HandleCookies />
                <FormTheme />
                <ReportTheme />
              </div>
            </div>
            <div>
              <div
                className="grid
                grid-cols-2"
              >
                <Calendar themeColor={themeColor} />
                <CaloriesTheme themeColor={themeColor} />
              </div>
              <PaymentsPage />
              <LinkTheme />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
export default Themes;
