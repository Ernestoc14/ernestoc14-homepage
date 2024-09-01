import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Snapi SaaS">
      <Container>
        <Title>
          Snapi SaaS <Badge>2021</Badge>
        </Title>
        <P>
          Snapi is a SaaS that allows users to transform their images with AI features powered by Cloudinary. 
          Snapi provides intuitive tools that make image editing simple and efficient. Perfect for creatives and 
          businesses alike, Snapi delivers professional-grade results in just a few clicks.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Snapi SaaS</Meta>
            <Link href="https://snapi-phi.vercel.app">
              Visit Snapi <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows MacOS </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nextjs, TypeScript, MongoDB, Stripe, Clerk Auth.</span>
          </ListItem>
        </List>
        <WorkImage src="/images/ernesto2.jpeg" alt="snapi" />
      </Container>
    </Layout>
  )
}

export default Work
