// import { call, put, takeEvery } from 'redux-saga/effects';
// import { getProfileDataApi, getUserDataApi, getTweetsProfileApi, getProfileDataTweetsApi} from './api';




// function* getProfileData(action) {
//     try {
//         const data = yield call(getProfileDataApi, action.payload);
//         yield put({type: GET_PROFILE_DATA_SUCCEEDED, payload: data});
//     } catch (e) {
//         yield put({type: GET_PROFILE_DATA_FAILED, payload: e.message});
//     }
// }


export const home = [
    // takeEvery(GET_PROFILE_DATA, getProfileData)
];