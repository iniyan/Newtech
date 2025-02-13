"use client"

import { useEffect } from "react"

export function ZohoForm() {
  useEffect(() => {
    try {
      const f = document.createElement("iframe")
      f.src =
        "https://forms.zohopublic.in/nmlvenkatgm1/form/NewTechDigitalMarketingContactusForm/formperma/mIVqwE4qnjr6crIabF87gQ8x1vOMcuA29tpuz9A0oHM?zf_rszfm=1"
      f.style.border = "none"
      f.style.height = "1045px"
      f.style.width = "90%"
      f.style.transition = "all 0.5s ease"
      f.setAttribute("aria-label", "Lets Connect")

      const d = document.getElementById(
        "zf_div_mIVqwE4qnjr6crIabF87gQ8x1vOMcuA29tpuz9A0oHM"
      )
      if (d) {
        d.appendChild(f)

        window.addEventListener("message", function (event) {
          const evntData = event.data
          if (evntData && evntData.constructor == String) {
            const zf_ifrm_data = evntData.split("|")
            if (zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3) {
              const zf_perma = zf_ifrm_data[0]
              const zf_ifrm_ht_nw = parseInt(zf_ifrm_data[1], 10) + 15 + "px"
              const iframe = d.getElementsByTagName("iframe")[0]
              if (
                iframe.src.indexOf("formperma") > 0 &&
                iframe.src.indexOf(zf_perma) > 0
              ) {
                const prevIframeHeight = iframe.style.height
                const zf_tout = zf_ifrm_data.length == 3

                if (prevIframeHeight != zf_ifrm_ht_nw) {
                  if (zf_tout) {
                    iframe.scrollIntoView()
                    setTimeout(() => {
                      iframe.style.height = zf_ifrm_ht_nw
                    }, 500)
                  } else {
                    iframe.style.height = zf_ifrm_ht_nw
                  }
                }
              }
            }
          }
        })
      }
    } catch (e) {
      console.error("Error loading Zoho form:", e)
    }
  }, [])

  return (
    <div
      id="zf_div_mIVqwE4qnjr6crIabF87gQ8x1vOMcuA29tpuz9A0oHM"
      className="flex justify-center w-full"
    />
  )
}
