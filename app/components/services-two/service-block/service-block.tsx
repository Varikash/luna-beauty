import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { IServiceCategory } from '@/app/utils/mockServicesTwo';
import { masterHref } from '@/app/utils/mockMasters';
import style from './service-block.module.css';

interface ServiceBlockProps {
  service: IServiceCategory;
  index: number;
}

/** How many treatments are previewed before "view all" takes over */
const PREVIEW_COUNT = 5;

const ServiceBlock: React.FC<ServiceBlockProps> = ({ service, index }) => {
  const [main, ...sides] = service.images;
  const preview = service.treatments.slice(0, PREVIEW_COUNT);
  const detailsHref = `/services/details/${service.link}`;
  const mastersCount = service.masters.length;

  return (
    <section
      id={service.id}
      className={`${style.block} ${index % 2 === 1 ? style.reverse : ''}`}
    >
      <div className={style.media}>
        <figure className={`${style.figure} ${style.main}`}>
          <Image
            src={main}
            alt={service.title}
            fill
            sizes="(max-width: 1000px) 100vw, 42vw"
          />
          <figcaption className={style.priceTag}>
            from <b>{service.priceFrom}</b>
          </figcaption>
        </figure>
        {sides.map((image, imageIndex) => (
          <figure
            className={`${style.figure} ${style.side}`}
            key={`${service.id}-img-${imageIndex}`}
          >
            <Image
              src={image}
              alt={`${service.title} ${imageIndex + 2}`}
              fill
              sizes="(max-width: 1000px) 50vw, 21vw"
            />
          </figure>
        ))}
      </div>

      <div className={style.body}>
        <div className={style.head}>
          <span className={style.index}>0{index + 1}</span>
          <span className={style.tagline}>{service.tagline}</span>
        </div>

        <h2 className={style.title}>{service.title}</h2>
        <p className={style.text}>{service.description}</p>

        <ul className={style.list}>
          {preview.map((treatment) => (
            <li key={`${service.id}-${treatment.title}`}>
              <Link href={detailsHref} className={style.row}>
                <span className={style.rowName}>
                  {treatment.title}
                  {treatment.popular && <em className={style.badge}>popular</em>}
                </span>
                <span className={style.rowMeta}>
                  <span className={style.rowDuration}>{treatment.duration}</span>
                  <span className={style.rowPrice}>{treatment.price}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className={style.foot}>
          <Link href={detailsHref} className={style.viewAll}>
            View all {service.treatments.length} treatments
            <span aria-hidden="true">→</span>
          </Link>

          <div className={style.masters}>
            <div className={style.avatars}>
              {service.masters.map((master, masterIndex) => (
                <Link
                  key={`${service.id}-master-${masterIndex}`}
                  href={masterHref(master.name)}
                  className={style.avatarLink}
                  title={master.name}
                >
                  <Image
                    src={master.image}
                    alt={master.name}
                    width={46}
                    height={46}
                    className={style.avatar}
                  />
                </Link>
              ))}
            </div>
            <p className={style.mastersText}>
              <b>
                {mastersCount} {mastersCount === 1 ? 'master' : 'masters'}
              </b>
              available for this service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBlock;
