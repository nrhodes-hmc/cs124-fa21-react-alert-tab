import './App.css';

import {useState} from 'react'

function Tab(props) {
    const classNames = ["tab-list-item"];
    if (props.activeTab === props.label) {
        classNames.push("tab-list-active");
    }
    return <li className={classNames.join(" ")}
               onClick={() => props.onClickTab(props.label)}>
        {props.label}
    </li>
}

function App() {
    const [activeTab, setActiveTab] = useState("Tab 1");
    return (
        <div className="tabs">
            <ol className="tab-list">
                <Tab key="Tab 1"
                     label={"Tab 1"}
                     activeTab={activeTab}
                     onClickTab={(label) => setActiveTab(label)}/>
                <Tab key="Tab 2"
                     label={"Tab 2"}
                     activeTab={activeTab}
                     onClickTab={(label) => setActiveTab(label)}/>
            </ol>
            {activeTab === "Tab 1" && <div>Hello, world!</div>}
            {activeTab === "Tab 2" && <div>Goodbye, universe!</div>}
        </div>
    );
}

export default App;
