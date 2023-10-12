import { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

function BookmarkButton({ data }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkUser, setBookmarkUser] = useState([]);

  const { user } = useAuth();
  const { _id, name, pictureURL, instructorName, price, instructorEmail } =
    data;
  const bookmarkClassData = {
    userEmail: user?.email,
    userName: user?.displayName,
    classId: _id,
    className: name,
    classPhoto: pictureURL,
    instructorEmail,
    instructorName,
    price,
  };

   

   useEffect(() => {
     axios
       .get(`http://localhost:5000/users/${user?.email}`)
       .then((data) => setBookmarkUser(data.data));
   }, [user]);

  

  const toggleBookmark = () => {
    setIsBookmarked(true);
    fetch(
      `https://sport-spark-server-riyad3399.vercel.app/bookmark/${data._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookmarkClassData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          Swal.fire({
            icon: "success",
            title: "Bookmark successful",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          alert("This class already Bookmark");
        }
      });
  };

  return (
    <IconButton
      color={isBookmarked ? "secondary" : "info"}
      disabled={bookmarkUser.role === "user" ?false : true}
      onClick={toggleBookmark}
      title={isBookmarked ? "Bookmarked" : "Bookmark"}
    >
      {isBookmarked ? (
        <BookmarkIcon fontSize="large" />
      ) : (
        <BookmarkBorderIcon fontSize="large" />
      )}
    </IconButton>
  );
}

export default BookmarkButton;
