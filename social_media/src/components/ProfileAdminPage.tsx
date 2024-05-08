import React, { createElement } from "react";
import { users, setUsers, usersType } from "../utils.py/users";
import { PROFILE_ADMIN } from "../constants/routes";
import Row from "./Row";

// type ProfileAdminPageProps = {
//   [key: string]: string;
// };

export default function ProfileAdminPage(profileObj: usersType) {
  console.log("ProfileObj ", profileObj);
  console.log("ProfileObj type", typeof profileObj);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const profileObjCopy = { ...profileObj };

    try {
      profileObjCopy.fullName =
        event.target.name.value + " " + event.target.surname.value;
      profileObjCopy.username = event.target.username.value;
      profileObjCopy.email = event.target.email.value;
      profileObjCopy.name = event.target.name.value;
      profileObjCopy.surname = event.target.surname.value;
      profileObjCopy.phone_number = event.target.phone_number.value;
      profileObjCopy.address1 = event.target.address1.value;
      profileObjCopy.address2 = event.target.address2.value;
      profileObjCopy.postcode = event.target.postcode.value;
      profileObjCopy.area = event.target.area.value;
      profileObjCopy.education = event.target.education.value;
      profileObjCopy.country = event.target.country.value;
      profileObjCopy.state = event.target.state.value;
      profileObjCopy.region = event.target.region.value;
      profileObjCopy.bio = event.target.bio.value;
      profileObjCopy.avatarUrl = event.target.avatarUrl.value;

      setUsers([...users, profileObjCopy]);
    } catch (error) {
      var p = document.createElement("p");
      p.innerHTML = `Error: Enter valid data to each of fields!`;
      document.getElementById("submitButton")?.appendChild(p);
    }
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <Row>
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              alt="profile img"
              src={profileObj.avatarUrl}
            />
            <span className="font-weight-bold">{profileObj.fullName}</span>
            <span className="text-black-50">{profileObj.email}</span>
            <span> </span>
          </div>
        </div>
        <form method="POST" action={PROFILE_ADMIN} onSubmit={handleSubmit}>
          <div className="col-md-5 border-right">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="text-right">Profile Settings</h4>
              </div>
              <div className="row mt-2">
                <div className="col-md-6">
                  <label className="labels">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="first name"
                    value={profileObj.name}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Surname</label>
                  <input
                    type="text"
                    className="form-control"
                    value={profileObj.surname}
                    name="surname"
                    placeholder="surname"
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">Username</label>
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="username"
                    value={profileObj.username}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <label className="labels">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone_number"
                    placeholder="enter phone number"
                    value={profileObj.phone_number}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 1</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address1"
                    placeholder="enter address line 1"
                    value={profileObj.address1}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Address Line 2</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address2"
                    placeholder="enter address line 2"
                    value={profileObj.address2}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Postcode</label>
                  <input
                    type="text"
                    className="form-control"
                    name="postcode"
                    placeholder="enter address line 2"
                    value={profileObj.postcode}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">State</label>
                  <input
                    type="text"
                    name="state"
                    className="form-control"
                    placeholder="state"
                    value={profileObj.state}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Area</label>
                  <input
                    type="text"
                    name="area"
                    className="form-control"
                    placeholder="area"
                    value={profileObj.area}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="enter email"
                    value={profileObj.email}
                  />
                </div>
                <div className="col-md-12">
                  <label className="labels">Education</label>
                  <input
                    type="text"
                    name="education"
                    className="form-control"
                    placeholder="education"
                    value={profileObj.education}
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
                    value={profileObj.country}
                  />
                </div>
                <div className="col-md-6">
                  <label className="labels">State/Region</label>
                  <input
                    type="text"
                    name="region"
                    className="form-control"
                    value={profileObj.region}
                    placeholder="region"
                  />
                </div>
              </div>
              <div id="submitButton" className="mt-5 text-center">
                <button className="btn btn-primary" type="submit">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3 py-5">
              {/* <div className="d-flex justify-content-between align-items-center">
              <span>Edit Experience</span>
              <span className="btn btn-secondary border px-3 p-1">
              &nbsp;Experience
              </span>
            </div> */}
              <div className="col-md-12">
                <label className="">Bio</label>
                <input
                  type="text"
                  name="bio"
                  className="form-control"
                  placeholder="additional details"
                  value={profileObj.bio}
                />
              </div>
            </div>
          </div>
        </form>
      </Row>
    </div>
  );
}
