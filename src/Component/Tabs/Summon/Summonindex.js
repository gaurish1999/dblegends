import React, { useState } from 'react';
import SummonTabs from './SummonTabs';
import { summonLabels } from './Summonconstant';

export default function SummonIndex() {

    const [activeTab, setActiveTab] = useState(summonLabels.ALL);

    const onClickTab = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div>
        <SummonTabs activeTabName={activeTab} 
        onClickTab={onClickTab}/>
    </div>
  )
}