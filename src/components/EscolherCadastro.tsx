import React from 'react'
import { TiUser } from "react-icons/ti";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


function EscolherCadastro() {
    const Navigate = useNavigate()
    return (
        <main className='flex flex-row w-screen h-screen items-center justify-center'>
            <img src="FundoW.svg" alt="Fundo da tela" className='flex h-fit w-full z-0 ml-0' />
            <p className='flex absolute top-20 text-4xl font-semibold'>CADASTRAR CONTA COMO:</p>
            <div className='flex flex-row justify-between gap-80 text-8xl z-10 text-black absolute'>
                
                <div onClick={() => Navigate('/RegistroUser')}className='flex  bg-gray-100 hover:text-sky-300 rounded-3xl w-80 h-80 justify-center items-center'>
                <p className='flex absolute text-4xl top-16'>Usuário</p>
                     <TiUser  />
                </div> 
                <div onClick={() => Navigate('/RegistroEmpresa')} className='flex bg-gray-100 hover:text-sky-300 rounded-3xl w-80 h-80 justify-center items-center'>
                <p className='flex absolute text-4xl top-16'>Empresa</p>
                    <BsSuitcaseLgFill/>
                </div>
            </div>
        </main>
    )
}

export default EscolherCadastro
