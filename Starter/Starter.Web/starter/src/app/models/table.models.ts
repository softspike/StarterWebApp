export class PageRequest {
    pageSize: number;
    totalRecords: number;
    totalPages: number;
    pageNumber: number;
    sortBy: string;
    sortDir: string;
    searchText: string;
    extraInformation: any;
    id: number;
    uniqueId: string;
    bool: boolean;
    bool2: boolean;
    ids: string;
    exportIds: string;
    date: Date;
    dateTo: Date;
    states: [];

    constructor() {
        this.pageNumber = 0;
        this.pageSize = 20;
        this.totalPages = 0;
        this.totalRecords = 1200;
        this.bool = false;
    }

    setPageSize(paginator: any) {
        this.pageNumber = paginator.pageIndex;
        this.pageSize = paginator.pageSize;
    }

    setSort(sort: any) {
        this.pageNumber = 0;
        this.sortBy = sort.active;
        this.sortDir = sort.direction;
    }
}

export class RequestParameters {
    constructor(key: string, value: any) {
        this.key = key;
        this.value = value;
    }
    key: string;
    value: any;
}

export class PageResponse<T> {
    pageSize: number;
    totalRecords: number;
    totalPages: number;
    pageNumber: number;
    columns: string[];
    data: T[];

    constructor() {
        this.pageSize = 20;
        this.totalPages = 0;
        this.totalRecords = 1200;
        this.data = [];
        this.columns = [];
    }
}

export class PageResponseWithIds<T> {
  pageResponse: PageResponse<T>;
  unPagedIds: number[];
  constructor() {
    this.pageResponse = new PageResponse<T>();
  }
}

export class TableRowSizes {
    footerHeight = 56;
    rowHeight = 48;
    headerHeight = 56;

    setSize(footerHeight: number, rowHeight: number, headerHeight: number) {
        this.footerHeight = footerHeight;
        this.rowHeight = rowHeight;
        this.headerHeight = headerHeight;
    }
}


