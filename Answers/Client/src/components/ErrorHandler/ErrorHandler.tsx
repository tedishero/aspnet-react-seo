import React, { ReactNode, ErrorInfo } from "react";

type ErrorHandlerProps = {
  fallback: ReactNode;
};

//Error boundaries to not catch errors from children's event handlers or from themselves

export class ErrorHandler extends React.Component<ErrorHandlerProps> {
  constructor(props: ErrorHandlerProps) {
    super(props);
  }
  state = { hasError: false };

  // Update state so the next render will show the fallback UI.
  static getDerivedStateFromError = (): {} => {
    return { hasError: true };
  };

  componentDidCatch = (error: Error, info: ErrorInfo): void => {
    //Log to JSLL
  };

  render(): React.ReactNode {
    return this.state.hasError ? this.props.fallback : this.props.children;
  }
}
