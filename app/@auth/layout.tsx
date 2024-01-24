import React from "react";

export default async function Layout(props: {
  auth: React.ReactNode
}) {
  return (
      <>
        {/* ... */}
        {props.auth}
      </>
  )
}