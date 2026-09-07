export default function Maintenance() {
  return (
    <div
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Arial, sans-serif",
        background: "#F2F2F7",
        color: "#000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "40px 24px",
          maxWidth: "340px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "22px",
            background: "linear-gradient(135deg, #FF9500, #FF3B30)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
            fontSize: "40px",
            boxShadow: "0 8px 32px rgba(255, 59, 48, 0.25)",
          }}
        >
          🔧
        </div>

        <div
          style={{
            display: "inline-block",
            background: "#FF3B30",
            color: "white",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          Under Maintenance
        </div>

        <h1
          style={{
            fontSize: "26px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            marginBottom: "10px",
          }}
        >
          App is Unavailable
        </h1>

        <p
          style={{
            fontSize: "15px",
            color: "#8E8E93",
            lineHeight: 1.5,
            marginBottom: "24px",
          }}
        >
          The app is currently under maintenance. Please check back later.
        </p>

        <div
          style={{
            fontSize: "12px",
            color: "#AEAEB2",
            marginTop: "12px",
          }}
        >
          We'll be back soon
        </div>
      </div>
    </div>
  );
}
