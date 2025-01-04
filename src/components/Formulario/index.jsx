import { useState, useEffect } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState("");

    useEffect(() => {
        console.log("O estado mudou");
    });

    const alteraNome = (evento) => {

        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            return evento.target.value;
        });
    }

    const renderizaResultado = () => {
        let media = (materiaA + materiaB + materiaC) / 3;
        if(media >= 7) {
            return <p>Olá {nome}. Você foi aprovado!</p>
        } else {
            return <p>Olá {nome}. Você foi reprovado!</p>
        }
    }

    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;