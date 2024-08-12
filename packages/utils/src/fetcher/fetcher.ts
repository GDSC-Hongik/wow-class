type ApiResponse = Response & { data?: any };

type RequestInterceptor = (
  options: RequestInit
) => RequestInit | Promise<RequestInit>;
type ResponseInterceptor = (
  response: ApiResponse
) => ApiResponse | Promise<ApiResponse>;

class Fetcher {
  private baseUrl: string;
  private defaultHeaders: HeadersInit;
  private requestInterceptors: RequestInterceptor[];
  private responseInterceptors: ResponseInterceptor[];

  constructor({ baseUrl = "", defaultHeaders = {} } = {}) {
    this.baseUrl = baseUrl;
    this.defaultHeaders = defaultHeaders;
    this.requestInterceptors = [];
    this.responseInterceptors = [];
  }

  setBaseUrl(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  setDefaultHeaders(headers: HeadersInit) {
    this.defaultHeaders = headers;
  }

  addRequestInterceptor(interceptor: RequestInterceptor) {
    this.requestInterceptors.push(interceptor);
  }

  addResponseInterceptor(interceptor: ResponseInterceptor) {
    this.responseInterceptors.push(interceptor);
  }

  private async interceptRequest(options: RequestInit): Promise<RequestInit> {
    options.headers = { ...this.defaultHeaders, ...options.headers };

    for (const interceptor of this.requestInterceptors) {
      options = (await interceptor(options)) || options;
    }

    return options;
  }

  private async interceptResponse(response: Response): Promise<Response> {
    for (const interceptor of this.responseInterceptors) {
      response = (await interceptor(response)) || response;
    }

    return response;
  }

  private async parseJsonResponse(response: Response): Promise<any> {
    const contentType = response.headers.get("Content-Type") || "";

    if (contentType.includes("application/json")) {
      return response.json();
    }

    return response.text();
  }

  async request(url: string, options: RequestInit = {}): Promise<any> {
    options = await this.interceptRequest(options);

    const fullUrl = this.baseUrl + url;

    let response: ApiResponse = await fetch(fullUrl, options);
    response = await this.interceptResponse(response);
    response.data = await this.parseJsonResponse(response);

    return response;
  }

  get(url: string, options: RequestInit = {}): Promise<ApiResponse> {
    return this.request(url, { ...options, method: "GET" });
  }

  post(
    url: string,
    body: any,
    options: RequestInit = {}
  ): Promise<ApiResponse> {
    return this.request(url, {
      ...options,
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  put(url: string, body: any, options: RequestInit = {}): Promise<ApiResponse> {
    return this.request(url, {
      ...options,
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  patch(
    url: string,
    body: any,
    options: RequestInit = {}
  ): Promise<ApiResponse> {
    return this.request(url, {
      ...options,
      method: "PATCH",
      body: JSON.stringify(body),
    });
  }

  delete(url: string, options: RequestInit = {}): Promise<ApiResponse> {
    return this.request(url, { ...options, method: "DELETE" });
  }
}

export const fetcher = new Fetcher({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  defaultHeaders: { "Content-Type": "application/json" },
});
