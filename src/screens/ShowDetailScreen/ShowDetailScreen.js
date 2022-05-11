import React, { useEffect, useState } from "react";
import { ScreenContainer, Title } from "./styled";
import { BASE_URL } from "../../constants/urls";
import axios from "axios";

function ShowDetailScreen(props) {
  const [show, setShow] = useState({});

  useEffect(() => {
    getShowDetail();
  }, []);

  const getShowDetail = async () => {
    await axios
      .get(`${BASE_URL}/shows/${props.id}`)
      .then((res) => setShow(res.data), console.log(show))
      .catch((error) => console.log(error));
  };

  const summary =
    show.summary &&
    show.summary
      .replace("<p>", "")
      .replace("</p>", "")
      .replace("<b>", "")
      .replace("</b>", "")
      .replace("<i>", "")
      .replace("</i>");

  return (
    <ScreenContainer>
      <img alt={show.name} src={show.image && show.image.medium} />
      <Title>{show.name}</Title>
      <p>{summary}</p>
    </ScreenContainer>
  );
}

export default ShowDetailScreen;
