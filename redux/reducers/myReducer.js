import { Alert } from "react-native";
const initialState = {
    todoList: [],
    editId: ''
}
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data, checked } = action.payload;
            //console.log(data.length)
            if (data.length >= 3) {
                return {
                    ...state,
                    todoList: [
                        ...state.todoList,
                        {
                            id: id,
                            data: data,
                            checked: checked
                        }
                    ]
                };
            }
            else {
                Alert.alert('OOPS!', 'todo length should be at least 3');
            }

        case "DELETE_TODO":
            return {
                ...state,
                todoList: state.todoList.filter((item) => item.id !== action.id)
            };

        case "CHECKBOX":
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id === action.id) {
                        return { ...item, checked: true };
                    }
                    return item;
                })
            };

        case "EDIT":
            return {
                ...state,
                editId: action.id
            };

        case "SAVE_MODEL":
            return {
                ...state,
                todoList: state.todoList.map(item => {
                    if (item.id === state.editId) {
                        return { ...item, data: action.data }
                    }
                    return item;
                })
            };
        default:
            return state;
    }
}
export default myReducer;
