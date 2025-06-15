function MainCard({children}){
    return(
        <div className='bg-gray-200/50 w-full h-4/5 p-12 rounded-md shadow-lg-br backdrop-blur-sm'>
          {children}
        </div>
    )
}

export default MainCard;