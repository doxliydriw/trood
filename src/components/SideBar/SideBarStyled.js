import styled from 'styled-components';

export const SideBarLayout = styled.section`
    grid-row: 2;
    margin: 0 auto;
`

export const CardContainer = styled.div`
width: 500px;
`

export const CardTitle = styled.h3`
font-family: Inter, sans-serif;;
font-size: 48px;
font-weight: 600;
line-height: 20px;
text-align: left;
`

export const CardContent = styled.div`
border-radius: 24px;
background: #D9D9D9;
min-height: 290px;
padding: 53px 32px 32px 44px;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const CardText = styled.p`
font-family: Inter, sans-serif;
font-size: 32px;
font-weight: 500;
line-height: 20px;
text-align: left;
color: #00000080;
opacity: 50%;
margin: 0;
`