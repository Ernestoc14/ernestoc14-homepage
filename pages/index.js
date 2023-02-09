import { Container, Box, Heading , Image} from "@chakra-ui/react"

const Page = () =>{
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} align= "center" mb={6}>
                Hello, Im a Developer from Panama 
            </Box>
            <Box display={{md: "flex"}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-tittle">
                        Ernesto Crespo
                    </Heading>
                    <p>Digital Content Creator | Studend | Developer</p>
                </Box>
                <Box 
                flexShrink={0} 
                mt={{base: 4, md: 0}} 
                ml={{md:6}} 
                align="center">
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2} borderStyle="solid" 
                        maxWidth="100px" display="inline-block" 
                        borderRadius="full" src="/images/ernesto4.jpeg" 
                        alt="Profile Image"
                    />
                </Box>
            </Box>
        </Container>
    )
}

export default Page