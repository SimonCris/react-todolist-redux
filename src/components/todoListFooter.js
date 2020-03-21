import React from 'react';
import FooterLink from "./filterLink";

function todoListFooter({activeFilter, filterToDo}) {
    return <div>
            <FooterLink activeFilter={activeFilter} actionType="ALL" onFilterClick={filterToDo} >
                ALL
            </FooterLink>
            {' '}
            <FooterLink activeFilter={activeFilter} actionType="TO DO" onFilterClick={filterToDo}>
                TO DO
            </FooterLink>
            {' '}
            <FooterLink activeFilter={activeFilter} actionType="COMPLETED" onFilterClick={filterToDo}>
                COMPLETED
            </FooterLink>
        </div>

}

export default todoListFooter;
