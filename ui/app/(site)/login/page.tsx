"use client";
import Link from "next/link";
import Image from "next/image";
import { Eye, EyeOff, CircleX } from "lucide-react";
import { motion } from "framer-motion";

import useLogin from "@/presentation/hook/Auth/useLogin";
import { Button } from "@/presentation/components/common/button";
import { btnVariants } from "@/presentation/components/share/btnVariants";
import NavBar from "@/presentation/components/layout/navbar";

export default function Login() {
  const {
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
  } = useLogin();

  return (
    <>
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="hidden md:block max-w-xl">
          <div className="relative rounded-xl overflow-hidden aspect-video">
            <Image
              src="https://images.unsplash.com/photo-1558798950-b05b143f435b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwcGFya2luZyUyMGxvdCUyMGFlcmlhbCUyMHZpZXd8ZW58MXx8fHwxNzczMDk5MDgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              fill
              alt="Modern parking facility"
              className="object-cover"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold mb-2">Chào mừng bạn trở lại!</h2>
            <p className="text-muted-foreground">
              Truy cập bãi đậu xe và quản lý chỗ đậu xe của bạn một cách dễ
              dàng.{" "}
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className="relative">
          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute w-full top-[-50] z-10 flex justify-center"
            >
              <div className="bg-red-50 border border-red-200 flex items-center gap-2 px-3 py-1 rounded-md shadow-md">
                <CircleX color="#fb2c36" size={18}/>
                <p className="text-red-500 font-medium text-sm">
                  {errorMessage}
                </p>
              </div>
            </motion.div>
          )}

          <div className="w-full max-w-lg mx-auto border border-gray-300 px-8 py-10 rounded-xl">
            <div className="mb-5">
              <h1 className="text-2xl font-bold mb-1">Đăng nhập</h1>
              <p>Nhập thông tin đăng nhập của bạn để truy cập vào tài khoản.</p>
            </div>

            <section>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="py-1.5 px-3 bg-gray-100 rounded-lg focus:bg-gray-200 focus:outline-1 focus:outline-gray-500"
                    value={fieldData.email}
                    onChange={(e) => handleFieldChange(e)}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="plainPassword" className="font-semibold">
                      Mật khẩu
                    </label>
                    <Link
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="plainPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Nhập mật khẩu của bạn"
                      className="w-full py-1.5 px-3 bg-gray-100 rounded-lg focus:bg-gray-200 focus:outline-1 focus:outline-gray-400"
                      value={fieldData.plainPassword}
                      onChange={(e) => handleFieldChange(e)}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  classname="font-bold mt-3"
                  variant={btnVariants.variant.dark}
                  size={btnVariants.size.lg}
                  content="Đăng nhập"
                />
              </form>
            </section>

            {/* Register */}
            <div className="mt-4 flex justify-center">
              <p className="text-sm">
                Bạn chưa có tài khoản?{" "}
                <Link href="/register" className="font-bold hover:underline">
                  Đăng ký
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
