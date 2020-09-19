import React from 'react'
import styled from 'styled-components';

export const Wrapper = styled.div`
  @media(min-width: 1024px) {
    height: 85vh;
  }
`;

const WrapperComponent = ({ children }) => {
    return (
        <Wrapper className="flex flex-col md:items-center p-3 bg-gradient-to-r from-gray-500 to-gray-600 h-screen">
            { children }
        </Wrapper>
    )
}

export default WrapperComponent
