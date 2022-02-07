import { KEYS } from "./Constants";
import appclass from "./App.module.css";

const KeyBoard = (props) => {
  const body = KEYS.map((element) => (
    <button
      key={`key-${element}`}
      id={`key-id-${element}`}
      onClick={() => props.onClick(element)}
    >
      {element}
    </button>
  ));
  return <div className={appclass["key-container"]}>{body}</div>;
};

export default KeyBoard;
