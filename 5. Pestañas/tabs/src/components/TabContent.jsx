import React from 'react';
import './TabContent.css';

const TabContent = ({ content }) => {
    return(
        <div className='content-container'>
            <div className='content-body'>
                {content}
            </div>
        </div>
    )
}
export default TabContent;