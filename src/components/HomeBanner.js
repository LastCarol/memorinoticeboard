import React from "react";

function HomeBanner() {
  return (
    <div>
      <section className="homebanner">
        <span className="bannerImg">
          <img className="bookImage" alt="book" src="assets/book.png" />
        </span>
        <div className="bannerName">
          공유하고 싶은 기억들
          <br />
          <span>Memorize Board</span>
        </div>
      </section>
    </div>
  );
}

export default HomeBanner;
