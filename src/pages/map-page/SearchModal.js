import React, { useContext } from 'react';
import styled from 'styled-components';
import { RealEstateContext, RealEstateContextDispatch } from './context';

let resultKey = 0;

function ResultData({ address, buildingName, data }) {
  // 백엔드와 소통 이후 수정 많이 할 것.
  // 결과 데이터가 지도 주소냐, 백엔에서 받아온 매물 데이터냐에 따라 다르게 컴포넌트 구현
  const { kakao } = window;
  const coords = (lat, lng) => new kakao.maps.LatLng(lat, lng);
  const RealEstate = useContext(RealEstateContext);
  const RealEstateDispatch = useContext(RealEstateContextDispatch);
  const { map } = RealEstate;

  // 백엔드 소통이후 전부 수정
  let addressSpan = '';
  if (typeof address === 'object') {
    addressSpan = address.address_name;
  } else {
    addressSpan = address;
  }
  return (
    // 이벤트 수정
    <ResultItem
      onClick={() => {
        if (address.address) {
          map.setCenter(coords(address.address.y * 1, address.address.x * 1));
          return;
        }
        map.setCenter(coords(data.latitude, data.longitude));
        RealEstateDispatch({
          type: 'GET_BOUNDS',
          getBounds: map.getBounds(),
        });
      }}
    >
      <p>{buildingName}</p>
      <span>{addressSpan}</span>
    </ResultItem>
  );
}

function SearchModal({ result, addressResult }) {
  return (
    <Outer>
      {!result && !addressResult ? (
        <Wrapper>
          <NoResult>
            <p>검색 결과가 없습니다</p>
          </NoResult>
        </Wrapper>
      ) : (
        <>
          <Wrapper>
            <ItemTitle>지역</ItemTitle>
            <DataScroll>
              {addressResult && addressResult.length < 1 ? (
                <NoResult>
                  <p>검색 결과가 없습니다</p>
                </NoResult>
              ) : (
                addressResult.map(el => {
                  return <ResultData address={el} key={resultKey++} />;
                })
              )}
            </DataScroll>
          </Wrapper>
          {result && result.office.length !== 0 ? (
            <Wrapper>
              <ItemTitle>오피스텔</ItemTitle>
              <DataScroll>
                {result.office.map(el => {
                  return (
                    <ResultData
                      buildingName={el.building_name}
                      address={el.address_main}
                      key={resultKey++}
                      data={el}
                    />
                  );
                })}
              </DataScroll>
            </Wrapper>
          ) : (
            ''
          )}
          {result && result.apartment.length !== 0 ? (
            <Wrapper>
              <ItemTitle>아파트</ItemTitle>
              <DataScroll>
                {result.apartment.map(el => {
                  return (
                    <ResultData
                      buildingName={el.building_name}
                      address={el.address_main}
                      key={resultKey++}
                      data={el}
                    />
                  );
                })}
              </DataScroll>
            </Wrapper>
          ) : (
            ''
          )}
        </>
      )}
    </Outer>
  );
}
const Outer = styled.div`
  display: flex;
  height: 300px;
  box-shadow: rgb(0 0 0 / 5%) 0px 2px 15px 0px;
  border: 1px solid rgb(205, 205, 205);
  border-radius: 4px;
  position: relative;
  top: 12px;
  overflow: hidden;
`;

const Wrapper = styled.div`
  width: 250px;
  background: #fff;
  &:nth-child(2) {
    border-left: 1px solid rgb(205, 205, 205);
    border-right: 1px solid rgb(205, 205, 205);
  }
`;

const NoResult = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 16px;
  font-weight: 500;
`;

const ItemTitle = styled.div`
  padding: 1rem;
  font-size: 16px;
  font-weight: 500;
`;

const ResultItem = styled.div`
  width: 100%;
  padding: 1rem;
  font-size: 14px;
  color: rgb(134, 134, 134);
  cursor: pointer;
  &:hover {
    background: rgb(245, 245, 245);
  }
  p {
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 5px;
  }
  span {
    font-weight: 400;
  }
`;

const DataScroll = styled.div`
  height: 100%;
  overflow: scroll;
  height: 250px;
`;

export default SearchModal;
