/* SVG icon sprite + helpers shared by the static location landing pages.
   Ids are prefixed `hw-i-` so they never collide with icons elsewhere on the site. */

export function IconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <symbol id="hw-i-phone" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"
          />
        </symbol>
        <symbol id="hw-i-arrow" viewBox="0 0 24 24">
          <path fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
        </symbol>
        <symbol id="hw-i-check" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".18" />
          <path fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" d="m7.5 12.5 3 3 6-6.5" />
        </symbol>
      </defs>
    </svg>
  );
}

const Use = ({ id }: { id: string }) => (
  <svg aria-hidden="true">
    <use href={`#hw-i-${id}`} />
  </svg>
);

export const Check = () => <Use id="check" />;
export const Arrow = () => <Use id="arrow" />;
export const Phone = () => <Use id="phone" />;

/** Service-card icon: a 24×24 stroked path (or custom children). */
export function SvcIcon({ d, children }: { d?: string; children?: React.ReactNode }) {
  return (
    <div className="hw-ic">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        {children ?? <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={d} />}
      </svg>
    </div>
  );
}
