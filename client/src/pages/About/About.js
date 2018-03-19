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

const Example = props => {
  return (
    <div>
      <CardDeck className="TopDeck">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Matthew Lloyd</CardTitle>
            <CardSubtitle>Project Manager</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button
              color="info"
              href="https://github.com/Matthew-Lloyd"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              color="primary"
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
            width="100%"
            src="../Lysnandei.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Lysnandie</CardTitle>
            <CardSubtitle>Data Base and Backend Developer</CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Michael Nguyen</CardTitle>
            <CardSubtitle>Backend Server Developer / Debuger Hero</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
      {/*  ========================================================================================================== */}
      {/*  ========================================================================================================== */}
      <CardDeck className="bottomDeck">
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Nash </CardTitle>
            <CardSubtitle>Frontend Logic Developer</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>David Morales</CardTitle>
            <CardSubtitle>Frontend Styling Developer</CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Hau</CardTitle>
            <CardSubtitle>Frontend Developer</CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Example;