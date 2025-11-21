import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-white mb-2">Payment Successful!</h1>
        <p className="text-gray-400 mb-8">Thank you for your purchase.</p>
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
