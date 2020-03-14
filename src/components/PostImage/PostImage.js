import React, { useState } from "react";
import { Button } from "../Button/Button";
import { ThemeContext } from "../../context";
import ImageCat from "../../assets/cat.jpg"; // как импортнуть картинку
import "./PostImage.scss";

export const PostImage = props => {
  const { src = "https://cdn2.thecatapi.com/images/bcp.jpg" } = props;

  // хотим показать/скрыть картинку по клику на кнопку
  const [isHidden, setIsHidden] = useState(false); // хук изменения состояния, который вызывает перерендер нашей компоненты если isHidden меняется

  const onClickHandler = () => {
    // функция обработки нажатия на кнопку
    setIsHidden(!isHidden);
    // здесь могут быть вызову других функций
  };

  return (
    <ThemeContext.Consumer>
      {value => {
        // достаем значение темы из контекста, чтоб стилизовать кнопку
        return (
          <div className="image-wrapper">
            {!isHidden && <img src={src} className="img1" />}
            <Button
              className={`${
                value === "dark" ? "dark" : "light"
              } btn-sm btn-secondary`}
              label={!isHidden ? "Hide img" : "Show img"}
              onClick={onClickHandler}
            />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};
