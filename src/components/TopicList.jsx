import React, { Component } from 'react';
import { getTopics } from '../utils/api';
import Loading from './Loading';
import TopicCard from './TopicCard';

class TopicList extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    getTopics().then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };

  render() {
    const { topics, isLoading } = this.state;

    if (isLoading) return <Loading />;

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
