import { Container, Badge, Link, List, ListItem, AspectRatio} from '@chakra-ui/react'
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
          <Link href="https://cdn.jwplayer.com/videos/6jA04nfn-U1u6Qq09.mp4">
            Intro <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Goal</Meta>
          <span>Celebration of our people, by our people; The Unification of Us
</span>
        </ListItem>
        <ListItem>
          <Meta>Events</Meta>
          <Link href="https://cdn.jwplayer.com/videos/raSnFGs6-U1u6Qq09.mp4">
            Panel disussion on Childish Gambino&apos;s revolutionary album, {"Awaken My Love!"}
           <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <AspectRatio maxW="100%" ratio={2}>
        <iframe
          src="https://cdn.jwplayer.com/players/Ts5mrWep-TcKAhMMJ.html"
          title="Negus Intro"
          allowFullScreen
        />
      </AspectRatio>
      <AspectRatio maxW="100%" ratio={2}>
        <iframe
          src="https://cdn.jwplayer.com/players/wvc5C6yF-TcKAhMMJ.html"
          title="Negus Intro"
          allowFullScreen
        />
      </AspectRatio>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
