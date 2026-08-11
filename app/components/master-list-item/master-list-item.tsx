import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './master-list-item.css';
import { IMaster } from '@/app/utils/mockFiles';
import { masterHref } from '@/app/utils/mockMasters';
import AppointmentButton from "@/app/utils/ui/make-an-appointment/make-an-appointment";

interface MasterListItemProps {
  innerKey: number;
  master: IMaster;
  type: string;
}

const MasterListItem: React.FC<MasterListItemProps> = ({ innerKey, master, type }) => {
  return (
    <div className={`master-list-item ${type === "page1"
      ? ""
      : "master-card-border"}`} key={innerKey + master.name}>
      {/* Stretched link: the whole card opens the profile. It cannot wrap the
          card because AppointmentButton is itself an anchor — nesting is
          invalid — so it overlays instead, and the button paints above it. */}
      <Link
        href={masterHref(master.name)}
        className="master-card-link"
        aria-label={`${master.name} — open profile`}
      />
      <div className="master-image-status">
        <Image
          src={master.image}
          alt="master icon"
          width={284}
          height={400}
        />
        <div className="master-info-top">
          <p className="master-info">
            {master.info}
          </p>
          <p className="master-status">
            {master.status}
          </p>
        </div>
      </div>
      <div className="master-info-bottom">
        <p className="master-name">
          {master.name}
        </p>
        <p className="master-skills">
          {master.skills}
        </p>
      </div>
      <Image
          src={"/images/bs/beautyServicesStar.png"}
          alt="BeautyServicesStar"
          width={36}
          height={36}
          className="master-list-star master-hover-element"
        />
       < AppointmentButton className="master-list-appoinment master-hover-element" />
    </div>
  );
};

export default MasterListItem;
