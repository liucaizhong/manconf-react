import { connect } from 'react-redux'
import RegisterCalendar from '../components/RegisterCalendar'
import { getCurCompApplyPlan, resetCurCompApplyPlan,
  resetClientApplyList, setCurCompInfo } from '../actions/index'

const mapStateToProps = (state) => {
  const { curMeetingInfo, curCompInfo, curCompApplyPlan } = state
  return {
    curMeetingInfo,
    curCompInfo,
    // compApplyList,
    curCompApplyPlan,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurCompApplyPlan: (url, config) => {
      dispatch(getCurCompApplyPlan(url, config))
    },
    resetCurCompApplyPlan: (data) => {
      dispatch(resetCurCompApplyPlan(data))
    },
    resetClientApplyList: (data) => {
      dispatch(resetClientApplyList(data))
    },
    setCurCompInfo: (info) => {
      dispatch(setCurCompInfo(info))
    },
  }
}

const CRegisterCalendar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterCalendar)

export default CRegisterCalendar
