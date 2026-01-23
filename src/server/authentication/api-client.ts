const BASE_URL = 'http://localhost:8000/_allauth/browser/v1'

interface FetchOptions extends RequestInit {
  sessionToken?: string
}

interface CookieData {
  csrfToken: string
  sessionCookie: string
}

async function getCookiesAndToken(url: string): Promise<CookieData> {
  const response = await fetch(url, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
    },
  })

  const setCookieHeaders = response.headers.getSetCookie()
  let csrfToken = ''
  let sessionCookie = ''

  for (const cookie of setCookieHeaders) {
    if (cookie.startsWith('csrftoken=')) {
      csrfToken = cookie.split(';')[0].split('=')[1]
    }
    sessionCookie += cookie.split(';')[0] + '; '
  }

  return { csrfToken, sessionCookie }
}

export async function apiRequest<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { sessionToken, ...fetchOptions } = options

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }

  if (fetchOptions.headers) {
    Object.assign(headers, fetchOptions.headers)
  }

  if (sessionToken) {
    headers['X-Session-Token'] = sessionToken
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
    credentials: 'include',
  })

  const contentType = response.headers.get('content-type')
  if (!contentType || !contentType.includes('application/json')) {
    const text = await response.text()
    throw new Error(`Non-JSON response: ${text.substring(0, 200)}`)
  }

  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.errors?.[0]?.message || 'Request failed')
  }

  return data
}

export async function authenticatedRequest<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const configUrl = `${BASE_URL}/config`
  const { csrfToken, sessionCookie } = await getCookiesAndToken(configUrl)

  return apiRequest<T>(endpoint, {
    ...options,
    headers: {
      ...options.headers,
      'X-CSRFToken': csrfToken,
      'Cookie': sessionCookie,
    },
  })
}
