const formatDate = date => {
  return new Date(date)
    .toDateString()
    .replace(
      /[A-Za-z]{3,4} ([A-Za-z]{3}) (\d{2}) \d{2}(\d{2})/,
      (match, month, day, year) => {
        const dayMinusZero = day.replace(/^0+/, '');

        let ordinal = 'th';
        const remainderTen = day % 10;

        if (remainderTen === 1 && day !== 11) ordinal = 'st';
        if (remainderTen === 2 && day !== 12) ordinal = 'nd';
        if (remainderTen === 3 && day !== 13) ordinal = 'rd';

        return `${dayMinusZero + ordinal} ${month} ${year}`;
      }
    );
};

module.exports = formatDate;
