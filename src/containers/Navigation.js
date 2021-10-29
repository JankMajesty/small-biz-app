import { connect } from "react-redux";
import Navigation from "../components/Navigation";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Navigation);