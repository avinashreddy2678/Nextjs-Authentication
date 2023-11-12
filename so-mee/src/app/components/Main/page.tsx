import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/navigation';
import React from "react";
import Modalbox from "./Modalbox";
interface Profileimg {
  profileimg: string;
  id:string
}
const Page: React.FC<Profileimg> = ({profileimg,id}) => {
  const router=useRouter();
  const hanldefollowingclick=(id:string)=>{
        router.push(`user/${id}`)
  }
  return (
    <div>
      <div className="main-top flex w-[99%] justify-between">
        <div className="allposts btn lg:px-[19%] md:px-[19%] sm:px-[10%] bg-transparent mx-1 border-0 rounded-none">
          For You
        </div>
        <div className="userposts btn bg-transparent lg:px-[19%] md:px-[19%]  mx-1 border-0 rounded-none">
         <p onClick={()=>hanldefollowingclick(id)} className="text-sm">Following</p> 
        </div>
      </div>
      <div className="postingbox">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <p
          className="w-100 h-[100px] shadow-md flex align-middle justify-center"
          onClick={() => document.getElementById("my_modal_7" ||"").showModal()}
        >
          <Image
          className=" h-14 w-14 rounded-full m-4"
          src={
          profileimg!=="" ? profileimg: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAewMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EAC0QAAICAgAFAgQGAwAAAAAAAAABAgMRMQQFEiFBUXEiUmGBExQyQnKRI7Hw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APogAAAAAAABpsV/U/w3BRfqu5uACOelZ2AAAAAAAA9BaD0FoAAAAAAk2UUWXyxWu3lvSNRecLWqqIRS8ZfuBzLlkOnvbLq9lg6KuFpqjiMIt+slls3ADVbw1Ni+Kte6WGV/EcBOtOVWZx9PKLUAeeB1cxqVfEZisKaz9zlAAAA9BaD0FoAAAAAAk9B7Hn8Z7LyXvDqapgrFiSWH3yBmAAAAArub/qq+5XnXzOUnxOGmlFJLPk5AAAAPQWg9BaAAAAAAMoS6LIS+Vpl+mmsryeeLLl3Eym1RLHwx+F+oHeAAABjdYqqpTfhZwBXc2l/kritpZOE2X2u62VjWM6XojWAAAB6C0HoLQAAAAAAM6rHVbGa/azAyhB2TjBbbAv08pNaYAAFdzS7uqV/JliVnNa2rY2ftax9wOEAAAAAegtB6C0AAM6ap3z6K138vwgMDOuudrxXFyf0LOnl9UO8/jf17I60lFJRSSXhAVdXLrJPNslBei7ssKKK6FiuPu3tmwAAAAIlFSWJJNPwyQBwX8tjJuVMul/K9HJbwt9SblW2l5XdF0APPAu7uFpu7yhiXzR7MruK4OVC64vqh6+UByvQWg9BaAFtyypQ4frf6pvP2KnDbwtsv649FcYrwkgMgAAAAAAAAAAAAASSlFxlprDAAoLYfhzlB/teDFaOrmcOnic+JJM5VoDdwceviq4/XP9F2VPK0vzL/AIstwIBIAgEgCASAIBIAgEgCASAK/m8cwrn6PH/f0Vq0XHMkvysvdf7KhAf/2Q=="
        }
        height={0}
        width={0}
          alt=""
        />
        
        <input type="text" className="w-[100%] flex align-middle outline-none border-0" value={""} placeholder="Write Something ..."/>
        </p>
        <Modalbox id={id} profileimg={profileimg}/>
      </div>
    </div>
  );
};

export default Page;
