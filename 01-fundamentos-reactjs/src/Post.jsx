import PropTypes from 'prop-types';

function Post(props) {
  return (
    <div>
        <h2>Author {props.author? props.author: "Nao tem author"}</h2>
    </div>
  )
}

Post.propTypes = {
  author: PropTypes.string
};

export default Post
