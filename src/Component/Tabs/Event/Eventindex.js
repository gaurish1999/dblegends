import React, { useState } from 'react';
import EventTabs from './EventTabs';
import { tabLabels } from './Eventconstant';

export default function EventIndex() {

    const [activeTab, setActiveTab] = useState(tabLabels.RECOMMENDED);

    const onClickTab = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div>
        <EventTabs activeTabName={activeTab} 
        onClickTab={onClickTab}/>
    </div>
  )
}