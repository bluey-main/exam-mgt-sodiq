// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
import yctLogo from './assets/yct.png'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FiBook } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react";
import Nd1 from "./computerTech/Nd1";
import Nd2 from "./computerTech/Nd2";
import Hnd1 from "./computerTech/Hnd1";
import Hnd2 from "./computerTech/Hnd2";
import FTNd1 from "./foodTech/Nd1";
import FTNd2 from "./foodTech/Nd2";
import FTHnd1 from "./foodTech/Hnd1";
import FTHnd2 from "./foodTech/Hnd2";
import NUTNd1 from "./nut/Nd1";
import NUTNd2 from "./nut/Nd2";
import NUTHnd1 from "./nut/Hnd1";
import NUTHnd2 from "./nut/Hnd2";
import HMTNd1 from "./hmt/Nd1";
import HMTNd2 from "./hmt/Nd2";
import HMTHnd1 from "./hmt/Hnd1";
import HMTHnd2 from "./hmt/Hnd2";
import TETNd1 from "./tet/Nd1";
import TETNd2 from "./tet/Nd2";
import TETHnd1 from "./tet/Hnd1";
import TETHnd2 from "./tet/Hnd2";
import PLTNd1 from "./plt/Nd1";
import PLTNd2 from "./plt/Nd2";

export default function Dashboard() {
  const [displayComponent, setDisplayComponent] = useState(<Nd1/>)
  const [activePage, setActivePage] = useState('')
  const allClasses = [
    {
      id: 1,
      name: "Computer Technology",
      classes: [
        {
          id: 1,
          name: "ND1",
          route: <Nd1/>
        },
        {
          id: 2,
          name: "ND2",
          route: <Nd2/>
        },
        {
          id: 3,
          name: "HND1",
          route: <Hnd1/>
        },
        {
          id: 4,
          name: "HND2",
          route: <Hnd2/>
        },
      ],
    },
    {
      id: 2,
      name: "Food Technology",
      classes: [
        {
          id: 1,
          name: "ND1",
          route: <FTNd1/>
        },
        {
          id: 2,
          name: "ND2",
          route: <FTNd2/>
        },
        {
          id: 3,
          name: "HND1",
          route: <FTHnd1/>
        },
        {
          id: 4,
          name: "HND2",
          route: <FTHnd2/>
        },
      ],
    },
    {
      id: 3,
      name: "Nutrition and Dietics",
      classes: [
        {
          id: 1,
          name: "ND1",
          route: <NUTNd1/>
        },
        {
          id: 2,
          name: "ND2",
          route: <NUTNd2/>
        },
        {
          id: 3,
          name: "HND1",
          route: <NUTHnd1/>
        },
        {
          id: 4,
          name: "HND2",
          route: <NUTHnd2/>
        },
      ],
    },

    {
      id: 4,
      name: "Hospitality Management",
      classes: [
        {
          id: 1,
          name: "ND1",
          route: <HMTNd1/>
        },
        {
          id: 2,
          name: "ND2",
          route: <HMTNd2/>
        },
        {
          id: 3,
          name: "HND1",
          route: <HMTHnd1/>
        },
        {
          id: 4,
          name: "HND2",
          route: <HMTHnd2/>
        },
      ],
    },

    {
      id: 5,
      name: "Textile Technology",
      classes: [
        {
          id: 1,
          name: "ND1",
          route: <TETNd1/>
        },
        {
          id: 2,
          name: "ND2",
          route: <TETNd2/>
        },
        {
          id: 3,
          name: "HND1",
          route: <TETHnd1/>
        },
        {
          id: 4,
          name: "HND2",
          route: <TETHnd2/>
        },
      ],
    },

    {
      id: 6,
      name: "Polymer Technology",
      classes: [
        {
          id: 1,
          name: "ND1",
          route: <PLTNd1/>
        },
        {
          id: 2,
          name: "ND2",
          route: <PLTNd2/>
        },
      
      ],
    },
  ];
  return (
    <div className="w-full h-screen bg-orange- flex">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={20} className="border-2 border-black bg-green-600 text-white">
          <div className="w-full h-[15%] bg-purple- flex px-10 my-10 items-center gap-x-5 ">
            <img src={yctLogo} className='h-full' />
            <h1 className='text-2xl'>Exam Management System</h1>
          </div>
          <div className="w-full h-[85%] bg-amber- flex flex-col gap-y-5 px-10 ">
            <ScrollArea>
            {allClasses.map((item, index) => {
              {
                return (
                  <Accordion type="single" collapsible key={index}>
                    <AccordionItem value={item.name}>
                      <AccordionTrigger>
                        <FiBook className="text-3xl" />

                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent className="px-10">
                        {item.classes.map((classItem, index) => {
                          return (
                            <div
                              key={index}
                              className="w-full h-11 bg-pink- flex items-center gap-x-5 cursor-pointer"
                              onClick={() => {
                                setDisplayComponent(classItem.route)
                                setActivePage(`${classItem.name} ${item.name}`)
                              }}
                            >
                              <FaPlus className="text-2xl" />
                              <p>{classItem.name}</p>
                            </div>
                          );
                        })}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                );
              }
            })}
            </ScrollArea>
            
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />
        <ResizablePanel minSize={70} className="border-2 border-black">
          <div className="w-full h-[15%] bg-purple- flex justify-between items-center ">
            <p className="pl-10 text-2xl font-bold">{activePage}</p>
            <DropdownMenu>
              <DropdownMenuTrigger className="h-full w-[20%] bg-blue- flex focus:border-none focus:outline-none">
                <div className="w-[30%] h-full bg-slate- flex justify-center items-center">
                  <Avatar className="bg-slate-300">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="w-[70%] h-full bg-slate- flex flex-col items-start justify-center">
                  <p className="text-xl">Mr Femi Laz</p>
                  <p>Exam Officer</p>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 h-full bg-slate-500 text-white">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Log Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="w-full h-[85%] bg-slate">
            {displayComponent}
          
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      {/* <div className="w-[15%] h-full bg-red-500">
       
      </div> */}
      {/* <div className="w-[85%] h-full bg-green-500">
       


      </div> */}
    </div>
  );
}
