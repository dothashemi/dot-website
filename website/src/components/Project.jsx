import Icons from "./Icons";

export default function Project({ title, url, tools, hr }) {
  return (
    <>
      <div className="flex mt-4 space-x-4">
        <div className="flex items-center w-12 h-12 bg-gray-100 border text-purple-800 text-2xl rounded-lg">
          <span className="mx-auto font-[600]">{title[0]}</span>
        </div>

        <div className="w-full">
          <div className="mb-1 text-[1.07rem] font-[500]">{title}</div>

          <div className="flex items-center mb-6 space-x-2 text-gray-500">
            <Icons tag="tag" />
            {tools.map((tool) => (
              <>
                <span key={tool} className="text-sm">
                  {tool}
                </span>
              </>
            ))}
          </div>

          <div>
            <a
              href={url}
              target="blank"
              className="flex items-center w-fit space-x-2 p-2 rounded-lg border border-purple-800 font-[400] text-[0.9rem] text-purple-800 ease-in-out duration-200 hover:bg-purple-800 hover:text-white"
            >
              <Icons tag="link" />
              <span>{url}</span>
            </a>
          </div>

          {hr && <hr className="mt-6" />}
        </div>
      </div>
    </>
  );
}
