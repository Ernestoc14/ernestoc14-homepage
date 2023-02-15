import { Container, Box, Heading , Image, useColorModeValue, Link, Button} from "@chakra-ui/react"
import NextLink from 'next/link'
import Section from "../components/section"
import Paragraph from '../components/paragraph'
import Layout from "../components/layouts/article"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { BioSection, BioYear } from "../components/bio"

const Page = () =>{
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} align= "center" mb={6}>
                    Hello, I'm a Developer from Panama 
                </Box>
                <Box display={{md: "flex"}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-tittle">
                            Ernesto Crespo
                        </Heading>
                        <p>Content Creator | Studend | Developer</p>
                    </Box>
                    <Box 
                    flexShrink={0} 
                    mt={{base: 4, md: 0}} 
                    ml={{md:6}} 
                    align="center">
                        <Image 
                            borderColor="whiteAlpha.800" 
                            borderWidth={2} borderStyle="solid" 
                            maxWidth="150px" display="inline-block" 
                            borderRadius="full" src="/images/ernesto4.jpeg" 
                            alt="Profile Image"
                        />
                    </Box>
                </Box>
                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Ernesto is a freelance developer based in Panama City 
                        with passion about building projects and learn new technologies 
                        to upgrade his stack. Currently learning React and the enviroment of it 
                        in the Frontend Scene, looking constantly for challenges to test his 
                        skills. His top project is called {''}
                        <Link href="/works/betatit">Betatit App</Link>
                        .
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                                My Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.5}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1998</BioYear>
                        Born in Panama City, Panama.
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Started studying Software Engineering at UTP (Panama) creating websites using Boostrap, HTML, CSS, hosting in Github.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Get interested in web development, I decided to study frameworks and start working on projects for small business in town.
                        Focused on React and JavaScript Stack, SQL Databases and a little bit of Backend side.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Works as a Freelance. (Present)
                    </BioSection>
                    <BioSection>
                        <BioYear>2024</BioYear>
                        Plan to finish Software Engineering at Technological University of Panama.
                    </BioSection>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page