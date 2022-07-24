import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries } from "../features/country/countrySlice";
import { SpinnerInfinity } from "spinners-react";
import { useNavigate } from "react-router-dom";

const Selector = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, countries } = useSelector((state) => state.country);

  const [country, setCountry] = useState("");

  const onChangeHandler = (e) => {
    const value = e.target.value.split(" ")[1];
    setCountry(value);
  };

  useEffect(() => {
    dispatch(getCountries());
  }, [dispatch]);

  useEffect(() => {
    if (country !== "") {
      navigate({
        pathname: "universities",
        search: `?key=${country}`,
      });
    }
  }, [country, navigate, dispatch]);

  if (isLoading) {
    return <SpinnerInfinity />;
  }

  return (
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <select
          className="form-select appearance-none
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding bg-no-repeat
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={country}
          onChange={onChangeHandler}
        >
          <option>Select Country</option>
          {countries.map((country) => {
            return (
              <option
                value={country.name + " " + country.code}
                key={country._id}
              >
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Selector;
