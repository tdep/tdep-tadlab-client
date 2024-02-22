import Head from "next/head";
import { GetStaticProps} from "next";
import Container from "../components/container";
import MoreJobs from "../components/more-jobs";
import FeatureJob from "../components/feature-job";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllJobs } from "../lib/api";

export default function Index({ allJobs: { edges }, preview}) {
    const featureJob = edges[0]?.node;
    const allJobs = edges.slice(1);

    return (
        <Layout preview={preview}>
            <Head>
                <title>"Trevor DePew"</title>
            </Head>
            <Container>
                <Intro />
                {featureJob && (
                    <FeatureJob
                        name={featureJob.name}
                        title={featureJob.title}
                        description={featureJob.description}
                        slug={featureJob.slug}
                    />
                )}
                {allJobs.length > 0 && <MoreJobs jobs={allJobs} />}
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
    const allJobs = await getAllJobs(preview);

    return {
        props: { allJobs, preview },
        revalidate: 10,
    };
};