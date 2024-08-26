import Link from "next/link";
import { Roboto } from "next/font/google";
const roboto = Roboto({ subsets: ["cyrillic"], weight: ['100', '300', '400'] });

export default function Error() {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-no-repeat bg-center bg-cover" style={{backgroundImage: "url(https://images.unsplash.com/photo-1604262725913-1c415cd27564?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2142&q=80)"}}>
      <div className="group/car absolute top-0 left-0 right-0 bottom-0 bg-black opacity-80 z-0"></div>
      <div className={roboto.className + ' relative z-10 text-white flex flex-col items-center'}>
        <h1 className="text-[12rem] font-thin">404</h1>
        <p>Oops! Something is wrong.</p>
        <Link className="button" href="/">Go back in initial page, is better.</Link>
      </div>
    </div>
  )
}
