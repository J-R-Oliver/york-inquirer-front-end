import axios from 'axios';

const hostname = 'https://the-york-inquirer.herokuapp.com';

export const getArticles = topic => {
  return axios
    .get(`${hostname}/api/articles`, { params: { topic } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getTopics = () => {
  return axios.get(`${hostname}/api/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};
