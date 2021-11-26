import ACTION_TYPES from "./actionsType";

export const enterMassage = (data) =>{
    return{
        type: ACTION_TYPES.ENTER_MASSAGE,
        data: data,
    }
}

export const answerMassage = (data) =>{
    return{
        type: ACTION_TYPES.ENTER_MASSAGE,
        data: data
    }
}