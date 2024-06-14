import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import style from "./videosContainer.module.css";

function BasicExample({ item }) {
  return (
    <Card style={{ width: "40rem", height: "30rem" }}>
      {item.content}
      <Card.Body>
        <Card.Title className={style.header}>{item.heading}</Card.Title>
        <Card.Text className={style.text}>{item.discreption}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
