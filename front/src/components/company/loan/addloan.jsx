import React, { useState,useEffect ,useRef} from "react";
import FinBase from "../FinBase";
import { Link,useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import config from "../../../functions/config";
import Swal from "sweetalert2";





function Addloan() {
  const ID = Cookies.get("Login_id");
  const navigate = useNavigate();


  const [employees, setEmployees] = useState([]); // Array of employees fetched from backend
  const [selectedEmployee, setSelectedEmployee] = useState(null); // Selected employee object

  // State for loan details
  const [loanAmount, setLoanAmount] = useState(''); 
  const [loanDate, setLoanDate] = useState(''); 
  const [loanDuration, setLoanDuration] = useState(''); 
  const [paymentType, setPaymentType] = useState(''); 
  const [chequeNumber, setChequeNumber] = useState(''); 
  const [upiId, setUpiId] = useState(''); 
  const [monthlyCuttingType, setMonthlyCuttingType] = useState(''); 
  const [monthlyCuttingAmount, setMonthlyCuttingAmount] = useState(''); 
  const [monthlyCuttingPercentage, setMonthlyCuttingPercentage] = useState(''); 
  const [percentageAmount , setPercentageAmount]= useState('')
  const [note, setNote] = useState(''); 
  const [file, setFile] = useState(null); 
  const [modalduration , setModalDuration]= useState('')
  const [modalterm , setModalTerm]= useState('')

  
  const [loanDurations, setLoanDurations] = useState([]); 

  
  useEffect(() => {
    
    const fetchEmployees = async () => {
      try {
        const response = await fetch('api/employees');
        if (response.ok) {
          const data = await response.json();
          setEmployees(data); // Assuming data is an array of employees [{ id, name, email, salary, joiningDate }]
        } else {
          throw new Error('Failed to fetch employees');
        }
      } catch (error) {
        console.error('Error fetching employees:', error);
        // Handle error (e.g., show error message to user)
      }
    };

    // Fetch loan durations from backend (replace with your actual API call)
    const fetchLoanDurations = async () => {
      try {
        const response = await fetch('api/loan-durations');
        if (response.ok) {
          const data = await response.json();
          setLoanDurations(data); // Assuming data is an array of loan duration options [{ id, name }]
        } else {
          throw new Error('Failed to fetch loan durations');
        }
      } catch (error) {
        console.error('Error fetching loan durations:', error);
        // Handle error (e.g., show error message to user)
      }
    };

   
    fetchEmployees();
    fetchLoanDurations();
  }, []); 

  // Event handlers for form inputs
  const handleEmployeeChange = (event) => {
    const employeeId = event.target.value;
    const employee = employees.find(emp => emp.id === employeeId);
    setSelectedEmployee(employee);
  };

  const handleLoanAmount = (event) => {
    setLoanAmount(event.target.value);
  };

  const handleLoanDate = (event) => {
    setLoanDate(event.target.value);
  };

  const handleLoanDuration = (event) => {
    setLoanDuration(event.target.value);
  };

  const handlePaymentType = (event) => {
    setPaymentType(event.target.value);
  };

  const handleChequeNumber = (event) => {
    setChequeNumber(event.target.value);
  };

  const handleUpiId = (event) => {
    setUpiId(event.target.value);
  };

  const handleMonthlyCuttingType = (event) => {
    setMonthlyCuttingType(event.target.value);
  };

  const handleMonthlyCuttingAmount = (event) => {
    setMonthlyCuttingAmount(event.target.value);
  };

  const handleMonthlyCuttingPercentage = (event) => {
    setMonthlyCuttingPercentage(event.target.value);
  };
  const handlePercentageAmount = (event) => {
    setPercentageAmount(event.target.value);
  };

  const handleNote = (event) => {
    setNote(event.target.value);
  };

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };
  function handleSubmit()
  {

  }

  function handleTermModalSubmit(){
    
  }

  
  
  
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
                <h2 className="mt-3">ADD NEW LOAN</h2>
              </center>
              <hr />
            </div>
          </div>
        </div>

        <div className="card radius-15">
  <div className="card-body">
  
  <form
              className="needs-validation px-1 "
              onSubmit={handleSubmit}
              validate
            >
      <div className="row w-100">
      <div className="col-md-12 mx-0">
        <div className="row">
        <div className="col-md-6">
          {/* Column 1: Employee selection, loan details */}
          <div className="form-group">
            <label htmlFor="employee">Employee</label>
            <div className="d-flex align-items-center">
                
            <select
              id="employee"
              className="form-control"
              value={selectedEmployee ? selectedEmployee.id : ''}
              onChange={handleEmployeeChange}
            >
              <option value="">Select Employee</option>
              {employees.map(employee => (
                <option key={employee.id} value={employee.id}>
                  {employee.name}
                </option>
              ))}
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
         
          <div className="form-group">
            <label htmlFor="loanAmount">Employee ID</label>
            <input
              type="text"
              id="loanAmount"
              className="form-control"
             
              onChange={handleLoanAmount}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanAmount">Employee Email</label>
            <input
              type="text"
              id="loanAmount"
              className="form-control"
              
              onChange={handleLoanAmount}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanAmount">Salary</label>
            <input
              type="text"
              id="loanAmount"
              className="form-control"
              
              onChange={handleLoanAmount}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanDate">Joining Date</label>
            <input
              type="date"
              id="loanDate"
              className="form-control"
              //value={loanDate}
              onChange={handleLoanDate}
            />
          </div>
          
        </div>
        <div className="col-md-6">
          {/* Column 2: Payment details, monthly cutting, file upload */}
          <div className="form-group">
            <label htmlFor="loanAmount">Loan Amount</label>
            <input
              type="text"
              id="loanAmount"
              className="form-control"
              
              onChange={handleLoanAmount}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanDate">Loan Date</label>
            <input
              type="date"
              id="loanDate"
              className="form-control"
              value={loanDate}
              onChange={handleLoanDate}
            />
          </div>
          <div className="form-group">
            <label htmlFor="loanDuration">Loan Duration</label>
            <div className="d-flex align-items-center">
            <select
              id="loanDuration"
              className="form-control"
              value={loanDuration}
              onChange={handleLoanDuration}
            >
                <option value="six months">6 MONTHS</option>
              <option value="one year">1 YEAR</option>
              {loanDurations.map(duration => (
                <option key={duration.id} value={duration.name}>
                  {duration.name}
                </option>
              ))}
            </select>
            <button
                            type="button"
                            className="btn btn-outline-secondary ml-1"
                            data-toggle="modal"
                            data-target="#createNewTerm"
                            style={{
                              width: "fit-content",
                              height: "fit-content",
                            }}
                          >
                            +
                          </button>
                       
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="paymentType">Payment Type</label>
            <select
              id="paymentType"
              className="form-control"
              value={paymentType}
              onChange={handlePaymentType}
            >
              <option value="">Select Payment Type</option>
              <option value="Cash">Cash</option>
              <option value="Cheque">Cheque</option>
              <option value="UPI">UPI</option>
              <option value="Bank">Bank</option>
            </select>
          </div>
          {paymentType === 'Cheque' && (
            <div className="form-group">
              <label htmlFor="chequeNumber">Cheque Number</label>
              <input
                type="text"
                id="chequeNumber"
                className="form-control"
                value={chequeNumber}
                onChange={handleChequeNumber}
              />
            </div>
          )}
          {paymentType === 'UPI' && (
            <div className="form-group">
              <label htmlFor="upiId">UPI ID</label>
              <input
                type="text"
                id="upiId"
                className="form-control"
                value={upiId}
                onChange={handleUpiId}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="monthlyCuttingType">Monthly Cutting Type</label>
            <select
              id="monthlyCuttingType"
              className="form-control"
              value={monthlyCuttingType}
              onChange={handleMonthlyCuttingType}
            >
              <option value="">Select Cutting Type</option>
              <option value="amount">Amount</option>
              <option value="percentage">Percentage</option>
            </select>
          </div>
          {monthlyCuttingType === 'amount' && (
            <div className="form-group">
              <label htmlFor="monthlyCuttingAmount">Monthly Cutting Amount</label>
              <input
                type="text"
                id="monthlyCuttingAmount"
                className="form-control"
                value={monthlyCuttingAmount}
                onChange={handleMonthlyCuttingAmount}
              />
            </div>
          )}
          {monthlyCuttingType === 'percentage' && (
            <div className="form-group">
              <label htmlFor="monthlyCuttingPercentage">Monthly Cutting Percentage</label>
              <input
                type="text"
                id="monthlyCuttingPercentage"
                className="form-control"
                value={monthlyCuttingPercentage}
                onChange={handleMonthlyCuttingPercentage}
              />
            </div>
          )}
          { monthlyCuttingPercentage && (
          <div className="form-group">
              <label htmlFor="monthlyCuttingPercentage">Amount</label>
              <input
                type="text"
                id="monthlyCuttingPercentage"
                className="form-control"
                
                onChange={handlePercentageAmount}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="note">Note</label>
            <textarea
              id="note"
              className="form-control"
              value={note}
              onChange={handleNote}
            />
          </div>
          <div className="form-group">
            <label htmlFor="file">Upload File</label>
            <input
              type="file"
              id="file"
              className="form-control-file"
              onChange={handleFileUpload}
            />
          </div>
        </div>
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
                        to="/loanlist"
                        className="btn btn-outline-secondary ml-1 text-light"
                        style={{ width: "fit-content", height: "fit-content" }}
                      >
                        CANCEL
                      </Link>
                    </div>
      </div>
      </div>
      </div>
    </form>
    </div>
    </div>
    </div>
    
    

    {/* <!-- Payment Term Create Modal --> */}
    <div className="modal fade" id="createNewTerm">
        <div className="modal-dialog">
          <div className="modal-content" style={{ backgroundColor: "#213b52" }}>
            <div className="modal-header">
              <h5 className="m-3">New Payment Term</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body w-100">
              <div className="card p-3">
                <form
                 // onSubmit={handleUnitModalSubmit}
                  id="newUnitForm"
                  className="px-1"
                >
                  <div className="row mt-2 w-100">
                    <div className="col-12">
                      <label for="name">Duration</label>
                      <input
                        name="name"
                        id="unit_name"
                        value={modalduration}
                        onChange={(e) => setModalDuration(e.target.value)}
                        className="form-control text-uppercase w-100"
                      />
                    </div>
                  </div>
                  <div className="row mt-2 w-100">
                    <div className="col-12">
                      <label for="name">Term</label>
                      <select
                          className="custom-select"
                          name="unit"
                          id="itemUnit"
                          value={modalterm}
                          onChange={setModalTerm}
                          required
                          style={{ backgroundColor: "#2a4964", color: "white" }}
                        >
                          <option selected disabled value="">
                            Choose...
                          </option>
                          <option value="MONTHS">MONTHS</option>
                          <option value="YEAR">YEAR</option>
                        </select>
                    </div>
                  </div>

                  <div className="row mt-4 w-100">
                    <div className="col-12 d-flex justify-content-center">
                      <button
                        className="btn btn-outline-info text-grey"
                        data-dismiss="modal"
                        type="submit"
                        onClick={handleTermModalSubmit}
                        id="saveItemUnit"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
   
    
    


</>
  );
}


 

  


export default Addloan;