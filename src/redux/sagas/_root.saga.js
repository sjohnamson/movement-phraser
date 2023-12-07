import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import addVideoSaga from './addVideoSaga';
import getVideoSaga from './getVideoSaga';
import deleteVideoSaga from './deleteVideoSaga';
import updateVideoSaga from './updateVideoSaga';
import addPhraseSaga from './addPhraseSaga';
import getPhraseListSaga from './getPhraseSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    addVideoSaga(),
    getVideoSaga(),
    deleteVideoSaga(),
    updateVideoSaga(),
    addPhraseSaga(),
    getPhraseListSaga(),
  ]);
}
