export const todoReducer = ( initialState = [], action) => {

    // console.log('todoReducer called')

    switch ( action.type ) {
        case '[TODO] Add todo':
            return [ ...initialState, action.payload ];
        case '[TODO] Toggle todo':
            return initialState.map( (todo) => {
                
                if (todo.id == action.payload.id) {

                    // CORTAMOS EL FLUJO DE ENCONTRAR LA COINCIDENCIA
                    return {
                        ...todo, done: !todo.done
                    }
                }               

                return todo;
            });
        case '[TODO] Remove todo':
            return initialState.filter( (item) => item.id != action.payload.id );
        // case 'ABC':
        //     throw new Error('Action.type = ABC not implemented yet');
    
        default:
            return initialState;
    }

}