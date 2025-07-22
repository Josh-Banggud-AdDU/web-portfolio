import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon({ faIcon, devIcon, text="", title="", iconStyle, textStyle={} }){
    return(
        <div className='flex flex-col items-center'>
            {faIcon && <FontAwesomeIcon icon={faIcon} className={iconStyle} title={title}/>}
            {devIcon && <i className={`${devIcon} ${iconStyle}`} title={title}/>}
            <p className={`text-center leading-none ${textStyle}`}>
                {text}
            </p>
        </div>
    )
}

export default Icon;