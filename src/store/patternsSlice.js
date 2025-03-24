import {createSlice} from '@reduxjs/toolkit'

export const patternsSlice = createSlice({
    name: 'patterns',
    initialState: [],
    reducers: {
        //used to set all patterns (ex. when data is fetched from DB)
        setPatterns: (state, action) => {
            return action.payload
        },
        //used to add a pattern (when a new pattern is generated)
        addPattern: (state, action) => {
            state.push(action.payload)
        },
        //used to update a pattern
        updatePattern: (state, action) => {
            const index = state.patterns.findIndex(pattern => pattern._id === action.payload._id)
            if (index !== -1) {
                state[index] = action.payload
            }
        },
        removePattern: (state, action) => {
            state = state.filter(pattern => pattern._id !== action.payload)
        }
    }
})

export const { setPatterns, addPattern, updatePattern, removePattern } = patternsSlice.actions
export default patternsSlice.reducer