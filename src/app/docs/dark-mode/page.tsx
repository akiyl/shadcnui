import React from "react";
const DarkMode = () => {
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
          <div className="font-medium text-foreground">Dark Mode</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Dark Mode
          </h1>
          <p className="text-lg text-muted-foreground">
            <span
              data-br=":Ridttbq6la:"
              data-brr="1"
              className="display: inline-block; vertical-align: top; text-decoration: inherit; max-width: 340px;"
            >
              Adding dark mode to your site.
            </span>
          </p>
        </div>
        <div className="pb-12 pt-8">
          <div className="mdx">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <a
                className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
                href="/docs/dark-mode/next"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <title>Next.js</title>
                  <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z"></path>
                </svg>
                <p className="font-medium mt-2">Next.js</p>
              </a>
              <a
                className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
                href="/docs/dark-mode/vite"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <title>Vite</title>
                  <path d="m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"></path>
                </svg>
                <p className="font-medium mt-2">Vite</p>
              </a>
              <a
                className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
                href="/docs/dark-mode/astro"
              >
                <svg
                  role="img"
                  viewBox="0 0 64 79"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <path d="M19.9924 65.9282C16.1165 62.432 14.9851 55.0859 16.5999 49.7638C19.3998 53.1193 23.2793 54.1822 27.2977 54.7822C33.5013 55.7081 39.5937 55.3618 45.3565 52.5637C46.0158 52.2434 46.625 51.8174 47.3454 51.386C47.8861 52.9341 48.0268 54.497 47.838 56.0877C47.3787 59.9617 45.4251 62.9542 42.3177 65.2227C41.0752 66.13 39.7604 66.9411 38.4771 67.7967C34.5346 70.4262 33.4679 73.5095 34.9494 77.9946C34.9846 78.1038 35.0161 78.2131 35.0957 78.4797C33.0828 77.5909 31.6124 76.2965 30.4921 74.5946C29.3088 72.7984 28.7458 70.8114 28.7162 68.6615C28.7014 67.6152 28.7014 66.5597 28.5588 65.5282C28.2107 63.0135 27.0144 61.8876 24.7608 61.8227C22.4479 61.7561 20.6183 63.1672 20.1331 65.3893C20.0961 65.5597 20.0424 65.7282 19.9887 65.9263L19.9924 65.9282Z"></path>
                  <path d="M0.5 51.3932C0.5 51.3932 11.0979 46.2433 21.7254 46.2433L29.7382 21.5069C30.0381 20.3106 30.9141 19.4977 31.9029 19.4977C32.8918 19.4977 33.7677 20.3106 34.0677 21.5069L42.0804 46.2433C54.6672 46.2433 63.3058 51.3932 63.3058 51.3932C63.3058 51.3932 45.3044 2.47586 45.2692 2.37772C44.7526 0.931458 43.8804 0 42.7045 0H21.1032C19.9273 0 19.0903 0.931458 18.5384 2.37772C18.4995 2.47401 0.5 51.3932 0.5 51.3932Z"></path>
                </svg>
                <p className="font-medium mt-2">Astro</p>
              </a>
              <a
                className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
                href="/docs/dark-mode/remix"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <title>Remix</title>
                  <path d="M21.511 18.508c.216 2.773.216 4.073.216 5.492H15.31c0-.309.006-.592.011-.878.018-.892.036-1.821-.109-3.698-.19-2.747-1.374-3.358-3.55-3.358H1.574v-5h10.396c2.748 0 4.122-.835 4.122-3.049 0-1.946-1.374-3.125-4.122-3.125H1.573V0h11.541c6.221 0 9.313 2.938 9.313 7.632 0 3.511-2.176 5.8-5.114 6.182 2.48.497 3.93 1.909 4.198 4.694ZM1.573 24v-3.727h6.784c1.133 0 1.379.84 1.379 1.342V24Z"></path>
                </svg>
                <p className="font-medium mt-2">Remix</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            href="/docs/theming"
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
            Theming
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
            href="/docs/cli"
          >
            CLI
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
export default DarkMode;
