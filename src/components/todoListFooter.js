import React from 'react';
import FooterLink from "./filterLink";

function todoListFooter({filterToDo}) {
    return <div>
            <FooterLink actionType="ALL" onFilterClick={filterToDo} >
                ALL
            </FooterLink>
            {' '}
            <FooterLink actionType="TO DO" onFilterClick={filterToDo}>
                TO DO
            </FooterLink>
            {' '}
            <FooterLink actionType="COMPLETED" onFilterClick={filterToDo}>
                COMPLETED
            </FooterLink>
        </div>

}

export default todoListFooter;
