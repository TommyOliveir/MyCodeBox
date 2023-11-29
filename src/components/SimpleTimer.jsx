import styled from 'styled-components'
import logo from '../assets/logo.png'
import play from '../assets/Play.svg'

const StyledFlex = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`

const StyledBody = styled.div`
  background: #202024;
  margin: 20px;
  width: 1120px;
  height: 744px;
  border-radius: 8px;
`
const StyledContainer = styled(StyledFlex)`
  align-items: center;
  color: #fff;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  margin: auto;
`
const StyledMainTitle = styled.h2`
  font-family: Fira Mono;
  font-size: 20px;
`
const StyledSubTitle = styled.h2`
  padding-top: 40px;
`
const StyledSpan = styled.span`
  color: #4e4e57;
  border-bottom: 3px solid #4e4e57;
  padding: 20px;
`

const StyledPaddedText = styled.p`
  color: #4e4e57;
  font-size: 160px;
  font-weight: 700;
  background: #29292e;
  width: 128px;
  height: 198px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 0;
`

const StyledPaddedColon = styled(StyledPaddedText)`
  color: #6c38cc;
  font-size: 160px;
  font-weight: 700;
  background: transparent;
  width: 128px;
  height: 198px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin: 10px 0;
`
const StyledButton = styled.button`
  color: #fff;
  background: #6c38cc;
  font-size: 16px;
  font-weight: 700;
  padding: 2em;
  margin-top: 40px;
  width: 100%;
  border-radius: 8px;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(0.9);
  }
  &:active {
    background: #4e4e57;
  }
`

export const SimpleTimer = () => {
  return (
    <div>
      <StyledBody>
        <StyledContainer>
          <StyledFlex>
            <div className="logo">
              <img src={logo} alt="" />
            </div>
            <StyledMainTitle>SimpleTimer</StyledMainTitle>
          </StyledFlex>
          <StyledSubTitle>
            Set meditation for <StyledSpan>10</StyledSpan> minutes
          </StyledSubTitle>
          <StyledFlex>
            <StyledPaddedText>0</StyledPaddedText>
            <StyledPaddedText>0</StyledPaddedText>
            <StyledPaddedColon>:</StyledPaddedColon>
            <StyledPaddedText>0</StyledPaddedText>
            <StyledPaddedText>0</StyledPaddedText>
          </StyledFlex>
          <StyledButton>
            <img src={play} alt="" />
            Run Timer
          </StyledButton>
        </StyledContainer>
      </StyledBody>
    </div>
  )
}
