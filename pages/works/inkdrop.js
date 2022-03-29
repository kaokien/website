import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Project Negus">
    <Container>
      <Title>
        Project Negus <Badge>2016-2017</Badge>
      </Title>
      <P>The negus project was the exploration of the cultures and people of the diaspora through various art mediums, encouraging the rediscovery and collaboration of African roots.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://cdn.jwplayer.com/videos/raSnFGs6-U1u6Qq09.mp4">
            negus.io <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Goal</Meta>
          <span>Celebration of our people, by our people; The Unification of Us
</span>
        </ListItem>
        <ListItem>
          <Meta>Events</Meta>
          <Link href="https://cdn.jwplayer.com/manifests/raSnFGs6.m3u8">
            Panel disussion on Childish Gambino`s revolutionary album, {"Awaken My Love!"}
           <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <iframe src="https://cdn.jwplayer.com/players/Ts5mrWep-TcKAhMMJ.html" borderRadius="full" height="lg" alt="Negus"></iframe>
      <iframe src="https://cdn.jwplayer.com/players/wvc5C6yF-TcKAhMMJ.html" width="full" height="lg" alt="Negus"></iframe>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
