import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [taskDetails, setTaskDetails] = useState({
    taskName: "",
    description: "",
    date: "",
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleAddTask = () => {
    setFormVisible(true);
    setTaskDetails({ taskName: "", description: "", date: "" });
    setEditIndex(null);
  };

  const handleSaveTask = () => {
    if (editIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = taskDetails;
      setTasks(updatedTasks);
    } else {
      setTasks([...tasks, { ...taskDetails, id: Date.now() }]);
    }
    setFormVisible(false);
  };

  const handleEditTask = (index) => {
    setTaskDetails(tasks[index]);
    setEditIndex(index);
    setFormVisible(true);
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="p-4 font-nunito">
        <div className="flex justify-between mb-4">
          <div>
            <h1 className="text-2xl text-blue-800 text-bold text-left">
              Tasks Management
            </h1>
          </div>

          <div>
            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 flex item-center text-right font-semibold bg-blue-800"
            >
              <PlusIcon className="h-5 w-5 text-white mr-2 stroke-2  " />
              Add Task
            </button>
          </div>
        </div>

        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className=" text-blue-800 text-bold px-4 py-2">NO</th>
              <th className="text-blue-800 text-bold px-4 py-2">Date & Time</th>
              <th className=" text-blue-800 text-bold px-4 py-2">Task</th>
              <th className="text-blue-800 text-bold px-4 py-2">Description</th>
              <th className=" text-blue-800 text-bold px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="mt-8 w-46">
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td className=" shadow-md px-4 py-2">{index + 1}</td>
                <td className=" shadow-md px-4 py-2">{task.date}</td>
                <td className=" shadow-md px-4 py-2">{task.taskName}</td>
                <td className=" shadow-md px-4 py-2">{task.description}</td>
                <td className=" shadow-md px-4 py-2">
                  <button
                    onClick={() => handleEditTask(index)}
                    className="mr-2 text-blue-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(index)}
                    className="text-red-500"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {formVisible && (
          <div className="mt-4 p-4 border border-gray-300 rounded">
            <input
              type="text"
              placeholder="Task Name"
              value={taskDetails.taskName}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, taskName: e.target.value })
              }
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Description"
              value={taskDetails.description}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, description: e.target.value })
              }
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <input
              type="date"
              value={taskDetails.date}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, date: e.target.value })
              }
              className="block w-full mb-2 p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleSaveTask}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={() => setFormVisible(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskManager;
