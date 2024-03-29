import Link from "next/link";

export default function Error_404() {
  return (
    <div className="text-center flex flex-col content-center items-center my-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20 text-red-900 mb-3">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
      <h2 className="text-2xl font-bold pb-2">صفحه یافت نشد!</h2>
      <p className="mb-5">متاسفانه صفحه مورد نظر شما یافت نشد.</p>
      <Link href="/" className="bg-blue-600 px-5 py-2 rounded-full text-white text-xs hover:bg-blue-400">بازگشت به صفحه اصلی</Link>
    </div>
  );
}