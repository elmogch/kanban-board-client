import React, { useState } from "react";
import "./index.css";

type Task = {
  name: string;
  stage: number;
};

type KanbanBoardProps = {};

const KanbanBoard: React.FC<KanbanBoardProps> = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { name: "1", stage: 1 },
    { name: "2", stage: 0 },
  ]);

  const [stagesNames] = useState<string[]>(["Backlog", "To Do", "Ongoing", "Done"]);

  const stagesTasks: Task[][] = Array.from({ length: stagesNames.length }, () => []);

  tasks.forEach((task) => {
    stagesTasks[task.stage].push(task);
  });

  return (
    <div className="mt-20 layout-column justify-content-center align-items-center">
      <section className="mt-50 layout-row align-items-center justify-content-center">
        <input
          id="create-task-input"
          type="text"
          className="large"
          placeholder="New task name"
          data-testid="create-task-input"
        />
        <button
          type="submit"
          className="ml-30"
          data-testid="create-task-button"
        >
          Create task
        </button>
      </section>

      <div className="mt-50 layout-row">
        {stagesTasks.map((tasks, i) => (
          <div className="card outlined ml-20 mt-0" key={i}>
            <div className="card-text">
              <h4>{stagesNames[i]}</h4>
              <ul className="styled mt-50" data-testid={`stage-${i}`}>
                {tasks.map((task, index) => (
                  <li className="slide-up-fade-in" key={`${i}-${index}`}>
                    <div className="li-content layout-row justify-content-between align-items-center">
                      <span data-testid={`${task.name.split(" ").join("-")}-name`}>
                        {task.name}
                      </span>
                      <div className="icons">
                        <button
                          className="icon-only x-small mx-2"
                          data-testid={`${task.name.split(" ").join("-")}-back`}
                          disabled={i === 0}
                        >
                          <i className="material-icons">arrow_back</i>
                        </button>
                        <button
                          className="icon-only x-small mx-2"
                          data-testid={`${task.name.split(" ").join("-")}-forward`}
                          disabled={i === 3}
                        >
                          <i className="material-icons">arrow_forward</i>
                        </button>
                        <button
                          className="icon-only danger x-small mx-2"
                          data-testid={`${task.name.split(" ").join("-")}-delete`}
                        >
                          <i className="material-icons">delete</i>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
