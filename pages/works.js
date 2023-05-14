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
                        <WorkGridItem id="Followers" title="Twitter Follow Card" thumbnail={thumbInkdrop}>
                            {/* Link: https://react-vitejs-ga17bwxar-ernestoc14.vercel.app */}
                            Made a Clone of Twitter Who Follows using React and Vite.js.
                        </WorkGridItem>
                    </Section>
                    <Divider/>
                    <Section>
                        <WorkGridItem id="MERN" title="MERN Stack App" thumbnail={thumbWalknote}>
                            This is my First Fullstack App builded using MERN.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works