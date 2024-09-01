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
                        <WorkGridItem id="snapi-saas" title="Snapi SaaS Full Stack App" thumbnail={thumbInkdrop}>
                            Desc
                        </WorkGridItem>
                    </Section>
                    <Divider/>
                    <Section>
                        <WorkGridItem id="motocross-aws" title="Motocross Website" thumbnail={thumbWalknote}>
                            Desc
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="car-rental" title="Car Rental Website" thumbnail={thumbInkdrop}>
                            Desc
                        </WorkGridItem>
                    </Section>
                    <Divider/>
                    <Section>
                        <WorkGridItem id="react-native-jobs" title="React Native Jobs" thumbnail={thumbWalknote}>
                            Desc
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works