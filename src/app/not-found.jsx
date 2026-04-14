import Link from "next/link"






const NotFound = () => {
  return (
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      
      {/* Error Code */}
      <h1 className="text-8xl font-extrabold text-red-500">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl font-bold text-gray-800 mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2 text-center max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

     <Link href="./">
            <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">back home</button>
            </Link>
    

 

    


    </div>



  
  )
}

export default NotFound
