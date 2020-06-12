import React, { Component } from "react";
import { Todo, Spinner } from "./components";
import { connect, ConnectedProps } from "react-redux";
import "./card.scss";
import Modal from "./components/AddTodo";
type AppOwnProps = {};

type AppState = {};

type AppProps = AppOwnProps & ConnectedProps<typeof connector>;

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <body>
        <Modal />
        <div className="container">
          <div className="row">
            {/* <Spinner /> */}
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
            <Todo />
          </div>
        </div>
      </body>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  get: () => ({ type: "sad" }),
};
const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(App);
