export interface IPaginationMeta {
    totalData?: number;
    totalPage?: number;
    page: string;
    prevLink: string | null;
    nextLink: string | null;
  }
  
  interface IBasicResponse {
    msg: string;
    data: unknown[];
    err?: string;
    meta?: IPaginationMeta;
  }
  
  export interface IAuthResponse extends IBasicResponse {
    data: { token: string }[];
  }
  