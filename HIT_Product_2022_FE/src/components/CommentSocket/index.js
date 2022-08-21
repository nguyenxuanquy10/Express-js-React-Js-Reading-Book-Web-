import React, { useState } from 'react'
import AddComent from './addComment';
import ListComment from './listComent';
const io = require('socket.io-client');
// const socket = io.connect('http://localhost:5000');
const socket = io('http://localhost:5000', { transports: ['websocket'] });
const Comment = () => {
  const [comment, setComment] = useState("")
  return (
    <div>
      <AddComent socket={socket} comment={comment} setComment={setComment}></AddComent>
      <ListComment socket={socket} comment={comment} setComment={setComment}></ListComment>
    </div>
  )
}

export default Comment