import React from 'react';
import classNames from 'classnames';
export type ProgressMode =
  | 'indeterminate-regional'
  | 'indeterminate-local'
  | 'indeterminate-local-large';

type Props = {
  mode: ProgressMode;
  ariaLabel: string;
  ariaValueText: string;
};

export const Progress: React.FunctionComponent<Props> = ({
  mode,
  ariaLabel,
  ariaValueText,
}) => {
  return (
    <div
      className={classNames({
        'c-progress': true,
        'f-indeterminate-regional': mode === 'indeterminate-regional',
        'f-indeterminate-local':
          mode === 'indeterminate-local-large' ||
          mode === 'indeterminate-local',
        'f-progress-large': mode === 'indeterminate-local-large',
        'f-progress-small': mode === 'indeterminate-local',
      })}
      role="progressbar"
      aria-valuetext={ariaValueText}
      aria-label={ariaLabel}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
