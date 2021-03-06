import React, { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Form from "./Form";
import { trending } from "../js/fixtures";
import { fetchBackgroundImage } from "../redux/imagesReducer";
import Trending from "./details/Trending";
import Header from "./details/Header";
import ErrorMessage from "./ErrorMessage";
import PropTypes from "prop-types";

const Section = props => {
  const { fetchBackgroundImage } = props;

  useEffect(() => {
    fetchBackgroundImage();
  }, [fetchBackgroundImage]);

  // const handleClick = e => {
   
  //   const x= e.target.id;
  //   if ( x && x.includes("react-select")) {
  //    console.log(e.target.innerText);
  //   }
  // };
  return (
    <section className="search__background">
      <div className="form_container" /*onClick={handleClick}*/>
        <Header />
        <Form />
        <Trending ary={trending} />
        <ErrorMessage />
      </div>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchBackgroundImage: () => dispatch(fetchBackgroundImage()),
});

const SearchSection = withRouter(connect(null, mapDispatchToProps)(Section));
export default SearchSection;

Section.propTypes = { fetchBackgroundImage: PropTypes.func };
