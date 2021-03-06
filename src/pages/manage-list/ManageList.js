import React from 'react';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import ManageNav from '../manage-form/ManageNav';
import EstateCard from './EstateCard';
import ManageListNotice from './ManageListNotice';

function ManageList() {
  return (
    <>
      <Header />
      <Wrapper>
        <TitleWrapper>
          <Title>방내놓기</Title>
        </TitleWrapper>
        <ManageNav select="list" />
        <ManageListNotice />
        <EstateCard />
      </Wrapper>
      <Footer />
    </>
  );
}

const Wrapper = styled.section`
  margin: 0 10rem;
`;
const TitleWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 200px;
`;
const Title = styled.h1`
  font-size: 2rem;
`;

export default ManageList;
