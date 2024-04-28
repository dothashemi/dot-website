import { useState } from "react";

import { DATA } from "./data.js";
import "./App.css";

function App() {
  return (
    <>
      <main className="w-[1024px] mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-white shadow">
              <p className="font-bold text-lg">Mohamed Hashemi</p>
              <p className="text-sm text-gray-500">Back-End Developer</p>

              <p>Download Resume</p>
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
          <div className="lg:col-span-2">
            <div className="rounded-lg bg-white shadow">
              <div className="p-4">
                <p className="font-bold text-lg">About Me</p>
              </div>

              <hr />

              <div className="flex">
                <div className="p-4">Resume</div>
                <div className="p-4">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
