function SideProfile() {
  return (
    <div className="row">
      <div className="col-12 h-100">
        <div className="text-center">
          <div className="position-relative d-inline-block">
            <img
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              className="rounded-circle mb-3"
              alt="Profile Photo"
              style={{ width: "150px", height: "150px", objectFit: "cover" }}
            />

            <div class="position-absolute start-50 translate-middle-x bottom-0 ">
              <span class="badge bg-primary rounded-pill px-3 py-2">
                Design Team
                <span class="visually-hidden">Team name</span>
              </span>
            </div>
          </div>

          <h4 className="mt-3 mb-0">John Doe</h4>
          <p className="text-muted mb-4">Senior UI Designer</p>
        </div>

        <div className="card border-0 shadow-sm">
          <div className="card-body text-center">
            <h6 className="card-subtitle mb-2 text-muted">
              Total Working Hours
            </h6>
            <h2 className="card-title text-primary">168.5 hrs</h2>
            <p className="small text-muted mb-0">This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideProfile;
