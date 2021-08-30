import { useRef } from 'react';
import noop from '@jswork/noop';
import useForceUpdate from '@jswork/use-force-update';
import NxReactActiveState from '@jswork/next-react-active-state';

export interface Response {
  /**
   * The backup initial data.
   */
  cloned: any;
  /**
   * The runtime state.
   */
  state: any;
  /**
   * Get pure state.
   */
  get: (inPath?: string, inDefaults?: any) => any;
  /**
   * Sync function.
   */
  sync: (inPath?: string) => (inEvent?: any) => void;
  /**
   * Reset to initial state.
   */
  reset: () => any;
  /**
   * Check state if changed.
   */
  touched: () => boolean;
}

export default (inCallback = noop, inInitialState?): Response => {
  const forceUpdate = useForceUpdate();
  const initialState = inInitialState || {};
  const activeStateRef = useRef(
    NxReactActiveState.build(initialState, () => {
      inCallback();
      forceUpdate();
    })
  );
  return activeStateRef.current;
};
