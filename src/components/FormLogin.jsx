import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TiUser } from "react-icons/ti";

function Login() {
    const Navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const Verifica = () => {
        if (email == '' || senha == '') {
            document.getElementById('CamposIncompletos').style.display = "flex"
            document.getElementById('EmailSenhaErr').style.display = "none"
            setTimeout(() => {
                document.getElementById('CamposIncompletos').style.display = "none"
            }, 5000)

            Navigate('/')
        } else if (email !== 'aleksander35517@fiec.edu.br' || senha !== '123456') {
            document.getElementById('EmailSenhaErr').style.display = "flex"
            document.getElementById('CamposIncompletos').style.display = "none"
            setTimeout(() => {
                document.getElementById('EmailSenhaErr').style.display = "none"
            }, 5000)

            Navigate('/')
        } else {
            Navigate('/Entrou')
        }
    }

    return (
        <>
        <div className="bg-[url('/public/FundoW.svg')] absolute top-0 -z-10 bg-cover w-screen h-screen"></div>
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <div className="flex flex-col items-center w-5/12 h-fit pt-8 pb-12 border-4 rounded-3xl bg-gray-600">
            <TiUser className='flex mt-0 text-cyan-400 bg-white border-solid border-4 rounded-full border-cyan-400 text-9xl ' />
                <h2 className="font-bold text-4xl mt-8 text-cyan-400">Login</h2>
                <h1 className="font-bold text-2xl mt-4 text-white">Bem-Vindo De Volta</h1>
                <from>
                    <div className="mt-8 grid grid-cols-1 gap-2">
                        <div className="w-4/5">
                            <label  className="block text-sm font-medium leading-6 text-white">E-mail</label>
                            <div className="mt-2">
                                <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email"  className="lock w-96 rounded-md border-0 p-2.5 bg-black text-white ring-1 ring-blue-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 shadow-lg shadow-slate-800" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 w-auto grid grid-cols-1">
                        <div className="sm:col-span-3">
                            <label  className="block text-sm font-medium leading-6 text-white">Senha</label>
                            <div className="mt-2">
                                <input onChange={(e) => setSenha(e.target.value)} id="password" name="password" type="password" className="block w-96 rounded-md border-0 p-2.5 bg-black text-white ring-1 ring-blue-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 shadow-lg shadow-slate-800" />
                            </div>
                            <div id='EmailSenhaErr' className='hidden justify-center mt-6'>
                                <small className='text-red-500'>E-mail ou Senha Incorreto</small>
                            </div>
                            <div id='CamposIncompletos' className='hidden justify-center mt-6'>
                                <small className='text-red-500'>Campos Inconpletos</small>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-4'>
                    <input type="checkbox" id='LembrarSenha' name='LembrarSenha' className='flex mt-2'/>
                    <label htmlFor='LembrarSenha'  className='mt-1.5 ml-1'>Lembrar Senha</label>
                    <a onClick={() => Navigate('/')} className='flex absolute ml-64 mt-1 text-sky-400 underline cursor-pointer'>Esqueceu a senha?</a>
                    </div>
                    <div className="flex w-full mt-16 justify-between">
                        <div className="flex flex-col">
                        </div>
                        <button onClick={(e) => { e.preventDefault(); Verifica() }} type='submit' className="bg-cyan-300 hover:bg-cyan-600 text-white font-bold w-5/6 py-2 px-4 border border-black rounded-full mr-8">
                            Entrar
                        </button>
                    </div>
                    <div className='flex justify-center mt-2 '>
                        Não possui uma conta?Regitre-se<a className='flex text-sky-500 ml-1 underline cursor-pointer' onClick={() => Navigate('/EscolhaCadastro')}>aqui</a>
                    </div>
                </from>
            </div>
        </div >
        </>
    )
}

export default Login
