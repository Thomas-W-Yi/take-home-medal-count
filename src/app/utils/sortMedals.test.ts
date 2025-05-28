import { SortMedals, SortType } from './sortMedals';

describe('SortMedals', () => {
  const mockData = [
    { country: 'USA', gold: 12, silver: 5, bronze: 3 },
    { country: 'CHN', gold: 10, silver: 7, bronze: 5 },
    { country: 'DEU', gold: 8, silver: 3, bronze: 6 },
    { country: 'RUS', gold: 6, silver: 8, bronze: 4 },
    { country: 'JPN', gold: 4, silver: 5, bronze: 5 },
    { country: 'AUS', gold: 2, silver: 8, bronze: 4 },
  ];

  it('should sort by gold medals in descending order by default', () => {
    const sortedData = SortMedals(mockData, undefined);
    expect(sortedData[0].country).toBe('USA');
    expect(sortedData[1].country).toBe('CHN');
    expect(sortedData[2].country).toBe('DEU');
    expect(sortedData[3].country).toBe('RUS');
    expect(sortedData[4].country).toBe('JPN');
    expect(sortedData[5].country).toBe('AUS');
  });

  it('should sort by gold medals in descending order', () => {
    const sortedData = SortMedals(mockData, 'gold');
    expect(sortedData[0].country).toBe('USA');
    expect(sortedData[1].country).toBe('CHN');
    expect(sortedData[2].country).toBe('DEU');
    expect(sortedData[3].country).toBe('RUS');
    expect(sortedData[4].country).toBe('JPN');
    expect(sortedData[5].country).toBe('AUS');
  });

  it('should sort by silver medals in descending order, with gold as tie-breaker', () => {
    const sortedData = SortMedals(mockData, 'silver');
    expect(sortedData[0].country).toBe('RUS');
    expect(sortedData[1].country).toBe('AUS');
    expect(sortedData[2].country).toBe('CHN');
    expect(sortedData[3].country).toBe('USA');
    expect(sortedData[4].country).toBe('JPN');
    expect(sortedData[5].country).toBe('DEU');
  });

  it('should sort by bronze medals in descending order, with gold as tie-breaker', () => {
    const sortedData = SortMedals(mockData, 'bronze');
    expect(sortedData[0].country).toBe('DEU');
    expect(sortedData[1].country).toBe('CHN');
    expect(sortedData[2].country).toBe('JPN');
    expect(sortedData[3].country).toBe('RUS');
    expect(sortedData[4].country).toBe('AUS');
    expect(sortedData[5].country).toBe('USA');
  });

  it('should sort by total medals in descending order, with gold as tie-breaker', () => {
    const sortedData = SortMedals(mockData, 'total');
    expect(sortedData[0].country).toBe('CHN');
    expect(sortedData[1].country).toBe('USA');
    expect(sortedData[2].country).toBe('RUS');
    expect(sortedData[3].country).toBe('DEU');
    expect(sortedData[4].country).toBe('JPN');
    expect(sortedData[5].country).toBe('AUS');
  });

  it('should handle an empty array gracefully', () => {
    const sortedData = SortMedals([], 'gold');
    expect(sortedData).toEqual([]);
  });

  it('should return a new array, not mutate the original', () => {
    const originalData = [...mockData];
    const sortedData = SortMedals(originalData, 'gold');
    expect(sortedData).not.toBe(originalData);
    expect(originalData).toEqual(mockData);
  });

  it('should default to gold sort if an invalid sort type is provided', () => {
    const sortedData = SortMedals(mockData, 'invalidSortType' as SortType);
    const goldSortedData = SortMedals(mockData, 'gold');
    expect(sortedData).toEqual(goldSortedData);
  });
});
