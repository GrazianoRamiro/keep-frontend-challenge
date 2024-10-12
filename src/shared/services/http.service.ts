class HttpService {
  async get<T>(url: string): Promise<T> {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Error Get Request: ${response.statusText}`)
    }

    return response.json() as Promise<T>
  }

  async post<T>(url: string): Promise<T> {
    const response = await fetch(url, { method: "POST" })

    if (!response.ok) {
      throw new Error(`Error Get Request: ${response.statusText}`)
    }

    return response.json() as Promise<T>
  }
}

export const httpService = new HttpService()
