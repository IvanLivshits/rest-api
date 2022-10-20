import React, { useState, useEffect } from 'react';
import DownloadButton from '../DownloadButton/DownloadButton';
import FileCard from '../FileCard/FileCard';

const FileList = () => {
    const [sign, setSign] = useState([]);

    useEffect(() => {
        fetch("http://localhost:1703/api/files_info")
        .then(res => res.json())
        .then(data => setSign(data));
    }, []);

   return (
       <div>
            <DownloadButton />
            {sign ? sign.map((el) => 
                <FileCard key={el.id} props={el}/>
            ) : "Is Loading..."}
       </div>
   );
};

export default FileList;