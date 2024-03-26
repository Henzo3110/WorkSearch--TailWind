import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormRegistroUser() {
    const Navigate = useNavigate()
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [datadenascimento, setData] = useState('')
    const [cpf, setCpf] = useState('')

    const Verifica = () => {
        if (nome == '' || sobrenome == '' || email == '' || telefone == '' || datadenascimento == '' || cpf == '') {
            document.getElementById('CamposIncompletos').style.display = "flex"
            document.getElementById('EmailSenhaErr').style.display = "none"
            setTimeout(() => {
                document.getElementById('CamposIncompletos').style.display = "none"
            }, 5000)
        } else if (nome == '' || email !== '') {
            document.getElementById('EmailSenhaErr').style.display = "flex"
            document.getElementById('CamposIncompletos').style.display = "none"
            setTimeout(() => {
                document.getElementById('EmailSenhaErr').style.display = "none"
            }, 5000)
        } else {
            Navigate('/Entrou')
        }
    }

    return (
        <>
            <div className="flex w-screen h-screen justify-center items-center ">
            <div className="bg-[url('/public/FundoW.svg')] absolute top-0 -z-10 bg-cover w-screen h-screen"></div>
               <div className='flex flex-row h-4/5 w-5/6'>
                <div className="hidden lg:flex flex-col items-center gap-5 border-4 w-1/3 h-full bg-gradient-to-br from-sky-300 via-sky-200 to-sky-100 rounded-3xl ">
                    <img src="LogoMin.svg" alt="Logo Registro" />
                    <h1 className="flex font-semibold p-8 text-center lg:text-2xl " >Seja Bem-Vindo(A)!</h1>
                    <h2 className="flex font-bold text-sky-500 text-3xl">CRIAR CONTA</h2>
                    <div className='h-full w-full flex justify-center items-end'>
                    <p className="flex">Ja possui uma conta? Entre <a className="underline text-sky-500 ml-1 cursor-pointer" onClick={() => Navigate('/login')}>aqui</a></p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full h-full pt-8 pb-12 border-4 rounded-3xl bg-gray-100 ">
                    <form>
                        <div className=" grid grid-cols-1 gap-3 xl:gap-16 xl:grid-cols-2 xl:mt-10 2xl:gap-32">
                            <div className=" lg:w-auto">
                                <div className="w-4/5">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">Nome: </label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setNome(e.target.value)} id="name" name="name" type="text"  required className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto ">
                                <div className="w-4/5">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Sobrenome:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setSobrenome(e.target.value)} id="name" name="name" type="text"  required='true' className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Email:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" required='true' className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto ">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Telefone:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setTelefone(e.target.value)} id="telefone" name="telefone" type="text" required='true' className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Data de Nascimento:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setData(e.target.value)} id="data" name="data" type="date" required='true' className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">CPF:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setCpf(e.target.value)} id="cpf" name="cpf" type="text" required='true' className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div id='EmailSenhaErr' className='hidden justify-center mt-2'>
                                    <small className='text-red-500'>Email ou Senha Invalido</small>
                                </div>
                                <div id='CamposIncompletos' className='hidden justify-center mt-2'>
                                    <small className='text-red-500'>Campos Inconpletos</small>
                                </div>
                        </div>
                        <div className="flex w-full mt-2 xl:mt-10 justify-center">
                            <button onClick={(e) => { e.preventDefault(); Verifica(); Navigate('/RegistroConta')}} className="w-auto bg-cyan-400 hover:bg-cyan-600 text-black font-semibold p-4 xl:mt-3.5 px-4 rounded-full">
                                Próximo Passo
                            </button>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default FormRegistroUser
