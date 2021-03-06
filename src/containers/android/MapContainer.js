/**
 * Created by liwanchong on 2016/8/8.
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import mapActions from '../../actions/mapAction'
import  Map from '../../components/android/map'
function mapStateToProps(state) {
    return {
        visitorData: state.mapReducer.visitorData
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(mapActions, dispatch)
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Map)