import React from "react";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {" "}
      <div className="flex">
        <div
          dir="ltr"
          className="relative overflow-scroll h-screen py-6 pl-8 pr-6 lg:py-8"
          // style="position:relative;--radix-scroll-area-corner-width:0px;--radix-scroll-area-corner-height:0px"
        >
          <div
            data-radix-scroll-area-viewport=""
            className="h-full w-full rounded-[inherit]"
            // style="overflow: hidden scroll;"
          >
            <div
            //  style="min-width:100%;display:table"
            >
              <div className="w-full">
                <div className="pb-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                    Getting Started
                  </h4>
                  <div className="grid grid-flow-row auto-rows-max text-[10px]">
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline font-medium text-foreground"
                      target=""
                      rel=""
                      href="/docs"
                    >
                      Introduction
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/installation"
                    >
                      Installation
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components-json"
                    >
                      components.json
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/theming"
                    >
                      Theming
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/dark-mode"
                    >
                      Dark mode
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/cli"
                    >
                      CLI
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/typography"
                    >
                      Typography
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/figma"
                    >
                      Figma
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/changelog"
                    >
                      Changelog
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/about"
                    >
                      About
                    </Link>
                  </div>
                </div>

                <div className="pb-4">
                  <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                    Components
                  </h4>
                  <div className="grid grid-flow-row auto-rows-max text-[10px]">
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/accordion"
                    >
                      Accordion
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/alert"
                    >
                      Alert
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/alert-dialog"
                    >
                      Alert Dialog
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/aspect-ratio"
                    >
                      Aspect Ratio
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/avatar"
                    >
                      Avatar
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/badge"
                    >
                      Badge
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/button"
                    >
                      Button
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/calendar"
                    >
                      Calendar
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/card"
                    >
                      Card
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/checkbox"
                    >
                      Checkbox
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/collapsible"
                    >
                      Collapsible
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/combobox"
                    >
                      Combobox
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/command"
                    >
                      Command
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/context-menu"
                    >
                      Context Menu
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/data-table"
                    >
                      Data Table
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/date-picker"
                    >
                      Date Picker
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/dialog"
                    >
                      Dialog
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/dropdown-menu"
                    >
                      Dropdown Menu
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/form"
                    >
                      Form
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/hover-card"
                    >
                      Hover Card
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/input"
                    >
                      Input
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/label"
                    >
                      Label
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/menubar"
                    >
                      Menubar
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/navigation-menu"
                    >
                      Navigation Menu
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/popover"
                    >
                      Popover
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/progress"
                    >
                      Progress
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/radio-group"
                    >
                      Radio Group
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/scroll-area"
                    >
                      Scroll Area
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/select"
                    >
                      Select
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/separator"
                    >
                      Separator
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/sheet"
                    >
                      Sheet
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/skeleton"
                    >
                      Skeleton
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/slider"
                    >
                      Slider
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/switch"
                    >
                      Switch
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/table"
                    >
                      Table
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/tabs"
                    >
                      Tabs
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/textarea"
                    >
                      Textarea
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/toast"
                    >
                      Toast
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/toggle"
                    >
                      Toggle
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/toggle-group"
                    >
                      Toggle Group
                    </Link>
                    <Link
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                      target=""
                      rel=""
                      href="/docs/components/tooltip"
                    >
                      Tooltip
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60vw] overflow-scroll h-screen">{children}</div>
      </div>
    </>
  );
}
