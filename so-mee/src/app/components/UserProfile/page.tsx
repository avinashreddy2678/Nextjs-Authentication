import React from "react";
import Image from "next/image";
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
interface PageProps {
  name: string;
  email: string;
  profileimg: string;
}

const Page: React.FC<PageProps> = ({ name, email, profileimg }) => {
  return (
    <div className="flex flex-col">
      <div className="userimage py-3 flex justify-center">
        <Image
          className=" h-20 w-20 rounded-full"
          src={
          profileimg ? profileimg : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsAewMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQUCAwQGB//EAC0QAAICAgAFAgQGAwAAAAAAAAABAgMRMQQFEiFBUXEiUmGBExQyQnKRI7Hw/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APogAAAAAAABpsV/U/w3BRfqu5uACOelZ2AAAAAAAA9BaD0FoAAAAAAk2UUWXyxWu3lvSNRecLWqqIRS8ZfuBzLlkOnvbLq9lg6KuFpqjiMIt+slls3ADVbw1Ni+Kte6WGV/EcBOtOVWZx9PKLUAeeB1cxqVfEZisKaz9zlAAAA9BaD0FoAAAAAAk9B7Hn8Z7LyXvDqapgrFiSWH3yBmAAAAArub/qq+5XnXzOUnxOGmlFJLPk5AAAAPQWg9BaAAAAAAMoS6LIS+Vpl+mmsryeeLLl3Eym1RLHwx+F+oHeAAABjdYqqpTfhZwBXc2l/kritpZOE2X2u62VjWM6XojWAAAB6C0HoLQAAAAAAM6rHVbGa/azAyhB2TjBbbAv08pNaYAAFdzS7uqV/JliVnNa2rY2ftax9wOEAAAAAegtB6C0AAM6ap3z6K138vwgMDOuudrxXFyf0LOnl9UO8/jf17I60lFJRSSXhAVdXLrJPNslBei7ssKKK6FiuPu3tmwAAAAIlFSWJJNPwyQBwX8tjJuVMul/K9HJbwt9SblW2l5XdF0APPAu7uFpu7yhiXzR7MruK4OVC64vqh6+UByvQWg9BaAFtyypQ4frf6pvP2KnDbwtsv649FcYrwkgMgAAAAAAAAAAAAASSlFxlprDAAoLYfhzlB/teDFaOrmcOnic+JJM5VoDdwceviq4/XP9F2VPK0vzL/AIstwIBIAgEgCASAIBIAgEgCASAK/m8cwrn6PH/f0Vq0XHMkvysvdf7KhAf/2Q=="
        }
          height={0}
          width={0}
          alt=""
        />
        
      </div>
      <div className="editUser btn w-[70%] m-auto flex justify-center align-middle">
            Edit Profile<EditIcon className=" cursor-pointer"/>
        </div>
      <div className="name">
        <p className="text-center">{name}</p>
        <p className="text-center">{email}</p>
      </div>
      <div className="joinedon text-center">
        <CalendarMonthIcon/><span>Joined on 2nd Nov 2023</span>
      </div>
      
      <div className="userfollow text-center flex justify-center">
            <Link href={"/followers"}>Followers<span className="px-2">-20</span></Link>
            <Link href={"/followers"}>Following<span className="px-2">-20</span></Link>
      </div>
      {/* <div className="userposts">
            Posted By Me
            <p>SAMPLE :Post 1 here it was posted</p>
      </div> */}
      <div className="userLogout text-center">
         <Link href={"/Logout"} className="btn btn-primary">Logout</Link>
      </div>
    </div>
  );
};
export default Page;
