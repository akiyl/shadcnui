import * as React from "react";
const CardPage = () => {
  return (
    <>
      <div>
        <div className="hidden space-y-6 p-10 pb-16 md:block">
          <div className="space-y-0.5">
            <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
            <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <div
            data-orientation="horizontal"
            role="none"
            className="shrink-0 bg-border h-[1px] w-full my-6"
          ></div>
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
                <a
                  className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 bg-muted hover:bg-muted justify-start"
                  href="/examples/forms"
                >
                  Profile
                </a>
                <a
                  className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
                  href="/examples/forms/account"
                >
                  Account
                </a>
                <a
                  className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
                  href="/examples/forms/appearance"
                >
                  Appearance
                </a>
                <a
                  className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
                  href="/examples/forms/notifications"
                >
                  Notifications
                </a>
                <a
                  className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 px-4 py-2 hover:bg-transparent hover:underline justify-start"
                  href="/examples/forms/display"
                >
                  Display
                </a>
              </nav>
            </aside>
            <div className="flex-1 lg:max-w-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    This is how others will see you on the site.
                  </p>
                </div>
                <div
                  data-orientation="horizontal"
                  role="none"
                  className="shrink-0 bg-border h-[1px] w-full"
                ></div>
                <form className="space-y-8">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      //   for=":rj9:-form-item"
                    >
                      Username
                    </label>
                    <input
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="shadcn"
                      id=":rj9:-form-item"
                      aria-describedby=":rj9:-form-item-description"
                      aria-invalid="false"
                      name="username"
                    />
                    <p
                      id=":rj9:-form-item-description"
                      className="text-[0.8rem] text-muted-foreground"
                    >
                      This is your public display name. It can be your real name
                      or a pseudonym. You can only change this once every 30
                      days.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Email
                    </label>
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:rjb:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      data-placeholder=""
                      className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;>span]:line-clamp-1"
                      id=":rja:-form-item"
                      aria-describedby=":rja:-form-item-description"
                      aria-invalid="false"
                    >
                      <span
                      // style="pointer-events: none;"
                      >
                        Select a verified email to display
                      </span>
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
                    <select
                      aria-hidden="true"
                      // tabindex="-1"
                      // style="position: absolute; border: 0px; width: 1px; height: 1px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; overflow-wrap: normal;"
                    >
                      <option value=""></option>
                      <option value="m@example.com">m@example.com</option>
                      <option value="m@google.com">m@google.com</option>
                      <option value="m@support.com">m@support.com</option>
                    </select>
                    <p
                      id=":rja:-form-item-description"
                      className="text-[0.8rem] text-muted-foreground"
                    >
                      You can manage verified email addresses in your{" "}
                      <a href="/examples/forms">email settings</a>.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      //   for=":rjc:-form-item"
                    >
                      Bio
                    </label>
                    <textarea
                      className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                      placeholder="Tell us a little bit about yourself"
                      name="bio"
                      id=":rjc:-form-item"
                      aria-describedby=":rjc:-form-item-description"
                      aria-invalid="false"
                    >
                      I own a computer.
                    </textarea>
                    <p
                      id=":rjc:-form-item-description"
                      className="text-[0.8rem] text-muted-foreground"
                    >
                      You can <span>@mention</span> other users and
                      organizations to link to them.
                    </p>
                  </div>
                  <div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        //     for=":rjd:-form-item"
                      >
                        URLs
                      </label>
                      <p
                        id=":rjd:-form-item-description"
                        className="text-[0.8rem] text-muted-foreground"
                      >
                        Add links to your website, blog, or social media
                        profiles.
                      </p>
                      <input
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id=":rjd:-form-item"
                        aria-describedby=":rjd:-form-item-description"
                        aria-invalid="false"
                        value="https://shadcn.com"
                        name="urls.0.value"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 sr-only"
                        //     for=":rje:-form-item"
                      >
                        URLs
                      </label>
                      <p
                        id=":rje:-form-item-description"
                        className="text-[0.8rem] text-muted-foreground sr-only"
                      >
                        Add links to your website, blog, or social media
                        profiles.
                      </p>
                      <input
                        className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        id=":rje:-form-item"
                        aria-describedby=":rje:-form-item-description"
                        aria-invalid="false"
                        value="http://twitter.com/shadcn"
                        name="urls.1.value"
                      />{" "}
                    </div>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-8 rounded-md px-3 text-xs mt-2"
                      type="button"
                    >
                      Add URL
                    </button>
                  </div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
                    type="submit"
                  >
                    Update profile
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CardPage;
