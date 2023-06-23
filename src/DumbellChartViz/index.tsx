// import { useState } from 'react';
import styled from 'styled-components';
import { MpiDataTypeUrbanRural } from '../Types';
import { CaretDown } from '../icons';
import { DumbellChart } from './DumbellChart';

interface Props {
  data: MpiDataTypeUrbanRural[];
}

const El = styled.div`
  margin: 6rem 0;
`;

const Filters = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  flex-wrap: wrap;
  color: var(--black-600);
`;

const IconEl = styled.div`
  height: 2.4rem;
  margin-left: 0px;
  margin-top: 10px;
  margin-right: 0.1rem;
`;

const TitleText = styled.div`
  margin-right: 1rem;
`;

const DumbellChartEl = styled.div`
  height: 60rem;
  background-color: var(--black-100);
  box-shadow: var(--shadow);
  padding: 1rem;
  border-radius: 2px;
  overflow: auto;
`;

export function DumbellChartViz(props: Props) {
  const { data } = props;
  const sortedBy = {
    label: 'Rural - Urban',
    key: 'diff',
  };
  /* const [sortedBy, setSortedBy] = useState({
    label: 'Country Name',
    key: 'country',
  });
  setSortedBy({
    label: 'Country Name',
    key: 'country',
  }); */
  /* const sortingOptions = [
    {
      label: 'Country Name',
      key: 'country',
    },
    {
      label: 'MPI difference',
      key: 'mpi-diff',
    },
    {
      label: 'Rural',
      key: 'rural',
    },
    {
      label: 'Urban',
      key: 'urban',
    },
  ]; */
  return (
    <El>
      <Filters>
        <FlexDiv>
          <TitleText>sorted by</TitleText>
          <div>{sortedBy.label}</div>
          <IconEl>
            <CaretDown size={24} color='#018EFF' />
          </IconEl>
        </FlexDiv>
      </Filters>
      <DumbellChartEl>
        <DumbellChart data={data} sortedByKey={sortedBy.key} />
      </DumbellChartEl>
    </El>
  );
}
