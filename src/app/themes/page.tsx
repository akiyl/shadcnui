import * as React from "react";

const Themes = () => {
  return (
    <>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
          <h3 className="tracking-tight text-base font-normal">
            Total Revenue
          </h3>
        </div>
        <div className="p-6 pt-0">
          <div className="text-2xl font-bold">$15,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
          <div className="h-[80px]">
            <div className="recharts-responsive-container">
              <div className="recharts-wrapper" role="region">
                <svg
                  className="recharts-surface"
                  width="392"
                  height="80"
                  viewBox="0 0 392 80"
                >
                  <title></title>
                  <desc></desc>
                  <defs>
                    <clipPath id="recharts17-clip">
                      <rect x="10" y="5" height="75" width="372"></rect>
                    </clipPath>
                  </defs>
                  <g className="recharts-layer recharts-line">
                    <path
                      stroke-width="2"
                      stroke="#3182bd"
                      fill="none"
                      width="372"
                      height="75"
                      className="recharts-curve recharts-line-curve"
                      d="M10,52.143C27.714,46.779,45.429,41.415,63.143,41.415C80.857,41.415,98.571,52.679,116.286,54.821C134,56.964,151.714,56.964,169.429,58.036C187.143,59.107,204.857,61.25,222.571,61.25C240.286,61.25,258,56.18,275.714,54.286C293.429,52.391,311.143,52.818,328.857,49.882C346.571,46.946,364.286,28.016,382,9.085"
                    ></path>
                    <g className="recharts-layer"></g>
                    <g className="recharts-layer recharts-line-dots" role="img">
                      <circle
                        r="3"
                        stroke-width="2"
                        stroke="#3182bd"
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
                        stroke="#3182bd"
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
                        stroke="#3182bd"
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
                        stroke="#3182bd"
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
                        stroke="#3182bd"
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
                        stroke="#3182bd"
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
                        stroke="#3182bd"
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
                        stroke="#3182bd"
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
    </>
  );
};
export default Themes;
