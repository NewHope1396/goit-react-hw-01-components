import styled from "@emotion/styled";

export const Container = styled.section`
margin: 80px auto;
text-align: center;
`

export const Title = styled.h2`
    text-transform: uppercase;
    font-size: 28px;
     
    background-color: #EFEEFF;
    color: #787878;
    padding: 40px 15px;
`

export const List = styled.ul`
    display: flex;
    justify-content: center;
`

export const ListItem = styled.li`
    display: flex;
    flex-flow: column;
    width: 100%;
    padding: 20px 15px; 
    background-color: #${props => props.color};
`
export const Label = styled.span`
    font-size: 14px;
    margin-bottom: 8px;
`
export const Percentage = styled.span`
    font-size: 24px;
`