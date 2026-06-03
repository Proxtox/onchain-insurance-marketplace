"use client";

export default function ClaimsPage() {
  return (
    <div className="max-w-2xl mx-auto mt-10 p-8">
      <h1 className="text-3xl font-bold mb-8">Insurance Claims</h1>
      <div className="p-6 border rounded-2xl">
        <p className="mb-4">Submit or view parametric insurance claims.</p>
        <button className="w-full bg-red-600 text-white py-3 rounded-2xl">Submit Claim</button>
      </div>
    </div>
  );
}