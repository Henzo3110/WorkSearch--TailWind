import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'


function MainInicial() {
    const Navigate = useNavigate()
    return (
        <>
            <div className="bg-[url('/fundoInicial.jpg')] absolute top-0 -z-10 bg-cover w-screen h-screen"></div>
            <header className='w-full h-20 flex justify-center z-10'>
                <img src='LOGO.svg' alt='Logo pagina inicial' className=' w-30 lg:w-52 ' />
            </header>
            <main className="flex w-full h-full mt-auto z-10" >
                <div className="w-1/2 mt-20 2xl:mt-40 " >
                    <h1 className='flex text-2xl xl:text-4xl pl-16 xl:pl-32  font-bold'>O EMPREGO DOS SEUS SONHOS ACABA DE TE DAR</h1>
                    <h2 className='flex justify-center text-4xl xl:text-6xl mt-4 font-bold  bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-100 text-transparent bg-clip-text'>MATCH!</h2>
                    <p className='flex justify-center text-xs xl:text-xl text-justify pl-20 xl:pl-28 mt-5 xl:mt-10 font-semibold'>
                        Somos um WebSite focado em realizar com excelência a ponte entre empregador e candidato, em uma plataforma dinâmica, através da divulgação de vagas de emprego e currículos de possíveis colaboradores...
                    </p>
                    <div className="flex items-center justify-center mt-7">
                        <button onClick={() => Navigate('/login')} className="flex bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-100 rounded-full font-semibold text-2xl xl:text-3xl text-black pr-12 pl-12">Entrar</button>
                    </div>
                </div>
                <div>
                    <img src="CurriculoBusca.svg" alt="Curriculo busca" className='hidden md:flex w-3/4 lg:w-2/3 lg:ml-10 xl:ml-52 lg:mt-0' />
                </div>
            </main>
            <footer className='hidden fixed bottom-0 lg:flex items-center justify-between w-full h-1/5 px-32 py-5 bg-gray-600 z-10'>
                <div className='flex justify-center h-full'>
                    <img src="LogoDark.svg" alt="Logo do Fotter" className='' />
                </div>
                <div className='flex flex-col items-center text-white'>
                    <h1 className="text-xl mb-1 font-bold">Suporte</h1>
                    <h1>FAQ</h1>
                    <h1>SAC: 0800 -000</h1>
                    <h1>Contate-nos</h1>
                    <h1>Avalie nossos serviços</h1>
                </div>
                <div className='flex flex-col items-center text-white'>
                    <h1 className="text-xl mb-1 font-bold">Termos De Uso</h1>
                    <h1>Termos de uso e Aceite</h1>
                    <h1>SL.G.P.D - Lei 13709</h1>
                </div>
                <div className='flex flex-col gap-2 items-center text-white'>
                    <h1 className="text-xl mb-1 font-bold">Social</h1>
                    <div className='flex text-xl items-center gap-8'>
                        <FaInstagram />
                        <FaTiktok />
                        <FaXTwitter />
                    </div>
                </div>
            </footer>

        </>
    )
}

export default MainInicial