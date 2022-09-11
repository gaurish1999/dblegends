import React, { useState } from 'react';
import MissionTabs from './MissionTabs';
import { tabLabels } from './Missionconstant';

export default function MissionIndex() {

    const [activeTab, setActiveTab] = useState(tabLabels.DAILY);

    const onClickTab = (tab) => {
        setActiveTab(tab);
    };
  return (
    <div>
        <MissionTabs activeTabName={activeTab} 
        onClickTab={onClickTab}/>
    </div>
  )
}