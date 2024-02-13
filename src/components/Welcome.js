import React from 'react'

export default function Welcome({HandleonGet}) {
  return (
    <div>
        <div className="px-4 my-5 text-center" style = {{paddingTop : '10rem', paddingBottom : '0.6rem'}}>
            <h1 className="display-5 fw-bold text-body-emphasis">No more new posts to show.</h1>
            <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" onClick={HandleonGet} className="btn btn-primary btn-lg px-4 gap-3">Get New Posts</button>
            </div>
            </div>
        </div>
    </div>
  )
}
