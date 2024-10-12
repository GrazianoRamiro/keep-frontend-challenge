class HttpService {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url)

    return this.handleResponse<T>(response)
  }

  async post<T>(url: string, data: T): Promise<T> {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    return this.handleResponse<T>(response)
  }

  async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const error = await response.json()
      const errorInstance = new Error(
        `[HTTP error] Status: ${response.status}, Message: ${error.message || "Unknown error"}`
      )

      // TODO: log error for monitoring

      throw errorInstance
    }

    return response.json() as Promise<T>
  }
}

export const httpService = new HttpService()
