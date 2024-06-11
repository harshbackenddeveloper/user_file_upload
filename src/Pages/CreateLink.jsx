import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Box, Fade, FormControl, InputLabel, MenuItem, Modal, Select, TextField, } from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import '../Common/css/Modal.css';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import Layout from '../Component/Layout';
import { makeApi } from '../helper/MakeApi';
import Loader from '../Common/Loader';
import { ProperDateFormat, userlocalStorageData } from '../helper/UserToken';
import ShowDocument from '../Component/ShowDocument';
import WhatsappShare from '../Component/WhatsappShare';
import { TableContainer, Table, TableBody, TableCell, TablePagination, TableRow, TableHead, Paper, Button } from '@mui/material';

const CreateLink = () => {

    const [link, setLink] = useState([]);
    const navigate = useNavigate();
    const userToken = userlocalStorageData().userToken
    const [loading, setLoading] = useState(false);
    const [selectedLinkURL, setSelectedLinkURL] = useState(''); // New state for selected link URL

    //state for modal to show optio of sharing
    const [openOptionShare, setopenOptionShare] = useState(false)
    const handleCloseOptionForShare = () => setopenOptionShare(false)
    const [selectedLinkId, setSelectedLinkId] = useState('')

    //state for show document to user 
    const [showImageModal, setShowImageModal] = useState(false);
    const [selectedDocId, setSelectedDocId] = useState('');

    //state for whatsapp modal open and share details
    const [showWhatsApp, setShowWhatsApp] = useState(false);
    const [selectedWhatsAppId, setSelectedWhatsAppId] = useState('')
    const [allLinkDetails, setAllLinkDetails] = useState([])

    const [searchResut, setSearchResult] = useState('');
    const [userStatus, setUserStatus] = useState('');

    //get previos link
    const getLinkList = async () => {
        // setLoading(true)
        try {
            let LinkList;

            if (searchResut) {
                LinkList = await makeApi('post', '/v1/linklist', { serach_key: searchResut });
                setLink(LinkList.data)
            } else if (userStatus === 0 || userStatus === 1) {
                LinkList = await makeApi('post', '/v1/linklist', { stauts: userStatus })
                setLink(LinkList.data)
            } else if (searchResut && userStatus) {
                console.log("stauts ", userStatus)
                LinkList = await makeApi('post', '/v1/linklist', { serach_key: searchResut, stauts: userStatus })
                setLink(LinkList.data)
            } else {
                LinkList = await makeApi('post', '/v1/linklist')
                setLink(LinkList.data)
            }
            console.log("user link created list ", LinkList);

            const allDetailsLiks = await makeApi('get', '/v1/user/getstorage');
            setAllLinkDetails(allDetailsLiks.data)
            if (LinkList.hasError == true) {
                // toast.error(LinkList.error.message)
            } else {
                // setLink(LinkList.data)
            }
        } catch (error) {
            console.log(error);
        } finally {
            // setLoading(false)
        }
    }

    //function to copy url in clipboard
    let copyURLToClipboard = (url) => {
        navigator.clipboard.writeText(url)
            .then(() => {
                toast.success('URL copied to clipboard');
            })
            .catch((error) => {
                toast.error('Failed to copy URL', error);
            });
    };

    // these state is for creating link
    const [selectedDate, setSelectedDate] = useState(null);
    const [link_name, setLink_name] = useState("");

    //handle submit form for creating link
    const createLink = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const formattedDate = dayjs(selectedDate).format('YYYY-MM-DD');
            const formData = { link_name: link_name, expiry_date: formattedDate }
            const createData = await makeApi('post', '/v1/user/create/link', formData);
            console.log("createData", createData);
            if (createData.hasError === true) {
                toast.error(createData.error.message)
            }
            else {
                toast.success("link created successfully")
                setLink_name("");
                setSelectedDate(null);
                closeCreateLinkModal(true)
                getLinkList();
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        } finally {
            setLoading(false)
        }
    }

    //functioon for sharing link
    const shareDocumentLink = async (id, url) => {
        setSelectedLinkURL(url);
        setopenOptionShare(true)
        setSelectedLinkId(id)
    }

    //function to show document 
    const showDocument = async (id) => {
        setSelectedDocId(id);
        setShowImageModal(true);
    }

    //function for sharing userDocument link with email 
    const shareByEmail = async () => {
        try {
            const shareData = await makeApi('post', '/v1/user/sendemail', { id: selectedLinkId });
            console.log("shareData", shareData);
            if (shareData.hasError == true) {
                toast.error(shareData.error.message)
            } else {
                toast.success("link share successfully")
                const decodedLink = decodeURIComponent(shareData.data);
                window.open(decodedLink, '_blank');
                handleCloseOptionForShare();
            }
        } catch (error) {
            console.log(error);
        }
    }

    //function for sharing userDocument link with shareByWhatsapp 
    const shareByWhatsapp = () => {
        setSelectedWhatsAppId(selectedLinkId)
        setShowWhatsApp(true)
        setopenOptionShare(false)
    }

    const [openModalCreateLink, setModalCreateLink] = useState(false);
    const openCreateLinkModal = () => setModalCreateLink(true);
    const closeCreateLinkModal = () => setModalCreateLink(false);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const clearAllFilter = () => {
        setSearchResult('');
        setUserStatus('');
        getLinkList();
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const rows = link.map((userLink, index) => ({
        ...userLink,
        sno: index + 1,
    }));

    const columns = [
        { field: 'sno', headerName: 'sno', width: 70 },
        { field: 'link_name', headerName: 'Link Name', width: 200 },
        { field: 'link_url', headerName: 'Link Url', width: 150 },
        { field: 'created_at', headerName: 'Create Date', width: 150, renderCell: (params) => <ProperDateFormat dateString={params.row.created_at} /> },
        { field: 'expiry_date', headerName: 'Expiry Date', width: 150, renderCell: (params) => <ProperDateFormat dateString={params.row.expiry_date} /> },
        {
            field: 'share',
            headerName: 'Share',
            width: 120,
            renderCell: (params) => {
                // Check if params and params.row exist
                if (params && params.row && typeof params.row.status !== 'undefined') {
                    return (
                        <Button
                            variant="contained"
                            // color={params.row.status === 0 ? "secondary" : ""} 
                            onClick={() => {
                                if (params.row.status === 0) {
                                    shareDocumentLink(params.row.id, params.row.link_url);

                                }
                            }}
                            disabled={params.row.status !== 0}
                        >
                            {params.row.status === 0 ? "Share" : "Expired"}
                        </Button>
                    );
                } else {
                    return null;
                }
            }
        },
        {
            field: 'show',
            headerName: 'Show',
            width: 120,
            renderCell: (params) => {
                if (params && params.row && typeof params.row.status !== 'undefined') {
                    return (
                        <Button
                            variant="contained" onClick={() => {
                                if (params.row.status !== 0) {
                                    showDocument(params.row.id);
                                }
                            }}
                            disabled={params.row.status === 0}
                        >
                            Show
                        </Button>
                    )
                }
            }
        },
    ];

    useEffect(() => {
        getLinkList();
    }, [searchResut, userStatus])

    return (
        <>
            <Layout />
            <div className='main-content app-content'>
                {loading ? <Loader /> : (<div className='pt-3'>
                    <div className="card shadow border-1 p-3 mt-5 ">
                        <div className='d-flex justify-content-between flex-wrap'>
                            <div>
                                <p className='mb-0 fs-5'>Link-limit : - {allLinkDetails.linkstatus}</p>
                                <p className=' fs-5'> Space {(allLinkDetails.remainingspace)} MB Free of {(allLinkDetails.totalspace)} MB </p>
                            </div>
                            <div>
                                <button onClick={openCreateLinkModal} className='btn btn-primary mb-3 w-100' >Create Link</button>
                            </div>
                        </div>

                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <div className='row'>
                                <div className='col-12 col-md-4 mb-4 mb-sm-0'>
                                    <TextField className='w-100' label="search" value={searchResut} onChange={(e) => setSearchResult(e.target.value)} />
                                </div>
                                <div className='col-12 col-md-5 ms-auto'>
                                    <div className='row'>
                                        <div className='col-7 col-md-9'>
                                            <FormControl fullWidth>
                                                <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={userStatus}
                                                    label="Age"
                                                    onChange={(e) => setUserStatus(e.target.value)}
                                                >
                                                    <MenuItem value={'all'}></MenuItem>
                                                    <MenuItem value={1}>Active</MenuItem>
                                                    <MenuItem value={0}>InActive</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                        <div className='col-5 col-md-3'>
                                            <Button onClick={() => clearAllFilter()} className='btn-primary btn-sm h-100'>Clear filter</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.field}
                                                    align="left"
                                                    style={{ minWidth: column.width }}
                                                >
                                                    {column.headerName}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                                        {columns.map((column) => {
                                                            const value = row[column.field];
                                                            return (
                                                                <TableCell key={column.field} align="left">
                                                                    {column.renderCell ? column.renderCell({ row }) : value}
                                                                </TableCell>
                                                            );
                                                        })}
                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 15]}
                                component="div"
                                count={link.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>

                        {/* modal to show option for share  */}
                        <Modal open={openOptionShare} onClose={handleCloseOptionForShare} closeAfterTransition >
                            <Fade in={openOptionShare}>
                                <Box className='boxStyle shadow border-0 rounded'>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='mb-3'>Share</h5>
                                        <CloseIcon style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleCloseOptionForShare()} />
                                    </div>
                                    <div className="row">
                                        <div className='col-lg-12 col-md-12 col-sm-12'>
                                            <div className='d-flex'>
                                                <div className='me-4'>
                                                    <button className='btn btn-dark share-btn' onClick={() => shareByEmail()}><i className="fa-solid fa-envelope text-white" style={{ fontSize: '28px' }}></i></button><br />
                                                    <span style={{ fontSize: '14px', marginLeft: '10px' }}>Email</span>
                                                </div>
                                                <div>
                                                    <button className='btn btn-success share-btn' onClick={() => shareByWhatsapp()}><i className="fa-brands fa-whatsapp" style={{ fontSize: '28px' }}></i></button><br />
                                                    <span style={{ fontSize: '14px' }}>WhatsApp</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-3 border rounded'>
                                        <div className='row p-2'>
                                            <div className='col-lg-9 col-md-9 col-sm-9'>
                                                <p style={{ overflow: 'hidden' }}>{selectedLinkURL}</p>
                                            </div>
                                            <div className='col-lg-3 col-md-3 col-sm-3'>
                                                <button className='btn btn-primary' onClick={() => copyURLToClipboard(selectedLinkURL)}>Copy</button>
                                            </div>
                                        </div>
                                    </div>
                                </Box>
                            </Fade>
                        </Modal>

                        {/* these popup is for showing images whichever user watnt to see */}
                        {userToken ? (
                            <div>
                                <ShowDocument
                                    open={showImageModal}
                                    handleClose={() => setShowImageModal(false)}
                                    id={selectedDocId}
                                />
                            </div>
                        ) : navigate('/')}

                        {userToken ? (
                            <div>
                                <WhatsappShare
                                    open={showWhatsApp}
                                    handleCloseWhatsapp={() => setShowWhatsApp(false)}
                                    id={selectedWhatsAppId}
                                />
                            </div>
                        ) : navigate('/')}

                        {userToken ? (
                            <div>
                                <Modal open={openModalCreateLink} onClose={closeCreateLinkModal} >
                                    <Box className="shadow border-0 rounded boxStyle">
                                        <form onSubmit={createLink}>
                                            <div className="card-body text-center p-2 ">
                                                <div className='d-flex justify-content-between'>
                                                    <h5 className='mb-3'>Create Link</h5>
                                                    <CloseIcon style={{ color: 'red', cursor: 'pointer' }} onClick={() => closeCreateLinkModal()} />
                                                </div>
                                                <TextField label="Link Name" variant="outlined" className=' w-100 mb-4 me-3'
                                                    name='link_name'
                                                    id="link_name"
                                                    value={link_name}
                                                    onChange={(e) => setLink_name(e.target.value)}
                                                />

                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                                        <DatePicker label="Expiry Date" variant="outlined" className=' w-100 mb-4 me-3' format="DD-MM-YYYY"
                                                            name='selectedDate'
                                                            id="selectedDate"
                                                            value={selectedDate ? selectedDate : null}
                                                            onChange={(newValue) => setSelectedDate(newValue)}
                                                        />
                                                    </DemoContainer>
                                                </LocalizationProvider>

                                                <div className='d-flex justify-content-center'>
                                                    {loading ? (<Loader />) : (<button className="btn btn-primary d-block" type="submit">Create link</button>)}
                                                </div>
                                            </div>
                                        </form>
                                    </Box>
                                </Modal>
                            </div>
                        ) : navigate('/')}
                    </div>
                </div >)
                }
            </div>
        </>
    )
}

export default CreateLink