import useWindowResize from "./customHooks/useWindowResize";
import "./index.scss";

export default function TestUseWindowResize() {
  const { width, height } = useWindowResize();
  return (
    <div className="main-container">
      <div className="info">
        <h1 className="title">Test Use Window Resize</h1>
        <div className="testing">
          <p>Width is {width}</p>
          <p>Height is {height}</p>
        </div>
      </div>
    </div>
  );
}
