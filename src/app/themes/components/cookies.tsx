import React, { useState } from "react";

const HandleCookies = () => {
  const [necessaryEnabled, setNecessaryEnabled] = useState(true);
  const [functionalEnabled, setFunctionalEnabled] = useState(false);
  const [performanceEnabled, setPerformanceEnabled] = useState(false);

  const toggleNecessary = () => {
    setNecessaryEnabled(!necessaryEnabled);
  };

  const toggleFunctional = () => {
    setFunctionalEnabled(!functionalEnabled);
  };

  const togglePerformance = () => {
    setPerformanceEnabled(!performanceEnabled);
  };

  return (
    <>
      <div className="rounded-xl border bg-card text-card-foreground shadow">
        <div>
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="font-semibold leading-none tracking-tight">
              Cookie Settings
            </h3>
            <p className="text-sm text-muted-foreground">
              Manage your cookie settings here.
            </p>
          </div>
          {/* ... existing JSX ... */}

          {/* Toggle for Strictly Necessary */}
          <div className="flex items-center justify-between space-x-4">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"
              //     for="necessary"
            >
              <span>Strictly Necessary</span>
              <span className="text-xs font-normal leading-snug text-muted-foreground">
                These cookies are essential in order to use the website and use
                its features.
              </span>
            </label>
            <button
              type="button"
              onClick={toggleNecessary}
              role="switch"
              aria-checked={necessaryEnabled}
              data-state={necessaryEnabled ? "checked" : "unchecked"}
              value="on"
              className={`peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`}
              id="necessary"
              aria-label="Necessary"
            >
              <span
                data-state={necessaryEnabled ? "checked" : "unchecked"}
                className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
              ></span>
            </button>
          </div>

          {/* Toggle for Functional Cookies */}
          <div className="flex items-center justify-between space-x-4">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"
              //     for="functional"
            >
              <span>Functional Cookies</span>
              <span className="text-xs font-normal leading-snug text-muted-foreground">
                These cookies allow the website to provide personalized
                functionality.
              </span>
            </label>
            <button
              type="button"
              onClick={toggleFunctional}
              role="switch"
              aria-checked={functionalEnabled}
              data-state={functionalEnabled ? "checked" : "unchecked"}
              value="on"
              className={`peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`}
              id="functional"
              aria-label="Functional"
            >
              <span
                data-state={functionalEnabled ? "checked" : "unchecked"}
                className="pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
              ></span>
            </button>
          </div>

          {/* Toggle for Performance Cookies */}
          <div className="flex items-center justify-between space-x-4">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex flex-col space-y-1"
              //     for="performance"
            >
              <span>Performance Cookies</span>
              <span className="text-xs font-normal leading-snug text-muted-foreground">
                These cookies help to improve the performance of the website.
              </span>
            </label>
            <button
              type="button"
              onClick={togglePerformance}
              role="switch"
              aria-checked={performanceEnabled}
              data-state={performanceEnabled ? "checked" : "unchecked"}
              value="on"
              className={`peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent bg-[#1E293B]
               shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input`}
              id="performance"
              aria-label="Performance"
            >
              <span
                data-state={performanceEnabled ? "checked" : "unchecked"}
                className="pointer-events-none  block h-4 w-4 rounded-full bg-[#020817] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
              ></span>
            </button>
          </div>
          <button> Save Prefrences</button>
          {/* ... existing JSX ... */}
        </div>
      </div>
    </>
  );
};

export default HandleCookies;
