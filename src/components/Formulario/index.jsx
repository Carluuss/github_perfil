import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateiriaA] = useState(0);
    const [materiaB, setMateiriaB] = useState(0);
    const [materiaC, setMateiriaC] = useState(0);

    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou")

        return () => {
            console.log('o componente finalizou')
        }
    }, [])

    useEffect(() => {
        console.log("o estado nome mudou")
    }, [nome])

    useEffect(() => {
        console.log("materia a mudou para: " + materiaA)
    }, [materiaA, materiaB, materiaC])

    const alteraNome = (evento) => {
        // console.log(evento.target.value)
        // setNome(evento.target.value);
        setNome(estadoAnterior => {
            console.log(estadoAnterior);

            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá {nome}, foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}, foi reprovado</p>
            )
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
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setMateiriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateiriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateiriaC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario