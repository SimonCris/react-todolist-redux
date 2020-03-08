import React from 'react';

/** Mostra il footer con i tipi di azioni da fare e 'children' che rappresenta
 * tutti i possibili figli che può avere */
const filterLink = ({actionType, children}) => {
    return (
      <a href="#" onClick={
          (event => {
                  event.preventDefault();
              }
          )}>
          {children}
      </a>
    );
};

export default filterLink;
