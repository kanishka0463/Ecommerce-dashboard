const API_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";

const apiFetch = async (endpoint, options = {}) => {
  const url = `${API_URL}${endpoint}`;

  const config = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  };

  try {
    const response = await fetch(url, config);

    const contentType = response.headers.get("content-type");

    const data = contentType?.includes("application/json")
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      throw new Error(
        data?.message || `Request failed with status ${response.status}`
      );
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export const get = (endpoint, options = {}) =>
  apiFetch(endpoint, {
    ...options,
    method: "GET",
  });

export const post = (endpoint, data, options = {}) =>
  apiFetch(endpoint, {
    ...options,
    method: "POST",
    body: JSON.stringify(data),
  });

export const put = (endpoint, data, options = {}) =>
  apiFetch(endpoint, {
    ...options,
    method: "PUT",
    body: JSON.stringify(data),
  });

export const patch = (endpoint, data, options = {}) =>
  apiFetch(endpoint, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(data),
  });

export const del = (endpoint, options = {}) =>
  apiFetch(endpoint, {
    ...options,
    method: "DELETE",
  });

export default apiFetch;