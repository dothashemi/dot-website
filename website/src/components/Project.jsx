import Icons from "./Icons.jsx";

export default function Project({ title, url, tools, hr }) {
  return (
    <>
      <div className="flex mt-4 space-x-4">
        <div className="flex items-center w-[3.5rem] h-[3.5rem] bg-gray-100 border text-purple-800 text-2xl rounded-lg">
          <span className="mx-auto font-[500]">{title[0]}</span>
        </div>

        <div className="w-full">
          <div className="mb-1 text-[1.07rem] font-[500]">{title}</div>

          <div className="flex items-center mb-6 space-x-2 text-gray-500">
            <Icons tag="tag" />
            {tools.map((tool, index) => (
              <>
                <span key={tool} className="text-sm">
                  {tool}
                  {index !== tools.length - 1 && ","}
                </span>
              </>
            ))}
          </div>

          <div>
            <a
              href={url}
              target="_blank"
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
