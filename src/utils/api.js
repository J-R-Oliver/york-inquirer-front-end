import axios from 'axios';

const hostname = 'https://the-york-inquirer.herokuapp.com';

export const getArticles = topic => {
  return axios
    .get(`${hostname}/api/articles`, { params: { topic } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticle = article_id => {
  return axios
    .get(`${hostname}/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getComments = article_id => {
  return axios
    .get(`${hostname}/api/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getTopics = () => {
  return axios.get(`${hostname}/api/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};
