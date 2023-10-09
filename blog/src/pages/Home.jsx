import React, { useEffect, useState } from 'react'
import {getDocs,collection} from 'firebase/firestore'
import {db} from "../firebase-config"

function Home() {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");


  useEffect(() => {
    const getPosts = async () => {
      const data =await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
     
    }

    getPosts()
  },[])

  return (
    <h1 className=" text-black">
      {postLists.map((post , key) => {
        return (
        <div className='text-2xl' key={key}>
          <div className='text-xl'>{post.title}</div>
          <div>{post.postText}</div>
          <h3>@{post.author.name}</h3>
        </div>
        )
      })}
    </h1>
  )
}

export default Home;