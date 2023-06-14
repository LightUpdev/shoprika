import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { cards } from "../card.js";

function BasicExample() {
  return (
    <div className="container py-5">
      <div className="row">
        {cards.map((card) => {
          const { id, heading, text, icon, iconBg } = card;
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={id}>
              <Card style={{ width: "18rem" }} className="card my-4 py-4">
                <div
                  className="card-img-div"
                  style={{ backgroundImage: `url(${iconBg})` }}
                >
                  <img className="m-3" src={icon} width={35} />
                </div>

                <Card.Body>
                  <Card.Title>
                    <h4 className="fw-bold"> {heading}</h4>
                  </Card.Title>
                  <Card.Text>{text}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BasicExample;
