const queryParamsConstructor = (queryParams) => {
  if (!queryParams || Object.keys(queryParams).length < 1) {
    return;
  }

  const escape = encodeURIComponent;
  const createQueryParams = Object.keys(queryParams)
    .filter((value) => queryParams[value] !== 'undefined')
    .map(
      (value, index) =>
        `${index === 0 && '?'}${escape(value)}=${escape(queryParams[value])}`
    )
    .join('&');

  return createQueryParams;
};
