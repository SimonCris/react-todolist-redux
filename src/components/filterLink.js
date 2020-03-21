import React from 'react';

/** Mostra il footer con i tipi di azioni da fare e 'children' che rappresenta
 * tutti i possibili figli che può avere */
const filterLink = ({activeFilter, actionType, children, onFilterClick}) => {

    if (activeFilter === actionType) {
        return children;
    }

    return (
      <a href="#" onClick={
          (event => {
                  event.preventDefault();
                  onFilterClick(actionType);
              }
          )}>
          {children}
      </a>
    );
};

export default filterLink;
