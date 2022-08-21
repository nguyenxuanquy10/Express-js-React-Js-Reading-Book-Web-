import React, { useEffect, useState } from 'react'
import './listComment.scss'
import Comment from './comment';
import axios from 'axios'
const ListComment = (props) => {
  const { socket, comment, setComment } = props;
  const [listComment, setListComment] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/commentBooks")
      .then(res => {
        setListComment(res.data)
      })
      .catch(err => console.log('loi o dei'));
  }, [])

  socket.on('listComment', () => {
    axios.get("http://localhost:5000/api/commentBooks")
      .then(res => {
        setListComment(res.data);
      })
      .catch(err => console.log('loi o dei'));
  })
  return (
    <div>
      {
        listComment.map(currentComment => {
          console.log(currentComment)
          return <Comment comment={currentComment}></Comment>
        })
      }
    </div>
  )
}

export default ListComment