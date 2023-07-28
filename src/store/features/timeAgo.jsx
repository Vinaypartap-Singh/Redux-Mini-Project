import parseISO from "date-fns/parseISO";
import React from "react";
import { formatDistanceToNow } from "date-fns";

export default function TimeAgo({ timestamp }) {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return (
    <div>
      <span title={timestamp}>
        &nbsp; <i>{timeAgo}</i>
      </span>
    </div>
  );
}
