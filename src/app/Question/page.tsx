import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <p>問題表示</p>
      <Link href={"/Anser"} className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded">
        解答
      </Link>
    </div>
  )
}

export default page