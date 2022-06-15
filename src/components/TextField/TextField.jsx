import React from "react";
import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  @media ${devices.down.desktop} {
    width: 95%;
  }
`;

const InputLabel = styled.p`
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 2%;
  /* margin-left: 0.2rem; */
  width: 100%;

  @media ${devices.down.desktop} {
    margin: 0.5rem 0;
  }
`;

const Input = styled.input`
  width: 100%;
  color: #333333;
  border: 1px solid gray;
  box-sizing: border-box;
  border-radius: 0.5rem;
  padding: 10px 10px;
`;

export default function TextField({ title, value, onChange }) {
  return (
    <InputContainer>
      <InputLabel>{title}</InputLabel>
      <Input value={value} onChange={onChange} />
    </InputContainer>
  );
}
