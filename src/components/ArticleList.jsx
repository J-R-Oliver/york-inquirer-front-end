import React, { Component } from 'react';
import getArticles from '../utils/api';
import Loading from './Loading';
import ArticleCard from './ArticleCard';

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles() {
    getArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { articles, isLoading } = this.state;

    if (isLoading) return <Loading />;

    return (
      <main>
        {articles.map(({ article_id, ...article }) => {
          return <ArticleCard key={article_id} {...article} />;
        })}
      </main>
    );
  }
}

export default ArticleList;
