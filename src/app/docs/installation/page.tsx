import React from "react";
const Installation = () => {
  return (
    <>
      <div className="mx-auto w-full min-w-0  h-screen scroll">
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
          <div className="font-medium text-foreground">Installation</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
            Installation
          </h1>
          <p className="text-lg text-muted-foreground">
            <span
              data-br=":r14:"
              data-brr="1"
              className=" inline-block; align-top; max-width: 444px;"
            >
              How to install dependencies and structure your app.
            </span>
          </p>
        </div>
        <div className="pb-12 pt-8">
          <div className="mdx">
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="frameworks"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#frameworks"
              >
                <span className="icon icon-link"></span>
              </a>
              Frameworks
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-8 sm:gap-6">
              <a
                className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
                href="/docs/installation/next"
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
                href="/docs/installation/vite"
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
                href="/docs/installation/remix"
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
              <a
                className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
                href="/docs/installation/gatsby"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <title>Gatsby</title>
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.571c3.171 0 5.915 1.543 7.629 3.858l-1.286 1.115C16.886 5.572 14.571 4.286 12 4.286c-3.343 0-6.171 2.143-7.286 5.143l9.857 9.857c2.486-.857 4.373-3 4.973-5.572h-4.115V12h6c0 4.457-3.172 8.228-7.372 9.17L2.83 9.944C3.772 5.743 7.543 2.57 12 2.57zm-9.429 9.6l9.344 9.258c-2.4-.086-4.801-.943-6.601-2.743-1.8-1.8-2.743-4.201-2.743-6.515z"></path>
                </svg>
                <p className="font-medium mt-2">Gatsby</p>
              </a>
              <a
                className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
                href="/docs/installation/astro"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <title>Astro</title>
                  <path
                    d="M16.074 16.86C15.354 17.476 13.917 17.895 12.262 17.895C10.23 17.895 8.527 17.263 8.075 16.412C7.914 16.9 7.877 17.458 7.877 17.814C7.877 17.814 7.771 19.564 8.988 20.782C8.988 20.15 9.501 19.637 10.133 19.637C11.216 19.637 11.215 20.582 11.214 21.349V21.418C11.214 22.582 11.925 23.579 12.937 24C12.7812 23.6794 12.7005 23.3275 12.701 22.971C12.701 21.861 13.353 21.448 14.111 20.968C14.713 20.585 15.383 20.161 15.844 19.308C16.0926 18.8493 16.2225 18.3357 16.222 17.814C16.2221 17.4903 16.1722 17.1685 16.074 16.86ZM15.551 0.6C15.747 0.844 15.847 1.172 16.047 1.829L20.415 16.176C18.7743 15.3246 17.0134 14.7284 15.193 14.408L12.35 4.8C12.3273 4.72337 12.2803 4.65616 12.2162 4.60844C12.152 4.56072 12.0742 4.53505 11.9943 4.53528C11.9143 4.5355 11.8366 4.56161 11.7727 4.60969C11.7089 4.65777 11.6623 4.72524 11.64 4.802L8.83 14.405C7.00149 14.724 5.23264 15.3213 3.585 16.176L7.974 1.827C8.174 1.171 8.274 0.843 8.471 0.6C8.64406 0.385433 8.86922 0.218799 9.125 0.116C9.415 0 9.757 0 10.443 0H13.578C14.264 0 14.608 0 14.898 0.117C15.1529 0.219851 15.3783 0.386105 15.551 0.6Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="font-medium mt-2">Astro</p>
              </a>
              <a
                className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
                href="/docs/installation/laravel"
              >
                <svg
                  role="img"
                  viewBox="0 0 62 65"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                >
                  <path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z"></path>
                </svg>
                <p className="font-medium mt-2">Laravel</p>
              </a>
              <a
                className="flex w-full flex-col items-center rounded-xl border bg-card p-6 text-card-foreground shadow transition-colors hover:bg-muted/50 sm:p-10"
                href="/docs/installation/manual"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="currentColor"
                >
                  <title>React</title>
                  <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"></path>
                </svg>
                <p className="font-medium mt-2">Manual</p>
              </a>
            </div>
            <h2
              className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
              id="typescript"
            >
              <a
                className="font-medium underline underline-offset-4 subheading-anchor"
                aria-label="Link to section"
                href="#typescript"
              >
                <span className="icon icon-link"></span>
              </a>
              TypeScript
            </h2>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              This project and the components are written in TypeScript. We
              recommend using TypeScript for your project as well.
            </p>
            <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
              However we provide a JavaScript version of the components as well.
              The JavaScript version is available via the{" "}
              <a
                className="font-medium underline underline-offset-4"
                href="/docs/cli"
              >
                cli
              </a>
              .
            </p>
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
                className="mb-2 mt-6 h-[300px]  rounded-lg border bg-zinc-950 py-4 dark:bg-zinc-900"
                data-language="json"
                data-theme="default"
              >
                <code
                  className="flex flex-col rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm"
                  data-language="json"
                  data-theme="default"
                >
                  <button className="inline-flex float-right items-center justify-end whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 z-10 h-4 w-[70vw] text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50  right-4 top-16">
                    <span className="w-[1px] h-[1px] m-[-1] overflow-hidden whitespace-nowrap border-[0px]">
                      Copy
                    </span>
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
                      "src/app/globals.css"
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
                      "zinc"
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
                    <span className="color: rgb(255, 255, 255);">rsc</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      false,
                    </span>
                  </span>
                  <span className="line line--highlighted">
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
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      false,
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
                    <span className="color: rgb(255, 255, 255);">utils</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "~/lib/utils"
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
                className="mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border bg-zinc-950  dark:bg-zinc-900"
                data-language="json"
                data-theme="default"
              >
                <code
                  className="relative rounded bg-muted  py-[0.2rem] font-mono text-sm"
                  data-language="json"
                  data-theme="default"
                >
                  <div className="flex justify-end w-[70vw]">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50  h-6 w-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 ">
                      <span className="[1px] h-[1px] m-[-1] overflow-hidden whitespace-nowrap border-[0px] ">
                        Copy
                      </span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-6"
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
                  <span className="line">
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">
                      compilerOptions
                    </span>
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
                    <span className="color: rgb(255, 255, 255);">paths</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);"></span>
                  </span>
                  <span className="line line--highlighted">
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgb(255, 255, 255);">@/*</span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      :
                    </span>
                    <span className="color: rgb(255, 255, 255);"> </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      [
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      "./*"
                    </span>
                    <span className="color: rgba(255, 255, 255, 0.533);">
                      ]
                    </span>
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
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between">
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2"
            href="/docs"
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
            Introduction
          </a>
          <a
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 ml-auto"
            href="/docs/components-json"
          >
            components.json
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
export default Installation;
