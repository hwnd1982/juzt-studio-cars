import { AppDispatch, appWrapper, useAppSelector } from "@/shared";
import { userLogin } from "@/entities";
import { GetServerSidePropsResult } from "next";
import { getSession } from "@/shared";
import { useEffect } from "react"; 
import { useRouter } from "next/navigation"; 
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["cyrillic"], weight: ['100', '300', '400'] });

export default function Home() {
  const router = useRouter();
  const user = useAppSelector(state => state.user);

  useEffect(() => {
    if (!user.name) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <section className="flex min-h-screen flex-col items-center justify-between">
      <div  className="min-w-screen fixed left-0 top-0 right-0 bottom-0 z-10 bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url(https://images.unsplash.com/photo-1604262725913-1c415cd27564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2142&q=80)"}}>
        <div className="group/car absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 -z-10"></div>
        <div className="overflow-y-auto h-full z-20 scrollbar-thin scrollbar-track-rounded-1/2 scrollbar-thumb-slate-700 scrollbar-track-transparent">
          <div className="container h-full">
            <div className={roboto.className + ' relative z-10 text-white flex flex-col justify-center items-center h-full'}>
              <h1 className="text-[5rem] font-thin">Adding new car soon...</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Result = GetServerSidePropsResult<null | any>;

export const getServerSideProps = appWrapper.getServerSideProps(store => async ({req, res}): Promise<Result>  => {
  try {
    const session = await getSession(req.cookies);

    if (session) {
      (store.dispatch as AppDispatch)(userLogin(session));
    }

    if (store.getState().user.name) {
      return {
        props: {
          redirect: '/'
        }
      }
    }

    return {props: null}
  } catch (err) {
    return {props: {err}}
  };
});
