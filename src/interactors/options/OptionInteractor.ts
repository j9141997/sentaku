class OptionInteractor {
  readonly baseURL: string

  constructor() {
    this.baseURL = process.env.API_BASE_ENDPOINT
  }

  post = async (params: any): Promise<any | null> => {
    const res = await fetch(`${this.baseURL}/options`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
    try {
      console.log(res)
      return res
    } catch (e) {
      console.error(e)
      return e
    }
  }
}

export default OptionInteractor
