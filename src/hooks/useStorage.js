import {useState, useEffect} from "react";
import {dataFirestore, dataStorage, timestamp} from "../Config"

function useStorage(input) {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(()=>{
        const storageRef = dataStorage.ref(input.name);
        const collectionRef = dataFirestore.collection('images');

        storageRef.put(input).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err)=>{
            setError(err);
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            await collectionRef.add({url, createdAt});
            setUrl(url);
        })
    }, [input])

    return (
        {progress, error, url}
    )
}

export default useStorage;