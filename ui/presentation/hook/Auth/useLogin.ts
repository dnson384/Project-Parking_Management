"use client";
import React, { useEffect, useState } from "react";
import { LoginService } from "../../services/auth.service";
import { LoginPayload } from "../../schemas/auth.schema";
import { isAxiosError } from "axios";

interface FieldData {
  email: string;
  plainPassword: string;
}

export default function useLogin() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [fieldData, setFieldData] = useState<FieldData>({
    email: "",
    plainPassword: "",
  });

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFieldData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      fieldData.plainPassword.length < 8 ||
      fieldData.plainPassword.length > 64
    ) {
      return setErrorMessage("Mật khẩu phải từ 8-64 ký tự");
    }

    const payload: LoginPayload = {
      email: fieldData.email,
      plainPassword: fieldData.plainPassword,
    };

    try {
      const response = await LoginService(payload);
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
