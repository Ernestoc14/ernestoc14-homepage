import { Badge, List, ListItem, Link, Container } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Motocross AWS">
      <Container>
        <Title>
          Motocross Website w/AWS <Badge>2024</Badge>
        </Title>
        <P>
        This motorcycle website offers a seamless experience for enthusiasts looking to reserve or purchase 
        their next ride. Developed as a final project for Distributed Applications subject, 
        the platform leverages AWS to ensure a robust and scalable environment. 
        </P>
        <List>
          <ListItem>
            <Meta>Motocross AWS</Meta>
            <Link href="https://motocross-aws.vercel.app">
              Motocross Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows MacOS </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nextjs, AWS Lambda Functions, AWS API Gateway, AWS DynamoDB.</span>
          </ListItem>
        </List>
        <WorkImage src="/images/ernesto4.jpeg" alt='motocross-aws' />
      </Container>
    </Layout>
  )
}

export default Work
