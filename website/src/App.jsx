import { useState } from "react";

import { DATA } from "./data.js";
import Icons from "./components/Icons.jsx";
import "./App.css";

function App() {
  return (
    <>
      <main className="lg:w-[1024px] mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="space-y-4">
            <div className="rounded-lg overflow-hidden bg-white shadow">
              <div className="relative h-20 mb-6 bg-gray-300">
                <div className="absolute left-8 -bottom-6 w-16 h-16 rounded-lg border-2 bg-purple-300"></div>
              </div>

              <div className="p-4">
                <div className="mb-2 font-bold text-lg">Mohamed Hashemi</div>
                <div className="mb-6 text-sm text-gray-500">
                  Back-End Developer | Junior DevOps Engineer
                </div>

                <a href="#">
                  <div className="w-full p-3 rounded-lg bg-purple-900 hover:bg-purple-950 text-sm text-white text-center">
                    Download Resume
                  </div>
                </a>
              </div>
            </div>
            <div className="p-4 rounded-lg bg-white shadow">
              <div className="mb-3 font-bold text-lg">Skills & Tools</div>
              <div className="flex flex-wrap -m-1 text-sm">
                {DATA.skills.map((item) => (
                  <div className="m-1 p-2 rounded-lg text-purple-800 bg-purple-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-lg bg-white shadow">
              <div className="p-4">
                <div className="mb-4 font-bold text-lg">About Me</div>

                <div className="flex items-center space-x-4">
                  <a href="http://linkedin.com/in/dothashemi" target="blank">
                    <Icons tag="linkedin" />
                  </a>
                  <a href="http://github.com/dothashemi" target="blank">
                    <Icons tag="github" />
                  </a>
                  <a href="#">
                    <Icons tag="twitter" />
                  </a>
                  <a href="http://wa.me/+989211696033" target="blank">
                    <Icons tag="whatsapp" />
                  </a>
                </div>
              </div>

              <hr />

              <div className="flex">
                <div className="p-4">Resume</div>
                <div className="p-4">Projects</div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow">
              <div className="mb-4 font-bold text-lg">Portfolios</div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
