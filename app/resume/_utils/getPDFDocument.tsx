import type { PDFDocumentProxy} from "pdfjs-dist";

const getPDFDocument = async (path: string) => {
    const pdfjs = await import('pdfjs-dist')

    pdfjs.GlobalWorkerOptions.workerSrc = window.location.origin + "/pdf.worker.min.mjs";

    return new Promise((resolve, reject) => {
        pdfjs
            .getDocument(path)
            .promise.then((document: any) => {
                resolve(document);
        })
            .catch(reject);
    });
};

export default getPDFDocument;