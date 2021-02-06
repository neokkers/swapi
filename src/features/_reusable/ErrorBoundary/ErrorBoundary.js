import React from "react";

export class ErrorBoundary extends React.Component {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    const { error } = this.state;
    if (error) {
      return <this.props.FallbackComponent />;
    }

    return this.props.children;
  }
}
