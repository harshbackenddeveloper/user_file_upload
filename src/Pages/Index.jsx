import React, { useEffect, useState } from 'react'
import Layout from '../Component/Layout'
import { makeApi } from '../helper/MakeApi'
import { toast } from 'react-toastify';
import Loader from '../Common/Loader';

export default function Index() {
  const [totalEntry, setTotalEntry] = useState([]);
  const [loading, setLoading] = useState(false)

  const getDashboard = async () => {
    setLoading(true)
    try {
      const response = await makeApi('get', "/v1/user/dashboard");
      console.log("response at dashboard", response)
      if (response.hasError === true) {
        toast.error(response.error.message);
      } else {
        setTotalEntry(response.data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getDashboard();
  }, [])
  return (
    <>
      <Layout />
      <div className="main-content app-content">
        <div className="container-fluid">

          <div className="page-header">
            <h1 className="page-title my-auto">Dashboard</h1>
            <div>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="javascript:void(0)">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Dashboard
                </li>
              </ol>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="fw-normal">Total Link</h6>
                      <h2 className="mb-0 text-dark fw-semibold">{loading ? <Loader /> : totalEntry.all}</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <canvas id="saleschart" className="chart-dropshadow" />
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-muted fs-12">
                    <span className="text-secondary">
                      <i className="fe fe-arrow-up-circle text-secondary" /> 5%
                    </span>
                    Last week
                  </span> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="fw-normal">Total Active Link</h6>
                      <h2 className="mb-0 text-dark fw-semibold">{loading ? <Loader /> : totalEntry.active}</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <canvas id="leadschart" className="chart-dropshadow" />
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-muted fs-12">
                    <span className="text-pink">
                      <i className="fe fe-arrow-down-circle text-pink" /> 0.75%
                    </span>
                    Last 6 days
                  </span> */}
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xxl-3">
              <div className="card overflow-hidden">
                <div className="card-body">
                  <div className="d-flex">
                    <div className="mt-2">
                      <h6 className="fw-normal">Total Inactive Link</h6>
                      <h2 className="mb-0 text-dark fw-semibold">{loading ? <Loader /> : totalEntry.inactive}</h2>
                    </div>
                    <div className="ms-auto">
                      <div className="chart-wrapper mt-1">
                        <canvas id="profitchart" className="chart-dropshadow" />
                      </div>
                    </div>
                  </div>
                  {/* <span className="text-muted fs-12">
                    <span className="text-green">
                      <i className="fe fe-arrow-up-circle text-green" /> 0.9%
                    </span>
                    Last 9 days
                  </span> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>


  )
}