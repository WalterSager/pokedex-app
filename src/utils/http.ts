const BASE_URL = "https://pokeapi.co/api/v2";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Accept": "application/json" },
    ...init,
  });

  if (!res.ok) {
    // Intento de leer mensaje de la API
    let msg = `HTTP ${res.status}`;
    try {
      const body = await res.json();
      if (body?.message) msg = body.message;
    } catch { /* ignore json parse */ }
    throw new Error(msg);
  }
  return res.json() as Promise<T>;
}

export const http = {
  get: request,
};
