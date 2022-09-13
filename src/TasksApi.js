import axios from "axios";

export default {
  getTasks: (callback) => {
    axios.get("http://localhost:3000/tasks/").then((response) => {
      callback(response.data);
    });
  },
  getTask: (taskID, callback) => {
    axios.get(`http://localhost:3000/tasks/${taskID}`).then((response) => {
      callback(response.data);
    });
  },
  createTask: (task, callback) => {
    axios
      .post("http://localhost:3000/tasks/", task)
      .then((response) => callback(response.data));
  },
  deleteTask: (task, callback) => {
    axios
      .delete(`http://localhost:3000/tasks/${task}`)
      .then((response) => callback(response.data));
  },
  updateTasks: (task, callback) => {
    axios
      .patch(`http://localhost:3000/tasks/${task.id}`, task)
      .then((response) => {
        callback(response.data);
      });
  },
};
