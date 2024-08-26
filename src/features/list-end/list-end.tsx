import {useEffect, useRef} from 'react';
import { useAppDispatch, useAppSelector } from '@/shared';
import { getAsyncCarsList, setPage } from '@/entities';

export const EndList = () => {
  const ref = useRef(null);
  const dispatch = useAppDispatch();
  const cars = useAppSelector(state => state.cars);

  useEffect(() => {
    let observerRefValue: HTMLInputElement | null = null;

    if (ref.current) {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          dispatch(setPage(cars.page + 1))
          dispatch(getAsyncCarsList({page: `${cars.page + 1}`}));
        }
      }, {
        rootMargin: '40px'
      });

      observer.observe(ref.current);
      observerRefValue = ref.current;

      return () => {
        if (observerRefValue) {
          observer.unobserve(observerRefValue);
        }
      };
    }
  }, [ref, cars, dispatch]);

  return (
    <>
      {cars.notLastPage && cars.status !== "loading" && <li ref={ref} className='' />}
    </>
  );
};

