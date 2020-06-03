import styled, { css } from 'styled-components';

export const StyledArticle = styled.article`
  width: 300px;
  border-top: 4px solid rgb(179, 161, 104);
  margin-top: 36px;
  margin-right: 18px;
  margin-left: 18px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

export const StyledButton = styled.button`
  border: 2px solid rgb(196, 179, 122);
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  color: hsl(0, 0%, 29%);
  font-family: 'Oswald', sans-serif;
  font-size: 16px;
  font-weight: 400;

  :focus,
  :hover {
    background-color: rgb(196, 179, 122);
  }
`;

export const StyledCardDiv = styled.div`
  border-top: 4px solid rgb(179, 161, 104);
  margin-top: 18px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 4px 6px 0 hsla(0, 0%, 0%, 0.2);
`;

export const StyledFlexDiv = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  align-items: ${props => props.align || 'center'};
  justify-content: ${props => props.justify || 'space-between'};
`;

export const StyledFlexGreyDiv = styled(StyledFlexDiv)`
  padding: 10px;
  background-color: hsl(0, 0%, 97%);
`;

export const StyledH2 = styled.h2`
  margin-top: 24px;
  margin-bottom: 24px;
  color: hsl(0, 0%, 13%);
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export const StyledImg = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.padding};
`;

export const StyledModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.2);
`;

export const StyledModalContent = styled(StyledCardDiv)`
  width: 300px;
  height: 100px;
  padding: 10px;
  border-bottom: 4px solid rgb(196, 179, 122);
  margin: 35% auto;
  text-align: center;
`;

export const StyledP = styled.p`
  ${props =>
    props.primary &&
    css`
      margin-top: ${props.noMargin ? '' : '24px'};
      margin-bottom: ${props.noMargin ? '' : '24px'};
      color: hsl(0, 0%, 13%);
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 16px;
      font-weight: 400;
    `}

  ${props =>
    props.secondary &&
    css`
      color: hsl(0, 0%, 29%);
      font-family: 'Oswald', sans-serif;
      font-size: 16px;
      font-weight: 400;
    `}

  ${props =>
    props.ancillary &&
    css`
      color: hsl(0, 0%, 45%);
      font-family: 'Oswald', sans-serif;
      font-size: 13px;
      font-weight: 400;
    `}

  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-align: ${props => (props.center ? 'center' : 'left')};

`;

export const StyledPaddingDiv = styled.div`
  padding: 10px;
`;
