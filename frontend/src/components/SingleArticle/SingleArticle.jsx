import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './SingleArticle.css';

const SingleArticle = () => {
  const { id } = useParams();
  const singleArticle = useSelector(
    state => state.articleState.entries.find(article => article.id === Number(id))
  )
  
  // Conditional rendering based on whether an article is found
  if (!singleArticle) {
    return <h2>Article not found.</h2>; // Fallback if no article is found
  }

  return (
    <div className='singleArticle'>
      <h1>{singleArticle?.title}</h1>
      <img
        src={singleArticle?.imageUrl}
        alt={singleArticle?.title}
      />
      <p>
        {singleArticle?.body}
      </p>
    </div>
  );
};

export default SingleArticle;
