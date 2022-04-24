import React from 'react';
import styled from 'styled-components';

const EstateCard = () => {
  const deleteEstate = () => {
    //택우는 똑똑이 -> 왜냐? 삭제해서 재랜더링 디펜던시는 그냥 fetch해온 배열의 값을 주면 되니까
    fetch(`http://localhost:8000/delete?id=id`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  //삭제 확인 알럿창
  const checkDelete = () => {
    const isDelete = window.confirm('삭제하시겠습니까?');
    if (isDelete) {
      deleteEstate();
    }
  };

  return (
    <Wrapper>
      <CardBox>
        <EstateBox>
          <EstateDeadline>
            <div className="estateNum">
              <p>매물번호 27248658</p>
            </div>
            <div className="adInfo">
              <p className="advertising">광고중</p>
              <p className="expirationDate">광고종료 D-29</p>
            </div>
          </EstateDeadline>
          <EstateInfo>
            <div className="imgWrapper">
              <img src="" alt="매물 사진" />
            </div>
            <div className="infoWrapper">
              <p className="type">원룸</p>
              <p className="price">월세 1억 2342만/122만</p>
              <p className="status">업로드 처리중입니다.</p>
            </div>
          </EstateInfo>
        </EstateBox>
        <DescriptionBox>
          <Description>
            <div className="descBox" />
          </Description>
          <Buttons>
            <div className="buttonDiv">
              <div className="registerDate">
                <p>
                  등록일 <span className="date">2022-04-23</span>
                </p>
                <p>
                  조회수 <span className="count">1</span>
                </p>
                <p>
                  찜 <span className="count">0</span>
                </p>
              </div>
              <div className="buttons">
                <button>수정</button>
                <button onClick={checkDelete}>삭제</button>
                <button>광고 종료</button>
                <button>거래 완료</button>
              </div>
            </div>
          </Buttons>
        </DescriptionBox>
      </CardBox>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
`;

const CardBox = styled.section`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  border: 1px solid rgb(226, 226, 226);
`;

const EstateBox = styled.section`
  display: flex;
  flex-wrap: nowrap;
  width: 50%;
  border: 1px solid rgb(226, 226, 226);
`;

const DescriptionBox = styled.section`
  display: flex;
  flex-wrap: nowrap;
  width: 50%;
  border: 1px solid rgb(226, 226, 226);
`;

const EstateDeadline = styled.div`
  width: 40%;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  border-right: 1px solid rgb(226, 226, 226);

  .estateNum {
    width: 70%;
    margin: 30px auto 10px;
    padding-bottom: 15px;
    border-bottom: 1.5px solid rgb(226, 226, 226);
    text-align: center;
  }

  .adInfo {
    margin-bottom: 20px;
    line-height: 20px;
    .advertising {
      color: #1564f9;
      font-size: 15px;
    }
    .expirationDate {
      color: #62a6ff;
      font-size: 13px;
    }
  }
`;

const EstateInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 70%;

  .imgWrapper {
    margin: auto 10px;
    width: 50%;
    height: 70%;
    border: 1px solid rgb(226, 226, 226);
  }

  .infoWrapper {
    margin: auto 10px;
    width: 40%;
    height: 70%;
    font-size: 18px;
    font-weight: 700;
    line-height: 25px;
    .status {
      font-size: 14px;
      font-weight: 400;
    }
  }
`;

const Description = styled.div`
  width: 50%;
  border-right: 1px solid rgb(226, 226, 226);

  .descBox {
    margin: 20px auto;
    width: 80%;
    height: 65%;
    border: 1px solid rgb(226, 226, 226);
  }
`;

const Buttons = styled.div`
  width: 50%;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;

  .registerDate {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    color: #666666;
    p:nth-child(-n + 2) {
      padding-right: 5px;
      margin-right: 5px;
      border-right: 1px solid rgb(226, 226, 226);

      .count {
        color: rgb(21, 100, 249);
      }
    }
  }

  .buttons {
    margin-top: 20px;
    button {
      padding: 10px 15px;
      background-color: white;
      border: 1px solid rgb(226, 226, 226);
      :hover {
        cursor: pointer;
        background-color: rgb(204, 204, 204);
      }
    }
  }
`;
export default EstateCard;
