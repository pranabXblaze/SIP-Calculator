import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or send it to a logging service
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>
            Please try again later or contact support if the issue persists.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
