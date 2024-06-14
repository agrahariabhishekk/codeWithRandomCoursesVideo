import style from "./container.module.css";
import BasicExample from "./videosContainer";
function Container({ VideoContainer }) {
  return (
    <>
      <div className={style.containers}>
        {VideoContainer.map((item) => (
          <BasicExample item={item}></BasicExample>
        ))}
      </div>
    </>
  );
}

export default Container;
