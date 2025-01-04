import './Perfil.css';

const Perfil = () => {
    const usuario = {
        nome: 'Ciélio',
        avatar: 'https://github.com/cieliocas.png',
    }
    
    return (
            <div>
                <img class="perfil-avatar" src={usuario.avatar} />
                <h3>{usuario.nome}</h3>
            </div>
    )
}

export default Perfil;