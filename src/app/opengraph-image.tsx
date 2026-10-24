import { ImageResponse } from "next/og";

export const alt = "Tehar Group — Seeds, Networks & Fabrics";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "linear-gradient(135deg,#0a2418,#1a633b)", color: "#fff" }}>
        <div style={{ fontSize: 28, color: "#f4b73b", letterSpacing: 6, textTransform: "uppercase" }}>Pakistani trading company</div>
        <div style={{ fontSize: 96, fontWeight: 800, marginTop: 20 }}>Tehar Group</div>
        <div style={{ fontSize: 40, marginTop: 20, color: "#d8f3df" }}>Farm-tested seeds · IT &amp; networking · Fabric</div>
        <div style={{ fontSize: 28, marginTop: 50, color: "#b3e6c1" }}>tehargroup.com</div>
      </div>
    ),
    size,
  );
}
