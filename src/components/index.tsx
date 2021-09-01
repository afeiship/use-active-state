import { useRef } from 'react';
import useForceUpdate from '@jswork/use-force-update';
import NxReactActiveState from '@jswork/next-react-active-state';
import deepClone from '@jswork/next-deep-clone';

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
   * The instance of NxReactActiveState.
   */
  $: any;
}

export default (inInitialState?): Response => {
  const forceUpdate = useForceUpdate();
  const initialState = deepClone(inInitialState || {});
  const activeStateRef = useRef(
    NxReactActiveState.build(initialState, () => {
      forceUpdate();
    })
  );
  return activeStateRef.current;
};
