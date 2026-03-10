"use client";
import { RegisterPayload } from "@/presentation/schemas/auth.schema";
import { RegisterService } from "@/presentation/services/auth.service";
import { isAxiosError } from "axios";
import React, { useEffect, useState } from "react";

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

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fieldData.plainPassword !== fieldData.confirmPassword) {
      return setErrorMessage("Mật khẩu không khớp!");
    }

    if (!fieldData.agreeToTerms) {
      return setErrorMessage("Vui lòng đồng ý với các điều khoản và điều kiện");
    }

    const payload: RegisterPayload = {
      fullname: fieldData.fullname,
      email: fieldData.email,
      phone: fieldData.phone,
      plainPassword: fieldData.plainPassword,
    };

    try {
      const response = await RegisterService(payload);
    } catch (err) {
      if (isAxiosError(err)) {
        setErrorMessage(err.response?.data.message);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (errorMessage !== null) {
        setErrorMessage(null);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [errorMessage]);

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
