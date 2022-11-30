import Tweet from './Tweet';

function Tweets(props) {
  const renderTweets = () => {
    return props.tweets.map((tweet) => {
      return <Tweet key={tweet.id} tweet={tweet} />;
    });
  };

  return <ul>{renderTweets()}</ul>;
}

export default Tweets;
