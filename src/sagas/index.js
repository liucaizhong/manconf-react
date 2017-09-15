import { all, call, put, takeLatest, takeEvery } from 'redux-saga/effects'
import { setLoginUser } from '../actions/index'
import * as TYPES from '../actions/type'

// get login info
function* setUser() {
  yield put(setLoginUser({
    name: '刘蔡仲',
    comp: '东方证券研究所',
    // avatar: require('../assets/images/login-avatar.png'),
    isConfAdmin: true,
  }))
}

// fetch get meeting list
function fetchGet(url, config) {
  return fetch(url, config)
  .then((resp) => {
    return resp.json()
  })
  .then((data) => {
    return data
  })
  .catch((err) => {
    console.log(err)
  })
}

// load meeting list
function* watchLoadMeetingList() {
  yield takeLatest(TYPES.GET_MEETING_LIST, loadMeetingList)
}

function* loadMeetingList(action) {
  const { url, config } = action

  const data = yield call(fetchGet, url, config)

  yield put(Object.assign({
    type: TYPES.LOAD_MEETING_LIST,
  }, {
    data,
  }))
}

// load comp application list
function* watchLoadCompApplyList() {
  yield takeLatest(TYPES.GET_COMPAPPLY_LIST, loadCompApplyList)
}

function* loadCompApplyList(action) {
  const { url, config } = action

  const data = yield call(fetchGet, url, config)

  yield put(Object.assign({
    type: TYPES.LOAD_COMPAPPLY_LIST,
  }, {
    data,
  }))
}

// submit a meeting
function* watchSubmitMeeting() {
  yield takeEvery(TYPES.SUBMIT_A_MEETING, submitMeeting)
}

function* submitMeeting(action) {
  const { data } = action

  // todo:fetch post
  console.log('submit a meeting', data)

  yield put(Object.assign({
    type: TYPES.RESET_CUR_MEETING_INFO,
  }, {}))
}

export default function* rootSaga() {
  yield all([
    call(setUser),
    call(watchLoadMeetingList),
    call(watchSubmitMeeting),
    call(watchLoadCompApplyList),
  ])
}
