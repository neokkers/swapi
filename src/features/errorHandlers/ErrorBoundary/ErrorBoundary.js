import React from "react";

export class ErrorBoundary extends React.Component {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      const { FallbackComponent } = this.props;
      return <FallbackComponent />;
    }

    return this.props.children;
  }
}
