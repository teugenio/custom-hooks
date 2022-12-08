import { useState } from "react"

// exponenmos métodos de un custom hook
// un customhook es una funcion y sus  métodos
export const useCounter = ( initialValue = 10) => {

    const [counter, setCounter] = useState( initialValue ); //dentro usamos el useState hook

    const increment = (incrementValue) => {
        setCounter(counter + incrementValue)
    }

    const decrement = (incrementValue) => {
        if (counter == 0) return null;
        setCounter(counter - incrementValue)
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}