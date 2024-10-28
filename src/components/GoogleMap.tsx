import { useSelector } from "react-redux";
export default function GoogleMap(){

  const { headquarterData } = useSelector((state: any) => state.headquarter);
  return (
    <div className="h-96 mx-auto border-t-8 border-yellow-300">
      {headquarterData && Object.keys(headquarterData).length > 0 && (
        <iframe
          src={headquarterData.embedLocation}
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