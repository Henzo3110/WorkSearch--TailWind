import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FormRecuperarSenha() {
    const Navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [novasenha, setNovaSenha] = useState('')
    const [confirmanovasenha, setConfirmaNovaSenha] = useState('')

    const Verifica = () => {
        if (email == '' || novasenha == '' || confirmanovasenha == '') {
            document.getElementById('CamposIncompletos').style.display = "flex"
            document.getElementById('EmailSenhaErr').style.display = "none"
            setTimeout(() => {
                document.getElementById('CamposIncompletos').style.display = "none"
            }, 5000)
        } else if (email !== 'aleksander35517@fiec.edu.br' || novasenha !== '123456') {
            document.getElementById('EmailSenhaErr').style.display = "flex"
            document.getElementById('CamposIncompletos').style.display = "none"
            setTimeout(() => {
                document.getElementById('EmailSenhaErr').style.display = "none"
            }, 5000)
        } else {
            Navigate('/Entrou')
        }
    }
    const Visible = () => {
        if(email == ''){
        document.getElementById('NovaSenha').style.display = "block"
        document.getElementById('ConfirmaSenha').style.display = "block"
        document.getElementById('Butao').textContent = "Recuperar Senha"
        }
    }

    return (
        <>
        <div className="bg-[url('/public/FundoW.svg')] absolute top-0 -z-10 bg-cover w-screen h-screen"></div>
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <div className="flex flex-col items-center w-5/12 h-fit pt-8 pb-12 border-4 rounded-3xl bg-gray-600">   
                <h2 className="font-semibold text-4xl mt-8 text-sky-300">Recuperar Senha</h2>
                <from>
                    <div className="mt-8 grid grid-cols-1 gap-2">
                        <div className="w-4/5">
                            <label  className="block text-sm font-medium leading-6 text-white">E-mail:</label>
                            <div className="mt-2">
                                <input onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email"  className="block w-96 rounded-md border-0 p-2. bg-transparent text-white ring-1 ring-sky-400   sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div id="NovaSenha" className="hidden w-4/5">
                            <label  className="block text-sm font-medium leading-6 text-white">Nova Senha:</label>
                            <div className="mt-2">
                                <input onChange={(e) => setNovaSenha(e.target.value)} id="email" name="email" type="email"  className="block w-96 rounded-md border-0 p-2.5 bg-transparent text-white ring-1 ring-sky-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div id="ConfirmaSenha" className="hidden w-4/5">
                            <label  className="block text-sm font-medium leading-6 text-white">Confirmar Nova Senha:</label>
                            <div className="mt-2">
                                <input onChange={(e) => setConfirmaNovaSenha(e.target.value)} id="email" name="email" type="email"  className="block w-96 rounded-md border-0 p-2.5 bg-transparent text-white ring-1 ring-sky-400 sm:text-sm sm:leading-6 " />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 w-auto grid grid-cols-1">
                        <div className="sm:col-span-3">
                            <div id='EmailSenhaErr' className='hidden justify-center mt-6'>
                                <small className='text-red-500'>E-mail ou Senha Incorreto</small>
                            </div>
                            <div id='CamposIncompletos' className='hidden justify-center mt-6'>
                                <small className='text-red-500'>Campos Inconpletos</small>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full mt-16 justify-between">
                        <div className="flex flex-col">
                        </div>
                        <button id='Butao' onClick={(e) => { e.preventDefault(); Verifica(); Visible() }} type='submit' className="bg-cyan-300 hover:bg-cyan-600 text-white font-bold w-5/6 py-2 px-4 border border-black rounded-full mr-8">
                            Verificar E-mail
                        </button>
                    </div>
                </from>
            </div>
        </div >
        </>
    )
}

export default FormRecuperarSenha
