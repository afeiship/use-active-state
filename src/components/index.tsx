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
   * The instance of NxReactActiveState.
   */
  $: any;
}

export default (inCallback = noop, inInitialState?): Response => {
  const forceUpdate = useForceUpdate();
  const initialState = NxReactActiveState.get(inInitialState || {});
  const activeStateRef = useRef(
    NxReactActiveState.build(initialState, () => {
      inCallback();
      forceUpdate();
    })
  );
  return activeStateRef.current;
};
