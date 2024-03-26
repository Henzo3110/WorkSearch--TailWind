import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormCriarConta() {
    const Navigate = useNavigate()
    const [pais, setPais] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [logradouro, setLogradouro] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmasenha, setConfirmaSenha] = useState('')

    const Verifica = () => {
        if (pais == '' || estado == '' || cidade == '' || cep == '' || bairro == '' || rua == '' || numero == '' || logradouro == '' || senha == '' || confirmasenha == '' ) {
            document.getElementById('CamposIncompletos').style.display = "flex"
            document.getElementById('EmailSenhaErr').style.display = "none"
            setTimeout(() => {
                document.getElementById('CamposIncompletos').style.display = "none"
            }, 5000)

            Navigate('/Registrar-se')
        } else if(pais !== '' || senha !== ''){
            const error =  error;
            document.getElementById('EmailSenhaErr').style.display = "flex"
            document.getElementById('CamposIncompletos').style.display = "none"
            setTimeout(() => {
                document.getElementById('EmailSenhaErr').style.display = "none"
            }, 5000)

            Navigate('/Registrar-se')
        } else {
            Navigate('/Entrou')
        }
    }

    return (
        <>
            <div className="flex flex-row w-screen h-screen justify-center items-center ">
            <div className="bg-[url('/public/FundoW.svg')] absolute top-0 -z-10 bg-cover w-screen h-screen"></div>
                <card className="flex flex-col items-center gap-5 border-4 w-1/4 h-fit absolute left-14 bg-gradient-to-br from-sky-300 via-sky-200 to-sky-100 rounded-3xl ">
                  <img src="LogoMin.svg" alt="Logo Registro" /> 
                   <h1 className="flex font-semibold text-2xl" >Seja Bem-Vindo(A)!</h1>
                   <h2 className="flex font-bold text-sky-500 text-3xl">CRIAR CONTA</h2>
                   <p className="flex mt-52 mb-4">Ja possui uma conta? Entre <a className="underline text-sky-500 ml-1 cursor-pointer" onClick={() => Navigate('/login')}>aqui</a></p>
                </card>
                <card className="flex flex-col items-center w-3/5 h-fit pt-8 pb-12 border-4 rounded-3xl ml-60 bg-gray-100 ">
                    <form>
                        <div className=" grid grid-cols-2 mt-10 gap-5">
                            <div className="w-auto">
                                <div className="w-4/5">
                                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">País: </label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setPais(e.target.value)} id="pais" name="pais" type="text" required className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto ">
                                <div className="w-4/5">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Estado(UF):</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setEstado(e.target.value)} id="estado" name="estado" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Cidade:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setCidade(e.target.value)} id="cidade" name="cidade" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto ">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">CEP:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setCep(e.target.value)} id="cep" name="cep" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Bairro:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setBairro(e.target.value)} id="bairro" name="bairro" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Rua:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setRua(e.target.value)} id="rua" name="rua" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Numero:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setNumero(e.target.value)} id="cpf" name="cpf" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Logradouro:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setLogradouro(e.target.value)} id="cpf" name="cpf" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Senha:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setSenha(e.target.value)} id="Confirmar Senha" name="Confirmar Senha" type="password" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div className="w-auto">
                                <div className="sm:col-span-3">
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Confirmar Senha:</label>
                                    <div className="mt-2">
                                        <input onChange={(e) => setConfirmaSenha(e.target.value)} id="Confirmar Senha" name="Confirmar Senha" type="password" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
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
                        <div>
                            <input type='checkbox' id='Concordar' name='Concordar' className='ml-6 mt-6'></input>
                            <label htmlFor="Concordar" className='mt-1.5 ml-1 underline font-semibold'>Concordo com os termos & políticas de uso</label>
                        </div>
                        <div className="flex w-full mt-10 justify-center">
                            <button onClick={(e) => { e.preventDefault(); Verifica(); Navigate('/Menu')}} className="w-auto bg-cyan-400 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-full">
                                Criar Conta
                            </button>
                        </div>
                        
                    </form>
                </card>
            </div >
        </>
    )
}

export default FormCriarConta
