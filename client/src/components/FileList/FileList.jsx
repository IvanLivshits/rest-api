import React, { useState, useEffect } from 'react';
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
            {sign ? sign.map((el) => 
                <FileCard props={el}/>
            ) : "Is Loading..."}
       </div>
   );
};

export default FileList;