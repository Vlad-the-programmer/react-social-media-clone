import React from "react";

type AvatarProps = {
    avatarLink: string,
    imgLink: string,
    altText: string,
    imgHeight: string
}

function Avatar(props: AvatarProps){
    return (
        <a
            data-mdb-dropdown-init
            className="dropdown-toggle d-flex align-items-center hidden-arrow"
            href={props.avatarLink}
            id="navbarDropdownMenuAvatar"
            role="button"
            aria-expanded="false"
        >
            <img
                src={props.imgLink}
                className="rounded-circle"
                height={props.imgHeight}
                alt={props.altText}
                loading="lazy"
            />
        </a>
    );
}


export default Avatar;