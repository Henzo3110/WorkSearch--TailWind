import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PaginaRegistroUser() {
    const Navigate = useNavigate()
    const [troca, setTroca] = useState(false)
    const [trocaBotao, setTrocaBotao] = useState('próximo passo')

    const [ValorDeEntrada, setValorDeEntrada] = useState({
        nome: "",sobrenome: "",email: "",telefone: "",datadenascimento: "",cpf: "",pais: "",estado: "",cidade: "",cep: "",bairro: "",rua: "",numero: "",
        complemento: "",senha: "",confirmarsenha: ""

    })

    const [data, setData] = useState([]);
    console.log(ValorDeEntrada);

    const getdata = (e) => {
        const { value, name } = e.target;

        setValorDeEntrada(() => {
            return {
                ...ValorDeEntrada,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();
        if (troca == false) {
            if (!ValorDeEntrada.nome, !ValorDeEntrada.sobrenome, !ValorDeEntrada.datadenascimento, !ValorDeEntrada.cpf, !ValorDeEntrada.email, !ValorDeEntrada.telefone) {
                alert("Há campos não preenchidos")
            }
            else if (!ValorDeEntrada.email.includes("@")) {
                alert("E-Mail invalido")
            }
            else {
                setTroca(true)
                setTrocaBotao('Criar Conta')
            }
        } else {
            localStorage.setItem("UsuarioCandidato", JSON.stringify([...data, ValorDeEntrada]))

            if (!ValorDeEntrada.pais, !ValorDeEntrada.estado, !ValorDeEntrada.cidade, !ValorDeEntrada.cep, !ValorDeEntrada.bairro, !ValorDeEntrada.rua, !ValorDeEntrada.numero, !ValorDeEntrada.complemento, !ValorDeEntrada.senha, !ValorDeEntrada.confirmarsenha) {
                alert("Há campos não preenchidos")
            }
            else if (ValorDeEntrada.confirmarsenha != ValorDeEntrada.senha) {
                alert("Ambas as senha tem que ser iguais")
            }
            else {
                Navigate('/')
            }
        }
    }

    return (
        <>
            <div className="flex w-screen h-screen justify-center items-center ">
                <div className="bg-[url('/FundoW.svg')] absolute top-0 -z-10 bg-cover w-screen h-screen"></div>
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
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                addData(e)
                            }}>
                            {/* Campos do 1 Form */}
                            {troca == false ? (
                                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:mt-10 2xl:gap-x-48 2xl:gap-y-12">
                                    <div className="w-auto">
                                        <div className="w-4/5">
                                            <label htmlFor="nome" className="block text-sm font-medium leading-6 text-black">Nome: </label>
                                            <div className="mt-2">
                                                <input onChange={getdata} value={ValorDeEntrada.nome}  id="nome" name="nome" type="text" className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="w-4/5">
                                            <label htmlFor="sobrenome" className="block text-sm font-medium leading-6 text-black">Sobrenome:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} value={ValorDeEntrada.sobrenome} id="sobrenome" name="sobrenome" type="text" className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Email:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} value={ValorDeEntrada.email} id="email" name="email" type="email" className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="telefone" className="block text-sm font-medium leading-6 text-black">Telefone:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} value={ValorDeEntrada.telefone} id="telefone" name="telefone" type="text" className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="datadenascimento" className="block text-sm font-medium leading-6 text-black">Data de Nascimento:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} value={ValorDeEntrada.datadenascimento} id="datadenascimento" name="datadenascimento" type="date" className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="cpf" className="block text-sm font-medium leading-6 text-black">CPF:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata}  value={ValorDeEntrada.cpf} id="cpf" name="cpf" type="text" className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className=" grid grid-cols-1 gap-4 xl:grid-cols-2 xl:mt-10 2xl:gap-x-48 2xl:gap-y-12">
                                    <div className="w-auto">
                                        <div className="w-4/5">
                                            <label htmlFor="pais" className="block ml-6 text-sm font-medium leading-6 text-black">País: </label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.pais} id="pais" name="pais" type="text" required className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="w-4/5">
                                            <label htmlFor="estado" className="block ml-6 text-sm font-medium leading-6 text-black">Estado(UF):</label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.estado} id="estado" name="estado" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="cidade" className="block ml-6 text-sm font-medium leading-6 text-black">Cidade:</label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.cidade} id="cidade" name="cidade" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="cep" className="block ml-6 text-sm font-medium leading-6 text-black">CEP:</label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.cep} id="cep" name="cep" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Bairro:</label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.bairro} id="bairro" name="bairro" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Rua:</label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.rua} id="rua" name="rua" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Numero:</label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.numero} id="numero" name="numero" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">complemento:</label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.complemento} id="complemento" name="complemento" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="senha" className="block ml-6 text-sm font-medium leading-6 text-black">Senha:</label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.senha} id="senha" name="senha" type="password" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="confirmarsenha" className="block ml-6 text-sm font-medium leading-6 text-black">Confirmar Senha:</label>
                                            <div className="">
                                                <input onChange={getdata} value={ValorDeEntrada.confirmarsenha} id="confirmarSenha" name="confirmarsenha" type="password" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                            <div className="flex w-full mt-2 xl:mt-10 justify-center">
                                <button id='butao' onClick={addData} className="w-auto bg-cyan-400 hover:bg-cyan-600 text-black font-semibold p-4 xl:mt-3.5 px-4 rounded-full">
                                    {trocaBotao}
                                </button>
                            </div>
                        </form>
                    </div>
                </div >
            </div >
        </>
    )
}

export default PaginaRegistroUser
