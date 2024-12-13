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
  const [visibleMenuIndex, setVisibleMenuIndex] = useState(null); // State to track visible menu
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

  const toggleMenu = (index) => {
    setVisibleMenuIndex(visibleMenuIndex === index ? null : index);
  };

  return (
    <div>
      <div className="p-4 font-nunito ml-20">
        <div className="flex justify-between mb-2">
          <div>
            <h1 className="text-2xl text-blue-800 text-bold text-left">
              Tasks Management
            </h1>
          </div>

          <div className="mt-10 mr-28">
            <button
              onClick={handleAddTask}
              className="bg-blue-500 text-white px-4 py-2 rounded-full mb-4 flex item-center text-right font-semibold bg-blue-800"
            >
              <PlusIcon className="h-5 w-5 text-white mr-2 stroke-2  " />
              Add Task
            </button>
          </div>
        </div>

        <table className="table-auto w-full border-collapse mb-56 text-m  text-left">
          <thead>
            <tr>
              <th className="font-semibold text-blue-800  px-4 py-2">No</th>
              <th className="font-semibold text-blue-800  px-4 py-2">Date & Time</th>
              <th className=" font-semibold text-blue-800  px-4 py-2">Task</th>
              <th className="font-semibold text-blue-800  px-4 py-2">Description</th>
              <th className="font-semibold text-blue-800 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="mt-8 w-46 border-collapse border">
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td className="font-nunito shadow-md px-4 py-2">{index + 1}</td>
                <td className="font-nunito shadow-md px-4 py-2">{task.date}</td>
                <td className="font-nunito shadow-md px-4 py-2">{task.taskName}</td>
                <td className="font-nunito shadow-md px-4 py-2">{task.description}</td>
                <td className="font-nunito shadow-md px-4 py-2">
                  {/* 3 Dots Button */}
                  <button
                    onClick={() => toggleMenu(index)}
                    className="text-gray-600"
                  >
                    &#x22EE; {/* Unicode for vertical ellipsis */}
                  </button>
                  {/* Conditional Render for Edit and Delete */}
                  {visibleMenuIndex === index && (
                    <div className="absolute right-0 mt-2 bg-white shadow-md rounded p-2 mr-16 z-10">
                      <button
                        onClick={() => handleEditTask(index)}
                        className="block text-blue-500 mb-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteTask(index)}
                        className="block text-red-500"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Modal for Task Form */}
      {formVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white pt-10 pr-36 pl-36 pb-4 rounded-lg w-1/2">
            <h2 className="text-2xl font-bold mb-8">Add Task</h2>
            <input
              type="text"
              placeholder="Enter Task Name"
              value={taskDetails.taskName}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, taskName: e.target.value })
              }
              className="block w-full mb-6 p-3 bg-stone-100 rounded"
            />
            <input
              type="text"
              placeholder="Description"
              value={taskDetails.description}
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, description: e.target.value })
              }
              className="block w-full mb-6 p-3 bg-stone-100 rounded"
            />
            <input
              type="datetime-local"
              value={taskDetails.date}
              placeholder="Date Picker"
              onChange={(e) =>
                setTaskDetails({ ...taskDetails, date: e.target.value  })
              }
              className="block w-full mb-4 p-3 bg-stone-100 rounded"
            />
            <div className="flex-none">
              <button
                onClick={handleSaveTask}
                className="bg-blue-800 text-white px-6 py-2 rounded-full mr-2 mt-4 mb-4"
              >
                Save
              </button>
              <br></br>
              <button
                onClick={() => setFormVisible(false)}
                className="bg-white text-black px-6 py-2 rounded-full mr-2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

        
      </div>
    </div>
  );
}

export default TaskManager;
