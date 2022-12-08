import { useEffect, useState } from "react";

export const useFetch = ( url ) => {

    const initState = { 
        data: null,
        isLoading: true,
        hasError: null
    }

    const [ state, setState ] = useState(initState)

    const getFetchRequest = async () => {

        try {

            setState({ ...state, ['data']: null, ['isLoading']: true })

            const resp = await fetch(url);
            const data = await resp.json();
    
            // console.log(data);
            setState({ ...state, ['data']: data, ['isLoading']: false })
            
        } catch (error) {
            setState({ ...state, ['hasError']: error, ['isLoading']: false})
        }
       
    }

    useEffect(() => {

        getFetchRequest();

    }, [url])
    

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
