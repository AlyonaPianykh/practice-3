import React, { useState } from 'react';
import {Button} from '../Button/Button';
import {PostImage} from '../PostImage/PostImage';
import './Post.scss';

export const Post = props => {
  const [styled, setStyled] = useState(false);// хук изменения состояния, который вызывает перерендер нашей компоненты если styled меняется

  const { post: { imgAuthor, authorName, mood, data, text, imgPost } } = props;

  const onToggleMeHandler = () => {
    setStyled(!styled); // вызываем хук изменения для styled. кладем противоположное значение.это вызывает перерендер
  };

  return (
    <div className={`post card ${styled ? 'styled' : '' }`}>
      <div className="card-img-top">
        <PostImage src={imgPost}/>
      </div>
      <div className="card-body">
        <h3>{authorName}</h3>
        <p className="text"> {mood} </p>
        <small className="data">{data}</small>
      </div>

      <div className="block1">
        <p className=" card-text text">{text}</p>

      </div>
      <div className="button">
        <Button  label="Toggle" onClick={onToggleMeHandler} />
      </div>
    </div>
  );
};
