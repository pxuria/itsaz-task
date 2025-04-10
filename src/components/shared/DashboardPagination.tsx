import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Props {
  currentPage: number;
  totalPages: number;
  pathname: string;
  searchParams: string;
}

const DashboardPagination = ({
  currentPage,
  totalPages,
  pathname,
  searchParams,
}: Props) => {
  console.log(pathname);
  console.log(searchParams);
  const pagesArray = [...Array(totalPages)].map((_, i) => i + 1);

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <Pagination>
      <PaginationContent>
        {/* next page */}
        {currentPage !== totalPages && (
          <PaginationItem>
            <PaginationNext href={createPageUrl(currentPage + 1)} />
          </PaginationItem>
        )}

        {pagesArray.reverse().map((page) => {
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href={createPageUrl(page)}
                  isActive={page === currentPage}
                  className={`${
                    page === currentPage
                      ? "bg-primary text-white"
                      : "bg-primary hover:bg-primary text-black transition-all ease-in"
                  } flex_center rounded w-8 h-8`}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          }

          if (page === 2 && currentPage > 3) {
            return (
              <PaginationItem key="ellipsis-start">
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          if (page === totalPages - 1 && currentPage < totalPages - 2) {
            return (
              <PaginationItem key="ellipsis-end">
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          return null;
        })}

        {/* prev page */}
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious href={createPageUrl(currentPage - 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};

export default DashboardPagination;
