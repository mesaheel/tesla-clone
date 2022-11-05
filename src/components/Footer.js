import React from 'react'
import styled from "styled-components";

function Footer() {
  return (
    <Foot>
      <a href="#">Tesla © 2022</a>
      <a href="#">Privacy & Legal</a>
      <a href="#">Vehicle Recalls</a>
      <a href="#">Contact</a>
      <a href="#">Careers</a>
      <a href="#">News</a>
      <a href="#">Engage</a>
      <a href="#">Locations</a>
    </Foot>
  )
}

export default Footer

const Foot = styled.div`
      display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;

        a {
            font-weight: 70;
            padding: 0 0 20px 20px;
        }
`