import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    // mount quando é montado
    // update quando é atualizado
    // unmount quando é desmontado

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("O componente finalizou");
        }
    }, []);

    useEffect(() => {
        console.log("O estado nome mudou");
    }, [nome]);

    useEffect(() => {
        console.log("O estado materiaA mudou p/: " + materiaA);
    }, [materiaA]);

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
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                        <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;