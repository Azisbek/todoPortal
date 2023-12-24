import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainHeader = () => {
  return (
    <HeaderStyle>
      <Container>
        <div>
          <h1>LOGO</h1>
        </div>
        <div>
          <LinkStyle to="/form">Add new post</LinkStyle>
          <LinkStyle to="/list">Post list</LinkStyle>
        </div>
      </Container>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  /* width: 100%; */
  padding: 17px;
  background-color: blue;
  margin: 0 auto;

  & div {
    display: flex;
    gap: 30px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: 600;
  font-family: "Times New Roman", Times, serif;
`;

export default MainHeader;
