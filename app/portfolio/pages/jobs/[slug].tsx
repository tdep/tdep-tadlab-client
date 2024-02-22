import { useRouter } from "next/router";
import ErrorPage from "next/error"
import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import Container from "@/app/portfolio/components/container";
import JobBody from "@/app/portfolio/components/job-body";
import MoreJobs from "@/app/portfolio/components/more-jobs";
import Header from "@/app/portfolio/components/header";
import JobHeader from "@/app/portfolio/components/job-header";
import SectionSeparator from "@/app/portfolio/components/section-separator";
import Layout from "@/app/portfolio/components/layout";
import JobTitle from "@/app/portfolio/components/job-title";
import {getAllJobs} from "@/app/portfolio/lib/api";

export default function Job({ job, jobs, preview }) {
    const router = useRouter();
    const moreJobs = jobs?.edges;

    if (!router.isFallback && !job?.slug) {
        return <ErrorPage statusCode={404} />;
    }

    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <JobTitle>Loading...</JobTitle>
                ) : (
                    <>
                        <article>
                            <Head>
                                <title>
                                    {`${job.name}`}
                                </title>
                            </Head>
                            <JobHeader name={job.name}/>
                            <JobBody content={job.content} />
                            <footer>ISAFOOTER</footer>
                        </article>

                        <SectionSeparator />
                        {moreJobs.length > 0 && <MoreJobs jobs={moreJobs} />}
                    </>
                )}
            </Container>
        </Layout>
    );
}

export const getStaticProps: GetStaticProps = async ({
    params,
    preview = false,
    previewData,
}) => {
    const data = await getAllJobs();

    return {
        props: {
            preview,
            job: data.job,
            jobs: data.jobs,
        },
        revalidate: 10
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const allJobs = await getAllJobs();

    return {
        paths: allJobs.edges.map(({ node }) => `/jobs/${node.slug}`) || [],
        fallback: true,
    };
};