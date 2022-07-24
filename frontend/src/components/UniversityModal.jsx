import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getUniversity } from "../features/university/universitySlice";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { SpinnerDiamond } from "spinners-react";

const UniversityModal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, universities } = useSelector((state) => state.university);

  useEffect(() => {
    dispatch(getUniversity(id));
  }, [dispatch, id]);

  return (
    <Popup open={true} modal>
      <div className="modal">
        <button
          className="close"
          onClick={() => {
            navigate(-1);
          }}
        >
          &times;
        </button>
        <div className="header">University Details</div>
        <div className="content">
          {" "}
          {isLoading ? (
            <SpinnerDiamond />
          ) : (
            <p>
              Name {universities.name}
              <br />
              Country {universities.country}
              <br />
              Domain {universities.domains}
              <br />
              Web Page {universities.web_pages}
              <br />
              State/Province {universities.state_province}
            </p>
          )}
        </div>
      </div>
    </Popup>
  );
};

export default UniversityModal;
