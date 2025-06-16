function Title({text, className=""}){
    return(
        <p className={`text-7xl font-extrabold ${className}`}>
            {text}
        </p>
    )
}

export default Title;