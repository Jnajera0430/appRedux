import {createSlice} from '@reduxjs/toolkit'

const initialState=[
    {
        id:'1',
        title:'un titulo',
        description: 'una describcion',
        estado: false
    },
    {
        id:'2',
        title:'un titulo 2',
        description: 'una descripcion 2',
        estado: false
    },
    {
        id:'3',
        title:'un titulo',
        description: 'una descripcion 3',
        estado: false
    }
]


export const taskSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers:{
        
    }
})

export default taskSlice.reducer;