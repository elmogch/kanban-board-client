import React from 'react';
import './App.css';
import 'h8k-components';
import KanbanBoard from './components/kanban-board';

const title: string = "React App";

const App: React.FC = () => {
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <KanbanBoard />
        </div>
    );
}

export default App;
