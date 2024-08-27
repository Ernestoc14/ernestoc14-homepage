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
          Snapi is a SaaS that allows users to create a REST API from a SQL
          database. It is built with Node.js, Express, and PostgreSQL.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Snapi SaaS</Meta>
            <Link href="https://www.google.com/">
              https;//www.google.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows MacOS iOS </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js, Express, PostgreSQL</span>
          </ListItem>
        </List>
        <WorkImage src="/images/ernesto2.jpeg" alt="Snapi" />
      </Container>
    </Layout>
  )
}

export default Work
