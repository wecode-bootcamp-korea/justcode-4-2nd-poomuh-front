import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import List from './List';
import Map from './Map';
import SearchBar from './SearchBar';
import Header from '../../components/header/Header';
import { GlobalContextProvider } from './context';

//Context API 사용

function MapPage() {
  return (
    <Container>
      <Header />
      <GlobalContextProvider>
        <Wrapper>
          <SearchBar />
          <MapWrapper>
            <div className="list">
              <List />
            </div>
            <div className="map">
              <Map />
            </div>
          </MapWrapper>
        </Wrapper>
      </GlobalContextProvider>
    </Container>
  );
}

const Container = styled.div`
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  .list {
    margin-top: 65px;
  }
`;

const MapWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 90vh;

  .list {
    width: 25rem;
    border-right: 1px solid rgb(205, 205, 205);
    max-height: 750px;
    overflow-y: scroll;
  }
  .map {
    flex: 1;
    background: white;
  }
`;

export default MapPage;
