export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: Math.random(),
            data: todo,
            checked: false
        }
    }
};
export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id: id
    }
};

export const checkboxHandler = (id) => {
    return {
        type: "CHECKBOX",
        id: id
    }
};
export const editHandler = (id) => {
    return {
        type: "EDIT",
        id: id,
    }
};
export const saveModel = (data) => {
    return {
        type: "SAVE_MODEL",
        data: data
    }
};



