export type SortType = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};

export type PageableType = {
  page: number;
  size: number;
  sort?: [];
};

export type PageableObject = {
  pageable: {
    offset: number;
    sort: SortType;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
    paged: boolean;
  };
};
