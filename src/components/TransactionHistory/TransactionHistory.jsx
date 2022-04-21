import PropTypes from 'prop-types'
import { Container, TableHeader, Row } from "components/TransactionHistory/TransactionHistory.styled"

export const TransactionHistory = ({items}) => (
    <Container>
        <TableHeader>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHeader>

        <tbody>
          {items.map((item, index) => (
                <Row isEven = {index % 2 !== 0} key={item.id}> 
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
                </Row>
          ))}
        </tbody>
    </Container>
)

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
                amount: PropTypes.string.isRequired,
                currency: PropTypes.string.isRequired
            }
        )
    )
}