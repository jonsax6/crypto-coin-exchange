import React from 'react'
import candlestick from '../candlestick.png'
import styled from 'styled-components'

const Img = styled.img`
  height: 6rem;
  pointer-events: none;
`;

const Header = styled.header`
  background: #1e3342;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  color: white;
`;

const H1 = styled.h1`
  font-size: 4rem;
`;

export default function ExchangeHeader(props){
  return (
    <div>
      <Header>
        <Img src={candlestick} alt="React logo" />
        <H1>
          Coin Exchange
        </H1>
      </Header>
    </div>
  )
}
