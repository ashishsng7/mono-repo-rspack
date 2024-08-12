import styled from 'styled-components';

const StyledUiShared = styled.div`
  color: pink;
`;

export function UiShared() {
  return (
    <StyledUiShared>
      <h1>Welcome to UiShared!</h1>
    </StyledUiShared>
  );
}

export default UiShared;
