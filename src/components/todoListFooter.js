import React from 'react';
import FooterLink from "./filterLink";

function todoListFooter() {
    return <div>
            <FooterLink actionType="ALL">
                ALL
            </FooterLink>
            {' '}
            <FooterLink actionType="TO DO">
                TO DO
            </FooterLink>
            {' '}
            <FooterLink actionType="COMPLETED">
                COMPLETED
            </FooterLink>
        </div>

}

export default todoListFooter;
