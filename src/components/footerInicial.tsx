import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function FooterInicial() {
  return (
    <footer className='hidden fixed bottom-0 lg:flex items-center justify-between w-full h-1/4 px-32 py-5 bg-gray-600'>
        <div className='flex justify-center h-full'>
            <img src="LogoDark.svg" alt="Logo do Fotter" className='' />
        </div>
        <div className='flex flex-col items-center text-white'>
            <h1>Suporte</h1>
            <h1>FAQ</h1>
            <h1>SAC: 0800 -000</h1>
            <h1>Contate-nos</h1>
            <h1>Avalie nossos serviços</h1>
        </div>
        <div className='flex flex-col items-center text-white'>
            <h1>Termos De Uso</h1>
            <h1>Termos de uso e Aceite</h1>
            <h1>SL.G.P.D - Lei 13709</h1>
        </div>
        <div className='flex flex-col gap-2 items-center text-white'>
            <h1>Social</h1>
        <div className='flex items-center gap-8'>
            <FaInstagram />
            <FaTiktok />
            <FaXTwitter />
        </div>
        </div>
        
    </footer>
    )
}

export default FooterInicial