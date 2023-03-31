//import FuzzySet from "fuzzyset";

export function FuzzySearch(dataSet: string[], searchValue: string) {
  if (!dataSet) return;
  if (!searchValue) return dataSet;

  const lowerCaseSearchValue = searchValue.toLowerCase().trim();

  const searchResult = dataSet.filter((item) => {
    if (item.toLowerCase().includes(lowerCaseSearchValue)) return item;
  });

  return searchResult;

  // const fuzzySet = FuzzySet();
  // for (const item of dataSet) {
  //   fuzzySet.add(item);
  // }
  // console.log(fuzzySet)
  // const searchResult = fuzzySet.get(searchValue, false, 3);
  // console.log(searchResult)

  // if (!searchResult) return [];

  // const thresholdResult = searchResult.filter((item) => item[0] > 0.03);
  // if (thresholdResult.length === 0) return [];

  // return thresholdResult?.map((item) => item[1]);
}
