import {connect} from "react-redux";
import Dropdown from "../component/index";
import { saveLanguageToStore } from '../../../Screens/HomeScreen/actions'

const mapStateToProps = (state) => {
    return {
        selectedLanguage: state.HomeScreenReducer.selectedLanguage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveLanguageToStore: (selectedLanguage) => {
            dispatch(saveLanguageToStore(selectedLanguage))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);