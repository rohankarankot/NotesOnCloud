import { useState } from "react";

const ShowModal = (props) => {
  const [opened, setopened] = useState(true);
  return (
    <div>
      <div
        tabIndex="12323"
        style={{
          position: "fixed",
          top: "30%",
          left: "20%",
        }}
        role="dialog"
        className=""
      >
        <div
          className={`modal-dialog ${opened ? "" : "d-none"}`}
          role="document"
        >
          <div className="modal-content " style={{ zIndex: 1000 }}>
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title" align="center">
                <i className="fas fa-exclamation-triangle">&nbsp;&nbsp;</i>
                Attention&nbsp;&nbsp;!!!
              </h5>
            </div>
            <div className="modal-body">
              <p>This is not the Final Build....</p>
              <p>you may experience bugs</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-info"
                data-dismiss="modal"
                onClick={() => {
                  setopened(false);
                }}
              >
                ok got it
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;
