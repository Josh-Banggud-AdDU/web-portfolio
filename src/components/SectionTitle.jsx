function SectionTitle({text, condition=null, selectedText=null, onClick=()=>{}, className=""}){
    return(
        <p className={`text-2xl ${condition != null && selectedText == condition ? 'font-bold' : ''} ${className}`}
            onClick={() => onClick(condition)}
        >
            {text}
        </p>
    )
}

export default SectionTitle;