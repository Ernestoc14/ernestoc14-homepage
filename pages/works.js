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
                        <WorkGridItem id="SnapiSaaS" title="Snapi SaaS Full Stack App" thumbnail={thumbInkdrop}>
                            {/* Link: https://react-vitejs-ga17bwxar-ernestoc14.vercel.app */}
                            Create a SaaS with Nextjs, TS, Clerk, Stripe API, MongoDB, Cloudinary API.
                        </WorkGridItem>
                    </Section>
                    <Divider/>
                    <Section>
                        <WorkGridItem id="MotocrossAWS" title="Motocross Website" thumbnail={thumbWalknote}>
                            {/* Link: https://react-vitejs-ga17bwxar-ernestoc14.vercel.app */}
                            This Website was build with Nextjs, TS, AWS DynamoDB, AWS Lambda Funtions.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="CarRental" title="Car Rental Website" thumbnail={thumbInkdrop}>
                            {/* Link: https://react-vitejs-ga17bwxar-ernestoc14.vercel.app */}
                            Build a Car Rental Website using Third Party API, Nextjs, TS and Tailwind CSS.
                        </WorkGridItem>
                    </Section>
                    <Divider/>
                    <Section>
                        <WorkGridItem id="ReactNativeJobs" title="React Native Jobs" thumbnail={thumbWalknote}>
                            {/* Link: https://react-vitejs-ga17bwxar-ernestoc14.vercel.app */}
                            This is my First Fullstack App builded using MERN.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works