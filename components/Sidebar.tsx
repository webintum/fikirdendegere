"use client"
import { usePathname} from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BiSolidFactory } from "react-icons/bi";
import {RiDraftLine } from "react-icons/ri";
import { FiAlertCircle, FiThumbsUp } from "react-icons/fi";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";
import Image from 'next/image';
import profilePic from '../public/images/ivlogo.png';

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({
    children 
}) => {

    const pathname = usePathname();
    const routes = useMemo (() => [
        {   
            icon: HiHome,
            label:'Anasayfa',
            active: pathname !== '/search',
            href:'/',
        },
        {
            icon: BiSearch,
            label:'Ara',
            active: pathname === '/search',
            href: '/search',
        },
        {
            icon: BiSolidFactory,
            label:'Kırpart',
            active: pathname === '/search',
            href: '/search',
        },
    
    ], [pathname]);

    const idearoutes = useMemo (() => [
 
        {
            icon: RiDraftLine,
            label:'Taslak',
            active: pathname === '/search',
            href: '/search',
        },
        {
            icon: FiThumbsUp,
            label:'Onaylanan',
            active: pathname === '/search',
            href: '/search',
        },
        {
            icon: FiAlertCircle,
            label:'Onay Bekleyen',
            active: pathname === '/search',
            href: '/search',
        },
    
    ], [pathname]);

    return ( 
        
        <div className="flex h-full">

           <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
           <Box>
           <Image p-4
                src={profilePic}
                alt="Picture of the author"    />
           </Box>
            <Box>
           
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    {routes.map((item) => (
                        <SidebarItem
                        key={item.label}
                        {...item} />
                    ))}
                </div>
            </Box>
            <Box className="overflow-y-auto h-full">
                <Library  />
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    {idearoutes.map((item) => (
                        <SidebarItem
                        key={item.label}
                        {...item} />
                    ))}
                </div>
            </Box>
            
           </div>
           
        <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
        </main>
        
        </div>
        
     );

 
}
 
export default Sidebar;