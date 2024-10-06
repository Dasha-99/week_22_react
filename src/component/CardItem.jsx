import Photo from "./PhotoItem";

function CardItem(props) {
    return (
        <div className="card">
            <h1>{props.name}</h1>
            <p>Вселенная: {props.universe}</p>
            <p>Альтер эго: {props.alterego}</p>
            <p>Род деятельности: {props.occupation}</p>
            <p>Друзья: {props.friends}</p>
            <p>Суперсилы: {props.superpowers}</p>
            <Photo src={props.photo}/>
            <p>{props.info}</p>
        </div>
    );
}


export default CardItem;