import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const TaskForm = () => {
  const [componentDisabled, setComponentDisabled] = useState(false);
  const [value, setvalue] = useState("");

  const onChange = (value) => {
    console.log("changed", value);
  };
  const StatusOptions = [
    {
      label: "In Progress",
      value: "In-Progress",
    },
    {
      label: "Completed",
      value: "Completed",
    },
  ];
  return (
    <>
      <div className="row">
  {/* Date */}
  <div className="col-12 mb-3">
    <div className="d-flex align-items-center">
      <label className="form-label me-3 mb-0">Date:</label>
      <DatePicker className="w-50" label="DatePicker" />
    </div>
  </div>

  {/* Time */}
  <div className="col-12 mb-3">
    <div className="d-flex align-items-center mb-2">
      <label className="form-label me-3 mb-0">Time:</label>
      <div className="d-flex align-items-center">
        <InputNumber
          defaultValue={1}
          formatter={(value) => `${value} hrs`}
          className="w-75"
        />
        <InputNumber
          defaultValue={30}
          formatter={(value) => `${value} min`}
          className="w-75 ms-2"
        />
      </div>
    </div>

    <div className="d-flex align-items-center">
      <span className="me-3">OR</span>
      <Radio.Group defaultValue="a" buttonStyle="solid">
        <Radio.Button value="a">1 hr</Radio.Button>
        <Radio.Button value="b">2 hr</Radio.Button>
        <Radio.Button value="c">4 hr</Radio.Button>
        <Radio.Button value="d">8 hr</Radio.Button>
      </Radio.Group>
    </div>
  </div>

  {/* Tool Category & Tool */}
  <div className="col-12 mb-3">
    <div className="row align-items-center mb-3">
      <label className="col-md-2 form-label">Tool category:</label>
      <div className="col-md-10">
        <Select
          showSearch
          placeholder="Select a Tool Category"
          className="w-100"
          options={[{ value: "1", label: "IAT" },
            { value: "2", label: "TSR" },
            { value: "3", label: "TICKER" }]}
        />
      </div>
    </div>

    <div className="row align-items-center">
      <label className="col-md-2 form-label">Tool:</label>
      <div className="col-md-10">
        <Select
          showSearch
          placeholder="Select a Tool"
          className="w-100"
          options={[{ value: "1", label: "IAT" },
            { value: "2", label: "TSR" },
            { value: "3", label: "TICKER" }]}
        />
      </div>
    </div>
  </div>

  {/* Ticket ID */}
  <div className="col-12 mb-3">
    <div className="d-flex align-items-center">
      <label className="form-label me-3">Ticket ID:</label>
      <InputNumber
        defaultValue={18}
        formatter={(value) => `#${value}`}
        className="w-25"
      />
    </div>
  </div>

  {/* Description */}
  <div className="col-12 mb-3">
    <div className="row">
      <label className="form-label mb-2">Description:</label>
      <div className="col-12">
        <TextArea
          autoSize={{ minRows: 3, maxRows: 5 }}
          className="w-100"
        />
      </div>
    </div>
  </div>

  {/* Status */}
  <div className="col-12 mb-4">
    <Form.Item label="Status" className="mb-0">
      <Radio.Group 
        options={StatusOptions} 
        defaultValue="Apple"
        className="d-flex justify-content-between"
      />
    </Form.Item>
  </div>

  {/* Save Button */}
  <div className="col-12">
    <div className="d-flex justify-content-end">
      <Button type="primary" variant="solid">
        SAVE
      </Button>
    </div>
  </div>
</div>
    </>
  );
};
export default () => <TaskForm />;
