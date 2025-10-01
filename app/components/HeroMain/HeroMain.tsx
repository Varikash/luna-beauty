'use client';

import React from 'react';
import style from './HeroMain.module.css';
import Image from 'next/image';
import BeautyButton from '@/app/utils/ui/bs-button/bs-button';
import AppointmentButton from '@/app/utils/ui/make-an-appointment/make-an-appointment';


export default function HeroMain() {
    return (
        <section className={style.section}>
            <div className={style.sectionWrapper}>
                <h1 className={style.title}> <span>L</span>uxury beauty services tailored just <span>for you!</span></h1>
                <div className={style.wrap}>
                    <div className={style.wrapContent}>
                        <ul className={style.serviceList}>
                            <li className={style.service}>MAKEUP</li>
                            <li className={style.service}>WAXING</li>
                            <li className={style.service}>MANICURE</li>
                            <li className={style.service}>SEMI PERMANENT</li>
                            <li className={style.service}>PEDICURE</li>
                        </ul>
                        <BeautyButton
                            text="EXPLORE SERVICES"
                            className="beauty-services-button-style"
                            link="/services"
                        />
                        <div className={style.content}>
                            <p className={style.contentText}>Luxury beauty services tailored just for you. Book your appointment today!</p>
                            <div className={style.imageWrapper}>
                                <Image 
                                        className={style.image}
                                        src="/images/hero/hero-small-img.png" 
                                        alt="Beauty services" 
                                        width={228} 
                                        height={228}
                                />
                            </div>
                        </div>
                        
                    </div>
                    <ul className={style.socialList}>
                        <li className={style.socialItem}><a href="#">Facebook</a></li>
                        <li className={style.socialItem}><a href="#">Instagram</a></li>
                        <li className={style.socialItem}><a href="#">Whatsapp</a></li>
                    </ul>
                    <AppointmentButton
                        className={style.appointment}
                    />
                </div>
                <div className={style.imageSmall}></div>
            </div>
        </section>
    )
}