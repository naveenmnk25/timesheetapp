import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Table, Popconfirm } from "antd";
import { showMessage } from "../utils/messageUtil";
import dayjs from "dayjs";
import TaskForm from "./TaskForm";
import SideProfile from "./SideProfile";
import { getTimesheetEntriesForToday } from "../features/timesheetSlice";
import { fetchTimesheetEntryById } from "../services/QueryServices/timesheetEntryByIdService";
import { updateTimesheetEntry } from "../services/MutationServices/timesheetEntry/updateTimesheetEntryService";
import { deleteTimesheetEntry } from "../services/MutationServices/timesheetEntry/deleteTimesheetEntryService";

function Home() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [editingEntry, setEditingEntry] = useState(null);
  const employeeId = 1;

  const columns = [
    {
      title: "Date",
      dataIndex: "entryDate",
      render: (text) => <a>{dayjs(text).format("DD/MM/YYYY")}</a>,
    },
    {
      title: "Time",
      dataIndex: "hoursInMinutes",
      render: (minutes) => `${Math.floor(minutes / 60)}h ${minutes % 60}m`,
    },
    { title: "Tool", dataIndex: "toolID" },
    { title: "Tool Category", dataIndex: "toolCategoryID" },
    { title: "Ticket Id", dataIndex: "ticketID" },
    { title: "Status", dataIndex: "status" },
    { title: "Description", dataIndex: "taskName" },
    {
      title: "Action",
      align: "center",
      render: (_, record) => (
        <>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this entry?"
            onConfirm={() => handleDelete(record.entryID)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  const fetchTimesheetEntries = async () => {
    try {
      const response = await dispatch(
        getTimesheetEntriesForToday(employeeId)
      ).unwrap();
      setData(
        response.map((item) => ({
          ...item,
          key: item.entryID,
          entryDate: dayjs(item.entryDate),
        }))
      );
      // console.log("Fetched timesheet entries:", response);
    } catch (error) {
      console.error("Error fetching timesheet entries:", error);
    }
  };

  useEffect(() => {
    if (employeeId) {
      fetchTimesheetEntries();
    }
  }, [employeeId]);

  const handleEdit = async (record) => {
    try {
      const entryData = await fetchTimesheetEntryById(record.entryID);
      setEditingEntry(entryData);
      // console.log("entryData", entryData);
    } catch (error) {
      showMessage('error', "Failed to fetch timesheet entry.!");
      console.error(error);
    }
  };

  const handleSave = async (values) => {
    try {
      if (editingEntry) {
        const updatedEntry = {
          ...editingEntry,
          entryDate: values.date,
          hoursInMinutes: values.hours * 60 + values.minutes,
          taskName: values.description,
          ticketID: values.ticketId.toString(),
          toolID: values.tool,
          toolCategoryID: values.toolCategory,
          status: values.status,
          updatedDate: new Date().toISOString(),
        };
        // console.log("handleSave - values : ", values);
        await updateTimesheetEntry(editingEntry.entryID, updatedEntry);
        showMessage('success', "Entry updated successfully!");
        await fetchTimesheetEntries();
      }
      setEditingEntry(null);
    } catch (error) {
      showMessage('error', "Failed to update entry!");
    }
  };

  const handleDelete = async (entryID) => {
    try {
      await deleteTimesheetEntry(entryID);
      showMessage('success', "Entry deleted successfully!");
      await fetchTimesheetEntries();
    } catch (error) {
      showMessage('error', "Failed to delete entry!");
    }
  };

  return (
    <div className="row h-100">
      <div className="col-2" style={{ backgroundColor: "aliceblue" }}>
        <SideProfile />
      </div>
      <div className="col-10">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="col-6 p-1">
              <div className="card p-4">
                <TaskForm
                  onFormSubmit={fetchTimesheetEntries}
                  editingEntry={editingEntry}
                  onSave={handleSave}
                />
              </div>
            </div>
          </div>
          <div className="col-12 mt-3">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
