const searches = Array.from(getSearches());

export function addSearches(newSearch) {
  searches.push(newSearch);
  setSearches(searches);
}

export function getSearches() {
  return JSON.parse(localStorage.getItem("searches") || "[]");
}

export function setSearches(newSearches) {
  localStorage.setItem("searches", JSON.stringify(newSearches));
}

export function deleteSearch(i) {
  searches.splice(i, 1);
  setSearches(searches);
}
