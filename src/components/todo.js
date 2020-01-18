import React from 'react';

function todo({todo, onClick, id}) {
    return <li>{todo}<button onClick= {() => {
        {
            onClick(id)
        }
    }
    }>-</button></li>

}

export default todo;
