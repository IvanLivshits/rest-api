import React from 'react';
import FileDownload from 'js-file-download';

const hostUrl = 'http://localhost:1703/api/file_download';

const DownloadButton = () => {

    const download = (e) => {
        e.preventDefault();
        fetch(hostUrl, {
            method: 'GET',
            headers: {
                'Content-Disposition': 'form-data'
            },
            responseType: "blob"
        }).then((res) => {
            FileDownload(res.data, "ground.png");
        })
    }
   return (
       <div>
            <button onClick={(e) => download(e)}>Download</button>
       </div>
   );
};

export default DownloadButton;