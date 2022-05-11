import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowCard from "../../components/ShowCard/ShowCard";
import { Title, ScreenContainer } from "./styled";
import { BASE_URL } from "../../constants/urls";

function ShowListScreen(props) {
  const [showList, setShowList] = useState([])

  useEffect(() => {
    getSchedule()
  }, []);

  const getSchedule = async () => {
    await axios
      .get(`${BASE_URL}/schedule`)
      .then((res) => setShowList(res.data))
      .catch((error) => alert(error));
  };

  const ShowCardArray = showList.map((item) => {
    return <ShowCard goToDetail={() => props.goToDetail(item.show.id)} key={item.id} image={item.show.image.medium} title={item.show.name} />
  })

  return (
    <div>
      <Title>Programas de Hoje</Title>
      <ScreenContainer>
        {ShowCardArray}
      </ScreenContainer>
    </div>
  );
}

export default ShowListScreen;
