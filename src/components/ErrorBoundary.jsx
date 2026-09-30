import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary:", error);
    console.error("Component Stack:", errorInfo.componentStack);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            background: "#f8fafc",
          }}
        >
          <div
            style={{
              maxWidth: "500px",
              width: "100%",
              padding: "30px",
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                marginBottom: "10px",
                color: "#dc2626",
              }}
            >
              Something went wrong
            </h1>

            <p
              style={{
                color: "#64748b",
                marginBottom: "20px",
              }}
            >
              An unexpected error occurred while loading this page.
            </p>

            {process.env.NODE_ENV !== "production" &&
              this.state.error && (
                <pre
                  style={{
                    textAlign: "left",
                    padding: "12px",
                    background: "#f1f5f9",
                    borderRadius: "8px",
                    overflow: "auto",
                    fontSize: "12px",
                    marginBottom: "20px",
                  }}
                >
                  {this.state.error.toString()}
                </pre>
              )}

            <button
              onClick={this.handleReload}
              style={{
                border: "none",
                padding: "10px 20px",
                borderRadius: "8px",
                background: "#2563eb",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "600",
              }}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;