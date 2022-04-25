import React, { useContext } from 'react';
import styled from 'styled-components';
import { RealEstateContext } from './context';
import ListCard from './ListCard';

function List() {
  const RealEstate = useContext(RealEstateContext);
  // console.log(RealEstate.realEstate);

  return (
    <Wrapper>
      {RealEstate.selected.length === 0
        ? null
        : RealEstate.selected.map(data => (
            <ListCard key={data.id} data={data} />
          ))}
    </Wrapper>
  );
}

export default List;

const Wrapper = styled.div`
  margin-top: 65px;
`;
