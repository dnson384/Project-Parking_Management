"use client";
import React, { useState } from "react";

interface FieldData {
  email: string;
  plainPassword: string;
}

export default function useLogin() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fieldData, setFieldData] = useState<FieldData>({
    email: "",
    plainPassword: "",
  });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFieldData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempt:", fieldData);
  };
  return {
    showPassword,
    setShowPassword,
    fieldData,
    handleFieldChange,
    handleSubmit,
  };
}
