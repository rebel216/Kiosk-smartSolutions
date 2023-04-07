import React from "react";
import axios from "axios";
import BASE_URL from "../../api";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

function DownloadData() {
  const fetchData = async () => {
    const response = axios.get(
      `${BASE_URL}api/v1/parcels/${
        JSON.parse(localStorage.getItem("user")).id
      }`,
      {
        headers: {
          Authorization: JSON.parse(localStorage.getItem("user")).token,
        },
      }
    );
    const data1 = (await response).data;

    const fileType =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";
    console.log(data1);

    const ws = XLSX.utils.json_to_sheet(data1);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "data" + fileExtension);
  };

  return (
    <div className="login-box">
      <div>
        <h1>Send Data to registered email.</h1>
      </div>
      <div>
        <div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">
               
        <button className="btn btn-primary w-75 mb-2" onClick={fetchData}>
          Send Email
        </button></div>
        <br></br>
      </div>
    </div>
  );
}

export default DownloadData;
