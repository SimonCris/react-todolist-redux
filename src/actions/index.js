/** Azioni **/

/** Aggiungo TODO */
export const addToDo = (newTodoValue) => {
    return {
        type: 'ADD_TODO',
        todoToAdd: {
            text: newTodoValue,
            completed: false
        }
    }
};

/** Rimuovo TODO */
export const removeToDo = (toDoIndex) => {
    return {
        type: 'REMOVE_TODO',
        indexToRemove: toDoIndex
    }
};

/** Cambio stato COMPLETED al TODO passato in input */
export const toggleToDo = (toDoIndex) => {
    return {
        type: 'TOGGLE_TODO',
        id: toDoIndex
    }
};
