import axios from "axios";

const networkProwider = axios.create({
  baseURL: "http://todo.api.eachbase.com/api",
  headers: {
    "Referrer Policy": "strict-origin-when-cross-origin",
    Connection: "keep-alive",
    Host: "todo.api.eachbase.com",
  },
});

const ColorsClassnames = new Map([
  ["selected_blue", "#3f51b5"],
  ["selected_green", "#4caf50"],
  ["selected_pink", "#e91e63"],
  ["selected_purple", "#9c27b0"],
  ["selected_sea-blue", "#2196f3"],
  ["selected_yellow", "#ffc107"],
]);

export const whitchColorName = (color: Colors) => {
  for (const [key, value] of ColorsClassnames) {
    if (color === value) {
      return key;
    }
  }
};

/** URLS */

export const GetTodosURL = "/todo";
export const CreateTodoURL = "/todo/";
export const DeleteTodoURL: (todoId: string) => string = (todoId) =>
  `/todo/${todoId}`;
export const UpdateTodoURL: (todoId: string) => string = (todoId) =>
  `/todo/${todoId}`;

export { networkProwider };
