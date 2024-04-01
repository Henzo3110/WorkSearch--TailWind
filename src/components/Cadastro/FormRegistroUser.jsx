import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormRegistroUser() {
    const Navigate = useNavigate()
   
    const[ValorDeEntrada,setValorDeEntrada] = useState({
        nome:"",
        sobrenome:"",
        email:"",
        telefone:"",
        datadenascimento:"",
        cpf:""

    })

    const [data,setData] = useState([]);
    console.log(ValorDeEntrada);

    const getdata = (e) => {
        const {value,name} = e.target;

        setValorDeEntrada(() => {
            return {
                ...ValorDeEntrada,
                [name]:value
            }
        })
    }
    const addData = (e) =>{
        e.preventDefault();

        const {nome,sobrenome,email,telefone,datadenascimento,cpf} = ValorDeEntrada;

        if(!nome){
            alert("Nome é um campo requirido")
        }
        else if (!sobrenome){
            alert("sobrenome é um campo requirido")
        }
        else if (!datadenascimento){
            alert("Data de Nascimento é um campo requirido")
        }
        else if (!cpf){
            alert("cpf de Atuação é um campo requirido")
        }
        else if (!email){
            alert("E-Mail é um campo requirido")
        }
        else if (!email.includes("@")){
            alert("E-Mail invalido")
        }
        else if (!telefone){
            alert("Telefone é um campo requirido")
        }
        else {
            // Navigate('/')

            localStorage.setItem("UsuarioCandidato",JSON.stringify([...data,ValorDeEntrada]));
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
                        <form>
                            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:mt-10 2xl:gap-x-48 2xl:gap-y-12">
                                    <div className="w-auto">
                                        <div className="w-4/5">
                                            <label htmlFor="name" className="block text-sm font-medium leading-6 text-black">Nome: </label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="name" name="nome" type="text"  className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="w-4/5">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Sobrenome:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="name" name="sobrenome" type="text"  className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Email:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="email" name="email" type="email"  className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto ">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Telefone:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="telefone" name="telefone" type="text"  className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">Data de Nascimento:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="data" name="datadenascimento" type="date"  className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-black">CPF:</label>
                                            <div className="mt-2">
                                                <input onChange={getdata} id="cpf" name="cpf" type="text"  className="block w-52 md:w-72 lg:w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                <div>
                                    <div className="hidden w-auto">
                                        <div className="w-4/5">
                                            <label htmlFor="name" className="block ml-6 text-sm font-medium leading-6 text-black">País: </label>
                                            <div className="">
                                                <input onChange={getdata} id="pais" name="pais" type="text"  className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-auto ">
                                        <div className="w-4/5">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Estado(UF):</label>
                                            <div className="">
                                                <input onChange={getdata} id="estado" name="estado" type="text"  className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Cidade:</label>
                                            <div className="">
                                                <input onChange={getdata} id="cidade" name="cidade" type="text"  className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-auto ">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">CEP:</label>
                                            <div className="">
                                                <input onChange={getdata} id="cep" name="cep" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Bairro:</label>
                                            <div className="">
                                                <input onChange={getdata} id="bairro" name="bairro" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Rua:</label>
                                            <div className="">
                                                <input onChange={getdata} id="rua" name="rua" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Numero:</label>
                                            <div className="">
                                                <input onChange={getdata} id="cpf" name="cpf" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Logradouro:</label>
                                            <div className="">
                                                <input onChange={getdata} id="cpf" name="cpf" type="text" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Senha:</label>
                                            <div className="">
                                                <input onChange={getdata} id="Confirmar Senha" name="Confirmar Senha" type="password" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden w-auto">
                                        <div className="sm:col-span-3">
                                            <label htmlFor="email" className="block ml-6 text-sm font-medium leading-6 text-black">Confirmar Senha:</label>
                                            <div className="">
                                                <input onChange={getdata} id="Confirmar Senha" name="Confirmar Senha" type="password" className="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='flex text-red-500 font-semibold justify-center mt-4'>{error && <h1>{error}</h1>}</div> */}
                            <div className="flex w-full mt-2 xl:mt-10 justify-center">
                                <button onClick={addData} className="w-auto bg-cyan-400 hover:bg-cyan-600 text-black font-semibold p-4 xl:mt-3.5 px-4 rounded-full">
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
