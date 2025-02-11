import React, { useState, useEffect } from "react";
import { getToolsByCategory } from "../features/toolSlice";
import { getToolCategories } from "../features/toolCategorySlice";
import "../styles/Home.scss";
import { useSelector, useDispatch } from "react-redux";
import { Button, DatePicker, Input, InputNumber, Radio, Select } from "antd";
import { showMessage } from "../utils/messageUtil";
import { useFormik } from "formik";
import * as Yup from "yup";
import dayjs from "dayjs";
import { createTimesheetEntry } from "../services/MutationServices/timesheetEntry/createTimesheetEntryService";

const { TextArea } = Input;

const validationSchema = Yup.object()
  .shape({
    date: Yup.date().required("Date is required"),
    hours: Yup.number()
      .nullable()
      .min(0, "Hours cannot be negative")
      .max(23, "Hours cannot exceed 23"),
    minutes: Yup.number()
      .nullable()
      .min(0, "Minutes cannot be negative")
      .max(59, "Minutes cannot exceed 59"),
    toolCategory: Yup.string().required("Tool category is required"),
    tool: Yup.string().required("Tool is required"),
    description: Yup.string().required("Description is required"),
    status: Yup.string().required("Status is required"),
  })
  .test(
    "at-least-one-time",
    "Please enter at least 1 minute or 1 hour",
    function (value) {
      const { hours, minutes } = value;
      return (hours ?? 0) > 0 || (minutes ?? 0) > 0;
    }
  );

const TaskForm = ({ onFormSubmit, editingEntry, onSave }) => {
  const dispatch = useDispatch();
  const { toolsByCategory = [] } = useSelector((state) => state.tools || {});
  const { toolCategories = [] } = useSelector(
    (state) => state.toolCategories || {}
  );

  useEffect(() => {
    dispatch(getToolCategories());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      employeeID: null,
      departmentID: null,
      date: null,
      hours: null,
      minutes: null,
      toolCategory: null,
      tool: null,
      ticketId: null,
      description: "",
      status: null,
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (editingEntry) {
          await onSave(values);
        } else {
          const timesheet = {
            employeeID: 1,
            departmentID: 4,
            entryDate: values.date.toISOString(),
            toolCategoryID: values.toolCategory,
            toolID: values.tool,
            hoursInMinutes: (values.hours || 0) * 60 + (values.minutes || 0),
            ticketID: values.ticketId,
            taskName: values.description,
            status: values.status,
          };

          const response = await createTimesheetEntry(timesheet);
          showMessage('success', "Entry created successfully!");
          // console.log("Timesheet created successfully:", response);
        }

        await onFormSubmit();

        resetForm();
      } catch (error) {
        showMessage('error', "Failed to create entry!");
        console.error("Error submitting timesheet:", error);
      }
    },
    validateOnBlur: false,
    validateOnChange: true,
  });

  const handleCategoryChange = (categoryId) => {
    formik.setFieldValue("toolCategory", categoryId);
    dispatch(getToolsByCategory(categoryId));
    formik.setFieldValue("tool", null);
  };

  const handleRadioChange = (e) => {
    const value = e.target.value;
    formik.setFieldValue("hours", value);
    formik.setFieldValue("minutes", 0);
  };

  // Prefill the form when editing
  useEffect(() => {
    if (editingEntry) {
      formik.setValues({
        date: editingEntry.entryDate ? new Date(editingEntry.entryDate) : null,
        hours: Math.floor(editingEntry.hoursInMinutes / 60),
        minutes: editingEntry.hoursInMinutes % 60,
        description: editingEntry.taskName || "",
        status: editingEntry.status || "",
        ticketId: editingEntry.ticketID || null,
        tool: editingEntry.toolID || null,
        toolCategory: editingEntry.toolCategoryID || null,
      });

      if (editingEntry.toolCategoryID) {
        dispatch(getToolsByCategory(editingEntry.toolCategoryID)).then(() => {
          formik.setFieldValue("toolCategory", editingEntry.toolCategoryID);
          formik.setFieldValue("tool", editingEntry.toolID);
        });
      }
    } else {
      formik.resetForm();
    }
  }, [editingEntry, dispatch]);

  return (
    <form onSubmit={formik.handleSubmit} className="row">
      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-3 flex-grid-end">
            <label className="form-label me-3 mb-0">Date</label>
          </div>
          <div className="col-9">
            <DatePicker
              value={formik.values.date ? dayjs(formik.values.date) : null}
              onChange={(date) => formik.setFieldValue("date", dayjs(date))}
            />
            {formik.errors.date && (
              <div className="text-danger">{formik.errors.date}</div>
            )}
          </div>
        </div>
      </div>

      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-3 flex-grid-end">
            <label className="form-label me-3 mb-0">Time</label>
          </div>
          <div className="col-9">
            <div className="d-flex align-items-center">
              <InputNumber
                value={formik.values.hours}
                onChange={(value) => formik.setFieldValue("hours", value)}
                placeholder="Hours"
              />
              <InputNumber
                value={formik.values.minutes}
                onChange={(value) => formik.setFieldValue("minutes", value)}
                className="ms-2"
                placeholder="Minutes"
              />
              <span className="me-2 ms-2">Or</span>
              <Radio.Group
                buttonStyle="solid"
                onChange={handleRadioChange}
                value={formik.values.hours}
              >
                <Radio.Button value="1">1 hr</Radio.Button>
                <Radio.Button value="2">2 hr</Radio.Button>
                <Radio.Button value="4">4 hr</Radio.Button>
                <Radio.Button value="8">8 hr</Radio.Button>
              </Radio.Group>
            </div>
            {(formik.errors.hours || formik.errors.minutes) && (
              <div className="text-danger">
                {formik.errors.hours || formik.errors.minutes}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-3 flex-grid-end">
            <label className="form-label me-3">Tool Category</label>
          </div>
          <div className="col-9">
            <Select
              showSearch
              placeholder="Select a Tool Category"
              className="w-50"
              options={toolCategories.map((category) => ({
                value: category.toolCategoryID,
                label: category.categoryName,
              }))}
              onChange={handleCategoryChange}
              value={formik.values.toolCategory}
            />
            {formik.errors.toolCategory && (
              <div className="text-danger">{formik.errors.toolCategory}</div>
            )}
          </div>
        </div>
      </div>

      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-3 flex-grid-end">
            <label className="form-label me-3">Tool</label>
          </div>
          <div className="col-9">
            <Select
              showSearch
              placeholder="Select a Tool"
              className="w-50"
              disabled={!formik.values.toolCategory}
              options={toolsByCategory.map((tool) => ({
                value: tool.toolID,
                label: tool.toolName,
              }))}
              onChange={(value) => formik.setFieldValue("tool", value)}
              value={formik.values.tool}
            />
            {formik.errors.tool && (
              <div className="text-danger">{formik.errors.tool}</div>
            )}
          </div>
        </div>
      </div>

      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-3 flex-grid-end">
            <label className="form-label me-3">Ticket ID</label>
          </div>
          <div className="col-9">
            <InputNumber
              value={formik.values.ticketId}
              onChange={(value) => formik.setFieldValue("ticketId", value)}
              className="w-25"
              placeholder="#Ticket Id"
            />
            {formik.errors.tool && (
              <div className="text-danger">{formik.errors.ticketId}</div>
            )}
          </div>
        </div>
      </div>

      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-3 flex-grid-end">
            <label className="form-label me-3">Description</label>
          </div>
          <div className="col-9">
            <TextArea
              autoSize={{ minRows: 2, maxRows: 4 }}
              className="w-50"
              value={formik.values.description}
              onChange={(e) =>
                formik.setFieldValue("description", e.target.value)
              }
            />
            {formik.errors.description && (
              <div className="text-danger">{formik.errors.description}</div>
            )}
          </div>
        </div>
      </div>

      <div className="col-12 mb-4">
        <div className="row">
          <div className="col-3 flex-grid-end">
            <label className="form-label me-3">Status</label>
          </div>
          <div className="col-9">
            <Select
              showSearch
              placeholder="Select Status"
              className="w-50"
              options={[
                { label: "In Progress", value: "In-Progress" },
                { label: "Completed", value: "Completed" },
              ]}
              onChange={(value) => formik.setFieldValue("status", value)}
              value={formik.values.status}
            />
            {formik.errors.status && (
              <div className="text-danger">{formik.errors.status}</div>
            )}
          </div>
        </div>
      </div>

      <div className="col-12">
        <div className="d-flex justify-content-end">
          <Button
            type="primary"
            htmlType="submit"
            loading={formik.isSubmitting}
          >
            {editingEntry ? "Update Entry" : "Create Entry"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TaskForm;