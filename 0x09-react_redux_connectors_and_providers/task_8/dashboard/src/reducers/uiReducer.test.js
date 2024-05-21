import uiReducer, { initialUiState } from "./uiReducer";
import { LOGIN, DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

const USER = { email: "larry@hudson.com", password: "123456" };

describe("uiReducer tests", function () {
  it("should verifies the state returned by the uiReducer function ", function () {
    const state = uiReducer(undefined, {});

    expect(state.toJS()).toEqual(initialUiState);
  });
  it("should  verifies the state returned by the uiReducer function  SELECT_COURSE is passed", function () {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });

    expect(state.toJS()).toEqual(initialUiState);
  });
  it("should verifies the state returned by the uiReducer DISPLAY_NOTIFICATION_DRAWER is changes correctly the isNotificationDrawerVisible", function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });

    expect(state.toJS()).toEqual({
      ...initialUiState,
      isNotificationDrawerVisible: true,
    });
  });

  it("should verifies the state returned by the uiReducer action LOGIN is passed correctly the user", function () {
    const state = uiReducer(undefined, { type: LOGIN, user: USER });

    expect(state.toJS()).toEqual({
      ...initialUiState,
      user: USER,
    });
  });
});
