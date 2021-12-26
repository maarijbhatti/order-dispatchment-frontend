export interface UseState<Data = any, Other = any> {
  fetching?: boolean;
  data?: Data;
  error?: any;
  other?: Other;
}

export declare type HooksResponse<Data = any, Other = any> = [
  UseState<Data, Other>,
  (variable?: any) => Promise<Data> | void
];
