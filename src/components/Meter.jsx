function Meter({ value, text, textStyle={} }){
    return(
        <div className="w-full min-w-0">
            <p className={`truncate ${textStyle}`}>
                {text}
            </p>
            <div className="relative h-1">
                {value && <hr className="absolute top-1/2 left-0 border-2 transform -translate-y-1/2"
                    style={{ width: `${value}%` }}
                />}
                <hr className="absolute top-1/2 left-0 w-full transform -translate-y-1/2"/>
            </div>
        </div>
    );
}

export default Meter;
