import { Container, Box, Heading } from "@chakra-ui/react"

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
            </Box>
        </Container>
    )
}

export default Page