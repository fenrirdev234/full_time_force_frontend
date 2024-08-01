export const responseOption = (data, method) => {
  return {
    headers: data === undefined ? {} : { "Content-Type": "application/json" },
    body: JSON.stringify(data === undefined ? {} : data),
    method: method,
  };
};

/* headers: data === undefined ? {} : { "Content-Type": "application/json" },
      body: JSON.stringify(data === undefined ? {} : data),
      method: method, */
