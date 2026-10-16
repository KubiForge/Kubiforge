
const styles = `
.ambient-bg {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
  background:
    linear-gradient(180deg, #fbfdff 0%, #f6f9fc 55%, #f3f7fb 100%);
}
 
.ambient-bg__grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px);
  background-size: 32px 32px;
  -webkit-mask-image: radial-gradient(ellipse 85% 65% at 50% 25%, #000 30%, transparent 90%);
          mask-image: radial-gradient(ellipse 85% 65% at 50% 25%, #000 30%, transparent 90%);
}
 
.ambient-bg__glow {
  position: absolute;
  border-radius: 50%;
  will-change: transform;
}
 
/* Top centre: primary light pool */
.ambient-bg__glow--top {
  top: -240px;
  left: 50%;
  width: clamp(420px, 72vw, 960px);
  height: 620px;
  margin-left: calc(clamp(420px, 72vw, 960px) / -2);
  background: radial-gradient(
    closest-side,
    rgba(14, 165, 233, 0.10) 0%,
    rgba(2, 132, 199, 0.04) 55%,
    transparent 100%
  );
  animation: ambient-drift-a 36s ease-in-out infinite alternate;
}
 
/* Right: gentle accent */
.ambient-bg__glow--right {
  top: 42%;
  right: -180px;
  width: 520px;
  height: 520px;
  background: radial-gradient(
    closest-side,
    rgba(2, 132, 199, 0.06) 0%,
    transparent 100%
  );
  animation: ambient-drift-b 44s ease-in-out infinite alternate;
}
 
/* Bottom left: faint teal balance */
.ambient-bg__glow--bottom {
  bottom: -220px;
  left: -160px;
  width: 560px;
  height: 560px;
  background: radial-gradient(
    closest-side,
    rgba(20, 184, 166, 0.05) 0%,
    transparent 100%
  );
  animation: ambient-drift-b 52s ease-in-out infinite alternate-reverse;
}
 
@keyframes ambient-drift-a {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(24px, 18px, 0); }
}
 
@keyframes ambient-drift-b {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-20px, 24px, 0); }
}
 
@media (prefers-reduced-motion: reduce) {
  .ambient-bg__glow { animation: none; }
}
`;

export default function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <style>{styles}</style>
      <div className="ambient-bg__grid" />
      <div className="ambient-bg__glow ambient-bg__glow--top" />
      <div className="ambient-bg__glow ambient-bg__glow--right" />
      <div className="ambient-bg__glow ambient-bg__glow--bottom" />
    </div>
  );
}

