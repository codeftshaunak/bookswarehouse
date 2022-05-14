import React, {
  useEffect,
  useState
} from "react";

const setBookItem = () => {
  const [booksitem, setBooksItem] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-atoll-26773.herokuapp.com/bookshop")
      .then((res) => res.json())
      .then((data) => setBooksItem(data));
  }, [booksitem]);

  return [booksitem];
};

export default setBookItem;