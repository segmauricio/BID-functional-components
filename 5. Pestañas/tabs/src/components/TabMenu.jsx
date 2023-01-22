import React, { useState } from 'react';
import './TabMenu.css';
import TabContent from './TabContent'

const tabsArray = [
    {
        tag: "Tab 1",
        content: "Tab 1 content here"
    },
    {
        tag: "Tab 2",
        content: "Tab 2 content here"
    },
    {
        tag: "Tab 3",
        content: "Tab 3 content here"
    },
]

const TabMenu = () => {
    const [activeTab, setActiveTab] = useState(tabsArray[0]);

    return (
        <div>
            <div className='tabForm'>
                <h2>Pestañas</h2>
                <div className='tabWindows'>
                {
                    tabsArray.map((tab, idx) => {
                        return <div
                            key={idx}
                            onClick={() => setActiveTab(tab)}
                            className={tab.tag === activeTab.tag ? "tabs tabs-active" : "tabs"}>
                            {tab.tag}
                        </div>
                    })
                }
                </div>
                <TabContent key={activeTab.tag} content={activeTab.content} />
            </div>
        </div>
    )
};

export default TabMenu;