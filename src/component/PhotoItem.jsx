function Photo(props){
    return (
        <div className="image-container">
            <img className="image" src={props.src} alt="photo_superhero" />
        </div>
    )
}

export default Photo;