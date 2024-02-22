import Container from "@/app/portfolio/components/container";

export default function Alert({ preview }) {
    return (
        <div>
            <Container>
                <div className={"py-2 text-center text-sm"}>
                    {preview ? (
                        <>
                            This is a page preview.{" "}
                            <a
                                href={"/api/exit-preview"}
                                className={"underline hover:text-cyan duration-200 transition-colors"}
                            >
                                Click here
                            </a>{" "}
                        </>
                    ): (
                        <>
                            The source code for this is{" "}
                            <a
                                href={""}
                                className={"underline hover:text-success duration-200 transition-colors"}
                            >
                                words
                            </a>
                            .
                        </>
                    )}
                </div>
            </Container>
        </div>
    );
}