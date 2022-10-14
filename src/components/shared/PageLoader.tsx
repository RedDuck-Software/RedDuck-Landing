import React, { useState, useEffect } from "react";
import RDLoaderLogo from './../../assets/img/rd-loader-logo.png';
import { Texture } from "./Texture";
import './PageLoader.scss';

export const PageLoader = () => {
  const [loadStatus, setLoadStatus] = useState(false)
  useEffect (() => {
    window.addEventListener('load', () => {
      setTimeout(() => {
        setLoadStatus(true)
      }, 1000);
    });
  })
  return (
    <>
      <div className="page-loader">
        <img src={RDLoaderLogo} alt="Logo" />
        <div className="page-loader-bar">
          <div style={loadStatus ? {width: '10.5rem'} : {}} className="page-loader-bar-status"></div>
        </div>
      </div>
      <Texture textureStyles={{left: '-40%', top: '-60%', transform: 'scale(0.55)'}}/>
      <Texture textureStyles={{left: '54%', top: '24%', transform: 'scale(0.55)'}}/>
    </>
  )
}