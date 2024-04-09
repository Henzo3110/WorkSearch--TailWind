import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PaginaRegistroEmpresa() {
    const Navigate = useNavigate()
    const [troca, setTroca] = useState(false)
    const [trocaBotao, setTrocaBotao] = useState('próximo passo')


    const [ValorDeEntrada, setValorDeEntrada] = useState({
        razaosocial: "",
        fantasia: "",
        cnpj: "",
        inscricao: "",
        setor: "",
        email: "",
        telefone: "",
        pais: "",
        estado: "",
        cidade: "",
        cep: "",
        bairro: "",
        rua: "",
        numero: "",
        complemento: "",
        senha: "",
        confirmarsenha: ""
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
        const { razaosocial, fantasia, cnpj, inscricao, setor, email, telefone, pais, estado, cidade, cep, bairro, rua, numero, complemento, senha, confirmarsenha } = ValorDeEntrada;
        if (troca == false) {
            if (!razaosocial) {
                alert("Razao social é um campo requirido")
            }
            else if (!fantasia) {
                alert("Fantasia é um campo requirido")
            }
            else if (!cnpj) {
                alert("Cnpj é um campo requirido")
            }
            else if (!inscricao) {
                alert("Incrição Estadual é um campo requirido")
            }
            else if (!setor) {
                alert("Setor de Atuação é um campo requirido")
            }
            else if (!email) {
                alert("E-Mail é um campo requirido")
            }
            else if (!email.includes("@")) {
                alert("E-Mail invalido")
            }
            else if (!telefone) {
                alert("Telefone é um campo requirido")
            }else{
            setTroca(true)
            setTrocaBotao('Criar Conta')
            }
        } else {
            localStorage.setItem("UsuarioEmpresa", JSON.stringify([...data, ValorDeEntrada]));

            if (!pais) {
                alert("Pais é um campo obrigatorio")
            }
            else if (!estado) {
                alert("Estado é um campo obrigatorio")
            }
            else if (!cidade) {
                alert("cidade é um campo obrigatorio")
            }
            else if (!cep) {
                alert("cep é um campo obrigatorio")
            }
            else if (!bairro) {
                alert("bairro é um campo obrigatorio")
            }
            else if (!rua) {
                alert("rua é um campo obrigatorio")
            }
            else if (!numero) {
                alert("numero é um campo obrigatorio")
            }
            else if (!complemento) {
                alert("complemento é um campo obrigatorio")
            }
            else if (!senha) {
                alert("senha é um campo obrigatorio")
            }
            else if (!confirmarsenha == senha) {
                alert("Ambas as senha tem que ser iguais")
            }
            else {
                localStorage.setItem("UsuarioEmpresa", JSON.stringify([...data, ValorDeEntrada]));
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
                        <h1 className="flex font-semibold p-8 text-center lg:text-2xl" >Seja Bem-Vindo(A)!</h1>
                        <h2 className="flex font-bold text-sky-500 text-3xl">CRIAR CONTA</h2>
                        <div className='h-full w-full flex justify-center items-end'>
                            <p className="flex">Ja possui uma conta? Entre <a className="underline text-sky-500 ml-1 cursor-pointer" onClick={() => Navigate('/login')}>aqui</a></p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center w-full h-full pt-8 pb-12 border-4 rounded-3xl bg-gray-100">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault()
                                addData(e)
                            }}>
                            {/* Campos do 1 Form */}
                            {troca == false ? (
                                <div className=" grid grid-cols-1 gap-4 xl:grid-cols-2 xl:mt-10 2xl:gap-x-48 2xl:gap-y-12">
                                    <div className="w-auto">
                                        <div className="w-4/5">
                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">Razão Social: </label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="razaosocial" name="razaosocial" type="text" required className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="w-4/5">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Fantasia:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="fantasia" name="fantasia" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">CNPJ:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="cnpj" name="cnpj" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Inscrição Estadual:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="inscricao" name="inscricao" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Setor de atuação:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="setor" name="setor" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">E-Mail:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="email" name="email" type="email" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Telefone:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="telefone" name="telefone" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className=" grid grid-cols-1 gap-4 xl:grid-cols-2 xl:mt-10 2xl:gap-x-48 2xl:gap-y-12">
                                    <div className="w-auto">
                                        <div className="w-4/5">
                                            <label htmlFor="name" className="block ml-6 text-sm font-medium leading-6 text-black">País: </label>
                                            <div className="">
                                                <input onChange={getdata} id="pais" name="pais" type="text" required className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="w-4/5">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Estado(UF):</label>
                                            <div className="">
                                                <input onChange={getdata} id="estado" name="estado" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Cidade:</label>
                                            <div className="">
                                                <input onChange={getdata} id="cidade" name="cidade" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">CEP:</label>
                                            <div className="">
                                                <input onChange={getdata} id="cep" name="cep" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Bairro:</label>
                                            <div className="">
                                                <input onChange={getdata} id="bairro" name="bairro" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Rua:</label>
                                            <div className="">
                                                <input onChange={getdata} id="rua" name="rua" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Numero:</label>
                                            <div className="">
                                                <input onChange={getdata} id="numero" name="numero" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">complemento:</label>
                                            <div className="">
                                                <input onChange={getdata} id="complemento" name="complemento" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Senha:</label>
                                            <div className="">
                                                <input onChange={getdata} id="senha" name="senha" type="password" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Confirmar Senha:</label>
                                            <div className="">
                                                <input onChange={getdata} id="confirmar Senha" name="confirmarsenha" type="password" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className='flex text-red-500 font-semibold justify-center mt-4'>{error && <h1>{error}</h1>}</div> */}
                                </div>)}
                            <div className="flex w-full mt-2 xl:mt-10 justify-center">
                                <button id='butao' type='submit' className="w-auto bg-cyan-400 hover:bg-cyan-600 text-black font-semibold p-4 xl:mt-3.5 px-4 rounded-full ">
                                    {trocaBotao}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}

export default PaginaRegistroEmpresa