import { AppDispatch, useAppSelector, appWrapper } from "@/shared";
import { getAsyncCarsList, userLogin } from "@/entities";
import { EndList } from "@/features";
import { GetServerSidePropsResult } from "next";
import Image from "next/image";
import Link from "next/link";
import { getSession, login } from "../shared/lib/lib";

export default function Home() {
  const cars = useAppSelector(state => state.cars);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div  className="min-w-screen fixed left-0 top-0 right-0 bottom-0 z-10 bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url(https://images.unsplash.com/photo-1604262725913-1c415cd27564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2142&q=80)"}}>
        <div className="group/car absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 -z-10"></div>
        <div className="overflow-y-auto h-full z-20 scrollbar-thin scrollbar-track-rounded-1/2 scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="container">
            <ul className="relative py-12 grid gap-6 grid-cols-[repeat(auto-fill,minmax(min(100%,_28rem),_1fr))]">
              {cars.list?.map(car => 
                <div key={car.id} className="relative flex flex-col items-center justify-center">
                  <div className=" w-full bg-gray-900 shadow-lg rounded-xl p-6 relative group/car">
                    <div className="flex flex-col ">
                      <Image
                        width={500}
                        height={500}
                        src={car.image}
                        alt={`${car.make} ${car.model}`}
                        className="w-full aspect-video object-cover rounded-2xl mb-3" />
                      <div className="flex-auto justify-evenly">
                        <div className="flex flex-wrap ">
                          <div className="w-full flex-none text-sm flex items-center text-gray-600">
                            <span className="mr-2 text-gray-400">{car.make}</span>
                          </div>
                          <div className="flex items-center w-full justify-between min-w-0 ">
                            <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover truncate ">{car.model} <span className="text-secondary whitespace-nowrap text-gray-600">{car.year}</span></h2>
                            <Link href={`/cars/${car.make}/${car.model}`} className="absolute inset-0 group-hover/car:border-purple-500 transition rounded-xl border border-gray-900"></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {cars.list?.length && <EndList />}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

type Result = GetServerSidePropsResult<null | any>;

export const getServerSideProps = appWrapper.getServerSideProps(store => async ({req, res}): Promise<Result>  => {
  try {
    const page = '' + store.getState().cars.page;
    const session = await getSession(req.cookies);

    if (session) {
      (store.dispatch as AppDispatch)(userLogin(session));
    }

    await (store.dispatch as AppDispatch)(getAsyncCarsList({page}));

    return {props: null}
  } catch (err) {
    return {props: {err}}
  };
});
