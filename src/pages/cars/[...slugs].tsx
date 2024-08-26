import { AppDispatch, appWrapper, useAppSelector } from "@/shared";
import { getAsyncCar } from "@/entities";
import { GetServerSidePropsResult } from "next";
import Link from "next/link";

export default function Car() {
  const car = useAppSelector(state => state.car);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        {car.item !== null &&
          <div  className="min-w-screen fixed left-0 top-0 right-0 bottom-0 z-10 bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${car.item.image})`}}>
            <div className="group/car absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-0"></div>
            <div className="container flex items-center justify-center h-full">
    
              <div className="bg-white p-6 shadow-xl relative z-20 card-right-contents max-w-[min(100%,_28rem)] w-full">
                <Link href='/' className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  <svg className="w-12 h-12 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="20 20 64 64">
                    <path fill="#fed5b3" d="M39.517,61.464l-0.012-16.239c0-0.321,0.15-0.624,0.406-0.821l9.949-7.687 c0.377-0.289,0.904-0.289,1.281,0l9.951,7.688c0.256,0.196,0.406,0.499,0.406,0.82v16.239c0,0.573-0.469,1.037-1.047,1.037H40.563 C39.986,62.5,39.517,62.037,39.517,61.464z"></path><path fill="#fff" d="M70,82H31c-6.6,0-12-5.4-12-12V31c0-6.6,5.4-12,12-12h39c6.6,0,12,5.4,12,12v39 C82,76.6,76.6,82,70,82z"></path><path fill="#f69272" d="M71.29,44.563l-3.79-2.837V33.5h-5v4.482l-10.788-8.076c-0.716-0.545-1.708-0.545-2.424,0 L29.71,44.563c-0.391,0.298-0.18,0.921,0.311,0.921H33.5v21.019c0,1.103,0.895,1.998,2,1.998h30c1.104,0,2-0.895,2-1.998V45.5 l3.479-0.016C71.47,45.484,71.681,44.86,71.29,44.563z"></path><path fill="#fcba7f" d="M63.46,65.5H37.553c-0.572,0-1.036-0.46-1.036-1.028L36.502,43.76c0-0.319,0.148-0.62,0.402-0.815 l12.961-10.231c0.373-0.287,0.895-0.287,1.268,0l12.961,10.231c0.254,0.195,0.402,0.495,0.402,0.814v20.711 C64.497,65.04,64.033,65.5,63.46,65.5z"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M63.46,65.5H37.553 c-0.572,0-1.036-0.46-1.036-1.028L36.502,43.76c0-0.319,0.148-0.62,0.402-0.815l12.961-10.231c0.373-0.287,0.895-0.287,1.268,0 l12.961,10.231c0.254,0.195,0.402,0.495,0.402,0.814v20.711C64.497,65.04,64.033,65.5,63.46,65.5z"></path><path fill="#eddc67" d="M39.517,61.464l-0.012-16.239c0-0.321,0.15-0.624,0.406-0.821l9.949-7.687 c0.377-0.289,0.904-0.289,1.281,0l9.951,7.688c0.256,0.196,0.406,0.499,0.406,0.82v16.239c0,0.573-0.469,1.037-1.047,1.037H40.563 C39.986,62.5,39.517,62.037,39.517,61.464z"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M39.517,61.464 l-0.012-16.239c0-0.321,0.15-0.624,0.406-0.821l9.949-7.687c0.377-0.289,0.904-0.289,1.281,0l9.951,7.688 c0.256,0.196,0.406,0.499,0.406,0.82v16.239c0,0.573-0.469,1.037-1.047,1.037H40.563C39.986,62.5,39.517,62.037,39.517,61.464z"></path><path fill="#f9e65c" d="M42.513,58.46l-0.009-11.659c0-0.321,0.151-0.624,0.41-0.822l6.929-5.282 c0.385-0.293,0.925-0.293,1.31,0l6.931,5.283c0.259,0.197,0.41,0.5,0.41,0.821v11.658c0,0.575-0.477,1.041-1.065,1.041h-13.85 C42.99,59.5,42.513,59.035,42.513,58.46z"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M42.513,58.46 l-0.009-11.659c0-0.321,0.151-0.624,0.41-0.822l6.929-5.282c0.385-0.293,0.925-0.293,1.31,0l6.931,5.283 c0.259,0.197,0.41,0.5,0.41,0.821v11.658c0,0.575-0.477,1.041-1.065,1.041h-13.85C42.99,59.5,42.513,59.035,42.513,58.46z"></path><path fill="#fef6aa" d="M45.512,55.441l-0.005-7.011c0-0.328,0.159-0.638,0.43-0.839l3.881-2.869 c0.399-0.295,0.955-0.295,1.354,0l3.884,2.871c0.271,0.201,0.43,0.51,0.43,0.838v7.009c0,0.585-0.496,1.059-1.107,1.059H46.62 C46.008,56.5,45.513,56.026,45.512,55.441z"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M45.512,55.441 l-0.005-7.011c0-0.328,0.159-0.638,0.43-0.839l3.881-2.869c0.399-0.295,0.955-0.295,1.354,0l3.884,2.871 c0.271,0.201,0.43,0.51,0.43,0.838v7.009c0,0.585-0.496,1.059-1.107,1.059H46.62C46.008,56.5,45.513,56.026,45.512,55.441z"></path><path fill="#1f212b" d="M70.011,82.988h-39c-7.18,0-13-5.82-13-13v-39c0-7.18,5.82-13,13-13h39c7.18,0,13,5.82,13,13v39 C83.011,77.168,77.19,82.988,70.011,82.988z M20.011,30.988v39c0,6.075,4.925,11,11,11h39c6.075,0,11-4.925,11-11v-39 c0-6.075-4.925-11-11-11h-39C24.935,19.988,20.011,24.913,20.011,30.988z"></path><path fill="#1f212b" d="M67.173,77.988H33.848c-5.985,0-10.837-4.852-10.837-10.837V33.825 c0-5.985,4.852-10.837,10.837-10.837h33.663c0.276,0,0.5,0.224,0.5,0.5s-0.224,0.5-0.5,0.5H33.848 c-5.433,0-9.837,4.404-9.837,9.837V67.15c0,5.433,4.405,9.838,9.838,9.838h33.325c5.433,0,9.837-4.404,9.837-9.837V48.488 c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5V67.15C78.011,73.136,73.158,77.988,67.173,77.988z M77.511,45.567 c-0.276,0-0.5-0.224-0.5-0.5v-4c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v4C78.011,45.344,77.787,45.567,77.511,45.567z M77.511,39.567c-0.276,0-0.5-0.224-0.5-0.5v-2c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v2 C78.011,39.344,77.787,39.567,77.511,39.567z"></path><path fill="none" stroke="#1f212b" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M71.29,44.563 l-3.79-2.837V33.5h-5v4.482l-10.788-8.076c-0.716-0.545-1.708-0.545-2.424,0L29.71,44.563c-0.391,0.298-0.18,0.921,0.311,0.921 H33.5v21.019c0,1.103,0.895,1.998,2,1.998h30c1.104,0,2-0.895,2-1.998V45.5l3.479-0.016C71.47,45.484,71.681,44.86,71.29,44.563z"></path>
                  </svg>
                </Link>
                <div className="text-[#3c3c3c] font-thin text-4xl mb-6">
                  <h1 className="">{car.item.make} {car.item.model}</h1>
                  <p className="text-[#c8c8c8] font-thin text-xl pb-1 border-b border-[#c8c8c8]">{car.item.year}</p>
                </div>
                <div className="[&>:not(:last-child)]:mb-3">
                  <p className="flex flex-col">
                    <span className="text-[#3c3c3c] font-thin text-xl">{car.item.color}</span>
                    <span className="text-[#c8c8c8] text-xs uppercase">color</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="text-[#3c3c3c] font-thin text-xl">{car.item.fuelType} {car.item.engine}</span>
                    <span className="text-[#c8c8c8] text-xs uppercase">engine</span>
                  </p>
                  {
                    car.item.fuelType !== "Electric" ?
                      <p className="flex flex-col">
                        <span className="text-[#3c3c3c] font-thin text-xl">{car.item.transmission}</span>
                        <span className="text-[#c8c8c8] text-xs uppercase">transmission</span>
                      </p> :
                      <p className="flex flex-col">
                        <span className="text-[#3c3c3c] font-thin text-xl">{car.item.mileage}</span>
                        <span className="text-[#c8c8c8] text-xs uppercase">mileage</span>
                      </p>
                      
                  }
                    <p className="flex pt-4 border-t border-[#c8c8c8]">
                      <span className="text-[#ff9800] text-xs uppercase">{car.item.features.join(', ')}</span>
                    </p>
                </div>
                
              </div>
            </div>
          </div>
        }
      
    </main>
  )
}

type Args = any | null | {params: {slugs: [make: string, model: string]}}
type Result = GetServerSidePropsResult<Args>;

export const getServerSideProps = appWrapper.getServerSideProps(store => async ({params}): Promise<Result>  => {
  try {
    if (Array.isArray(params?.slugs)) {
      const [make, model] = params?.slugs;

      await (store.dispatch as AppDispatch)(getAsyncCar({make, model}));

      if (store.getState().car.error) {
        return {
          redirect: {
            destination: '/404',
            permanent: false,
          },
        }
      }
    }
    
    return {props: null}
  } catch (err) {
    return {props: {err}}
  };
});