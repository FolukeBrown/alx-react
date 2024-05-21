import uiReducer, { initialState } from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

describe("uiReducer tests", function () {
  it("should verifies the state returned by the uiReducer function ", function () {
    const state = uiReducer(undefined, {});

    expect(state.toJS()).toEqual(initialState);
  });
  it("should  verifies the state returned by the uiReducer function  SELECT_COURSE is passed", function () {
    const state = uiReducer(undefined, { type: "SELECT_COURSE" });

    expect(state.toJS()).toEqual(initialState);
  });
  it("should verifies the state returned by the uiReducer DISPLAY_NOTIFICATION_DRAWER is changes correctly the isNotificationDrawerVisible", function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });

    expect(state.toJS()).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
