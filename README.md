# React Native useRef Callback Error After Unmount

This repository demonstrates a common error in React Native when using the `useRef` hook.  The error occurs when a component using `useRef` is unmounted before the ref's callback function executes. Attempting to access the ref's `current` property after the component has unmounted will lead to an error.

The `BugRefUnmount.js` file shows the problematic code. The `BugRefUnmountSolution.js` file offers a solution using a cleanup function in the `useEffect` hook to prevent the error.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install the necessary dependencies.
3. Run `npx react-native run-android` or `npx react-native run-ios` to run the app.
4. Observe the error in the console or during testing.

## Solution

The solution involves utilizing a cleanup function within the `useEffect` hook.  This ensures that the callback function is only executed if the component is still mounted.  Refer to `BugRefUnmountSolution.js` for the corrected implementation.