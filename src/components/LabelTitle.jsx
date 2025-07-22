function LabelTitle({text, className=""}){
    return(
        <p className={`text-xl ${className}`}>
            {text}
        </p>
    )
}

export default LabelTitle;