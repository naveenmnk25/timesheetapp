import { Button, Divider, Table } from "antd";
import { useState } from "react";
import TaskForm from "./TaskForm";
import SideProfile from "./SideProfile";

function Home() {
  const [value, setValue] = useState("");

  const data = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
      time: "2 hrs",
      tool: "TSR",
      toolCategory: "Internal",
      date:"04-02-2025",
      age: 32,
      status:"",
      discription: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
  ];

  // Generate columns dynamically
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Time",
      dataIndex: "time",
    },
    {
      title: "Tool",
      dataIndex: "tool",
    }, {
      title: "ToolCategory",
      dataIndex: "toolCategory",
    },{
      title: "Ticketid",
      dataIndex: "ticketid",
    },{
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Discription",
      dataIndex: "discription",
    },
  ];

  const renderTable = (columns, List) => {
    // const dataSource = List.map((board) => ({
    //   key: board.id,
    //   id: board.id,
    //   title: board.title,
    // }));

    return <Table columns={columns} dataSource={List} />;
  };
  return (
    <>
      <div className="row h-100">
        <div className="col-2" style={{backgroundColor: 'aliceblue'}}>
          <SideProfile/>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center">Time Sheet </h3>
              <Divider></Divider>
            </div>
            <div className="col-3">
              <div className="p-1">
                <div className="card">
                  <div className="p-4">
                    <TaskForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="p-1">
                <div className="card">
                  <div className="p-2">
                    {renderTable(columns, data)}
                    <div className="col-12 text-end mt-3">
                      <Button color="purple" variant="solid">
                        Send Mail
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
