import PropTypes from 'prop-types'
import { Container, Image, Name, Description, DescriptionText, Stats, StatsItem, Numbers, Label } from "./Profile.styled"

export const Profile = ({username, tag, location, avatar, stats}) => (
    <Container>
        <Description>
          <Image
            src={avatar}
            alt="User avatar"
          />
          <Name>{username}</Name>
          <DescriptionText>@{tag}</DescriptionText>
          <DescriptionText>{location}</DescriptionText>
        </Description>
        
        <Stats>
          <StatsItem>
            <Label>Followers</Label>
            <Numbers>{stats.followers}</Numbers>
          </StatsItem>
          <StatsItem Second>
            <Label>Views</Label>
            <Numbers>{stats.views}</Numbers>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Numbers>{stats.likes}</Numbers>
          </StatsItem>
        </Stats>
    </Container>
)

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape(
    {
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    }
  )
}