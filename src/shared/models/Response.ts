export class Response {
  statusCode?: number;
  isError: boolean = false;
  message: string = '';
  data?: any;
}
