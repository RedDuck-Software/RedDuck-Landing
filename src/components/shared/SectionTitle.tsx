import React from "react";
import "./SectionTitle.scss";

export const SectionTitle = (props: any) => {
  return (
    <div className="section-title">
      {props.size === 'big' ? 
        <>
          <h1>{props.children}</h1>
          <h1>{props.children}</h1>
          <h1 className="section-title-main">{props.children}</h1>
          <h1>{props.children}</h1>
          <h1>{props.children}</h1> 
        </>
      :
      <>
        <h2>{props.children}</h2>
        <h2>{props.children}</h2>
        <h2 className="section-title-main">{props.children}</h2>
        <h2>{props.children}</h2>
        <h2>{props.children}</h2> 
      </> 
    }
    </div>
  )
}