import React from "react";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody
} from "reactstrap";

import Lysnandie from "../../img/Lysnandie.jpg";
import Hau from "../../img/Hau.jpg";
import Nash from "../../img/Nash.jpg";
import Matt from "../../img/Matt.jpg";
import David from "../../img/David.jpg";
import Michael from "../../img/Michael.jpg";

const Example = props => {
  return (
    <div>
      <CardDeck className="TopDeck">
        <Card>
          <CardImg className="cardp1"
           top
           src={Matt}
           width="80%"
           height="80%"
          />
          <CardBody>
            <CardTitle>Matthew Lloyd</CardTitle>
            <CardSubtitle>Project Manager</CardSubtitle>
            <CardText>
             
            </CardText>
            <Button
              color="info"
              href="https://github.com/Matthew-Lloyd"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              color="info"
              href="https://www.linkedin.com/in/-matthew-lloyd/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            src={Lysnandie}
            width="80%"
            height="80%"
          />
          <CardBody>
            <CardTitle>Lysnandie</CardTitle>
            <CardSubtitle>Data Base and Backend Developer</CardSubtitle>
            <CardText>
           
            </CardText>
            <Button
              color="info"
              href="https://github.com/Lysnandie"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              color="info"
              href="https://www.linkedin.com/in/lysnandiej/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
              top
              src={Michael}
              width="80%"
              height="80%"
          />
          <CardBody>
            <CardTitle>Michael Nguyen</CardTitle>
            <CardSubtitle>Backend Server Developer / Debuger Hero</CardSubtitle>
            <CardText>
             
            </CardText>
            <Button
              color="info"
              href="https://github.com/michaelnguyen55"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              color="info"
              href="https://www.linkedin.com/in/michael-nguyen-2153a9142/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardBody>
        </Card>
      </CardDeck>
      {/*  ========================================================================================================== */}
      {/*  ========================================================================================================== */}
      <CardDeck className="bottomDeck">
        <Card>
          <CardImg
           top
           src={Nash}
           width="80%"
           height="80%"
          />
          <CardBody>
            <CardTitle>Nash </CardTitle>
            <CardSubtitle>Frontend Logic Developer</CardSubtitle>
            <CardText>
             
            </CardText>
            <Button
              color="info"
              href="https://github.com/ardnehsan"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              color="info"
              href="https://www.linkedin.com/in/nashendrafowsar/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
           top
           src={David}
           width="70%"
           height="70%"
          />
          <CardBody>
            <CardTitle>David Morales</CardTitle>
            <CardSubtitle>Frontend Styling Developer</CardSubtitle>
            <CardText>
             
            </CardText>
            <Button
              color="info"
              href="https://github.com/Citizen32"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              color="info"
              href="https://www.linkedin.com/in/david-morgar/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
           top
           src={Hau}
           width="80%"
           height="80%"
          />
          <CardBody>
            <CardTitle>Hau</CardTitle>
            <CardSubtitle>Frontend Developer</CardSubtitle>
            <CardText>
              
            </CardText>
            <Button
              color="info"
              href="https://github.com/hautran1993"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              color="info"
              href="https://www.linkedin.com/in/hau-tran-a1224314b/"
              target="_blank"
            >
              LinkedIn
            </Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Example;