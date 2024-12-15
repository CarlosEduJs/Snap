import iconArrowDown from "../assets/icon-arrow-down.svg";
import iconCloseMenu from "../assets/icon-close-menu.svg";

import { options } from "./options";
import { LoginBtn } from "../components/Buttons/LoginBtn";
import { RegisterBtn } from "./Buttons/RegisterBtn";

const SubMenu = ({ subOpts }) => (
    <ul
      className="hidden group-hover:flex group-hover:flex-col gap-3 px-3 transform transition-transform duration-300 ease-in-out -translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
    >
      {subOpts.map((subOpt, index) => (
        <li
          key={index}
          className="flex items-center gap-3 text-neutral-medium-gray font-medium hover:text-neutral-almost-black"
        >
          {subOpt.icon && <img className="w-4 h-4" src={subOpt.icon} alt="" />}
          <span className="text-sm">{subOpt.nameOpt}</span>
        </li>
      ))}
    </ul>
  );
  
export const RigthBar = ({ open, close }) => {
  return (
    <div
      className={`transform transition-transform duration-300 ease-in-out fixed z-20 right-0 top-0 bg-white w-[240px] h-full shadow-lg ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col py-3 px-5 gap-5">
        <img
          className="w-5 ml-auto cursor-pointer"
          src={iconCloseMenu}
          onClick={close}
          alt="closemenu"
        />
        <nav>
          <ul className="flex flex-col gap-4">
            {options.map((opt, index) => (
              <li
                key={index}
                className="relative group flex flex-col gap-3 text-neutral-medium-gray hover:text-neutral-almost-black cursor-pointer"
              >
                <div className="flex items-center gap-3 w-full">
                  <span className="text-sm font-medium">{opt.nameOpt}</span>
                  {opt.subOpts && (
                    <img
                      src={iconArrowDown}
                      alt="icon-arrow"
                      className="transition-transform duration-300 group-hover:rotate-180 group-hover:brightness-50"
                    />
                  )}
                </div>
                {opt.subOpts && <SubMenu subOpts={opt.subOpts} />}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col items-center gap-3">
          <LoginBtn />
          <RegisterBtn />
        </div>
      </div>
    </div>
  );
};
