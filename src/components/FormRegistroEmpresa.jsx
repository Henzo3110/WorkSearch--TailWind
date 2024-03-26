import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormRegistroEmpresa() {
    const Navigate = useNavigate()
    const [razaosocial, setRazao] = useState('')
    const [fantasia, setFantasia] = useState('')
    const [cnpj, setCnpj] = useState('')
    const [inscricao, setInscricao] = useState('')
    const [setor, setSetor] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')

    const Verifica = () => {
        if (razaosocial == '' || fantasia == '' || email == '' || telefone == '' || cnpj == '' || inscricao == '' || setor == '') {
            document.getElementById('CamposIncompletos').style.display = "flex"
            document.getElementById('EmailSenhaErr').style.display = "none"
            setTimeout(() => {
                document.getElementById('CamposIncompletos').style.display = "none"
            }, 5000)
        } else if (razaosocial == '' || email !== '') {
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
                    <h1 className="flex font-semibold p-8 text-center lg:text-2xl" >Seja Bem-Vindo(A)!</h1>
                    <h2 className="flex font-bold text-sky-500 text-3xl">CRIAR CONTA</h2>
                    <div className='h-full w-full flex justify-center items-end'>
                    <p className="flex">Ja possui uma conta? Entre <a className="underline text-sky-500 ml-1 cursor-pointer" onClick={() => Navigate('/login')}>aqui</a></p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full h-full pt-8 pb-12 border-4 rounded-3xl bg-gray-100">
                    <form>
                        <div className="grid grid-cols-1 gap-3 xl:gap-10 xl:grid-cols-2 xl:mt-10 2xl:gap-32">
                            <div className="w-auto">
                                <div className="w-4/5">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">Razão Social: </label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setRazao(e.target.value)} id="razaosocial" name="razaosocial" type="text" required className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto ">
                                <div className="w-4/5">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Fantasia:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setFantasia(e.target.value)} id="fantasia" name="fantasia" type="text"  required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">CNPJ:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setCnpj(e.target.value)} id="cnpj" name="cnpj" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto ">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Inscrição Estadual:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setInscricao(e.target.value)} id="inscricao" name="inscricao" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Setor de atuação:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setSetor(e.target.value)} id="setor" name="setor" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">E-Mail:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Telefone:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setTelefone(e.target.value)} id="telefone" name="telefone" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div id='EmailSenhaErr' className='hidden justify-center mt-6'>
                                <small className='text-red-500'>E-mail ou Senha Incorreto</small>
                            </div>
                            <div id='CamposIncompletos' className='hidden justify-center mt-6'>
                                <small className='text-red-500'>Campos Inconpletos</small>
                            </div>
                        </div>
                        <div className="flex w-full justify-center">
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

export default FormRegistroEmpresa
