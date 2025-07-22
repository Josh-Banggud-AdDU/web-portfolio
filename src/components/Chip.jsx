import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Chip({faIcon, devIcon, text, className="text-base"}){
    return(
        <div className="flex items-center gap-2 rounded-full px-4 py-1 text-base bg-gray-200/50 neu-plateau-sm">
            {faIcon && <FontAwesomeIcon icon={faIcon} className={className}/>}
            {devIcon && <i className={`${devIcon} ${className}`}/>}
            <p className='truncate text-sm'>
                {text}
            </p>
        </div>
    )
}

export default Chip;