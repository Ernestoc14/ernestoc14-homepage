import { Badge, List, ListItem, Link, Container } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Motocross = () => {
  return (
    <Layout title="motocross-aws">
      <Container>
        <Title>
          Motocross Website w/AWS
          <Badge>2024</Badge>
        </Title>
        <P>
          Nextjs App for a final term project with AWS integration, including
          AWS API Gateway, AWS Lambda Functions and AWS DynamoDB.
        </P>
        <List>
          <ListItem>
            <Meta>Motocross AWS</Meta>
            <Link href="https://www.google.com">
              Motocross Demo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows MacOS iOS Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Nextjs, AWS Lambda Functions, AWS DynamoDB</span>
          </ListItem>
        </List>
        <WorkImage src="/images/ernesto4.jpeg" alt='motocross-aws' />
      </Container>
    </Layout>
  )
}

export default Motocross
