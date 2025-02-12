import React, { useEffect, useState } from "react";
import { showMessage } from "../utils/messageUtil";
import { fetchTotalHoursForMonth } from "../services/QueryServices/totalHoursForMonthService";
import { fetchTotalHoursForYear } from "../services/QueryServices/totalHoursForYearService";

function SideProfile() {
  const [totalHoursMonth, setTotalHoursMonth] = useState(0);
  const [totalHoursYear, setTotalHoursYear] = useState(0);

  useEffect(() => {
    const loadTotalHours = async () => {
      try {
        const employeeId = 1;
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;

        const hoursMonth = await fetchTotalHoursForMonth(employeeId, year, month);
        setTotalHoursMonth(hoursMonth);

        const hoursYear = await fetchTotalHoursForYear(employeeId, year);
        setTotalHoursYear(hoursYear);
      } catch (error) {
        showMessage("error", "Error loading total hours");
      }
    };

    loadTotalHours();
  }, []);

  const formatHours = (hours) => {
    return hours.toFixed(2);
  };

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
            <div className="position-absolute start-50 translate-middle-x bottom-0 ">
              <span className="badge bg-primary rounded-pill px-3 py-2">
                Dev Team
                <span className="visually-hidden">Team name</span>
              </span>
            </div>
          </div>
          <h4 className="mt-3 mb-0">Vignesh Venkatesan</h4>
          <p className="text-muted mb-4">Full Stack Developer</p>
        </div>
        <div className="card border-0 shadow-sm">
          <div className="card-body text-center">
            <h6 className="card-subtitle mb-2 text-muted">Total Working Hours</h6>
            <h2 className="card-title text-primary">{formatHours(totalHoursMonth)} hrs</h2>
            <p className="small text-muted mb-0">This Month</p>
          </div>
        </div>

        <div className="card border-0 shadow-sm mt-3">
          <div className="card-body text-center">
            <h6 className="card-subtitle mb-2 text-muted">Total Working Hours</h6>
            <h2 className="card-title text-primary">{formatHours(totalHoursYear)} hrs</h2>
            <p className="small text-muted mb-0">This Year</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideProfile;