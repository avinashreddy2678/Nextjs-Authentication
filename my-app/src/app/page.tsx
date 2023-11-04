"use client"
import Image from 'next/image'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation';
export default function Home() {
  const router=useRouter()
  const handlelogout=async()=>{
      await axios.get("/api/users/Logout")
       router.push("/Login");
  }
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-4xl'>Home Page</h1>
      <button onClick={handlelogout} className='btn btn-primary' >Logout</button>
    </main>
  )
}
