import React, {useEffect, useState} from "react";

export default function Page(props) {
  const { state: {htmlPage}} = props.location;
  console.log(htmlPage)
  useEffect(() => {
    console.log("start")
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: htmlPage }}/>
}