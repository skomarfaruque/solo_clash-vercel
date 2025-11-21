import Link from "next/link";
import { XCircle } from "lucide-react";

export default function CancelPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-2">Payment Cancelled</h1>
        <p className="text-gray-400 mb-8">Your payment has been cancelled.</p>
        <Link
          href="/"
          className="bg-[#FB782D] hover:bg-[#E66B1F] text-white font-medium py-3 px-8 rounded-lg transition"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
