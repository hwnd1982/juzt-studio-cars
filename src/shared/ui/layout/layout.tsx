import { ReactElement } from "react";
import { PageLoader } from "./page-loader";
import { Auth } from "./auth";

export function Layout({children}: {children: ReactElement}) {
  return (
    <>
      <main>
        <Auth />
        {children}
        <PageLoader />
      </main>
    </>
  )
}
