import Link from "next/link";
import Image from "next/image";
import { Button } from "../presentation/components/common/button";
import {
  ParkingCircle,
  Clock,
  Shield,
  Smartphone,
  MapPin,
  CreditCard,
} from "lucide-react";
import { btnVariants } from "../presentation/components/share/btnVariants";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ParkingCircle className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">ParkEase</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href={"/login"}>
              <Button
                variant={btnVariants.variant.default}
                content="Đăng nhập"
              />
            </Link>
            <Link href={"/register"}>
              <Button variant={btnVariants.variant.dark} content="Đăng ký" />
            </Link>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Quản lý bãi đỗ xe thông minh thật đơn giản
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Tìm kiếm, đặt chỗ và quản lý chỗ đậu xe dễ dàng. Tạm biệt nỗi lo
                tìm chỗ đậu xe với hệ thống quản lý đậu xe thông minh.
              </p>
              <div className="flex gap-4">
                <Link href={"/register"}>
                  <Button
                    classname="text-lg px-8"
                    variant={btnVariants.variant.dark}
                    size={btnVariants.size.lg}
                    content="Bắt đầu"
                  />
                </Link>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-video">
              <Image
                src="https://images.unsplash.com/photo-1619335680796-54f13b88c6ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwYXJraW5nJTIwZ2FyYWdlJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzczMTE3NTMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                fill
                alt="Modern parking facility"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Tại sao nên chọn ParkEase?
              </h2>
              <p className="text-xl text-muted-foreground">
                Mọi thứ bạn cần để quản lý việc đỗ xe hiệu quả{" "}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h1 className="font-semibold">Khả dụng theo thời gian thực</h1>
                <p>
                  Kiểm tra tình trạng chỗ đậu xe theo thời gian thực và đặt chỗ
                  trước khi bạn đến.
                </p>
              </div>

              <div>
                <Smartphone className="h-12 w-12 text-primary mb-4" />
                <h1 className="font-semibold">
                  Truy cập trên thiết bị di động
                </h1>
                <p>
                  Quản lý chỗ đậu xe của bạn từ bất cứ đâu với giao diện trực
                  quan, thân thiện với thiết bị di động của chúng tôi.
                </p>
              </div>

              <div>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h1 className="font-semibold">An toàn & Đáng tin cậy</h1>
                <p>
                  Dữ liệu và các khoản thanh toán của bạn được bảo vệ bằng các
                  biện pháp bảo mật cấp doanh nghiệp.
                </p>
              </div>

              <div>
                <MapPin className="h-12 w-12 text-primary mb-4" />
                <h1 className="font-semibold">Định vị thông minh</h1>
                <p>
                  Tìm các bãi đỗ xe gần nhất với GPS và điều hướng tích hợp.
                </p>
              </div>

              <div>
                <CreditCard className="h-12 w-12 text-primary mb-4" />
                <h1 className="font-semibold">Thanh toán dễ dàng</h1>
                <p>
                  Xử lý thanh toán liền mạch với nhiều tùy chọn thanh toán và
                  biên lai điện tử.
                </p>
              </div>

              <div>
                <ParkingCircle className="h-12 w-12 text-primary mb-4" />
                <h1 className="font-semibold">Hỗ trợ 24/7</h1>
                <p>
                  Đội ngũ hỗ trợ tận tâm của chúng tôi luôn sẵn sàng hỗ trợ bạn
                  bất cứ khi nào bạn cần giúp đỡ.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20">
          <div className="mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Cách thức hoạt động</h2>
              <p className="text-xl text-muted-foreground">
                Bắt đầu chỉ với ba bước đơn giản
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Đăng ký tài khoàn</h3>
                <p className="text-muted-foreground">
                  Tạo tài khoản chỉ trong vài phút và thiết lập tùy chọn của
                  bạn{" "}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Tìm chỗ đậu xe</h3>
                <p className="text-muted-foreground">
                  Tìm kiếm các chỗ đậu xe có sẵn gần điểm đến của bạn{" "}
                </p>
              </div>

              <div className="text-center">
                <div className="bg-black text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Đỗ xe và trả phí</h3>
                <p className="text-muted-foreground">
                  Đặt chỗ trước, đỗ xe an tâm và thanh toán dễ dàng.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Bạn đã sẵn sàng để thay đổi trải nghiệm đỗ xe của mình chưa?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tham gia cùng hàng ngàn người dùng đã biến việc đỗ xe trở nên dễ
            dàng hơn
          </p>
          <div className="flex justify-center">
            <Link href="/register">
              <Button
                classname="text-lg px-8"
                variant={btnVariants.variant.light}
                size={btnVariants.size.lg}
                content="Bắt đầu ngay bây giờ"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto py-8">
        <div className="mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ParkingCircle className="h-6 w-6 text-primary" />
                <span className="font-bold">ParkEase</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Quản lý bãi đậu xe thông minh cho thế giới hiện đại.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Sản phẩm</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Tính năng</li>
                <li>Giá cả</li>
                <li>Ứng dụng di động</li>
                <li>Tích hợp</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Công ty</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Về chúng tôi</li>
                <li>Tuyển dụng</li>
                <li>Liên hệ</li>
                <li>Blog</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Pháp lý</h4>
              <ul className="space-y-2 text-sm <li>text-muted-foreground">
                <li>Chính sách bảo mật</li>
                <li>Điều khoản dịch vụ</li>
                <li>Chính sách cookie</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-400 mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2026 ParkEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
