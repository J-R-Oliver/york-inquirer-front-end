import React, { Component } from 'react';
import { getArticles } from '../utils/api';
import Loading from './Loading';
import Sort from './Sort';
import ArticleCard from './ArticleCard';

class ArticleList extends Component {
  state = {
    articles: [],
    sort: 'created_at',
    isLoading: true
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

    getArticles(sort, topic_slug).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  updateSort = sort => {
    this.setState({ sort });
  };

  render() {
    const { articles, isLoading } = this.state;
    const { updateSort } = this;

    if (isLoading) return <Loading />;

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
