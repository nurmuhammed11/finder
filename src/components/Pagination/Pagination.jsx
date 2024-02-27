import React from "react";
import arrowRight from "../../assets/arrow_right.png";
import arrowLeft from "../../assets/arrow_left.png";
const Pagination = ({ changePage, page, count }) => {
  return (
    <div className="group_btn">
      <button onClick={() => changePage("minus")}>
        <img width={"30px"} src={arrowLeft} alt="arrow left" />
      </button>

      <span>
        {page}-{Math.round(count)}
      </span>
      <button onClick={() => changePage("plus")}>
        <img width={"30px"} src={arrowRight} alt="arrow right" />
      </button>
    </div>
  );
};

export default Pagination;
