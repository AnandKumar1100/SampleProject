import {connect} from "react-redux";
import FirstScreen from "../components/FirstScreen";
import {
    callAPI
} from "../actions";

const mapStateToProps = (state) => {
    return {
        list : state.FirstScreenReducer.list
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        callAPI: () => {
            debugger
            dispatch(callAPI())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FirstScreen);