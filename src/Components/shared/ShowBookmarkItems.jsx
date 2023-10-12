import { IconButton } from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";

import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const ShowBookmarkItems = () => {
  const { user } = useAuth();
  const [bookmarkData, setBookmarkData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://sport-spark-server-riyad3399.vercel.app/bookmark/${user?.email}`
      )
      .then((data) => {
        setBookmarkData(data.data);
      });
  }, [user, bookmarkData]);

  return (
    <Link to={`/dashboard/myBookmark/${user?.email}`}>
      <IconButton
        color="secondary" // You can change the color as needed
        aria-label="Add Item"
        className="relative"
      >
        <BookmarkIcon fontSize="large" />
        <span className="badge badge-xs font-bold absolute top-[6px] left-2">
          {bookmarkData.length}
        </span>
      </IconButton>
    </Link>
  );
};

export default ShowBookmarkItems;
