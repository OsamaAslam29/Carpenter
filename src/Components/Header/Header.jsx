import React from 'react'
import Fade from 'react-reveal/Fade';

import  { SkeletonTheme } from 'react-loading-skeleton'

import { MdLocationPin } from 'react-icons/md';
import { IoIosMail } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import { AiFillYoutube } from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYelp } from 'react-icons/fa';
import { BsGoogle } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import './Header.scss'
import HeaderLoader from './HeaderLoader/HeaderLoader';






const Header = ({ page, loading }) => {
    return (
        <Fade top>
            <div className='header-container' id='home'>

                <div className="left-section">
                    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#fff">

                        {
                            loading
                                ?
                                <>
                                    <HeaderLoader />
                                </>
                                :

                                page?.landPage?.address ?

                                    <a href={page?.landPage?.google_map} className="locatin">
                                        <MdLocationPin className='icon' style={{ fontSize: "30px" }} />
                                        <div>{(page?.landPage?.address)}</div>

                                    </a>
                                    : null
                        }

                        {
                            loading
                                ?
                                <>
                                    <HeaderLoader />
                                </>
                                :

                                page?.landPage?.client?.email ?
                                    <a href={'mailto:' + page?.landPage?.client?.email} className="email">
                                        <IoIosMail className='icon' style={{ fontSize: "30px" }} />
                                        <div>{page?.landPage?.client?.email}</div>
                                    </a>
                                    : null
                        }
                    </SkeletonTheme >
                </div>

                <div className="right-section">

                    <SkeletonTheme baseColor="#e0e0e0" highlightColor="#fff">

                        {
                            loading
                                ?
                                <>
                                    <HeaderLoader />
                                </>
                                :
                                page?.landPage?.client?.phone_no ?
                                    <a href={'tel:' + page?.landPage?.client?.phone_no} className="phone">
                                        <FaPhoneAlt className='icon' />
                                        <div>{page?.landPage?.client?.phone_no}</div>
                                    </a>
                                    : null
                        }
                        {
                            loading
                                ?
                                <>
                                    <HeaderLoader />

                                </>
                                :


                                <div className="social">
                                    {
                                        page?.landPage?.client?.youtube_link ?
                                            <a href={page?.landPage?.client?.youtube_link}>
                                                <AiFillYoutube className='icon' style={{ fontSize: "30px" }} />
                                            </a>
                                            : null
                                    }
                                    {
                                        page?.landPage?.client?.website_link ?
                                            <a href={page?.landPage?.client?.website_link}>
                                                <BsGlobe className='icon' />
                                            </a>
                                            : null
                                    }
                                    {
                                        page?.landPage?.client?.instagram_link ?
                                            <a href={page?.landPage?.client?.instagram_link}>
                                                <AiFillInstagram className='icon' style={{ fontSize: "30px" }} />
                                            </a>
                                            : null
                                    }
                                    {
                                        page?.landPage?.client?.yelp_link ?
                                            <a href={page?.landPage?.client?.yelp_link}>
                                                <FaYelp className='icon' />
                                            </a>
                                            : null
                                    }
                                    {
                                        page?.landPage?.google_map ?
                                            <a href={page?.landPage?.google_map}>
                                                <BsGoogle className='icon' />
                                            </a>
                                            : null
                                    }
                                    {
                                        page?.landPage?.client?.facebook_link ?
                                            <a href={page?.landPage?.client?.facebook_link}>
                                                <FaFacebookF className='icon' />
                                            </a>
                                            : null
                                    }

                                </div>
                        }

                    </SkeletonTheme>

                </div>

            </div>
        </Fade>
    )
}

export default Header
