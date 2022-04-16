const Saludo = (props) => {

    // props.action ---> miFuncion()
    return (
        <>
            <h1 className="text-3xl">Mi primer componente</h1>
            <div className="text-3xl">Saludos {props.name}</div>
            <div>Tienes {props.age} años</div>
        </>
    )
}

export default Saludo