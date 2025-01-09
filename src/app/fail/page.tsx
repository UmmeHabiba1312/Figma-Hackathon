export default function ErrorPage() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Payment Failed!</h1>
          <p className="text-gray-600">Your payment could not be processed. Please try again.</p>
          <a
            href="/checkOut"
            className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Go Back to Checkout
          </a>
        </div>
      </div>
    );
  }