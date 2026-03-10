"use client";
import Link from "next/link";
import Image from "next/image";
import { ParkingCircle, Eye, EyeOff } from "lucide-react";

import useLogin from "@/app/presentation/hook/useLogin";
import { Button } from "@/app/presentation/components/common/button";
import { btnVariants } from "@/app/presentation/components/share/btnVariants";
import NavBar from "@/app/presentation/components/layout/navbar";

export default function Login() {
  const {
    showPassword,
    setShowPassword,
    fieldData,
    handleFieldChange,
    handleSubmit,
  } = useLogin();

  return (
    <>
      <NavBar/>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:block">
            <div className="mt-6">
              <h2 className="text-3xl font-bold mb-2">
                Chào mừng bạn trở lại!
              </h2>
              <p className="text-muted-foreground">
                Truy cập bảng điều khiển bãi đậu xe và quản lý chỗ đậu xe của
                bạn một cách dễ dàng.{" "}
              </p>
            </div>
          </div>

          {/* Login Form */}
          <div className="w-full max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-bold mb-2">Đăng nhập</h1>
              <p>Nhập thông tin đăng nhập của bạn để truy cập vào tài khoản.</p>
            </div>
            <section>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    className="py-1.5 px-3 border border-gray-300 rounded-lg focus:bg-gray-100 focus:outline-1 focus:outline-gray-400"
                    value={fieldData.email}
                    onChange={(e) => handleFieldChange(e)}
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
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
                      className="w-full py-1.5 px-3 border border-gray-300 rounded-lg focus:bg-gray-100 focus:outline-1 focus:outline-gray-400"
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
                  classname="font-bold"
                  variant={btnVariants.variant.dark}
                  size={btnVariants.size.lg}
                  content="Đăng nhập"
                />
              </form>
            </section>

            {/* Register */}
            <div className="mt-2 flex justify-center">
              <p className="text-sm text-muted-foreground">
                Bạn chưa có tài khoản?{" "}
                <Link href="/register" className="font-bold hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
