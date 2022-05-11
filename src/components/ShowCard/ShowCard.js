import React from "react";
import { Title } from "../../screens/ShowListScreen/styled";
import { CardContainer, CardImage, CardText } from "./styled";

function ShowCard(props) {
  return (
    <CardContainer onClick={props.goToDetail}>
      <CardImage alt={props.title} src={props.image} />
      <CardText>{props.title}</CardText>
    </CardContainer>
  );
}

export default ShowCard;
