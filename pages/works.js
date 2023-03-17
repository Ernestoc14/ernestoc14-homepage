import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";

// Importing the Images as a Thumbnail
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/works/walknote_eyecatch.png'
import Layout from "../components/layouts/article";

const Works = () => {
    return(
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid column={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="inkdrop" title="Twitter Follow Card" thumbnail={thumbInkdrop}>
                            {/* Link: https://react-vitejs-ga17bwxar-ernestoc14.vercel.app */}
                            Twitter Who&apo s Follow using React and Vite.js.
                        </WorkGridItem>
                    </Section>
                    <Divider/>
                    <Section>
                        <WorkGridItem id="walknote" title="Walknote" thumbnail={thumbWalknote}>
                            Descri 
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works