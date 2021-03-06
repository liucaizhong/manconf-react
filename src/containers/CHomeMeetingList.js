import { connect } from 'react-redux'
import HomeMeetingList from '../components/HomeMeetingList'
import { getMeetingList, setCurMeetingInfo } from '../actions/index'

const mapStateToProps = (state) => {
  const { roleId } = state.loginUser

  return {
    meetingList: state.meetingList,
    statusFilter: state.meetingStatusFilter,
    contentFilter: state.meetingContentFilter,
    roleId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMeetingList: (url, config) => {
      dispatch(getMeetingList(url, config))
    },
    clickLink: (state) => {
      dispatch(setCurMeetingInfo(state))
    },
  }
}

const CHomeMeetingList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeMeetingList)

export default CHomeMeetingList
