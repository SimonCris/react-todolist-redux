import React from 'react';

function todo({todo, onClick, id}) {
    return <li onClick= {() => {
        onClick(id)
        }
     }>
     <span></span>
     {todo}
    </li>

}

export default todo;
