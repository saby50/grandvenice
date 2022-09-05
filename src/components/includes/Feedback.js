import React,{memo} from "react";

const Feedback = () => {
  return (
    <>
      <div className="feedback">
        <button type="submit" className="btn btn-danger w-35">
          <span style={{ fontWeight: "700" }}
          >Feedback</span>
        </button>
      </div>
    </>
  );
}

export default memo(Feedback);
