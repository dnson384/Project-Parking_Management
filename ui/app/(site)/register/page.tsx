"use client";
import Link from "next/link";
import Image from "next/image";
import { ParkingCircle, Eye, EyeOff } from "lucide-react";
import useRegister from "@/presentation/hook/Auth/useRegister";
import { btnVariants } from "@/presentation/components/share/btnVariants";
import { Button } from "@/presentation/components/common/button";
import NavBar from "@/presentation/components/layout/navbar";

export default function Register() {
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
  } = useRegister();

  return (
    <>
      <NavBar />

      <div className="max-w-7xl px-4 py-12 grid md:grid-cols-2 gap-12 items-center mx-auto">
        {/* Right side - Image */}
        <div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video hidden md:block md:order-1">
            <Image
              src="https://images.unsplash.com/photo-1709364531162-6e613646afa8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHBhcmtpbmclMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MzA4Mjg5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Smart parking technology"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold mb-2">
              Hãy gia nhập ParkEase ngay hôm nay!
            </h2>
            <p className="text-muted-foreground mb-4">
              Trải nghiệm quản lý bãi đậu xe dễ dàng, không rắc rối với nền tảng
              tiên tiến
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                Thông tin chỗ đỗ xe có sẵn theo thời gian thực{" "}
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                Đặt chỗ trực tuyến dễ dàng{" "}
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                Xử lý thanh toán an toàn{" "}
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-black" />
                Hỗ trợ khách hàng 24/7{" "}
              </li>
            </ul>
          </div>
        </div>

        {/* Left side - Registration Form */}
        <div className="w-full max-w-lg mx-auto border border-gray-300 px-8 py-10 rounded-xl md:order-2">
          <div className="mb-5">
            <h1 className="text-2xl font-bold mb-1">Đăng ký tài khoản</h1>
            <p>Bắt đầu sử dụng ParkEase chỉ với vài bước đơn giản</p>
          </div>

          <section>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="fullname" className="font-medium">
                  Họ và Tên
                </label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Nguyễn Văn A"
                  className="py-1.5 px-3 bg-gray-100 rounded-lg focus:bg-gray-200 focus:outline-1 focus:outline-gray-500"
                  value={fieldData.fullname}
                  onChange={(e) => handleFieldChange(e)}
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-medium">
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
                <label htmlFor="phone" className="font-medium">
                  Số điện thoại
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="0123456789"
                  className="py-1.5 px-3 bg-gray-100 rounded-lg focus:bg-gray-200 focus:outline-1 focus:outline-gray-500"
                  value={fieldData.phone}
                  onChange={(e) => handleFieldChange(e)}
                  required
                />
              </div>

              <div>
                <label htmlFor="plainPassword" className="font-medium">
                  Mật khẩu
                </label>
                <div className="relative">
                  <input
                    id="plainPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
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

              <div>
                <label htmlFor="confirmPassword" className="font-medium">
                  Xác nhận mật khẩu
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full py-1.5 px-3 bg-gray-100 rounded-lg focus:bg-gray-200 focus:outline-1 focus:outline-gray-400"
                    value={fieldData.confirmPassword}
                    onChange={(e) => handleFieldChange(e)}
                    required
                  />
                </div>
              </div>

              <div className="flex items-start space-x-2">
                <input
                  id="agreeToTerms"
                  type="checkbox"
                  className="accent-black"
                  checked={fieldData.agreeToTerms}
                  onChange={(e) => handleFieldChange(e)}
                />
                <label
                  htmlFor="agreeToTerms"
                  className="text-sm text-muted-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Tôi đồng ý với{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Điều khoản dịch vụ
                  </Link>{" "}
                  và{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Chính sách bảo mật
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                classname={"font-bold mt-3"}
                variant={btnVariants.variant.dark}
                size={btnVariants.size.lg}
                content="Đăng ký tài khoản"
              />
            </form>
          </section>

          <div className="mt-4 flex justify-center">
            <p className="text-sm">
              Bạn đã có tài khoản?{" "}
              <Link href="/login" className="font-medium hover:underline">
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
