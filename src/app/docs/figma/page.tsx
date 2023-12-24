import React from "react";
const Figma = () => {
  return (
    <>
      <div className="pb-12 pt-8">
        <div className="mdx">
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            The Figma UI Kit is open sourced by{" "}
            <a
              className="font-medium underline underline-offset-4"
              href="https://twitter.com/skirano"
            >
              Pietro Schirano
            </a>
            .
          </p>
          <div
            data-radix-aspect-ratio-wrapper=""
            className=": relative; w-[100%]; pb-[56.25%]"
          >
            <div className="w-full mt-4">
              <iframe
                src="https://embed.figma.com/file/1203061493325953101/hf_embed?community_viewer=true&amp;embed_host=shadcn&amp;hub_file_id=1203061493325953101&amp;kind=&amp;viewer=1"
                className="h-full w-full overflow-hidden rounded-lg border bg-muted"
              ></iframe>
            </div>
          </div>
          <h2
            className="font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0"
            id="grab-a-copy"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#grab-a-copy"
            >
              <span className="icon icon-link"></span>
            </a>
            Grab a copy
          </h2>
          <p className="leading-7 [&amp;:not(:first-child)]:mt-6">
            <a
              className="font-medium underline underline-offset-4"
              href="https://www.figma.com/community/file/1203061493325953101"
            >
              https://www.figma.com/community/file/1203061493325953101
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Figma;
