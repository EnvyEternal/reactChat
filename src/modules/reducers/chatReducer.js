import ACTION_TYPES from "../actions/actionsType";

const initialState = {
   start: false,
   massages: [],
   answer: ['Hi', 'Hello'],
   indexMas: 0
};

const chatReducer = (state = initialState, action) => {
    switch(action.type){
        case ACTION_TYPES.ENTER_MASSAGE:{
            const {massages} = state;
            const {data} = action;
            const newMassage = {
                ...data,
                start: true
            }
            const newMassages = [...massages, newMassage]
            return {massages: newMassages}
        }
        case ACTION_TYPES.MASSAGE_ANSWER:{
            const {massages} = state;
            const {indexMas, answer} = state
            const answerMs = {
                ...answer,
                answer[indexMas],
                indexMas: indexMas+1
            }
            const ansMs = [...massages, answerMs]
            return {massages: ansMs}
        }
        default: return state
    }
    
}

export default chatReducer 