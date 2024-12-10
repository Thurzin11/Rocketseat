import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div>
        <h2>Author: {props.author? props.author: "No author"}</h2>
        <p>{props.content? props.content: "No content"}</p>
    </div>
  )
}

Post.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string
};

export default Post
