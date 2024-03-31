import PageLink from "@/app/portfolio/components/PageLink";
import '@/app/styles/Pagination.css';
import { getPaginationItems } from "@/app/portfolio/lib/pagination";

export type Props = {
    currentPage: number;
    lastPage: number;
    maxLength: number;
    setCurrentPage: (page: number) => void;
};

export default function Pagination({
    currentPage,
    lastPage,
    maxLength,
    setCurrentPage
}: Props) {
    const pageNums = getPaginationItems(currentPage, lastPage, maxLength);

    return (
        <div className={"pagination"} aria-label={"Pagination"}>
            <PageLink
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
            >
                Previous
            </PageLink>
            {pageNums.map((pageNum, idx) => (
                <PageLink
                    key={idx}
                    active={currentPage === pageNum}
                    disabled={isNaN(pageNum)}
                    onClick={() => setCurrentPage(pageNum)}
                >
                    {!isNaN(pageNum) ? pageNum : '...'}
                </PageLink>
            ))}
            <PageLink
                disabled={currentPage === lastPage}
                onClick={() => setCurrentPage(currentPage + 1)}
            >
                Next
            </PageLink>
        </div>
    );
}