import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUniversities, reset } from "../features/university/universitySlice";
import { SpinnerInfinity } from "spinners-react";
import { useLocation } from "react-router-dom";
import MoreOptions from "./MoreOptions";

const Universities = () => {
  const dispatch = useDispatch();

  const search = useLocation().search;
  const key = new URLSearchParams(search).get("key");

  const { isLoading, universities } = useSelector((state) => state.university);

  useEffect(() => {
    dispatch(getUniversities(key));

    return () => {
      dispatch(reset());
    };
  }, [dispatch, key]);

  if (isLoading) {
    return <SpinnerInfinity />;
  }

  return (
    <>
      {Array.isArray(universities) ? (
        universities?.map((university) => {
          return (
            <div
              className="rounded-lg py-5 px-6 mb-4 text-base mb-3 m-4 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 hover:shadow-lg basis-1/2 flex justify-between"
              key={university._id}
            >
              {university?.name}
              <MoreOptions id={university._id} />
            </div>
          );
        })
      ) : (
        <></>
      )}
    </>
  );
};

export default Universities;
