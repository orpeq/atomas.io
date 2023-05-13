import styled from "styled-components"

export const PageContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary.background};
  color: ${({ theme }) => theme.colors.primary.text};
`

export const Center = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Spacer = styled.div`
  padding: 0 48px;

  @media ${({ theme }) => theme.media.maxTablet} {
    padding: 0 24px;
  }
`

export const Divider = styled.div`
  margin: 128px 0;

  @media ${({ theme }) => theme.media.maxTablet} {
    margin: 64px 0;
  }
`
export const BottomDivider = styled.div`
  margin: 0px 0 128px 0;

  @media ${({ theme }) => theme.media.maxTablet} {
    margin: 0 0 64px 0;
  }
`
