"use client"

import { createContext, useState, useContext } from "react"

const MortgageContext = createContext()

export function MortgageDataProvider({ children }) {
  const [mortgageData, setMortgageData] = useState({
    propertyAddress: "",
    transactionDate: "",
    borrowerName: "",
    loanOfficerName: "",
    nmlsId: "",
    loanAmount: "",
    loanTerm: "",
    downPayment: "",
    apn: "",
    enteredBy: "",
    propertyType: "Single Family Home",
    propertySize: "2500 sq ft",
    email: "john.smith@example.com",
    phone: "(123) 456-7890",
    interestRate: "3.5%",
  })

  const updateMortgageData = (newData) => {
    setMortgageData((prevData) => ({
      ...prevData,
      ...newData,
    }))
  }

  return <MortgageContext.Provider value={{ mortgageData, updateMortgageData }}>{children}</MortgageContext.Provider>
}

export function useMortgageData() {
  return useContext(MortgageContext)
}
