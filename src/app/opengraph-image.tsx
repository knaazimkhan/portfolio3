import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Naazim Khan - Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function og() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, lightgray 2%, transparent 0%), radial-gradient(circle at 75px 75px, lightgray 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            padding: "40px 80px",
            borderRadius: "12px",
            border: "2px solid lightgray",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "bold",
              background:
                "linear-gradient(to bottom right, #1E40AF 0%, #3B82F6 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 20px 0",
              lineHeight: 1.2,
            }}
          >
            Naazim Khan
          </h1>
          <p
            style={{
              fontSize: "30px",
              color: "#4B5563",
              margin: "0",
              lineHeight: 1.4,
            }}
          >
            Software Engineer
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
} 