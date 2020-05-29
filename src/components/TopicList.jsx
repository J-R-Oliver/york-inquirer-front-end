import React, { Component } from 'react';
import { getTopics } from '../utils/api';
import Loading from './Loading';
import RetryError from './RetryError';
import TopicCard from './TopicCard';

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true,
    err: ''
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false, err: '' });
      })
      .catch(({ message }) => {
        this.setState({ isLoading: false, err: message });
      });
  };

  render() {
    const { topics, isLoading, err } = this.state;
    const { fetchTopics } = this;

    if (isLoading) return <Loading />;
    if (err) return <RetryError err={err} retryFunction={fetchTopics} />;

    return (
      <main>
        {topics.map(({ slug, description }) => {
          return <TopicCard key={slug} slug={slug} description={description} />;
        })}
      </main>
    );
  }
}

export default TopicList;
