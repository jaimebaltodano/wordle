import appclass from "./App.module.css";

export const Message = (props) => (
  <div className={appclass["message-container"]}>
    <p>{props.value}</p>
  </div>
);
