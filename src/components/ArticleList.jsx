import React, { Component } from 'react';
import { getArticles } from '../utils/api';
import Loading from './Loading';
import CustomError from './CustomError';
import RetryError from './RetryError';
import Sort from './Sort';
import ArticleCard from './ArticleCard';

class ArticleList extends Component {
  state = {
    articles: [],
    sort: 'created_at',
    isLoading: true,
    err: ''
  };

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, { sort: prevSort }) {
    const { sort: currentSort } = this.state;

    if (prevSort !== currentSort) {
      this.fetchArticles();
    }
  }

  fetchArticles = () => {
    const { sort } = this.state;
    const { topic_slug } = this.props;

    getArticles(sort, topic_slug)
      .then(articles => {
        this.setState({ articles, isLoading: false, err: '' });
      })
      .catch(({ message }) => {
        this.setState({ isLoading: false, err: message });
      });
  };

  updateSort = sort => {
    this.setState({ sort });
  };

  render() {
    const { articles, isLoading, err } = this.state;
    const { fetchArticles, updateSort } = this;

    if (isLoading) return <Loading />;
    if (err !== 'Network Error' && err !== '') {
      return <CustomError err={err} />;
    }
    if (err) {
      return <RetryError err={err} retryFunction={fetchArticles} />;
    }

    return (
      <main>
        <Sort updateSort={updateSort} />
        {articles.map(({ article_id, ...article }) => {
          return (
            <ArticleCard
              key={article_id}
              article_id={article_id}
              {...article}
            />
          );
        })}
      </main>
    );
  }
}

export default ArticleList;
