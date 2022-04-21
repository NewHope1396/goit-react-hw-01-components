import styled from "@emotion/styled";

export const Friend = styled.li`
    display: flex;
    align-items: center;

    margin-bottom: 15px;
    padding: 15px 20px;
    width: 320px;

    border: 2px solid gray;
    border-radius: 4px;
    background-color: #EFEEFF;
    box-shadow: 7px 6px 10px 0px rgba(0,0,0,0.58);`

export const Status = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 15px;

    background-color: ${props => props.isOnline?"#19E438":"#FF2828"};
`

export const Image = styled.img`
    margin-right: 15px;

    border: 2px solid gray;
    border-radius: 5px;

    background-color: #A4E2F3;
`

export const Name = styled.p`
    font-size: 24px;
    font-weight: 700;
`