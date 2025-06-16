function ImageWrapper({image, alt}){
    return(
        <div className="min-w-fit h-full rounded-xl neu-crater overflow-hidden flex justify-center">
            <img src={image} className="h-full object-cover" alt={alt}/>
        </div>
    )
}

export default ImageWrapper;