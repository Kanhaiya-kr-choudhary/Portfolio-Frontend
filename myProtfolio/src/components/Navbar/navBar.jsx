function Navbar() {
  return (
    <nav className="bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 fixed w-full z-20 top-0 border-b border-slate-700">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">

        <a href="#home" className="flex items-center space-x-3">
          <span className="self-center text-xl text-blue-500 font-semibold whitespace-nowrap">
            Portfolio
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-slate-700 rounded-lg bg-slate-900 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">

            <li>
              <a href="#home" className="block py-2 px-3 text-white hover:text-blue-400 md:p-0">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="block py-2 px-3 text-white hover:text-blue-400 md:p-0">
                About
              </a>
            </li>

            <li>
              <a href="#services" className="block py-2 px-3 text-white hover:text-blue-400 md:p-0">
                Services
              </a>
            </li>

            <li>
              <a href="#projects" className="block py-2 px-3 text-white hover:text-blue-400 md:p-0">
                Projects
              </a>
            </li>

            <li>
              <a href="#contact" className="block py-2 px-3 text-white hover:text-blue-400 md:p-0">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;