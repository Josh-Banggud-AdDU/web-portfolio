import Icon from "./Icon";

function IconButton({ devIcon, faIcon, iconStyle, interactStyle={}, buttonStyle={}, isDisabled=false, onClick=(() => {}) }){
    const disableStyle = "pointer-events-none scale-90 opacity-50";

    return(
        <div className={`rounded-full p-2 aspect-square flex items-center bg-gray-200 neu-plateau-sm duration-250 ${interactStyle} ${buttonStyle} ${isDisabled ? disableStyle : ""}`}
            onClick={onClick}>
            {devIcon && <Icon devIcon={devIcon} iconStyle={iconStyle}/>}
            {faIcon && <Icon faIcon={faIcon} iconStyle={iconStyle}/>}
        </div>
    )
}

export default IconButton;