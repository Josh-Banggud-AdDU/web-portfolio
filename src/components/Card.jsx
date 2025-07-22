import { useState, useEffect, forwardRef } from 'react'

const Card = forwardRef(function Card(props, ref){
  const {children, className='', size='md', isVisible=true, isLoadingNewContent, onClick} = props;
  const onClickFn = typeof onClick == "function" ? onClick : (()=>{});
  const [transitionState, setTransitionState] = useState({});

  useEffect(() => {
    setTransitionState({
        opacity: 'opacity-0',
        scale: 'scale-90',
        blur: 'blur-xs',
      });
    setTimeout(() => {
      setTransitionState({
        opacity: 'opacity-100',
        scale: 'scale-100',
        blur: 'blur-none',
        duration: 'duration-500'
      });
    }, 250);
  }, []);

  useEffect(() => {
    if(isLoadingNewContent == true){
      setTransitionState({
        opacity: 'opacity-0',
        scale: 'scale-90',
        blur: 'blur-xs',
        duration: 'duration-250'
      });
    }
  }, [isLoadingNewContent]);

  const getSize = () => {
    switch (size){
      case 'xl':
        return{
          padding: 'p-16'
        }
        break;
      case 'lg':
        return{
          padding: 'p-12'
        }
        break;
      case 'md':
        return{
          padding: 'p-8'
        }
        break;
      case 'sm':
        return{
          padding: 'p-4'
        }
        break;
      case 'n':
        return{
          padding: 'p-0'
        }
        break;
    }
  }

  const s = getSize();

  return(
    <div ref={ref} className={`${isVisible ? "bg-gray-200/40 rounded-xl neu-crater backdrop-blur-sm overflow-hidden opacity-0" : ""} ease-in-out ${s.padding}
      ${transitionState.duration} ${transitionState.opacity} ${transitionState.scale} ${transitionState.blur} ${className}
      ${typeof onClick == "function" ? "hover:-translate-y-2" : ""}`}
      onClick={() => onClickFn()}
    > 
        {children}
    </div>
  )
});

export default Card;