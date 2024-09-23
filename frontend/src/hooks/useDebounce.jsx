import { useEffect, useState } from "react";

// it will make sure that the value should return after some delay.
export default function useDebounce(value , delay ){
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const delayedValue = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)

        return ()=> {
            clearTimeout(delayedValue)
        }
    },[value, delay])

    return debouncedValue
}