export function filterData(searchText, resturentlist) {
  let filteredData = resturentlist.filter((rest) =>
    rest?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filteredData;
}
