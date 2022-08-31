import React from "react";
import { ReactComponent as TextureElement } from "./../../assets/img/texture.svg";
import './Texture.scss';

export const Texture = (props: any) => {
  return (
    <TextureElement className="texture" style={props.textureStyles}/>
  )
}