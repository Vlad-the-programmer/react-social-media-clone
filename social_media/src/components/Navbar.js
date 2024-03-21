import Icon from "./Icon.tsx";
import NavbarLink from "./NavbarLink.tsx";
import Avatar from "./Avatar.tsx";


function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand mt-2 mt-lg-0" href="http://www.w3.org">
                    <Icon 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="40" 
                            height="40" 
                            fill="currentColor" 
                            className="bi bi-facebook" 
                            viewBox="0 0 16 16"
                    >
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </Icon>
                </a>


                <div class="d-flex align-items-end justify-content-center">
                    <NavbarLink 
                            link="http://www.w3.org" 
                            text="Search Bar"
                    >
                        <Icon  
                            width="16" 
                            height="16" 
                            className="bi bi-search" 
                        >
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </Icon>
                    </NavbarLink> 

                    <NavbarLink 
                        link="http://www.w3.org" 
                        text="Home"
                    >
                        <Icon  
                            width="16" 
                            height="16" 
                            class="bi bi-house-door"
                        >
                            <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                      </Icon>
                    </NavbarLink> 

                    <NavbarLink 
                        link="http://www.w3.org" 
                        text="People list"
                    >
                        <Icon  
                            width="16" 
                            height="16" 
                            className="bi bi-people-fill" 
                        >
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                        </Icon>
                    </NavbarLink> 
                </div>

                <div class="d-flex align-items-end justify-content-end">
                    <NavbarLink 
                        link="http://www.w3.org" 
                        text="Messenger"
                    >
                        <Icon  
                            width="16" 
                            height="16" 
                            className="bi bi-messenger" 
                        >
                            <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.64.64 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.64.64 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
                        </Icon>
                    </NavbarLink> 

                    <NavbarLink 
                        link="http://www.w3.org" 
                        text="Notofication bell"
                    >
                        <Icon  
                            width="16" 
                            height="16" 
                            className="bi bi-bell-fill" 
                        >
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                        </Icon>
                    </NavbarLink> 

                    <div class="dropdown">
                        <Avatar 
                            imgLink="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            avatarLink="/"
                            imgHeight="25"
                            altText="Black and White Portrait of a Man"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;