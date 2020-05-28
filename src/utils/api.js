import axios from 'axios';

const hostname = 'https://the-york-inquirer.herokuapp.com';

export const getArticles = (sort_by, topic) => {
  return axios
    .get(`${hostname}/api/articles`, { params: { sort_by, topic } })
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

export const patchVotes = (path, objectId, increment) => {
  return axios.patch(`${hostname}/api/${path}/${objectId}`, {
    inc_votes: increment
  });
};

export const postComment = (article_id, username, body) => {
  return axios
    .post(`${hostname}/api/articles/${article_id}/comments`, {
      username,
      body
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = comment_id => {
  return axios.del(`${hostname}/api/comments/${comment_id}`);
};
