import fetchMock from "jest-fetch-mock";

import { fetcher } from "./fetcher";

describe("Fetcher", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("should set the baseURL correctly", () => {
    fetcher.setBaseUrl("https://api.example.com");

    expect(fetcher["baseUrl"]).toBe("https://api.example.com");
  });

  it("should set default headers correctly", () => {
    fetcher.setDefaultHeaders({ Authorization: "Bearer test-token" });

    expect(fetcher["defaultHeaders"]).toEqual({
      Authorization: "Bearer test-token",
    });
  });

  it("should make a GET request with the correct headers and URL", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }));
    fetcher.setBaseUrl("https://api.example.com");
    fetcher.setDefaultHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer test-token",
    });

    const response = await fetcher.get("/test-endpoint");

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.example.com/test-endpoint",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer test-token",
          "Content-Type": "application/json",
        },
      }
    );
    const jsonData = JSON.parse(response.data);
    expect(jsonData).toEqual({ success: true });
  });

  it("should make a GET request with query parameters", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }));
    fetcher.setBaseUrl("https://api.example.com");
    fetcher.setDefaultHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer test-token",
    });

    const params = { key1: "value1", key2: "value2" };
    const response = await fetcher.get("/test-endpoint", {}, params);

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.example.com/test-endpoint?key1=value1&key2=value2",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer test-token",
          "Content-Type": "application/json",
        },
      }
    );
    const jsonData = JSON.parse(response.data);
    expect(jsonData).toEqual({ success: true });
  });

  it("should make a POST request with the correct headers and URL and body", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({ success: true }));
    fetcher.setBaseUrl("https://api.example.com");
    fetcher.setDefaultHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer test-token",
    });

    const response = await fetcher.post("/test-endpoint", { foo: "bar" });

    expect(fetchMock).toHaveBeenCalledWith(
      "https://api.example.com/test-endpoint",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer test-token",
        },
        body: JSON.stringify({ foo: "bar" }),
      }
    );
    const jsonData = JSON.parse(response.data);
    expect(jsonData).toEqual({ success: true });
  });

  it("should handle plain text responses", async () => {
    fetchMock.mockResponseOnce("plain text response", {
      headers: { "Content-Type": "text/plain" },
    });
    fetcher.setBaseUrl("https://api.example.com");

    const response = await fetcher.get("/test-endpoint");
    expect(response.data).toBe("plain text response");
  });

  it("should handle HTTP errors correctly", async () => {
    fetchMock.mockResponseOnce("Not Found", { status: 404 });
    fetcher.setBaseUrl("https://api.example.com");
    fetcher.setDefaultHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer test-token",
    });

    try {
      await fetcher.get("/test-endpoint");
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as any).response).toBeInstanceOf(Response);
      expect((error as any).response.status).toBe(404);
      expect((error as any).responseText).toBe("Not Found");
      expect((error as any).message).toBe("HTTP Error: 404 Not Found");
    }
  });
});
