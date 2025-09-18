import React, { useEffect } from "react";

interface SnackbarProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number; // em ms, padrão 3000
  onClose: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const backgroundColors = {
    success: "#4BB543",
    error: "#FF3333",
    info: "#333",
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "1rem 2rem",
        backgroundColor: backgroundColors[type],
        color: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
        zIndex: 9999,
        maxWidth: "80vw",
        textAlign: "center",
        fontWeight: "bold",
        userSelect: "none",
      }}
      role="alert"
      aria-live="assertive"
    >
      {message}
    </div>
  );
};

export default Snackbar;
