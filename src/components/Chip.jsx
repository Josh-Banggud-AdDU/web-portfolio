import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Chip({icon, text, style}){
    const variantStyle = style == 0 ? '' : 'rounded-full px-4 py-1 text-base neu-plateau';

    return(
        <div className={`flex items-center gap-2 ${variantStyle}`}>
            <FontAwesomeIcon icon={icon}/>
            <p>
                {text}
            </p>
        </div>
    )
}

export default Chip;