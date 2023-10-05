//First Name, Last Name, Date of Birth, Start Date
import "./style.css"
import {DatePicker} from "../DatePicker/index.jsx";
import {useEffect, useState} from "react";
import {DropdownMenu} from "../DropdownMenu/index.jsx";
import {Departments, statesUSA} from "../../Datas/index.jsx";
import { useModal } from 'modal-oc-react'

import { useSelector, useDispatch } from 'react-redux'
import {addEmployee} from "../../Features/EmployeesSlice";

    const initialFormData = {
        firstName: "",
        lastName: "",
        dateOfBirth: "2023-01-01",
        startDate: "2023-01-01",
        street: "",
        city: "",
        state: statesUSA[0].name,
        zipCode: "",
        jobDepartment: Departments[0],
    };

export const FormAddEmployee = () => {
    const {openModal} = useModal()
    const dispatch = useDispatch()

    const [error, setError] = useState(false);
    const [formData, setFormData] = useState(initialFormData);
    const [states, setStates] = useState([])
    useEffect(() => {
        const statesName = []
        statesUSA.forEach(state => {
            statesName.push(state.name)
        })
        setStates(statesName)
    }, [])
    const handleChange = (e) => {
        setError(false)
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const validateForm = () => {
        const missingFields = [];
        for (const key in formData) {
            if (formData[key].trim() === "") {
                missingFields.push(key);
            }
        }

        if (missingFields.length > 0) {
            setError(`You forgot to fill in the following fields: ${missingFields.join(", ")}`);
        } else {
            dispatch(addEmployee(formData));
            openModal({
              title: "Employee added ✅",
                content: "The employee has been added successfully",
            })
            setFormData(initialFormData);
        }
    };

    return (
        <div className={"formEmployee"}>
            <div className={"FormAddEmployee"}>
                    <div className={"infosList"}>
                        <div className={"formSubTitle"}>Employee Information</div>
                        <div className={"inputWithLabel"}>
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}/>
                        </div>
                        <div className={"inputWithLabel"}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}/>
                        </div>
                        <div className={"inputWithLabel"}>
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <DatePicker label={"Date of Birth"} name={"dateOfBirth"} value={formData.dateOfBirth} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={"infosList"}>
                        <div className="formSubTitle">Address</div>
                        <div className={"inputWithLabel"}>
                            <label htmlFor="street">Street</label>
                            <input type="text" name="street" placeholder="Street" value={formData.street} onChange={handleChange}/>
                        </div>
                        <div className={"inputWithLabel"}>
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange}/>
                        </div>
                        <div className={"inputWithLabel"}>
                            <DropdownMenu name="state" options={states} onSelect={handleChange}/>
                        </div>
                        <div className={"inputWithLabel"}>
                            <label htmlFor="zipCode">Zip Code</label>
                            <input type="number" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange}/>
                        </div>
                    </div>
                    <div className={"infosList"}>
                        <div className="formSubTitle">Job information</div>
                        <div className={"inputWithLabel"}>
                            <label htmlFor={name}>Start date</label>
                            <DatePicker label={"Start Date"} name={"startDate"} value={formData.startDate} onChange={handleChange} />
                        </div>
                        {/* Add job department */}
                        <div className={"inputWithLabel"}>
                            <DropdownMenu name="jobDepartment" options={Departments} onSelect={handleChange}/>
                        </div>
                    </div>
            </div>
            <div className={"validateForm"}>
                {error ? <div className={"errorValidation"}>{error}</div>: <></>}
                <button className={"validateButton"} onClick={validateForm}>Create Employee</button>
            </div>
        </div>
    )
}