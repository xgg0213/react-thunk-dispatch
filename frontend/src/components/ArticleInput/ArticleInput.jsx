import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { nanoid } from 'nanoid';
import { writeArticle } from '../../store/articleReducer';
import './ArticleInput.css';

const ArticleInput = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async(e) => {
    e.preventDefault();
    const newArticle = {
      // id: nanoid(),
      title,
      body,
      imageUrl
    };

    // Await the result of the dispatch
    const result = await dispatch(writeArticle(newArticle));

    // Check if the article was successfully saved
    if (result) {
      reset(); // Reset the form only if article is successfully submitted
      console.log("Article successfully added.");
    }
  };

  const reset = () => {
    setTitle('');
    setImageUrl('');
    setBody('');
  };

  return (
    <div className='inputBox'>
      <h1>Create Article</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          placeholder='Title'
          name='title'
        />
        <input
          type='text'
          onChange={(e) => setImageUrl(e.target.value)}
          value={imageUrl}
          placeholder='Image URL'
          name='imageUrl'
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          name='body'
          placeholder='Add your entry'
          rows='10'
        ></textarea>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ArticleInput;
