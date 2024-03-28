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
    const [pais, setPais] = useState('')
    const [estado, setEstado] = useState('')
    const [cidade, setCidade] = useState('')
    const [cep, setCep] = useState('')
    const [bairro, setBairro] = useState('')
    const [rua, setRua] = useState('')
    const [numero, setNumero] = useState('')
    const [complemento, setcomplemento] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmasenha, setConfirmaSenha] = useState('')
    const [error,setError] = useState('')

    const Verifica = () => {

        if (!razaosocial || !fantasia || !email || !telefone || !cnpj || !inscricao || !setor) {
            setError('Campos não preenchidos')
            setTimeout(() => {
                setError()
            }, 5000)
        } else {
            Navigate('/')
        }   
    }
    
    const Verifica2 = () => {

        if (!pais || !estado || !cidade || !cep || !bairro || !rua || !numero || !complemento || !senha || !confirmasenha) {
            setError('Campos não preenchidos')
            setTimeout(() => {
                setError()
            }, 5000)
        } else {
            Navigate('/')
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
                            <div className=" grid grid-cols-1 gap-4 xl:grid-cols-2 xl:mt-10 2xl:gap-x-48 2xl:gap-y-12">
                                <div  className="w-auto">
                                    <div className="w-4/5">
                                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">Razão Social: </label>
                                        <div className="mt-2">
                                            <input onChange={(e) => setRazao(e.target.value)} id="razaosocial" name="razaosocial" type="text" required className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="w-auto ">
                                    <div className="w-4/5">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Fantasia:</label>
                                        <div className="mt-2">
                                            <input onChange={(e) => setFantasia(e.target.value)} id="fantasia" name="fantasia" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">CNPJ:</label>
                                        <div className="mt-2">
                                            <input onChange={(e) => setCnpj(e.target.value)} id="cnpj" name="cnpj" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="w-auto ">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Inscrição Estadual:</label>
                                        <div className="mt-2">
                                            <input onChange={(e) => setInscricao(e.target.value)} id="inscricao" name="inscricao" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Setor de atuação:</label>
                                        <div className="mt-2">
                                            <input onChange={(e) => setSetor(e.target.value)} id="setor" name="setor" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">E-Mail:</label>
                                        <div className="mt-2">
                                            <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Telefone:</label>
                                        <div className="mt-2">
                                            <input onChange={(e) => setTelefone(e.target.value)} id="telefone" name="telefone" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto">
                                    <div className="w-4/5">
                                        <label htmlFor="name" className="block ml-6 text-sm font-medium leading-6 text-black">País: </label>
                                        <div className="">
                                            <input onChange={(e) => setPais(e.target.value)} id="pais" name="pais" type="text" required className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto ">
                                    <div className="w-4/5">
                                        <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Estado(UF):</label>
                                        <div className="">
                                            <input onChange={(e) => setEstado(e.target.value)} id="estado" name="estado" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Cidade:</label>
                                        <div className="">
                                            <input onChange={(e) => setCidade(e.target.value)} id="cidade" name="cidade" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto ">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">CEP:</label>
                                        <div className="">
                                            <input onChange={(e) => setCep(e.target.value)} id="cep" name="cep" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Bairro:</label>
                                        <div className="">
                                            <input onChange={(e) => setBairro(e.target.value)} id="bairro" name="bairro" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Rua:</label>
                                        <div className="">
                                            <input onChange={(e) => setRua(e.target.value)} id="rua" name="rua" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Numero:</label>
                                        <div className="">
                                            <input onChange={(e) => setNumero(e.target.value)} id="cpf" name="cpf" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">complemento:</label>
                                        <div className="">
                                            <input onChange={(e) => setcomplemento(e.target.value)} id="cpf" name="cpf" type="text" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Senha:</label>
                                        <div className="">
                                            <input onChange={(e) => setSenha(e.target.value)} id="Confirmar Senha" name="Confirmar Senha" type="password" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                                <div  className="hidden w-auto">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Confirmar Senha:</label>
                                        <div className="">
                                            <input onChange={(e) => setConfirmaSenha(e.target.value)} id="Confirmar Senha" name="Confirmar Senha" type="password" required='true' className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            <div className='flex text-red-500 font-semibold justify-center mt-4'>{error && <h1>{error}</h1>}</div>
                            <div className="flex w-full mt-2 xl:mt-10 justify-center">
                                <button onClick={(e) => { e.preventDefault(); Verifica() }} className="w-auto bg-cyan-400 hover:bg-cyan-600 text-black font-semibold p-4 xl:mt-3.5 px-4 rounded-full ">
                                    Próximo Passo
                                </button>
                                <button onClick={(e) => { e.preventDefault(); Verifica2() }} className=" hidden w-auto bg-cyan-400 hover:bg-cyan-600 text-black font-semibold p-4 xl:mt-3.5 px-4 rounded-full">
                                    Criar Conta
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
