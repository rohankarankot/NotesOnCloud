import Addpassword from "./Addpassword";
// import Alert from "./Alert";
import YourPasswords from "./YourPasswords";

const Home = ({ showAlert }) => {
  return (
    <>
      <br />
      {/* <Alert /> */}
      <div className="row">
        <div className="col-md-6">
          <Addpassword />
        </div>
        <div className="col-md-6">
          <h3 className="card-title text-center">Your Passwords</h3>
          <hr />
          <div className="row">
            <div className="col-3">
              <h4>Title</h4>
            </div>
            <div className="col-3">
              <h4>password</h4>
            </div>
            <div className="col-3">
              <h4>Copy</h4>
            </div>
            <div className="col-3">
              <h4>Action</h4>
            </div>
            <hr />
          </div>
          <YourPasswords />
        </div>
      </div>
    </>
  );
};

export default Home;
