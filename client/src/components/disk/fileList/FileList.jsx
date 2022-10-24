import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFiles } from '../../../actions/file';
import File from '../file/File';
import './fileList.css';
import arrow_left from '../../../assets/img/arrow_left.png';
import arrow_right from '../../../assets/img/arrow_right.png';
import slash from '../../../assets/img/slash.png';

const FileList = ({files, setFiles}) => {
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [filesPerPage, setFilesPerPage] = useState(10);
    const userId = useSelector(state => state.user.currentUser.id);

    useEffect(() => {
        getFiles(userId).then(res => {
            setFiles(res.data.fileList);
        });
    }, [userId]);

    const decreasePage = (page) => {
        setPage(page > 1 ? page - 1 : page);
    }

    const increasePage = (page) => {
        setPage(page < pages ? page + 1 : page);
    }

    const handleChange = (event) => {
        const value = +event.target.value;

        if (value && value > 0 && Number.isInteger(value)) {
            setFilesPerPage(value);
        }
        setPages(Math.ceil(files.length/value));
    }
    
    const fileStorage = files.length ? files.map(file => <File setFiles={setFiles} key={file.id} fileInfo={file} id={file.id} name={file.name} />) : null;

    return (
        <div>
            <div className='fileList'>
                {fileStorage ? fileStorage.slice((page - 1) * filesPerPage, page * filesPerPage) : <h1 className='loading__header'>Waiting for file delivery...</h1>}
            </div>
            {files.length ? <div className='pagination'>
                <img src={arrow_left} onClick={() => decreasePage(page)} className="pagination__symbol"/>
                <div>{page}</div>
                <img src={slash} className="pagination__divider"/>
                <input type="text" placeholder={filesPerPage} onChange={(event) => handleChange(event)} className='pagination__input'/>
                <img src={slash} className="pagination__divider"/>
                <div>{pages}</div>
                <img src={arrow_right} onClick={() => increasePage(page)} className="pagination__symbol"/>
            </div> : null}
        </div>
    );
};

export default FileList;