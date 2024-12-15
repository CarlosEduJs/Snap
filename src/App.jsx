import { useState } from "react";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RigthBar } from "./components/RigthBar";

function App() {
  const [open, setIsOpen] = useState(false);

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  const handleShowSidebar = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-screen h-screen">
      <Header openSibar={handleShowSidebar} />
      <Hero />
      {open && (
        <div onClick={handleCloseSidebar} className="h-full w-screen bg-neutral-almost-black/20 fixed z-10"></div>
      )}
      <RigthBar close={handleCloseSidebar} open={open} />
    </div>
  );
}

export default App;
