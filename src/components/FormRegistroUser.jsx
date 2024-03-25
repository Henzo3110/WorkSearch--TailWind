import React, { useState } from 'react'
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

            Navigate('/Registrar-se')
        } else if (nome == '' || email !== '') {
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
            <div class="flex flex-row w-screen h-screen justify-center items-center ">
                <card class="flex flex-col items-center gap-5 border-4 w-1/4 h-fit absolute left-14 bg-gradient-to-br from-sky-300 via-sky-200 to-sky-100 rounded-3xl ">
                    <img src="LogoMin.svg" alt="Logo Registro" />
                    <h1 class="flex font-semibold text-2xl" >Seja Bem-Vindo(A)!</h1>
                    <h2 class="flex font-bold text-sky-500 text-3xl">CRIAR CONTA</h2>
                    <p class="flex mt-52 mb-4">Ja possui uma conta? Entre <a class="underline text-sky-500 ml-1 cursor-pointer" onClick={() => Navigate('/login')}>aqui</a></p>
                </card>
                <card class="flex flex-col items-center w-3/5 h-fit pt-8 pb-12 border-4 rounded-3xl ml-60 bg-gray-100 ">
                    <form>
                        <div class=" grid grid-cols-2 mt-10 gap-5">
                            <div class="w-auto">
                                <div class="w-4/5">
                                    <label for="name" class="block text-sm font-medium leading-6 text-black">Nome: </label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setNome(e.target.value)} id="name" name="name" type="text" autocomplete="name" required class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto ">
                                <div class="w-4/5">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Sobrenome:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setSobrenome(e.target.value)} id="name" name="name" type="text" autocomplete="name" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Email:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto ">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Telefone:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setTelefone(e.target.value)} id="telefone" name="telefone" type="text" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                                {/* <div id='EmailSenhaErr' class='hidden justify-center mt-6'>
                                    <small class='text-red-500'>Email ou Senha Invalido</small>
                                </div>
                                <div id='CamposIncompletos' class='hidden justify-center mt-6'>
                                    <small class='text-red-500'>Campos Inconpletos</small>
                                </div> */}
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Data de Nascimento:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setData(e.target.value)} id="data" name="data" type="date" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">CPF:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setCpf(e.target.value)} id="cpf" name="cpf" type="text" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex w-full mt-10 justify-center">
                            <button onClick={() => Navigate('/RegistroConta')} class="w-auto bg-cyan-400 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-full">
                                Próximo Passo
                            </button>
                        </div>
                    </form>
                </card>
            </div>
        </>
    )
}

export default FormRegistroUser
