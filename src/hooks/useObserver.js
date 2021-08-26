import {useEffect,useRef} from 'react';


export const useObserver = (ref, outCallback, item, doWhile, isLoading) => {
    const observer = useRef();
    useEffect(() => {
        if(isLoading) return;
        if (observer.current) observer.current.disconnect();
        let callback = function(entries, observer) {
            if (entries[0].isIntersecting && item < doWhile){
                outCallback(item + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current.observe(ref.current)
    },[isLoading]);


};

