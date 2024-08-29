import { usePageLoading } from "./use-page-loading"

export function PageLoader() {
  const { isPageLoading } = usePageLoading();

  return (
    <>
    {isPageLoading &&
      <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50">
        <svg className="block w-32 h-32" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
