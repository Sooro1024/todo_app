import React from "react";
import ReactDOM from "react-dom";
import SaveOrEdit from "./SaveOrEdit";
import { whitchColorName } from "../configs";

const modalRoot = document.getElementById("modal-root");

type ModalProps = {
  open: boolean;
  handleClick: () => void;
};
type ModalState = {
  name: string;
  text: string;
  color: Colors;
};

class Modal extends React.Component<ModalProps, ModalState> {
  el: HTMLDivElement;
  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement("div");
    this.state = {
      name: "",
      text: "",
      color: "#e91e63",
    };
  }

  componentDidMount() {
    modalRoot?.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot?.removeChild(this.el);
  }

  onSubmit() {}

  componentDidUpdate(prevProps: ModalProps) {
    if (this.props.open === false && prevProps.open === true) {
      this.setState({ name: "", text: "", color: "#e91e63" });
    }
  }

  handleName(name: string) {
    this.setState((state) => ({ ...state, name }));
  }
  handleText(text: string) {
    this.setState((state) => ({ ...state, text }));
  }

  handleColor(color: Colors) {
    this.setState((state) => ({ ...state, color }));
  }

  render() {
    const { name, text, color } = this.state;
    const colorClassPrefix = whitchColorName(color);

    return ReactDOM.createPortal(
      <>
        <div id="modal1" className={`modal ${this.props.open ? "" : "open"}`}>
          <div className="card add_card_block card__block blue-grey">
            <form
              onSubmit={(ev) => {
                ev.preventDefault();
              }}
            >
              <div className="card-content white-text">
                <input
                  placeholder="New todo"
                  required
                  className="card-title"
                  value={name}
                  onChange={(e) => this.handleName(e.target.value)}
                />
                <textarea
                  placeholder="Todo deskription"
                  required
                  value={text}
                  onChange={(e) => this.handleText(e.target.value)}
                />
              </div>
              <div className="card-action card__action_wraper">
                <SaveOrEdit edit />
                <div className={`color__block ${colorClassPrefix}`}>
                  <div
                    onClick={this.handleColor.bind(this, "#e91e63")}
                    className="pink circle"
                  />
                  <div
                    onClick={this.handleColor.bind(this, "#9c27b0")}
                    className="purple circle"
                  />
                  <div
                    onClick={this.handleColor.bind(this, "#4caf50")}
                    className="green circle"
                  />
                  <div
                    onClick={this.handleColor.bind(this, "#ffc107")}
                    className="yellow circle"
                  />
                  <div
                    onClick={this.handleColor.bind(this, "#2196f3")}
                    className="sea-blue circle"
                  />
                  <div
                    onClick={this.handleColor.bind(this, "#3f51b5")}
                    className="blue circle"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          onClick={this.props.handleClick}
          className={`modal-overlay ${this.props.open ? "" : "open"}`}
        ></div>
        <button
          onClick={this.props.handleClick}
          className="btn-floating btn-large waves-effect waves-light red add_botton"
        >
          <i className="material-icons">add</i>
        </button>
      </>,
      this.el
    );
  }
}

class Parent extends React.Component<{}, { open: boolean }> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = { open: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      open: !state.open,
    }));
  }

  render() {
    return <Modal handleClick={this.handleClick} open={this.state.open} />;
  }
}

export default Parent;
