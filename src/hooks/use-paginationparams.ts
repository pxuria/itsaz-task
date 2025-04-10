import { DASHBOARD_DEFAULT_LIMIT } from "@/constants";

export const usePaginationParams = (searchParams, setSearchParams) => {
  const limit = parseInt(
    searchParams.get("limit") || `${DASHBOARD_DEFAULT_LIMIT}`,
    10
  );
  const skip = parseInt(searchParams.get("skip") || "0", 10);

  const validLimit =
    isNaN(limit) || limit < 1 ? DASHBOARD_DEFAULT_LIMIT : limit;
  const validSkip = isNaN(skip) || skip < 0 ? 0 : skip;
  const currentPage = Math.floor(validSkip / validLimit) + 1;

  const setDefaultsIfMissing = () => {
    const params = new URLSearchParams(searchParams);
    if (!searchParams.has("limit")) {
      params.set("limit", DASHBOARD_DEFAULT_LIMIT.toString());
    }

    if (!searchParams.has("skip")) params.set("skip", "0");
    setSearchParams(params);
  };

  const updateParams = (newParams: Record<string, string>) => {
    const params = new URLSearchParams(searchParams);
    Object.entries(newParams).forEach(([key, value]) => {
      params.set(key, value);
    });
    setSearchParams(params);
  };

  return {
    validLimit,
    validSkip,
    currentPage,
    searchParams,
    setDefaultsIfMissing,
    updateParams,
  };
};
