"use client"
import React, { useState } from "react";

interface FieldData {
  fullname: string;
  email: string;
  phone: string;
  plainPassword: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export default function useRegister() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fieldData, setFieldData] = useState<FieldData>({
    fullname: "",
    email: "",
    phone: "",
    plainPassword: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFieldData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fieldData.plainPassword !== fieldData.confirmPassword) {
      return setErrorMessage("Mật khẩu không khớp!");
    }

    if (!fieldData.agreeToTerms) {
      return setErrorMessage("Vui lòng đồng ý với các điều khoản và điều kiện");
    }

    console.log("Registration attempt:", fieldData);
  };

  return {
    // Show password
    showPassword,
    setShowPassword,
    // Error
    errorMessage,
    // Data
    fieldData,
    handleFieldChange,
    // Submit
    handleSubmit,
  };
}
