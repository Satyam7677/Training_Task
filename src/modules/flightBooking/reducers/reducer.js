const bookmarkInitialState={
    name:'faiz'
}

export const bookmarkReducer=(state=bookmarkInitialState,action  )=>{
    const {type,payload} = action
    console.log('The name came is', action)
    console.log('data', payload )
    switch(type)
    {
        case 'try':
            return {...state,name:payload}

        default:
            return {...state}
    }
}



const homeScreenInitialState={

}

export const homeScreenReducer=(state=homeScreenInitialState,action  )=>{
    const {type,payload} = action
    switch(type)
    {
        case '':
            return

        default:
            return state
    }
}


const oneWayScreenInitialState={

}

export const oneWayReducer=(state=oneWayScreenInitialState,action  )=>{
    const {type,payload} = action
    switch(type)
    {
        case '':
            return

        default:
            return state
    }
}



const roundTripInitialState={

}

export const roundTripReducer=(state=roundTripInitialState,action  )=>{
    const {type,payload} = action
    switch(type)
    {
        case '':
            return

        default:
            return state
    }
}