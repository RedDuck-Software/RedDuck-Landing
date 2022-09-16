import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import './InsidePageTitle.scss';
import { ReactComponent as RedArrowIcon } from './../../assets/img/icons/red-arrow-left-icon.svg';

export const InsidePageTitle = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation()
  console.log(location)

  return (
    <>
      <div className="inside-page-title-top">
        <button onClick={() => navigate(-1)}>
          <RedArrowIcon />
          back
        </button>
        <span>/</span>
        <span>{location.pathname.replace('/', '')}</span>
      </div>
      <div className="inside-page-title-bottom">
        {props.title}
      </div>
    </>
  )
}