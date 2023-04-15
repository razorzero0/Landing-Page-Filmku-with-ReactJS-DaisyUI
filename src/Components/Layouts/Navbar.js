import Pinf from "../Api/PinF";
export default function Navbar() {
  return (
    <div class="navbar bg-base-100 sticky top-0 z-10">
      <div class="navbar-start">
        <div class="dropdown">
          <label
            tabindex="0"
            class="btn btn-ghost btn-circle  text-indigo-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class=" text-indigo-500  menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center">
        <a class="btn btn-ghost text-indigo-500 normal-case text-xl">FilmKu</a>
      </div>
      <div class="navbar-end">
        <button class="btn btn-ghost btn-circle  text-indigo-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button class="btn btn-ghost btn-circle  text-indigo-500 ">
          <div class="indicator">
            <Pinf />
          </div>
        </button>
      </div>
    </div>
  );
}
