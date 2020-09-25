import { useState, useEffetc } from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffetc(() => {
        //references
        const storageRef = projectStorage.ref(file.name);

        storageRef.put('file').on('state_changed', (snap) => {
            let porcentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(porcentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        });

    }, [file])


    return { progress, error, url };
}

export default useStorage;