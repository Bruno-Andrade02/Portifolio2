import React, { useState } from 'react'
import Icone from "../components/img/Bicone.png"

const Nav = () => {

    let Links = [
        { name: "Inicio", link: "/" },
        { name: "Sobre", link: "#Sobre" },
        { name: "Projetos", link: "#Projetos" },
        { name: "Habilidades", link: "#Habilidades" },
        { name: "Contato", link: "#Contato" },
    ];
    let [open, setOpen] = useState(false);
    return (
        <div id='barra' className=' w-full fixed top 0 left-0 border-b-2 bg-cinzul  border-teal-800'>
            <div id='menu' className=' md:flex justify-around py-2 md:px-10 px-7 '>

                <div id='img' className='p-0,1 w-14'> <img src={Icone} alt="" />
                </div>

                <div onClick={() => setOpen(!open)} className="text-4xl absolute right-8 top-2 cursor-pointer md:hidden p-2 space-y-0 rounded shadow">
                    <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
                </div>

                <ul className={`grid grid-cols-1 bg-cinzul text-3xl lg:space-x-12  md:p-1 md:space-x-6 absolute md:flex md:items-center md:pb-0 md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 transition-all duration-500 ease-in-out ${open ? 'top-25 opacity-100' : 'top-[-290px]'} md:opacity-100`}>
                    {
                        Links.map((Link) => (
                            <li key={Link.name} className='text-center md:text-2xl my-2 '>
                                <a href={Link.link} className='text-slate-100 hover:text-emerald-300'>{Link.name}</a>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div >
    )
}

export default Nav