import styled from "styled-components"

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 30px;
  border: 1px solid #565656;
  position: fixed;
  align-items: center;
  padding: 30px;
  left: 20px;
  z-index: 10;

  img {
    border-radius: 30px;
    display: block;
    margin-bottom: 26px;
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  flex-direction: row;
  text-align: right;
  gap: 30px;
  align-items: center;
  margin: 0 0 30px 0;
`

export const Heading = styled.h2`
  color: ${({ theme }) => theme.colors.primary.text};
  font-size: ${({ theme }) => theme.fontSizes.h2};
  line-height: ${({ theme }) => theme.lineHeights};
  margin: 0;
`

export const Designation = styled.span`
  max-width: 110px;
  text-align: right;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary.text};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: ${({ theme }) => theme.fontWeights.normal};
`

export const Text = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.big};
  color: ${({ theme }) => theme.colors.primary.text};
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin: 0;
`

export const Address = styled(Text)`
  margin-bottom: 30px;
`

export const Copyright = styled.p`
  font-size: 14px;
  text-align: center;
  margin-bottom: 20px;
`

export const SocialProfile = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0;
`

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  line-height: 46px;
  text-align: center;
  border: 2px solid #565656;
  border-radius: 50%;
  color: #999999;
  font-size: 20px;
  transition: 0.3s;

  &:hover {
    color: var(--primary_color);
    border-color: var(--primary_color);
  }
`
