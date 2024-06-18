import React, { useContext, useState } from "react";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import AddVehicle from "./screens/AddVehicle";
import Navbarr from "./screens/Navbarr";
import Sidebarr from "./screens/Sidebarr";

const SideBarContext = React.createContext<{ toggleSideBar: () => void }>({
  toggleSideBar: () => {},
});

export const useSideBarContext = () => useContext(SideBarContext);

function App() {
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className={"App"}>
      {/* <div className={style + " App"}> */}
        <div className="">
          <div className="">
            <div className="flex-1 flex flex-col">
              <Navbarr />
              <div className="md:flex">
                <Sidebarr />
                {/* <main className=" flex-1 p-6 ">
                  <AddVehicle />
                </main> */}
              </div>
            </div>
          </div>  
        </div>
      </div>
    </>
  );
}

export default App;