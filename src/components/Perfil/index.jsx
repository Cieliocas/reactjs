import './Perfil.css';

const Perfil = () => {
    const usuario = {
        nome: 'Ciélio',
        avatar: 'https://github.com/cieliocas.png',
    }
    
    return (
            <div>
                <img className="perfil-avatar" src={usuario.avatar} />
                <h3 className="perfil-titulo" >{usuario.nome}</h3>
            </div>
    )
}

export default Perfil;