import React from 'react'

function MainInicial() {
    return (
        <main className="flex w-full h-full mt-auto " >
            <div className="w-1/2 mt-20 xl:mt-40" >
                <h1 className='flex  lg:text-4xl pl-32  font-bold'>O EMPREGO DOS SEUS SONHOS ACABA DE TE DAR</h1>
                <h2 className='flex justify-center lg:text-6xl mt-4 font-bold  bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-100 text-transparent bg-clip-text'>MATCH!</h2>
                <p className='flex justify-center text-xl lg:text-justify pl-20 mt-10 font-semibold'>Somos um WebSite focado em realizar com excelência a ponte entre empregador e candidato, em uma plataforma
                    dinâmica,através da divulgação de vagas de  emprego e currículos de possíveis colaboradores...</p>
            </div>
            <div>
                <img src="CurriculoBusca.svg" alt="Curriculo busca" className='flex w-10/12 lg:ml-20 xl:ml-80' />
            </div>
        </main>
    )
}

export default MainInicial