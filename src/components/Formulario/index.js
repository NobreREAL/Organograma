import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data-Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

const aoSalvar = (evento) => {
    evento.preventDefault() //Previnir o submit.
    console.log("Form foi submetido =>", nome, cargo, imagem);
}

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
                obrigatorio={true}
                label="Nome"
                placeholder="Digite o seu nome"
                aoAlterado={valor => setNome(valor)}
                />
            <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="Digite o seu Cargo"
                aoAlterado={valor => setCargo(valor)}
                />
            <CampoTexto 
                label="Imagem" 
                placeholder="Informe o endereço da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
            <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
    )
        
}


export default Formulario