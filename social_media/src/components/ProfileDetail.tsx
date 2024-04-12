import React, { ReactNode } from "react";
import Icon from "./Icon";

// type ProfileDetailProps = {
//   postsCount: Number,
//   followers: Number,
//   followingUsersCount: Number
//   userName: string,
//   fullName: string,
//   description: string,
//   children: ReactNode,
// };

function ProfileDetail() {
  return (
    <div className="container flex-shrink-0 py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-md-10 col-lg-12 col-xl-12">
          <div className="card" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-1">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="Generic placeholder image"
                    className="img-fluid"
                    style={{ width: "180px", borderRadius: "10px" }}
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">Danny McLoan</h5>
                  <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                    Senior Journalist
                  </p>
                  <div
                    className="d-flex justify-content-start rounded-3 p-2 mb-2"
                    style={{ backgroundColor: "#efefef" }}
                  >
                    <div>
                      <p className="small text-muted mb-1">Articles</p>
                      <p className="mb-0">41</p>
                    </div>
                    <div className="px-3">
                      <p className="small text-muted mb-1">Followers</p>
                      <p className="mb-0">976</p>
                    </div>
                    <div>
                      <p className="small text-muted mb-1">Rating</p>
                      <p className="mb-0">8.5</p>
                    </div>
                  </div>
                  <div className="d-flex pt-1">
                    <button
                      type="button"
                      className="btn btn-outline-primary me-1 flex-grow-1"
                    >
                      Chat
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary flex-grow-1"
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="p-4 text-black"
              style={{ backgroundColor: "#f8f9fa" }}
            >
              <div className="d-flex justify-content-end text-center py-1">
                <div>
                  <p className="mb-1 h5">253</p>
                  <p className="small text-muted mb-0">Photos</p>
                </div>
                <div className="px-3">
                  <p className="mb-1 h5">1026</p>
                  <p className="small text-muted mb-0">Followers</p>
                </div>
                <div>
                  <p className="mb-1 h5">478</p>
                  <p className="small text-muted mb-0">Following</p>
                </div>
              </div>
            </div>
            <div className="card-body p-4 text-black">
              <div className="mb-5">
                <p className="lead fw-normal mb-1">About</p>
                <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                  <p className="font-italic mb-1">Web Developer</p>
                  <p className="font-italic mb-1">Lives in New York</p>
                  <p className="font-italic mb-0">Photographer</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <p className="lead fw-normal mb-0">Recent photos</p>
                <p className="mb-0">
                  <a href="#!" className="text-muted">
                    Show all
                  </a>
                </p>
              </div>
              <div className="row g-2">
                <div className="col mb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(112).webp"
                    alt="image 1"
                    className="w-100 rounded-3"
                  />
                </div>
                <div className="col mb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(107).webp"
                    alt="image 1"
                    className="w-100 rounded-3"
                  />
                </div>
              </div>
              <div className="row g-2">
                <div className="col">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                    alt="image 1"
                    className="w-100 rounded-3"
                  />
                </div>
                <div className="col">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                    alt="image 1"
                    className="w-100 rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
