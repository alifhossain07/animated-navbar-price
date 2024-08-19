import { useState } from "react";
import Link from "../Link/Link";
import { TiThMenuOutline } from "react-icons/ti";
import { FaWindowClose } from "react-icons/fa";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Blog', path: '/blog' },
        { id: 5, name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="bg-yellow-500 p-10">
        <div  className="md:hidden" onClick={()=> setOpen(!open)}>
        {
            open === true ? <FaWindowClose className="text-3xl" /> : <TiThMenuOutline className="text-3xl" />
        }
        </div>
        
           <ul className={`md:flex md:space-y-0 md:gap-10 space-y-5
                md:static absolute top-20 left-20 w-full md:bg-transparent
                transform ${open ? 'transition duration-1000 translate-y-16 opacity-100' : ' translate-y-12  opacity-0'}
                md:transform-none md:opacity-100
                 `}>                    
           {
                routes.map(route => <Link key={route.id} route={route}></Link>

                )
            }
           </ul>

        </nav>
    );
};

export default NavBar;