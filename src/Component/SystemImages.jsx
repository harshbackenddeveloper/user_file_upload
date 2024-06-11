import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { makeApi } from '../helper/MakeApi';
import Loader from '../Common/Loader';
const SystemImages = () => {
    const { key } = useParams();
    const navigate = useNavigate();
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState()
    const [loading, setLoading] = useState(false);
    const [selectedImages, setSelectedImages] = useState([]);
    const handleImageChange = (e) => {
        const files = e.target.files;
        setSelectedImages([...selectedImages, ...files]);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedImages.length <= 0) {
            toast.error("please select file")
        }
        setLoading(true)
        try {
            const formData = new FormData();
            selectedImages.forEach(image => {
                formData.append("files[]", image);
            });
            formData.append("key", key);
            formData.append("latitude", latitude);
            formData.append("longitude", longitude);
            const response = await makeApi('post', "/v1/user/uploadFile", formData)
            if (response.hasError == true) {
                console.log("errror", response)
                toast.error(response.error.message)
            } else {
                console.log("response ", response)
                toast.success("images uploaded successfully");
                navigate('/thankyou')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const { latitude, longitude } = position.coords;
                    setLatitude(latitude);
                    setLongitude(longitude);
                }, (error) => {
                    console.error('Error getting location:', error);
                });
            } else {
                console.error('Geolocation is not supported by this browser.');
            }
        };
        getLocation();
    }, []);
    return (
        <div>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card p-4 p-lg-5 p-md-5 p-sm-5 p-xl-5 p-xxl-5  shadow-lg border-1 d-flex justify-content-between  mt-4">
                            <h4 className='fw-bold mb-3 '>Choose file from you system</h4>
                            <form onSubmit={handleSubmit} className='d-flex justify-content-between flex-wrap flex-column p-0'>
                                <input type="file" className='mb-3' multiple onChange={handleImageChange} />
                                <div>
                                    {loading ? <Loader /> : <button className="btn btn-primary mb-0 d-block" type="submit">Upload </button>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SystemImages