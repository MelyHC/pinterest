import React from 'react';

const ModalImg = ({ imgSelected: { img, name } }) => {
  return (
    <div className="modal fade p-0 bg-white zoom-out" id={name} tabIndex="-1" role="dialog" aria-labelledby={name} aria-hidden="false">
      <div className="modal-dialog p-4" role="document">
        {/* <div className="modal-content"> */}
          <div className="card default rounded-xxl shadow">
            <div className="row no-gutters m-0">
              <div className="col-lg-6">
                <img src={img} className="card-img rounded-img-xxl" alt={name} />
              </div>
              <div className="col-lg-6">
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default ModalImg;