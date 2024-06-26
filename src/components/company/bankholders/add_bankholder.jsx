import React, { useState } from "react";
import FinBase from "../FinBase";
import { Link } from "react-router-dom";


function Addbankholder() {
  const [bankDetails , setBankDetails] = useState('')
  return (
    <>
      <FinBase />
      <div
        className="page-content mt-0 pt-0"
        style={{ backgroundColor: "#2f516f", minHeight: "100vh" }}
      >
        <div className="d-flex justify-content-end mb-1">
          <Link to={"/banklist"}>
            <i
              className="fa fa-times-circle text-white mx-4 p-1"
              style={{ fontSize: "1.2rem", marginRight: "0rem !important" }}
            ></i>
          </Link>
        </div>
        <div className="card radius-15 h-20">
          <div className="row">
            <div className="col-md-12">
              <center>
                <h2 className="mt-3">ADD BANK HOLDER</h2>
              </center>
              <hr />
            </div>
          </div>
        </div>

        <div className="card radius-15">
          <div className="card-body">
            <form className="needs-validation px-1" validate>
              <div className="row w-100">
                <div className="col-md-12 mx-0">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="text-center">Bank Account Holder Form</h4>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="name" style={{ color: "white" }}>
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="alias" style={{ color: "white" }}>
                          Alias
                        </label>
                        <input
                          type="text"
                          id="alias"
                          name="alias"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="phoneNumber" style={{ color: "white" }}>
                          Phone Number
                        </label>
                        <input
                          type="text"
                          id="phoneNumber"
                          name="phoneNumber"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="email" style={{ color: "white" }}>
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="accountType" style={{ color: "white" }}>
                          Account Type
                        </label>
                        <select
                          name="bankName"
                          className="form-control"
                          id="bankName"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                         
                          <option value="Bank">Bank Account</option>
                          
                        </select>
                      
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="text-center">Bank Account Form</h4>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="bankName" style={{ color: "white" }}>
                          Bank Name
                        </label>
                        <div className="d-flex align-items-center">
                        <select
                          name="bankName"
                          className="form-control"
                          id="bankName"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                         
                          <option value="Bank1">Bank1</option>
                          <option value="Bank2">Bank2</option>
                        </select>
                      
                      <button
                            type="button"
                            className="btn btn-outline-secondary ml-1"
                            data-toggle="modal"
                            data-target="#createNewUnit"
                            style={{
                              width: "fit-content",
                              height: "fit-content",
                            }}
                          >
                            +
                          </button>
                      </div>
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="accountNumber" style={{ color: "white" }}>
                          Account Number
                        </label>
                        <input
                          type="text"
                          id="accountNumber"
                          name="accountNumber"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          readOnly
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="ifscCode" style={{ color: "white" }}>
                          IFSC Code
                        </label>
                        <input
                          type="text"
                          id="ifscCode"
                          name="ifscCode"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          readOnly
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="swiftCode" style={{ color: "white" }}>
                          SWIFT Code
                        </label>
                        <input
                          type="text"
                          id="swiftCode"
                          name="swiftCode"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="branchName" style={{ color: "white" }}>
                          Branch Name
                        </label>
                        <input
                          type="text"
                          id="branchName"
                          name="branchName"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h4 className="text-center">Bank Configuration Form</h4>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="chequeBookRange" style={{ color: "white" }}>
                          Set Cheque Book Range
                        </label>
                        <select
                          name="chequeBookRange"
                          className="form-control"
                          id="chequeBookRange"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="chequePrinting" style={{ color: "white" }}>
                          Enable Cheque Printing
                        </label>
                        <select
                          name="chequePrinting"
                          className="form-control"
                          id="chequePrinting"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="chequePrintingConfig" style={{ color: "white" }}>
                          Set Cheque Printing Configuration
                        </label>
                        <select
                          name="chequePrintingConfig"
                          className="form-control"
                          id="chequePrintingConfig"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="text-center">Mailing Address Form</h4>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="mailingName" style={{ color: "white" }}>
                          Mailing Name
                        </label>
                        <input
                          type="text"
                          id="mailingName"
                          name="mailingName"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="address" style={{ color: "white" }}>
                          Address
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="country" style={{ color: "white" }}>
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="state" style={{ color: "white" }}>
                          State
                        </label>
                        <select
                          type="text"
                          className="form-control"
                          id="state"
                          name="state"
                          
                          required
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        >
                          <option value="" selected hidden>
                            Choose
                          </option>
                          <option value="Andaman and Nicobar Islads">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Andhra Predhesh">
                            Andhra Predhesh
                          </option>
                          <option value="Arunachal Predesh">
                            Arunachal Predesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadra and Nagar Haveli">
                            Dadra and Nagar Haveli
                          </option>
                          <option value="Damn anad Diu">Damn anad Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Predesh">
                            Himachal Predesh
                          </option>
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Ladakh">Ladakh</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Madhya Predesh">Madhya Predesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Predesh">Uttar Predesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Other Territory">
                            Other Territory
                          </option>
                        </select>
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="pin" style={{ color: "white" }}>
                          PIN
                        </label>
                        <input
                          type="text"
                          id="pin"
                          name="pin"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <h4 className="text-center">Tax Registration Form</h4>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="panNumber" style={{ color: "white" }}>
                          PAN IT Number
                        </label>
                        <input
                          type="text"
                          id="panNumber"
                          name="panNumber"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="registrationType" style={{ color: "white" }}>
                          Registration Type
                        </label>
                        <select
                          name="registrationType"
                          className="form-control"
                          id="registrationType"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option value="Regular">Regular</option>
                          <option value="Composition">Composition</option>
                          <option value="Consumer">Consumer</option>
                          <option value="Unregister">Unregister</option>
                        </select>
                      </div>
                      {(bankDetails.registrationType === 'Regular' || bankDetails.registrationType === 'Composition') && (
                        <div className="col-md-12 mt-3">
                          <label htmlFor="gstin" style={{ color: "white" }}>
                            GST IN
                          </label>
                          <input
                            type="text"
                            id="gstin"
                            name="gstin"
                            className="form-control"
                            style={{ backgroundColor: "#2a4964", color: "white" }}
                          />
                        </div>
                      )}
                      <div className="col-md-12 mt-3">
                        <label htmlFor="alterGstDetails" style={{ color: "white" }}>
                          Set Alter GST Details
                        </label>
                        <select
                          name="alterGstDetails"
                          className="form-control"
                          id="alterGstDetails"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4 className="text-center">Opening Balance Form</h4>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="date" style={{ color: "white" }}>
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        />
                      </div>
                      <div className="col-md-12 mt-3">
                        <label htmlFor="amount" style={{ color: "white" }}>
                          Amount
                        </label>
                        <div className="d-flex">
                        <input
                          type="text"
                          id="amount"
                          name="amount"
                          className="form-control"
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        />
                        <select
                          name="alterGstDetails"
                          className="form-control"
                          id="alterGstDetails"
                          style={{ backgroundColor: "#2a4964", color: "white",width:'150px' }}
                          required
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option value="credit">CREDIT</option>
                          <option value="debit">DEBIT</option>
                        </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-check mt-3">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="agreeTerms"
                      name="agreeTerms"
                      required
                    />
                    <label
                      className="form-check-label"
                      htmlFor="agreeTerms"
                      style={{ color: "white" }}
                    >
                      Agree to terms and conditions
                    </label>
                  </div>
                  <div className="row mt-5 mb-5">
                    <div className="col-md-4"></div>
                    <div className="col-md-4 d-flex justify-content-center">
                      <button
                        className="btn btn-outline-secondary text-light"
                        type="submit"
                        style={{ width: "50%", height: "fit-content" }}
                      >
                        SAVE
                      </button>
                      <Link
                        to="/items"
                        className="btn btn-outline-secondary ml-1 text-light"
                        style={{ width: "fit-content", height: "fit-content" }}
                      >
                        CANCEL
                      </Link>
                    </div>
                    <div className="col-md-4"></div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addbankholder;