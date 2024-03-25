import React, { useState } from 'react'
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
        } else if ('') {
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
                                    <label for="name" class="block text-sm font-medium leading-6 text-black">País: </label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setPais(e.target.value)} id="pais" name="pais" type="text" required class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto ">
                                <div class="w-4/5">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Estado(UF):</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setEstado(e.target.value)} id="estado" name="estado" type="text" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Cidade:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setCidade(e.target.value)} id="cidade" name="cidade" type="text" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto ">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">CEP:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setCep(e.target.value)} id="cep" name="cep" type="text" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Bairro:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setBairro(e.target.value)} id="bairro" name="bairro" type="text" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Rua:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setRua(e.target.value)} id="rua" name="rua" type="text" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Numero:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setNumero(e.target.value)} id="cpf" name="cpf" type="text" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Logradouro:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setLogradouro(e.target.value)} id="cpf" name="cpf" type="text" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Senha:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setSenha(e.target.value)} id="Confirmar Senha" name="Confirmar Senha" type="password" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                            <div class="w-auto">
                                <div class="sm:col-span-3">
                                    <label for="email" class="block text-sm font-medium leading-6 text-black">Confirmar Senha:</label>
                                    <div class="mt-2">
                                        <input onChange={(e) => setConfirmaSenha(e.target.value)} id="Confirmar Senha" name="Confirmar Senha" type="password" required='true' class="block w-96 rounded-3xl border-0 p-2.5 ring-4 ring-cyan-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <input type='checkbox' id='Concordar' name='Concordar' class='ml-6 mt-6'></input>
                            <label for="Concordar" className='mt-1.5 ml-1 underline font-semibold'>Concordo com os termos & políticas de uso</label>
                        </div>
                        <div class="flex w-full mt-10 justify-center">
                            <button onClick={() => Navigate('/Registro2')} class="w-auto bg-cyan-400 hover:bg-cyan-600 text-black font-semibold py-2 px-4 rounded-full">
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
