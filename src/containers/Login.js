import { connect } from "react-redux";
import Login from "../components/Login"
import { removeListing, setUser } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    listings: state.listings,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeListing: (id) => dispatch(removeListing(id)),
    setUser: (username) => dispatch(setUser(username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);