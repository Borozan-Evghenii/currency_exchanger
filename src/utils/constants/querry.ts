
interface QueryConstants {
  [key: string]: string
}
export const QueryConstants: QueryConstants ={
  baseUrl : import.meta.env.VITE_BASE_URL,
  apiKey : import.meta.env.VITE_API_KEY
}