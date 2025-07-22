import placeholder from '../assets/images/placeholder-image.jpg'

function ImageWrapper({image, alt, wrapperStyle="", noWrap=""}){
    return(
        <div className={`${noWrap == 1 ? "" : "rounded-xl neu-crater"} overflow-hidden flex justify-center ${wrapperStyle}`}>
            <img src={image ? image : placeholder} className={`h-full object-cover ${image ? '' : 'opacity-30'}`} alt={alt}/>
        </div>
    )
}

export default ImageWrapper;