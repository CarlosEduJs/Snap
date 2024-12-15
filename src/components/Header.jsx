import Dropdown from "./Dropdown/Dropdown";
import logo from "../assets/logo.svg";
import iconArrowDown from "../assets/icon-arrow-down.svg";
import iconMenu from "../assets/icon-menu.svg";

import { options } from "./options";

import { LoginBtn } from "../components/Buttons/LoginBtn";
import { RegisterBtn } from "./Buttons/RegisterBtn";

const SubMenu = ({ subOpts }) => (
  <ul className="flex flex-col gap-3 p-4">
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

export const Header = ({ openSibar }) => {
  return (
    <header className="flex items-center justify-between py-6 px-8">
      <div className="flex items-center gap-12">
        <img src={logo} alt="logo-snap" />
        <nav>
          <ul className="flex items-center gap-8 max-md:hidden">
            {options.map((opt, index) => (
              <li
                key={index}
                className="relative group flex items-center gap-3 text-neutral-medium-gray hover:text-neutral-almost-black cursor-pointer"
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
                {opt.subOpts && (
                  <Dropdown isHover>
                    <SubMenu subOpts={opt.subOpts} />
                  </Dropdown>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-6 max-md:hidden">
        <LoginBtn />
        <RegisterBtn />
      </div>
      <img
        src={iconMenu}
        onClick={() => openSibar()}
        className="md:hidden cursor-pointer"
        alt=""
      />
    </header>
  );
};
