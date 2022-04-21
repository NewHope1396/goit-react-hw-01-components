import PropTypes from 'prop-types'
import {Status, Friend, Image, Name} from 'components/FriendListItem/FriendListItem.styled'

export const FriendListItem = ({avatar, name, isOnline}) => (
    <Friend>
        <Status isOnline = {isOnline}></Status>
        <Image src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </Friend>
)

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired
}