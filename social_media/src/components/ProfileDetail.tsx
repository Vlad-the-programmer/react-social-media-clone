import React, { ReactNode, useState } from "react";

type ProfileDetailProps = {
  // postsCount: string;
  followers: string;
  followingUsersCount: string;
  userName: string;
  fullName: string;
  description: Array<string>;
  smallUnderFullNameText: string;
  profileImgLink: string;
  imgUrls: Array<Array<string>>;
  photosCount: string;
  children: ReactNode;
};

const getImages = (imgUrls: Array<string>) => {
  return imgUrls.map((imgUrl, i) => {
    return (
        <div className="col mb-2">
          <img src={imgUrl} alt={`image ${i}`} className="w-100 rounded-3" />
        </div>
    );
  });
};

function ProfileDetail(props: ProfileDetailProps) {
  const [isFollowed, setIsFollowed] = useState(false);
  const handleFollowClick = () => {
    if (isFollowed === true) {
      setIsFollowed(false);
    } else {
      setIsFollowed(true);
    }
  };
  return (
    <div className="container flex-shrink-0 py-5 h-100 w-75">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-md-10 col-lg-12 col-xl-12">
          <div className="card" style={{ borderRadius: "15px" }}>
            <div className="card-body p-4">
              <div className="d-flex text-black">
                <div className="flex-shrink-1">
                  <img
                    src={props.profileImgLink}
                    alt="..."
                    className="img-fluid"
                    style={{ width: "180px", borderRadius: "10px" }}
                  />
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5 className="mb-1">{props.fullName}</h5>
                  <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                    {props.smallUnderFullNameText}
                  </p>

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
                      onClick={handleFollowClick}
                    >
                      {isFollowed ? "UnFollow" : "Follow"}
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
                  <p className="mb-1 h5">{props.photosCount}</p>
                  <p className="small text-muted mb-0">Photos</p>
                </div>
                <div className="px-3">
                  <p className="mb-1 h5">{props.followers}</p>
                  <p className="small text-muted mb-0">Followers</p>
                </div>
                <div>
                  <p className="mb-1 h5">{props.followingUsersCount}</p>
                  <p className="small text-muted mb-0">Following</p>
                </div>
              </div>
            </div>
            <div className="card-body p-4 text-black">
              <div className="mb-5">
                <p className="lead fw-normal mb-1">About</p>
                <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                  {props.description.map((el, i) => {
                    return <p className="font-italic mb-1">{el}</p>;
                  })}
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
              {props.imgUrls.map((imageUrls, i) => {
                return (
                  <>
                    <div className="row g-2">{getImages(imageUrls)}</div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileDetail;
