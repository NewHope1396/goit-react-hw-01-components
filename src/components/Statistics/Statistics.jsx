import {Container, Title, List, ListItem, Label, Percentage} from 'components/Statistics/Statistics.styled'
import PropTypes from 'prop-types'

export const Statistics = ({title, stats}) => (
    <Container>
        <Title>{title}</Title>

        <List>
            {stats.map(stat => {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                return (
                    <ListItem key={stat.id} color={randomColor}>
                    <Label>{stat.label}</Label>
                    <Percentage>{stat.percentage}%</Percentage>
                    </ListItem>)
                })
            }  
        </List>
        
    </Container>
)

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}