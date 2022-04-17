import styled from "@emotion/styled";

export const Container = styled.div`
    width: 270px;
    margin: 0 auto;
    text-align: center;
    background-color: #ECF5F8;
    border-radius: 10px;
    box-shadow: 5px 8px 8px 0px rgba(34, 60, 80, 0.2);
`

export const Image = styled.img`
    border-radius: 50%;
    background-color: #A4E2F3;
    width: 160px;
`

export const Description = styled.div`
    margin-bottom: 20px;
    padding: 15px 20px;
`

export const Name = styled.p`
    font-size: 18px;
    font-weight: 700;
`

export const DescriptionText = styled.p`
    font-size: 14px;
    color: gray;

    margin: 10px 0px;
`
export const Label = styled.span`
    font-size: 14px;
    color: gray;
    margin-bottom: 8px;
`

export const Numbers = styled.span`
    font-size: 18px;
    font-weight: 700;
    color: black;
`

export const Stats = styled.ul`
    display: flex;
    font-size: 12px;
    background-color: #E0E8EC;
`

export const StatsItem = styled.li`
    display:flex;
    flex-flow: column;
    width: 90px;
    padding: 15px 20px;
    border: 1px solid #DDDDDD;
    border-left: ${props => (props.Second ? 'none' : '1px solid #DDDDDD')};
    border-right: ${props => (props.Second ? 'none' : '1px solid #DDDDDD')};

`