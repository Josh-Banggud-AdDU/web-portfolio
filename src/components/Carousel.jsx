import { useRef, useEffect, useState } from 'react';

function Carousel({children}){
    const scrollRef = useRef(null);
    const mainRef = useRef(null);
    const cloneRef = useRef(null);
    const [shouldScroll, setShouldScroll] = useState(false);

    useEffect(() => {
        const el = scrollRef.current;
        const mainEl = mainRef.current;
        if (!el) return;

        const hasOverflow = mainEl.scrollWidth > el.clientWidth;
        setShouldScroll(hasOverflow);
    }, [children, shouldScroll]);

    useEffect(() => {
        if (!shouldScroll) return;

        const el = scrollRef.current;
        const mainEl = mainRef.current;
        const cloneEl = cloneRef.current;
        if (!el) return;

        let scrollPos = 0;
        let animationFrameId;

        const scroll = () => {
            scrollPos += .75;
            if (scrollPos >= el.scrollWidth - el.clientWidth) {
                scrollPos = (el.scrollWidth - el.clientWidth) - (el.scrollWidth / 2) - 20;
                el.scrollLeft = (el.scrollWidth - el.clientWidth) - (el.scrollWidth / 2) - 20;
            } else {
                el.scrollLeft = scrollPos;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);

    }, [shouldScroll]);

    return(
        <div
            ref={scrollRef}
            className={`w-full h-fit flex flex-row overflow-x-auto no-scrollbar gap-10 ${shouldScroll ? 'justify-start' : 'justify-center'}`}
        >
            <div ref={mainRef} className='w-fit flex justify-center items-center gap-10'>
                {children}
            </div>
            {shouldScroll && <div ref={cloneRef} className='w-fit flex justify-center items-center gap-10'>
                    {children}
                </div>
            }
        </div>
    )
}

export default Carousel;