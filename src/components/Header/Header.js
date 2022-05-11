import React from "react";
import { HeaderContainer, Title, BackButton } from "./styled";

function Header(props) {
  return (
    <div>
      <HeaderContainer>
        <Title>TVMaze</Title>
        {props.showButton && <BackButton onClick={props.goBack}>voltar</BackButton>}
      </HeaderContainer>
    </div>
  );
}

export default Header;
