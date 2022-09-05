import React, { memo } from "react";

const TopRibbon = () => {
  return (
    <>
      <div
        className="container-fluid py-2"
        style={{ backgroundColor: "#000000", fontSize: "12px" }}
      >
        <div className="container">
          <p className="text-light mb-0 d-flex justify-content-between w-100">
            <strong>Strict COVID 19 protocols are in place. Store hours may vary from
              center hours. Contact each retailer or restaurant directly for more
              information.{" "}</strong>

            
            {/* <marquee width="100%" direction="left"><span className="text-warning font-weight-bold">In view of the elections, The Grand Venice Mall will be closed on 10th February 2022.{" "}</span></marquee> */}
            
            {/* <ImCross /> */}
          </p>

        </div>
      </div>
    </>
  );
}

export default memo(TopRibbon);
