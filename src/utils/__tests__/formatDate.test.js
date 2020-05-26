const formatDate = require('../formatDate');

describe('formatDate', () => {
  it('should return a string', () => {
    expect(typeof formatDate('2018-05-30T15:59:13.341Z')).toBe('string');
  });

  it('should return year shortened to two digits at the end of the string', () => {
    expect(formatDate('2018-05-30T15:59:13.341Z')).toMatch(
      /[A-Za-z\d ]+ \d{2}$/
    );
    expect(formatDate('2018-05-30T15:59:13.341Z').slice(-2)).toBe('18');
  });

  it('should return month shortened to three letter acronym in the middle of the string', () => {
    expect(formatDate('2018-05-30T15:59:13.341Z')).toMatch(
      /^[A-Za-z\d ]{3,4} [A-Za-z]{3} \d{2}$/
    );

    expect(formatDate('2018-05-30T15:59:13.341Z').slice(5, 8)).toBe('May');
  });

  it('should return day at the beginning of the string', () => {
    expect(formatDate('2018-05-30T15:59:13.341Z')).toMatch(
      /^\d{1,2}[a-z]{2} [A-Za-z]{3} \d{2}$/
    );
    expect(formatDate('2018-05-30T15:59:13.341Z').slice(0, 2)).toBe('30');
  });

  it('should return day with ordinal suffix', () => {
    expect(formatDate('2018-05-30T15:59:13.341Z')).toMatch(
      /^\d{1,2}(st|nd|rd|th) [A-Za-z]{3} \d{2}$/
    );
    expect(formatDate('2018-05-30T15:59:13.341Z').slice(2, 4)).toBe('th');
    expect(formatDate('2018-05-03T15:59:13.341Z').slice(1, 3)).toBe('rd');
  });

  it('should return day with leading zero removed', () => {
    expect(formatDate('2017-11-05T07:22:43.519Z')).toMatch(
      /^[1-9]\d{0,1}(st|nd|rd|th) [A-Za-z]{3} \d{2}$/
    );
    expect(formatDate('2017-11-05T07:22:43.519Z').slice(0, 1)).toBe('5');
  });
});
