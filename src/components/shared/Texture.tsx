import React from "react";
import TextureImg from "./../../assets/img/texture.png";
import './Texture.scss';

export const Texture = (props: any) => {
  return (
    <div className="texture" style={props.textureStyles}>
      <img src={TextureImg} alt="Texture" />
    </div>
  )
}