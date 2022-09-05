import React, { memo, useState } from "react";
import firebase from "firebase";
import axios from "axios";

const SubscribeSection = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    access: false,
  });

  const addDatatoState = (e) => {
    setuserData({ ...userData, [e.target.name]: e.target.value });
  };

  // console.log("data is: ", userData);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name == "" || userData.email == "") {
      alert("please fill the form correctly");
    } else {
      firebase
        .firestore()
        .collection("users")
        .add(userData)
        .then((response) => {
          axios.post(
            "https://us-central1-the-mall-site.cloudfunctions.net/sendEmail",
            {
              to: "info@veniceindia.com",
              subject: "[Access Request] MALL INSIDER",
              html_content: `<html><h3>User details</h3><p><b>Name: </b>${userData.name}</p><p><b>Email address: </b>${userData.email}</p></html>`,
              bcc: "me@iarani.com"
            }
          );
          alert(`Thanks for registering`);
        })
        .catch((e) => console.log("error", e))
        .finally(() => setuserData({ name: "", email: "" }));
    }
  };

  return (
    <>
      <div
        className="container-fluid py-5"
        style={{ backgroundColor: "black" }}
      >
        <div className="container">
          <p
            className="d-none d-md-block text-light text-center"
            style={{
              fontSize: "1.5rem",
              lineHeight: "2",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            BECOME A MALL INSIDER TODAY.
          </p>
          <div className="p-2 mx-auto rounded" style={{ maxWidth: "600px" }}>
            <form className="form-inline" onSubmit={handleSubmit}>
              <div className="row gx-1">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control mr-sm-2 mb-md-0 mb-2"
                    id="inlineFormInputName"
                    placeholder="Your name"
                    name="name"
                    onChange={addDatatoState}
                    value={userData?.name}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="email"
                    className="form-control mr-sm-2 mb-md-0 mb-2"
                    id="inlineFormInputEmail"
                    placeholder="Your email"
                    name="email"
                    onChange={addDatatoState}
                    value={userData?.email}
                  />
                </div>
                <div className="col-md-4">
                  <button type="submit" className="btn btn-danger w-100">
                    <span className="small">REQUEST ACCESS</span>
                  </button>
                </div>
              </div>
            </form>
            <div className="row gx-1 mt-5">
              <div className="col-md-12 text-center">
                <a
                  href="/reward"
                  className="text-light text-underline text-decoration-none border-bottom"
                >
                  Learn more about <strong>The Mall Insider Pass</strong>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(SubscribeSection);
