import { useEffect } from "react";

export const PageTitle = (router: {pathname: string}) => {
  const currentURL = router.pathname
  const pageURL = currentURL.replace(/\//g, "") + "-page"
  const routeTitle = currentURL.replace(/\//g, "")

  useEffect(() => {
    document.querySelector<HTMLElement>("body")!.classList.add(pageURL)
  })

  const capitalizeFirstLetter = (URL: string) => {
    return URL.charAt(0).toUpperCase() + URL.slice(1)
  }

  return capitalizeFirstLetter(routeTitle)
}
