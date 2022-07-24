import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import {
  createUniversity,
  updateUniversity,
  reset,
} from "../features/university/universitySlice";

const UniversityForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    domains: [""],
    web_pages: [""],
    alpha_two_code: "",
  });

  const { isSuccess, isError, message } = useSelector(
    (state) => state.university
  );

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(updateUniversity({ updatedData: formData, universityId: id }));
      if (isSuccess) {
        toast("Updated Successfully!");
      }
    } else {
      dispatch(createUniversity(formData));
      if (isSuccess) {
        toast("Created Successfully!");
      }
    }
  };

  const onChangeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    // dispatch(reset());

    if (isError) {
      toast.error(message);
    }

    // if (id && isSuccess) {
    //   toast("Updated Successfully!");
    // } else

    return () => {
      dispatch(reset());
    };
  }, [message, isError, dispatch, id, isSuccess]);

  return (
    <div className="flex justify-center">
      <div className="block p-10 rounded-lg shadow-lg bg-gray-100 max-w-sm my-20">
        <form onSubmit={onSubmitHandler}>
          <div className="form-group mb-6">
            <input
              type="text"
              name="name"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder={"University name"}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="country"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder={"Country name"}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="alpha_two_code"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder={"Country code"}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="domains"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder={"University domain"}
              onChange={onChangeHandler}
            />
          </div>
          <div className="form-group mb-6">
            <input
              type="text"
              name="web_pages"
              className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder={"University web page"}
              onChange={onChangeHandler}
            />
          </div>
          <button
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            {id ? "Update University" : "ADD UNIVERSITY"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UniversityForm;
