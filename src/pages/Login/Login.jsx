import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TiUser } from "react-icons/ti";
// import facebookIcon from '/facebook.svg'
import googleIcon from '/google.svg'
// import instagramIcon from '/instagram.svg'
import Swal from "sweetalert2"

function Login() {
    const Navigate = useNavigate()
    const[ValorDeEntrada,setValorDeEntrada] = useState({
        email:"",
        senha:""

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

        const getuserarr = localStorage.getItem("UsuarioEmpresa","UsuarioCandidato");

        const {email,senha} = ValorDeEntrada;

        if(!email,!senha){
            alert("Há campos não preenchido")
        }
        else if (!email.includes("@")){
            alert("E-Mail invalido! Insira '@'")
        }
        else {
            
            if(getuserarr && getuserarr.length){
                const userdata = JSON.parse(getuserarr);
                const userlogin = userdata.filter((el,k) =>{
                    return el.email === email && el.senha === senha
                });

                if(userlogin.length === 0){
                    alert("Usuario Invalido")

                    // (err) => {
                    //     console.log(err)
                    //     Swal.fire({
                    //       title: "Erro",
                    //       text: `UM ERRO OCORREU`,
                    //       text: `${err.response.data.erro == undefined ? "Erro interno de server" : err.response.data.erro}`,
                    //       icon: "error",
                    //       iconColor: "red",
                    //       confirmButtonColor: "var(--azul)",
                    //       confirmButtonText: "Confirmar",
                    //     })}
                }else{
                    Navigate('/')
                }
            }
        }
    }
    



   

    return (
        <>
        <div className="bg-[url('/public/FundoW.svg')] absolute top-0 -z-10 bg-cover w-screen h-screen"></div>
        <div className="flex flex-col w-screen h-screen justify-center items-center">
            <div className="flex flex-col items-center w-5/12 h-fit pt-8 pb-12 border-4 rounded-3xl bg-gray-600">
            <TiUser className='flex mt-0 text-cyan-400 bg-white border-solid border-4 rounded-full border-cyan-400 text-9xl ' />
                <h2 className="font-bold text-4xl mt-4 text-sky-300">Login</h2>
                <h1 className="font-bold text-2xl mt-2 text-white">Bem-Vindo De Volta</h1>
                <from>
                    <div className="mt-8 grid grid-cols-1 gap-2">
                        <div className="w-4/5">
                            <label  className="block text-sm font-medium leading-6 text-white ml-2.5">E-mail:</label>
                            <div className="mt-2">
                                <input onChange={getdata} value={ValorDeEntrada.email} id="email" name="email" type="email"  className="lock w-96 rounded-full border-0 p-2.5 ring-4 ring-sky-400" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 w-auto grid grid-cols-1">
                        <div className="sm:col-span-3">
                            <label  className="block text-sm font-medium leading-6 text-white ml-2.5">Senha:</label>
                            <div className="mt-2">
                                <input onChange={getdata} value={ValorDeEntrada.senha} id="senha" name="senha" type="password" className="block w-96 rounded-full border-0 p-2.5 ring-4  ring-sky-400" />
                            </div>
                            <div id='EmailSenhaErr' className='hidden justify-center mt-6'>
                                <small className='text-red-500'>E-mail ou Senha Incorreto</small>
                            </div>
                            <div id='CamposIncompletos' className='hidden justify-center mt-6'>
                                <small className='text-red-500'>Campos Inconpletos</small>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row mt-4'>
                        <input type="checkbox" id='LembrarSenha' name='LembrarSenha' className='flex mt-2'/>
                        <label htmlFor='LembrarSenha'  className='mt-1.5 ml-1 text-white'>Lembrar Senha</label>
                        <a onClick={() => Navigate('/RecuperarSenha')} className='flex absolute ml-64 mt-1 text-sky-400 underline cursor-pointer'>Esqueceu a senha?</a>
                    </div>
                    <div className='flex justify-evenly text-white mt-2'>
                        <p>-----------------</p><h1> OU ACESSAR COM </h1><p>-----------------</p>
                    </div>
                    <div className='flex justify-evenly text-sm mt-2'>
                        {/* <a href='' target="_blank"><img src={facebookIcon} alt="facebook" className='w-10' /></a> */}
                        <a href='' target="_blank"><img src={googleIcon} alt="google" className='w-10' /></a>
                        {/* <a href='' target="_blank"><img src={instagramIcon} alt="instagram" className='w-10' /></a> */}
                    </div>
                    <div className="flex w-full mt-5 justify-between">
                        <div className="flex flex-col">
                        </div>
                        <button onClick={addData} type='submit' className="bg-cyan-300 hover:bg-cyan-600 text-white font-bold w-5/6 py-2 px-4 border border-black rounded-full mr-8">
                            Entrar
                        </button>
                    </div>
                    <div className='flex justify-center mt-2 text-white'>
                        Não possui uma conta?Regitre-se<a className='flex text-sky-500 ml-1 underline cursor-pointer' onClick={() => Navigate('/EscolhaCadastro')}>aqui</a>
                    </div>
                </from>
            </div>
        </div >
        </>
    )
}

export default Login
