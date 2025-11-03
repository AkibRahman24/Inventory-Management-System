import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import Container from "../Container";
import { Link } from "react-router-dom";
import Images from "../Images";
import HeadLogo from "/src/assets/header logo.png";
import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <>
      <div className="bg-[#0C2B4E] ">
        <Container>
          <div className="flex items-center">

            <Images imgSrc={HeadLogo} className={`w-[60px]`} imgAlt={'HeadLogo'}/>
            <Menubar className="m-auto border-none shadow-none bg-transparent flex justify-center gap-x-3">
            <MenubarMenu>
              <Link to={"/dashboard"}>
                <MenubarTrigger
                  className="text-green-400 g-transparent 
  
  // Custom fix for component libraries
  data-[state=open]:bg-transparent 
  data-[state=open]:text-green-400
  data-[state=active]:bg-transparent 
  data-[state=active]:text-green-400
  
  // Also keep the standard fixes
  focus:bg-transparent focus:text-green-400 
  active:bg-transparent active:text-green-400 cursor-pointer text-xl font-medium"
                >
                  Dashboard
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link to={"products"}>
                <MenubarTrigger
                  className="text-green-400 g-transparent 
  
  // Custom fix for component libraries
  data-[state=open]:bg-transparent 
  data-[state=open]:text-green-400
  data-[state=active]:bg-transparent 
  data-[state=active]:text-green-400
  
  // Also keep the standard fixes
  focus:bg-transparent focus:text-green-400 
  active:bg-transparent active:text-green-400 cursor-pointer text-xl font-medium"
                >
                  Products
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link to={"sales"}>
                <MenubarTrigger
                  className="text-green-400 g-transparent 
  
  // Custom fix for component libraries
  data-[state=open]:bg-transparent 
  data-[state=open]:text-green-400
  data-[state=active]:bg-transparent 
  data-[state=active]:text-green-400
  
  // Also keep the standard fixes
  focus:bg-transparent focus:text-green-400 
  active:bg-transparent active:text-green-400 cursor-pointer text-xl font-medium"
                >
                  Sales
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
            <MenubarMenu>
              <Link to={"suppliers"}>
                <MenubarTrigger
                  className="text-green-400 g-transparent 
  
  // Custom fix for component libraries
  data-[state=open]:bg-transparent 
  data-[state=open]:text-green-400
  data-[state=active]:bg-transparent 
  data-[state=active]:text-green-400
  
  // Also keep the standard fixes
  focus:bg-transparent focus:text-green-400 
  active:bg-transparent active:text-green-400 cursor-pointer text-xl font-medium"
                >
                  Suppliers
                </MenubarTrigger>
              </Link>
              <Link to={"profile"}>
                <MenubarTrigger
                  className="text-green-400 g-transparent 
  
  // Custom fix for component libraries
  data-[state=open]:bg-transparent 
  data-[state=open]:text-green-400
  data-[state=active]:bg-transparent 
  data-[state=active]:text-green-400
  
  // Also keep the standard fixes
  focus:bg-transparent focus:text-green-400 
  active:bg-transparent active:text-green-400 cursor-pointer text-xl font-medium"
                >
                  Profile
                </MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>
          <Button variant="outline" className='text-green-400 my-auto'>Logout</Button>
          </div>
          
        </Container>
      </div>
    </>
  );
};

export default Header;
