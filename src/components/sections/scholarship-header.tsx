export default function ScholarshipHeader() {
  return (
    <div
      className="relative flex h-60 items-center justify-between rounded-xl bg-secondary text-white"
      style={{
        backgroundImage: "url('/images/bagpack.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/30 to-secondary/70" />
      <div
        className="relative bg-secondary p-8"
        style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}
      >
        <h1 className="font-bold text-3xl text-gray-900">My Scholarships</h1>
        <p className="text-gray-900 text-lg">
          View all available scholarships and manage your selected scholarship
          here
        </p>
      </div>
      <div className="absolute right-12 bottom-0 z-0">
        <img
          src="/images/session-img.png"
          alt="Illustration"
          style={{ backgroundColor: 'rgba(234, 189, 29, 0.5)' }}
        />
      </div>
    </div>
  );
}
