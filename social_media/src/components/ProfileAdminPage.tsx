import React, { useState } from "react";
import { usersType, updateUsersObj } from "../utils/users";
import { PROFILE_ADMIN, SUCCESS_REDIRECT_PAGE } from "../constants/routes";
import Row from "./Row";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

type ProfileAdminPageProps = {
  profileObj: usersType;
  i: string;
};

export default function ProfileAdminPage({
  profileObj,
  i,
}: ProfileAdminPageProps) {
  console.log("ProfileObj ", profileObj);
  console.log("ProfileObj type", typeof profileObj);
  const [firstName, setFirstName] = useState(profileObj.firstName);
  const [fullName, setFullName] = useState(profileObj.fullName);
  const [username, setUsername] = useState(profileObj.username);
  const [email, setEmail] = useState(profileObj.email);
  const [surname, setSurname] = useState(profileObj.surname);
  const [phoneNumber, setPhoneNumber] = useState(profileObj.phoneNumber);
  const [address1, setAddress1] = useState(profileObj.address1);
  const [address2, setAddress2] = useState(profileObj.address2);
  const [postcode, setPostcode] = useState(profileObj.postcode);
  const [area, setArea] = useState(profileObj.area);
  const [education, setEducation] = useState(profileObj.education);
  const [country, setCountry] = useState(profileObj.country);
  const [state, setState] = useState(profileObj.state);
  const [region, setRegion] = useState(profileObj.region);
  const [bio, setBio] = useState(profileObj.bio);
  const [avatarUrl, setAvatarUrl] = useState(profileObj.avatarUrl);

  const navigate = useNavigate();
  console.log("Avatarurl", avatarUrl);

  const onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      var fileName = event.target.files[0].name;
      var file = event.target.files[0];
      console.log("File", file);
      setAvatarUrl(URL.createObjectURL(event.target.files[0]));
      console.log("AvatarLink ", avatarUrl);

      // $.ajax({
      //   type: "POST",
      //   url: "./src/utils/script.py",
      //   data: {
      //     param: {
      //       fileToCopyPath: file,
      //       dest: process.env.PUBLIC_URL + `/media/`,
      //     },
      //   },
      // }).done(function (o) {
      //   // do something
      // });
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const profileObjCopy = {
      firstName,
      fullName,
      username,
      email,
      surname,
      phoneNumber,
      address1,
      address2,
      postcode,
      area,
      education,
      country,
      state,
      region,
      bio,
      avatarUrl,
    };

    try {
      setFullName(
        event.target.firstName.value + " " + event.target.surname.value
      );

      updateUsersObj(i, profileObjCopy);
    } catch (error) {
      console.log(error);
      var p = document.createElement("p");
      p.innerHTML = `Error: Enter valid data to each of fields!`;
      p.classList.add("text-danger");
      document.getElementById("submitButtonDiv")?.appendChild(p);
    }
  };
  return (
    <>
      <div className="container rounded bg-white mt-5 mb-5">
        <Row>
          <div className="col-md-3 border-right mx-3 ms-0">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="170px"
                height="200px"
                alt="profile img"
                src={avatarUrl}
              />
              <div className=" margin_bottom">
                <input
                  type="file"
                  id="inpFile"
                  style={{ display: "none" }}
                  onChange={onImageChange}
                />
                <button
                  className="btn btn-light"
                  // style={{ display: "none" }}
                  onClick={() => document.getElementById("inpFile")?.click()}
                >
                  Select image
                </button>
                <img id="target" />
              </div>
              {/* <main>
                <div className="dropzone">
                  <img
                    src={process.env.PUBLIC_URL + "/media/upload.png"}
                    alt="upload"
                    width="100px"
                  />

                  <input
                    type="file"
                    className="files"
                    id="images"
                    accept="image/png, image/jpeg"
                    // multiple
                  />
                  <label htmlFor="images">Choose multiple images</label>

                  <h3>or drag & drop your PNG or JPEG files here</h3>
                </div>
                <div className="image-list"></div>
              </main> */}
              <span className="font-weight-bold">{fullName}</span>
              <span className="text-black-50">{email}</span>
              <span> </span>
            </div>
          </div>
          <form
            method="POST"
            action={PROFILE_ADMIN}
            onSubmit={handleSubmit}
            className="col-md-8"
          >
            <Row>
              <div className="col-md-8 border-right">
                <div className="p-3 py-5">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">Name</label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Surname</label>
                      <input
                        type="text"
                        className="form-control"
                        name="surname"
                        placeholder="surname"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Username</label>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Mobile Number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="phoneNumber"
                        placeholder="enter phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Address Line 1</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address1"
                        placeholder="enter address line 1"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Address Line 2</label>
                      <input
                        type="text"
                        className="form-control"
                        name="address2"
                        placeholder="enter address line 2"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Postcode</label>
                      <input
                        type="text"
                        className="form-control"
                        name="postcode"
                        placeholder="enter address line 2"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">State</label>
                      <input
                        type="text"
                        name="state"
                        className="form-control"
                        placeholder="state"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Area</label>
                      <input
                        type="text"
                        name="area"
                        className="form-control"
                        placeholder="area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Email</label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="labels">Education</label>
                      <input
                        type="text"
                        name="education"
                        className="form-control"
                        placeholder="education"
                        value={education}
                        onChange={(e) => setEducation(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="labels">Country</label>
                      <input
                        type="text"
                        name="country"
                        className="form-control"
                        placeholder="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">State/Region</label>
                      <input
                        type="text"
                        name="region"
                        className="form-control"
                        placeholder="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                      />
                    </div>
                  </div>
                  <div id="submitButtonDiv" className="mt-5 text-center">
                    <button
                      id="submitButton"
                      className="btn btn-primary"
                      type="submit"
                      onClick={() => navigate(SUCCESS_REDIRECT_PAGE)}
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="p-3 py-5">
                  <div className="col-md-12">
                    <label className="">Bio</label>
                    <input
                      type="text"
                      name="bio"
                      className="form-control"
                      placeholder="additional details"
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </Row>
          </form>
        </Row>
      </div>
    </>
  );
}
