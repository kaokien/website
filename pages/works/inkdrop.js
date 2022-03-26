import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
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
          <Link href="https://vod-progressive.akamaized.net/exp=1648078995~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3871%2F7%2F194359096%2F650148730.mp4~hmac=ea30ab9903f1b56729a288ff092f09d152211cbd061f247e2f03043d73e8f88d/vimeo-prod-skyfire-std-us/01/3871/7/194359096/650148730.mp4">
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
            Panel disussion on Childish Gambino's revolutionary album, "Awaken My Love!"
           <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="https://cdn.jwplayer.com/videos/Ts5mrWep-U1u6Qq09.mp4" alt="Negus" />
      <WorkImage src="https://cdn.jwplayer.com/videos/wvc5C6yF-U1u6Qq09.mp4" alt="Negus" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
