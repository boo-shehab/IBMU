import React from 'react';

const PdfLayout = ({ pdf }) => {
  return (
    <div className='h-screen w-full'>
      <iframe src={pdf + "#toolbar=0"} width="100%" height="100%">
      </iframe>
    </div>
  );
};

export default PdfLayout;
