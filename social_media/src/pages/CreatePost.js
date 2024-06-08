import React from "react"

export default function CreatePost() {
    return (
        <section class="col-sm-8 col-md-10 p-3 mt-3 mb-3" style={{ backgroundColor: "#8fc4b7" }}>
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-xl-9">

                        <h1 class="text-white mb-4">Create your post</h1>

                        <div class="card" style={{ borderRadius: "15px" }}>
                            <div class="card-body">

                                <div class="row align-items-center pt-4 pb-3">
                                    <div class="col-md-3 ps-5">

                                        <h6 class="mb-0">Title</h6>

                                    </div>
                                    <div class="col-md-9 pe-5">

                                        <input type="text" class="form-control"  placeholder="post title"/>

                                    </div>
                                </div>

                                <hr class="mx-n3" />

                                <div class="row align-items-center py-3">
                                    <div class="col-md-3 ps-5">

                                        <h6 class="mb-0">Post body</h6>

                                    </div>
                                    <div class="col-md-9 pe-5">

                                        <textarea class="form-control" rows="3" placeholder="What's on your mind?"></textarea>

                                    </div>
                                </div>

                                <hr class="mx-n3" />

                                <div class="row align-items-center py-3">
                                    <div class="col-md-3 ps-5">

                                        <h6 class="mb-0">Add to your post</h6>

                                    </div>
                                    <div class="col-md-9 pe-5">

                                        <input class="form-control form-control" id="formFileLg" type="file" />
                                        <div class="small text-muted mt-2">Upload files/photos. Max file
                                            size 50 MB</div>

                                    </div>
                                </div>

                                <hr class="mx-n3" />

                                <div class="px-5 py-4">
                                    <button type="submit" class="btn btn-primary btn-lg">Post</button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}