function App() {
  return (
    <main>
      <div className="flex pl-20 mt-10">
        <div className="flex-1">
          <div className="bg-gradient-to-r from-[#3d84ff] to-[#3f0061] bg-clip-text">
            <p className=" text-transparent text-5xl font-vite-type font-semibold leading-relaxed">
              Vite
            </p>
          </div>
          <p className=" text-[rgb(223,223,216)] text-5xl font-vite-type font-semibold leading-20">
            Next Generation Frontend Tooling
          </p>
          <p className=" text-[rgb(153,153,160)] text-2xl font-vite-type leading-15 mt-5">
            Get ready for a development environment that can finally catch up
            with you.
          </p>
          <button className="border-solid border-2 border-[rgb(63,63,69)] p-2 m-1 mt-5 rounded-full font-vite-type text-sm text-white bg-[rgb(101,106,247)]">
            Get started
          </button>
          <button className="border-solid border-2 border-[rgb(63,63,69)] p-2 m-1 rounded-full font-vite-type text-sm text-white bg-[#313136]">
            Why Vite?
          </button>
          <button className="border-solid border-2 border-[rgb(63,63,69)] p-2 m-1 rounded-full font-vite-type text-sm text-white bg-[#313136]">
            View on GitHub
          </button>
        </div>
        <div className="contents">
          <div className="flex-1 text-white mb-0 ">
            <img
              className="max-h-80"
              src="https://vitejs.dev/logo-with-shadow.png"
              alt="vite-logo"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center"></div>
      <div className="grid grid-cols-3 gap-4 auto-cols-min mt-6 font-vite-type max-w-fit p-3 m-20">
        <div className="text-white bg-[#252529] p-1 rounded-md">
          <div className="p-3">
            <div className="max-w-fit bg-[#1E1E20] p-3 ml-3 rounded-md">
              <p>💡</p>
            </div>
            <div className="max-w-fit p-3">
              <p className="text-base">Instant Server Start</p>
              <p className="text-sm text-[#9A9BA2] mt-2">
                On demand file serving over native ESM, no bundling required!
              </p>
            </div>
          </div>
        </div>
        <div className="text-white bg-[#252529] p-1 rounded-md">
          <div className="p-3">
            <div className="max-w-fit bg-[#1E1E20] p-3 ml-3 rounded-md">
              <p>⚡️</p>
            </div>
            <div className="max-w-fit p-3">
              <p className="text-base">Lightning Fast HMR</p>
              <p className="text-sm text-[#9A9BA2] mt-2">
                Hot Module Replacement (HMR) that stays fast regardless of app
                size.
              </p>
            </div>
          </div>
        </div>
        <div className="text-white bg-[#252529] p-1 rounded-md">
          <div className="p-3">
            <div className="max-w-fit bg-[#1E1E20] p-3 ml-3 rounded-md">
              <p>🛠️</p>
            </div>
            <div className="max-w-fit p-3">
              <p className="text-base">Rich Features</p>
              <p className="text-sm text-[#9A9BA2] mt-2">
                Out-of-the-box support for TypeScript, JSX, CSS and more.
              </p>
            </div>
          </div>
        </div>
        <div className="text-white bg-[#252529] p-1 rounded-md">
          <div className="p-3">
            <div className="max-w-fit bg-[#1E1E20] p-3 ml-3 rounded-md">
              <p>📦</p>
            </div>
            <div className="max-w-fit p-3">
              <p className="text-base">Optimized Build</p>
              <p className="text-sm text-[#9A9BA2] mt-2">
                Pre-configured Rollup build with multi-page and library mode
                support.
              </p>
            </div>
          </div>
        </div>
        <div className="text-white bg-[#252529] p-1 rounded-md">
          <div className="p-3">
            <div className="max-w-fit bg-[#1E1E20] p-3 ml-3 rounded-md">
              <p>🔩</p>
            </div>
            <div className="max-w-fit p-3">
              <p className="text-base">Universal Plugins</p>
              <p className="text-sm text-[#9A9BA2] mt-2">
                Rollup-superset plugin interface shared between dev and build.
              </p>
            </div>
          </div>
        </div>
        <div className="text-white bg-[#252529] p-1 rounded-md">
          <div className="p-3">
            <div className="max-w-fit bg-[#1E1E20] p-3 ml-3 rounded-md">
              <p>🔑</p>
            </div>
            <div className="max-w-fit p-3">
              <p className="text-base">Fully Typed APIs</p>
              <p className="text-sm text-[#9A9BA2] mt-2">
                Flexible programmatic APIs with full TypeScript typing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
