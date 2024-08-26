import { ReactElement } from "react";
import { usePageLoading } from "./use-page-loading"

export function PageLoaderProvider({children}: {children: ReactElement}) {
  const { isPageLoading } = usePageLoading();

  return (
    <>
    {children}
    {isPageLoading &&
      <div className="loader">
        <svg className="loader-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <rect
            fill="#a855f7"
            width="3"
            height="100"
            transform="translate(0) rotate(180 3 50)">
            <animate
              attributeName="height"
              attributeType="XML"
              dur="1s"
              values="30; 100; 30"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="17"
            fill="#a855f7"
            width="3"
            height="100"
            transform="translate(0) rotate(180 20 50)"
          >
            <animate
              attributeName="height"
              attributeType="XML"
              dur="1s"
              values="30; 100; 30"
              repeatCount="indefinite"
              begin="0.1s"
            />
          </rect>
          <rect
            x="40"
            fill="#a855f7"
            width="3"
            height="100"
            transform="translate(0) rotate(180 40 50)"
          >
            <animate
              attributeName="height"
              attributeType="XML"
              dur="1s"
              values="30; 100; 30"
              repeatCount="indefinite"
              begin="0.3s"
            />
          </rect>
          <rect
            x="60"
            fill="#a855f7"
            width="3"
            height="100"
            transform="translate(0) rotate(180 58 50)"
          >
            <animate
              attributeName="height"
              attributeType="XML"
              dur="1s"
              values="30; 100; 30"
              repeatCount="indefinite"
              begin="0.5s"
            />
          </rect>
          <rect
            x="80"
            fill="#a855f7"
            width="3"
            height="100"
            transform="translate(0) rotate(180 76 50)"
          >
            <animate
              attributeName="height"
              attributeType="XML"
              dur="1s"
              values="30; 100; 30"
              repeatCount="indefinite"
              begin="0.1s"
            />
          </rect>
        </svg>
      </div>
      }
    </>
  )
}
