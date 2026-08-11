import React from 'react';
import Image from 'next/image';
import type { IMasterProfile } from '@/app/utils/mockMasters';
import style from './page.module.css';

/**
 * The grey story band.
 *
 * The decoration (arc, curve, two hairlines) is a single inline SVG so it can
 * be positioned against the band's own box and clipped by it. The arc path is
 * the one already used by `/images/bs/background-bs.svg` and the long curve is
 * the one from `/images/cooper/Curve.svg` — the design reuses both, only in
 * white on the grey band. Hidden entirely under 768px, as in the mobile design.
 */
const MasterStory: React.FC<{ master: IMasterProfile }> = ({ master }) => (
  <section className={style.story}>
    <svg
      className={style.storyDecor}
      viewBox="0 0 1920 1360"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {/* arc — Ellipse 18, x=88, 1337x713 */}
      <path
        d="M88 743C88 349.221 405.206 30 796.5 30C1069.67 30 1306.74 185.583 1424.97 413.5"
        stroke="#FFFFFF"
        fill="none"
      />
      {/* vertical hairline at the right gutter — Vector 6 */}
      <path d="M1844 31L1844 1360" stroke="#FFFFFF" />
      {/* horizontal hairline across the top right — Vector 14 */}
      <path d="M796 30L1920 30" stroke="#FFFFFF" />
      {/* long shallow curve near the bottom — Curve, flipped */}
      <g transform="translate(-134 1143)">
        <path
          d="M1924 335C1819.44 424.734 1510.78 555.344 1204.61 299.538C821.89 -20.2186 357.335 -174.145 -54 307.229"
          stroke="#FFFFFF"
          fill="none"
          transform="rotate(180 935 240)"
        />
      </g>
    </svg>

    <div className={style.storyShell}>
      <div className={style.storyLeft}>
        <p className={style.storyLead}>{master.storyLead}</p>
        <figure className={style.storyTall}>
          <Image
            src={master.photos.storyTall}
            alt=""
            fill
            sizes="(max-width: 768px) 92vw, 30vw"
          />
        </figure>
        <Image
          src="/images/bs/beautyServicesStarWhite.svg"
          alt=""
          width={72}
          height={72}
          className={style.storyStar}
        />
      </div>

      <div className={style.storyRight}>
        <figure className={style.storyWide}>
          <Image
            src={master.photos.storyWide}
            alt=""
            fill
            sizes="(max-width: 768px) 92vw, 46vw"
          />
        </figure>
        <div className={style.storyBody}>
          {master.story.map((paragraph, index) => (
            <p key={`story-${index}`}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default MasterStory;
