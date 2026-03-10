import { ParkingCircle } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Link href="/" className="flex items-center gap-2 w-fit">
          <ParkingCircle className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl">ParkEase</span>
        </Link>
      </div>
    </nav>
  );
}
