import { FormEvent, useState } from "react"
import cn from "classnames";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/shared/store";
import { userLogin, userLogout } from "@/entities";
import Link from "next/link";
// import { useRouter, usePathname } from "next/navigation";
import { usePathname } from "next/navigation";
import { routes } from "@/shared";

export const Auth = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector(state => state.user);
  // const router = useRouter();
  const pathname = usePathname();
  const dispatch = useAppDispatch();

  const login = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    setIsOpen(false);

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get('user_name');

      if (!name) return;

      const {data} = await axios(`${routes.authApi}/login`, {
        method: 'POST',
        data: {name},
      });
      
      dispatch(userLogin(data));
    } catch(err) {
      console.log(err);
    }
  }

  const logout = async () => {
    await axios(`${routes.authApi}/logout`);
    setIsOpen(false);
    dispatch(userLogout());
  }

  return (
    <div className={cn('fixed right-0 pr-4 bottom-14 bg-gray-900 z-40 rounded-s-full flex items-center translate-x-[calc(100%-72px)] transition group [&.is-open]:translate-x-0', isOpen && 'is-open')}>
      <button onClick={() => setIsOpen(!isOpen)} type="button" className="relative text-gray-200 p-3 transition rounded-full z-10 bg-gray-900 group-[.is-open]:text-purple-500">
        {user.name ?
          <svg className="block w-12 h-12 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor"  viewBox="0 0 60 60">
	          <path d="M52.179,40.5l-5.596,8.04l-3.949-3.241c-0.426-0.352-1.057-0.287-1.407,0.138c-0.351,0.427-0.289,1.058,0.139,1.407 l4.786,3.929C46.331,50.921,46.556,51,46.786,51c0.045,0,0.091-0.003,0.137-0.01c0.276-0.038,0.524-0.19,0.684-0.419l6.214-8.929 c0.315-0.453,0.204-1.076-0.25-1.392C53.117,39.933,52.495,40.046,52.179,40.5z"/>
	          <path d="M54.164,35.163C54.709,32.978,55,30.742,55,28.5C55,13.337,42.664,1,27.5,1S0,13.337,0,28.5 c0,8.01,3.444,15.229,8.927,20.259l-0.026,0.023l0.891,0.751c0.056,0.047,0.117,0.086,0.173,0.133 c0.477,0.396,0.972,0.772,1.476,1.136c0.159,0.115,0.318,0.23,0.479,0.341c0.535,0.369,1.085,0.719,1.646,1.051 c0.122,0.071,0.244,0.141,0.366,0.211c0.613,0.349,1.239,0.678,1.881,0.981c0.047,0.022,0.094,0.042,0.141,0.064 c2.089,0.971,4.319,1.684,6.65,2.105c0.062,0.011,0.123,0.022,0.185,0.033c0.723,0.125,1.455,0.225,2.197,0.292 c0.09,0.008,0.181,0.013,0.271,0.021C25.998,55.961,26.744,56,27.5,56c3.262,0,6.454-0.577,9.503-1.702 C39.389,57.168,42.984,59,47,59c7.168,0,13-5.832,13-13C60,41.478,57.677,37.492,54.164,35.163z M2,28.5C2,14.439,13.439,3,27.5,3 S53,14.439,53,28.5c0,1.903-0.214,3.804-0.639,5.666c-0.017-0.008-0.036-0.013-0.053-0.021c-0.376-0.169-0.762-0.32-1.156-0.453   c-0.034-0.011-0.067-0.026-0.101-0.037c-0.411-0.135-0.83-0.251-1.258-0.345c-0.02-0.005-0.04-0.011-0.06-0.016   c-0.417-0.09-0.841-0.158-1.271-0.207c-0.03-0.004-0.06-0.01-0.09-0.014C47.921,33.027,47.464,33,47,33 c-5.923,0-10.923,3.986-12.485,9.413C34.077,42,33.818,41.425,33.818,40.8v-2.957c0.198-0.243,0.405-0.518,0.617-0.817   c1.096-1.547,1.975-3.269,2.616-5.123c1.266-0.602,2.085-1.864,2.085-3.289v-3.545c0-0.866-0.318-1.708-0.886-2.369v-4.667 c0.052-0.52,0.236-3.448-1.883-5.864C34.524,10.065,31.541,9,27.5,9s-7.024,1.065-8.867,3.168 c-2.119,2.416-1.935,5.346-1.883,5.864v4.667c-0.568,0.661-0.886,1.503-0.886,2.369v3.545c0,1.101,0.494,2.128,1.339,2.821 c0.81,3.173,2.476,5.575,3.092,6.389v2.894c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313c-0.253,0.138-0.502,0.298-0.752,0.477   C5.276,42.792,2,36.022,2,28.5z M25.605,53.922c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.266-0.131-1.893-0.234 c-0.026-0.004-0.052-0.01-0.077-0.014c-1.327-0.222-2.632-0.548-3.903-0.974c-0.034-0.011-0.068-0.023-0.102-0.035 c-1.237-0.42-2.44-0.939-3.601-1.544c-0.067-0.035-0.135-0.068-0.201-0.103c-0.515-0.275-1.019-0.573-1.515-0.883 c-0.143-0.09-0.284-0.181-0.425-0.273c-0.456-0.298-0.905-0.608-1.343-0.936c-0.045-0.034-0.088-0.07-0.133-0.104 c0.032-0.018,0.064-0.036,0.097-0.054l7.907-4.313c1.359-0.742,2.204-2.165,2.204-3.714v-3.603l-0.233-0.278 c-0.021-0.025-2.176-2.634-2.999-6.215l-0.091-0.396l-0.341-0.221c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545 c0-0.465,0.198-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131c-0.003-0.024-0.298-2.429,1.396-4.36 C21.583,11.837,24.06,11,27.5,11c3.425,0,5.897,0.83,7.346,2.466c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298 c0.359,0.324,0.557,0.758,0.557,1.223v3.545c0,0.724-0.475,1.356-1.181,1.574l-0.498,0.154l-0.16,0.496 c-0.589,1.833-1.429,3.525-2.496,5.032c-0.259,0.367-0.514,0.695-0.736,0.948l-0.248,0.283V40.8c0,1.587,0.868,3.015,2.268,3.746   C34.033,45.024,34,45.508,34,46c0,0.292,0.01,0.583,0.029,0.873c0.007,0.103,0.021,0.205,0.031,0.307   c0.009,0.096,0.018,0.191,0.029,0.287c0.01,0.09,0.015,0.181,0.027,0.27c0.023,0.17,0.056,0.338,0.086,0.507   c0.02,0.115,0.035,0.231,0.058,0.345c0,0,0.002,0.008,0.003,0.012c0.006,0.03,0.015,0.058,0.021,0.088   c0.031,0.146,0.068,0.291,0.104,0.436c0.025,0.101,0.045,0.202,0.072,0.302c0.024,0.088,0.055,0.173,0.081,0.26   c0.034,0.116,0.07,0.231,0.108,0.345c0.024,0.072,0.042,0.145,0.067,0.216c0.07,0.201,0.15,0.399,0.23,0.596   c0.001,0.003,0.002,0.005,0.003,0.008c0.061,0.15,0.125,0.297,0.191,0.444c0.049,0.109,0.1,0.218,0.152,0.326   c0.034,0.071,0.064,0.143,0.099,0.213c0.023,0.046,0.05,0.09,0.074,0.136c0.084,0.163,0.173,0.322,0.264,0.48   c0.027,0.047,0.051,0.096,0.078,0.143C33.119,53.527,30.33,54,27.5,54C26.866,54,26.234,53.969,25.605,53.922z M47,57   c-3.661,0-6.901-1.805-8.902-4.564c-0.083-0.114-0.158-0.231-0.236-0.347c-0.054-0.08-0.111-0.158-0.162-0.239   c-0.043-0.069-0.085-0.138-0.127-0.208c-0.045-0.074-0.085-0.15-0.128-0.225c-0.069-0.122-0.143-0.241-0.207-0.365   c-0.047-0.091-0.089-0.185-0.134-0.278c-0.012-0.025-0.023-0.051-0.035-0.076c-0.075-0.157-0.153-0.312-0.221-0.472   c-0.036-0.085-0.063-0.173-0.097-0.258c-0.077-0.199-0.155-0.398-0.221-0.602c-0.031-0.095-0.055-0.193-0.083-0.289   c-0.009-0.03-0.017-0.059-0.025-0.088c-0.056-0.199-0.11-0.399-0.155-0.603c-0.014-0.063-0.025-0.127-0.038-0.191   c-0.012-0.06-0.025-0.121-0.036-0.181c-0.041-0.222-0.075-0.446-0.103-0.672c-0.003-0.026-0.006-0.052-0.009-0.079   c-0.009-0.082-0.022-0.164-0.029-0.246C36.021,46.681,36,46.343,36,46c0-0.315,0.021-0.626,0.047-0.934   c0.028-0.295,0.067-0.599,0.122-0.919l0.074-0.433C37.298,38.742,41.719,35,47,35c0.446,0,0.89,0.034,1.332,0.089   c0.101,0.012,0.199,0.031,0.299,0.046c0.365,0.055,0.728,0.127,1.086,0.219c0.075,0.019,0.15,0.037,0.225,0.058   c0.882,0.247,1.735,0.601,2.537,1.063C55.773,38.377,58,41.93,58,46C58,52.065,53.065,57,47,57z"/>
          </svg> :
          <svg className="block w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 58 58">
            <path d="M53.5,40v-1c0-3.859-3.14-7-7-7s-7,3.141-7,7v1h-4v18h22V40H53.5z M41.5,39c0-2.757,2.243-5,5-5s5,2.243,5,5v1h-10V39z M55.5,56h-18V42h2h14h2V56z"/>
            <path d="M46.5,44c-2.206,0-4,1.794-4,4c0,1.859,1.28,3.411,3,3.858V53c0,0.553,0.448,1,1,1s1-0.447,1-1v-1.142   c1.72-0.447,3-1.999,3-3.858C50.5,45.794,48.706,44,46.5,44z M46.5,50c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2   S47.603,50,46.5,50z"/>
            <path d="M28,10c3.425,0,5.897,0.83,7.346,2.466c1.692,1.911,1.415,4.361,1.413,4.381l-0.009,5.701l0.33,0.298   c0.359,0.324,0.557,0.758,0.557,1.223v3.545c0,0.724-0.475,1.356-1.181,1.574c-0.527,0.163-0.823,0.723-0.661,1.251   c0.163,0.527,0.721,0.824,1.25,0.661c1.55-0.479,2.591-1.879,2.591-3.486v-3.545c0-0.866-0.318-1.708-0.886-2.369v-4.667   c0.052-0.52,0.236-3.448-1.883-5.864C35.024,9.065,32.041,8,28,8s-7.024,1.065-8.867,3.168c-2.119,2.416-1.935,5.346-1.883,5.864   v4.667c-0.568,0.661-0.886,1.503-0.886,2.369v3.545c0,1.101,0.494,2.128,1.339,2.821c0.81,3.173,2.476,5.575,3.092,6.389v2.894   c0,0.816-0.445,1.566-1.162,1.958l-7.907,4.313c-0.253,0.138-0.502,0.298-0.752,0.477C5.776,41.792,2.5,35.022,2.5,27.5   C2.5,13.439,13.939,2,28,2s25.5,11.439,25.5,25.5c0,0.553,0.448,1,1,1s1-0.447,1-1C55.5,12.337,43.164,0,28,0S0.5,12.337,0.5,27.5   c0,8.01,3.444,15.229,8.927,20.259l-0.026,0.023l0.891,0.751c0.056,0.047,0.117,0.086,0.173,0.133 c0.477,0.396,0.972,0.772,1.476,1.136c0.159,0.115,0.318,0.23,0.479,0.341c0.535,0.369,1.085,0.719,1.646,1.051 c0.122,0.071,0.244,0.141,0.366,0.211c0.613,0.349,1.239,0.678,1.881,0.981c0.047,0.022,0.094,0.042,0.141,0.064 c2.089,0.971,4.319,1.684,6.65,2.105c0.062,0.011,0.123,0.022,0.185,0.033c0.723,0.125,1.455,0.225,2.197,0.292   c0.09,0.008,0.181,0.013,0.271,0.021C26.498,54.961,27.244,55,28,55c0.552,0,1-0.447,1-1s-0.448-1-1-1 c-0.634,0-1.266-0.031-1.895-0.078c-0.109-0.008-0.218-0.015-0.326-0.025c-0.634-0.056-1.266-0.131-1.893-0.234 c-0.026-0.004-0.052-0.01-0.077-0.014c-1.327-0.222-2.632-0.548-3.903-0.974c-0.034-0.011-0.068-0.023-0.102-0.035 c-1.237-0.42-2.44-0.939-3.601-1.544c-0.067-0.035-0.135-0.068-0.201-0.103c-0.515-0.275-1.019-0.573-1.515-0.883 c-0.143-0.09-0.284-0.181-0.425-0.273c-0.456-0.298-0.905-0.608-1.343-0.936c-0.045-0.034-0.088-0.07-0.133-0.104 c0.032-0.018,0.064-0.036,0.097-0.054l7.907-4.313c1.359-0.742,2.204-2.165,2.204-3.714v-3.603l-0.233-0.278 c-0.021-0.025-2.176-2.634-2.999-6.215l-0.091-0.396l-0.341-0.221c-0.481-0.311-0.769-0.831-0.769-1.392v-3.545 c0-0.465,0.198-0.898,0.557-1.223l0.33-0.298v-5.57l-0.009-0.131c-0.003-0.024-0.298-2.429,1.396-4.36   C22.083,10.837,24.56,10,28,10z"/>
          </svg>
        }
      </button>
      {!user.name ?
        <form onSubmit={login} className="transition -ml-3 translate-x-1/2 group-[&.is-open]:translate-x-0 flex items-center">
          <input name="user_name" className="px-4 mr-1 flex-shrink-0 py-1 bg-gray-200 rounded-sm text-gray-900 outline-purple-500" placeholder="Same user name..." type="text" />
          <button type="submit" className="bg-gray-900 flex items-center justify-center p-2 rounded-sm text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="block w-6 h-6">
              <path d="M11 16L15 12M15 12L11 8M15 12H3M4.51555 17C6.13007 19.412 8.87958 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C8.87958 3 6.13007 4.58803 4.51555 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form> :

        <div className="flex items-center [&>not(:last-child)]:mr-3">
          <p className="text-[1.6rem] text-white max-w-[10rem] text-ellipsis whitespace-nowrap overflow-hidden">{user.name}</p>
          <button onClick={logout} type="button" className="bg-transparent flex items-center justify-center p-2 rounded-sm text-white transition hover:text-purple-500">
            <svg className="block w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"> 
              <path d="M13 3H12C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21H13M17 8L21 12M21 12L17 16M21 12H9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
          </button>

          { pathname !== "/cars/new" &&
            <Link href={"/cars/new"} onClick={() => setIsOpen(false)} className="bg-transparent flex items-center justify-center p-2 rounded-sm text-white transition hover:text-purple-500">
              <svg className="block w-8 h-8" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V16M8 12L10 12M16 12L12 12M4 16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4H8C5.79086 4 4 5.79086 4 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link> 
          }
        </div>
      }
    </div>
  )
}