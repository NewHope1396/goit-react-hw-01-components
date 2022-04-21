import styled from "@emotion/styled";

export const Container = styled.table`
    margin: 120px auto;
    width: 100%;
    text-align: center;
    
    border: 2px solid gray;
    border-radius: 6px;
    box-shadow: 7px 6px 10px 0px rgba(0,0,0,0.58);
`

export const TableHeader = styled.thead`
    background-color: #A4E2F3;
    height: 40px;
    font-size: 20px;
`

export const Row = styled.tr`
    background-color: ${props => props.isEven?'#F0F8FF':'#E3E3E3'};
    height:35px;
    color: #707070;
    font-size: 16px;
    font-weight:700;
`