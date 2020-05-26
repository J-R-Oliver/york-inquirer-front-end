import axios from 'axios';

const hostname = 'https://the-york-inquirer.herokuapp.com';

const getArticles = () => {
  return axios
    .get(`${hostname}/api/articles`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export default getArticles;
