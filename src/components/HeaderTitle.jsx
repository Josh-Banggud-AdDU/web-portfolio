function HeaderTitle({text, textStyle=""}){
    return(
        <p className={`text-3xl font-bold ${textStyle}`}>
            {text}
        </p>
    )
}

export default HeaderTitle;