import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://the-york-inquirer.herokuapp.com'
});

export const getArticles = (sort_by, topic) => {
  return instance
    .get(`/api/articles`, { params: { sort_by, topic } })
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const getArticle = article_id => {
  return instance
    .get(`/api/articles/${article_id}`)
    .then(({ data: { article } }) => {
      return article;
    });
};

export const getComments = article_id => {
  return instance
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const getTopics = () => {
  return instance.get(`/api/topics`).then(({ data: { topics } }) => {
    return topics;
  });
};

export const patchVotes = (path, objectId, increment) => {
  return instance.patch(`/api/${path}/${objectId}`, {
    inc_votes: increment
  });
};

export const postComment = (article_id, username, body) => {
  return instance
    .post(`/api/articles/${article_id}/comments`, {
      username,
      body
    })
    .then(({ data: { comment } }) => {
      return comment;
    });
};

export const deleteComment = comment_id => {
  return instance.delete(`/api/comments/${comment_id}`);
};
