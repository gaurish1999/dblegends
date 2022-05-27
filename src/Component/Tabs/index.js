import React, { useState } from 'react';
import Tabs from './Tabs';
import { tabLabels } from './constant';

export default function TabComponent() {

    const [activeTab, setActiveTab] = useState(tabLabels.RECOMMENDED);

    const onClickTab = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div>
        <Tabs activeTabName={activeTab} 
        onClickTab={onClickTab}/>
    </div>
  )
}