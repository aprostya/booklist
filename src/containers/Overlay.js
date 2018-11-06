import { connect } from 'react-redux';

import {setAddBookBtnActive} from '../actions';
import OverlayBody from '../components/OverlayBody';

const mapStateToProps = (state) => {
    return {
        active: state.addBookButton.isActive
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOverlayBodyClick: () => { dispatch(setAddBookBtnActive(false)); }
    }
}

const Overlay = connect(mapStateToProps, mapDispatchToProps)(OverlayBody);

export default Overlay;
