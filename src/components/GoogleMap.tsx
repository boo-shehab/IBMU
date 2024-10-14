import React from "react";
import { useSelector } from "react-redux";
export default function GoogleMap(){

  const { headquarterData } = useSelector((state: any) => state.headquarter);
  return (
    <div className="h-96 mx-auto border-t-8 border-yellow-300">
      {headquarterData && Object.keys(headquarterData).length > 0 && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63440.910386987045!2d44.42635702922934!3d33.31353065984793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1557818e49c497db%3A0x3f51b084ac2d44da!2z2KfYqtit2KfYryDYsdis2KfZhCDYp9i52YXYp9mEINin2YTYudix2KfZgtmK2YrZhg!5e0!3m2!1sen!2siq!4v1728373227214!5m2!1sen!2siq"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
}