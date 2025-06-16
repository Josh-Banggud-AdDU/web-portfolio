function MainCard({children, className=''}){
    return(
        <div className={`bg-gray-200/50 w-full h-4/5 p-12 rounded-xl neu-crater backdrop-blur-sm ${className}`}>
          {children}
        </div>
    )
}

export default MainCard;