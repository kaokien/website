import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbShell from '../public/images/contents/terminal.jpg'
import thumbMyDeskSetup from '../public/images/contents/symbolic link.jpg'
import thumb500PaidUsers from '../public/images/contents/gcc-main.jpg'
import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="What happens when you type ls*c"
            thumbnail={thumbShell}
            href="https://easy-bandicoot.super.site/aperiendum-est-igitur"
          />
          <GridItem
            title="Differences Between Hard link and Soft link"
            thumbnail={thumbMyDeskSetup}
            href="https://kadupoku.medium.com/differences-between-hard-link-and-soft-link-a7cf0a34e284"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Typing GCC main.c in the Terminal"
            thumbnail={thumb500PaidUsers}
            href="https://easy-bandicoot.super.site/essay-index/typing-gcc-mainc-in-the-terminal"
          />
          <GridItem
            title="The tools I used to improve my budget."
            thumbnail={thumbFinancialGoal}
            href="https://blog.inkdrop.app/i-stopped-setting-a-financial-goal-for-my-saas-a92c3db65506"
          />
        </SimpleGrid>
      </Section>

      <Section delay={0.5}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="How excerise provided me a framework for improving my productivity."
            thumbnail={thumbHowToPriceYourself}
            href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
          />
          <GridItem
            title="How I created my own rotational by switching roles."
            thumbnail={thumb50xFaster}
            href="https://www.youtube.com/watch?v=vj723NlrIQc"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
