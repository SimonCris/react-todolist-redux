
export const addToDo = (newTodoValue) => {
    return {
        type: 'ADD_TODO',
        todoToAdd: newTodoValue
    }
};

export const removeToDo = (toDoIndex) => {
    return {
        type: 'REMOVE_TODO',
        indexToRemove: toDoIndex
    }
};
