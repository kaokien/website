import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I'm a full-stack developer based in New Haven!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kevin Adu-Poku
          </Heading>
          <p>Digital Denizen ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow='hidden'
          >
            <ProfileImage
              src="/images/kevin.jpeg"
              alt="Profile image"
              borderRadius='full'
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          I am a full-stack developer and support engineer based in New Haven with a
          passion for building digitals services and continuously self-learning. I have a knack
          for all things launching products, from planning and designing all the
          way to solving real-life problems with code. When not online, I love
          working out and reading-self development books. Currently, I am an employee of JW Player
          supporting their JavaScript webplayer and iOS and Android SDKs.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Toronto, Canada.
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Worked at Apple
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked at Yale University
        </BioSection>
        <BioSection>
          <BioYear>2022 to present</BioYear>
          Works at JW Player
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
        Fitness, Music ,{' '}
          <Link href="https://media-exp1.licdn.com/dms/image/C4E2DAQF77sYybaW-tg/profile-treasury-image-shrink_8192_8192/0/1645488173040?e=1648058400&v=beta&t=4_-cm3hINFtFDptECOrlUei74mHyldmPHbJiWkwGSJw" target="_blank">
            Art
          </Link>
          , Hiking,{' '}
          <Link href="https://www.goodreads.com/review/list/144125511?ref=nav_mybooks" target="_blank">
            Reading {' '}
          </Link>
          and Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/kaokien" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @kaokien
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/adupokukevin/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @adupokukevin
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/kevinadupoku/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @kevinadupoku
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/kevinadupoku" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @kevinadupoku
              </Button>
            </Link>
          </ListItem>
          
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.linkedin.com/in/kevinadupoku/"
            title="Resume"
            thumbnail={thumbInkdrop}
          >
            My most up-to-date resume
          </GridItem>
          <GridItem
            href="https://www.linkedin.com/in/kevinadupoku/" 
            title="Project Negus"
            thumbnail={thumbYouTube}
          >
            Art Collective
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts" scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
