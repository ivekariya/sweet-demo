import React, { useState } from 'react';
import { HiDotsHorizontal } from "react-icons/hi";

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <>
          {text.slice(0, maxLength)}
          <span onClick={toggleTruncate} style={{cursor: 'pointer' }}><HiDotsHorizontal /></span>
        </>
      ) : (
        <>
          {text}
          <span onClick={toggleTruncate} style={{cursor: 'pointer' }}><HiDotsHorizontal /></span>
        </>
      )}
    </div>
  );
};

export default ReadMore;

