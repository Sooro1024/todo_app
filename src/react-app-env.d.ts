/// <reference types="react-scripts" />
/// <reference types="redux-persist" />

/* ACTION TYPES */

type ADD_TODO = "ADD_TODO";
type ADD_TODO_ERROR = "ADD_TODO_ERROR";
type ADD_TODO_SUCCES = "ADD_TODO_SUCCES";
type ADD_TODO_PANDING = "ADD_TODO_PANDING";

type GET_TODOS = "GET_TODOS";
type GET_TODOS_ERROR = "GET_TODOS_ERROR";
type GET_TODOS_SUCCES = "GET_TODOS_SUCCES";
type GET_TODOS_PANDING = "GET_TODOS_PANDING";

type UPDATE_TODO = "UPDATE_TODO";
type UPDATE_TODO_ERROR = "UPDATE_TODO_ERROR";
type UPDATE_TODO_SUCCES = "UPDATE_TODO_SUCCES";
type UPDATE_TODO_PANDING = "UPDATE_TODO_PANDING";

type DELETE_TODO = "DELETE_TODO";
type DELETE_TODO_ERROR = "DELETE_TODO_ERROR";
type DELETE_TODO_SUCCES = "DELETE_TODO_SUCCES";
type DELETE_TODO_PANDING = "DELETE_TODO_PANDING";

type DELETE_ALL_TODOS = "DELETE_ALL_TODOS";
type DELETE_ALL_TODOS_ERROR = "DELETE_ALL_TODOS_ERROR";
type DELETE_ALL_TODOS_SUCCES = "DELETE_ALL_TODOS_SUCCES";
type DELETE_ALL_TODOS_PANDING = "DELETE_ALL_TODOS_PANDING";

type Colors =
  | "#e91e63"
  | "#9c27b0"
  | "#4caf50"
  | "#ffc107"
  | "#2196f3"
  | "#3f51b5";

interface ColorsClassnames {
  selected_pink: "#e91e63";
  selected_purple: "#9c27b0";
  selected_green: "#4caf50";
  selected_yellow: "#ffc107";
  selected_sea_Blue: "#2196f3";
  selected_blue: "#3f51b5";
}

type TODO = {
  color: Colors;
  description: string;
  title: string;
  __v: number;
  _id: string;
  panding: boolean;
};

type TODOS = TODO[];

type SERV_TODO = {
  color: Colors;
  description: string;
  title: string;
  __v: number;
  _id: string;
};
type SERV_TODOS = SERV_TODO[];

type CREATE_TODO_BODY = { title: string; description: string; color: Colors };
