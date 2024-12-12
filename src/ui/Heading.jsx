import styled, { css } from 'styled-components';

const Heading = styled.h1`
  ${ ( { as } ) => as === 'h1' && css`
    font-size: 3rem;
    font-weight: 600;
    color: red;
  ` }

  ${ ( { as } ) => as === 'h2' && css`
    font-size: 2rem;
    font-weight: 600;
    color: blue;
  `}

  ${ props => props.as === 'h3' && css`
    font-size: 2rem;
    font-weight: 500;
    color: orange;
  `}

  line-height: 1.4;
`;

export default Heading;