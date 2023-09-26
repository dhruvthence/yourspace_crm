import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import { fetchResidents } from "../../helpers/services/api.services";
import ResidentsConstant from "../../helpers/constants/residents";

function ResidentList() {

    const [residents, setResidents] = useState([]);
    const [residentStatuses, setResidentStatuses] = useState([]);
    const [activeResidentStatus, setActiveResidentStatus] = useState('All');

    useEffect(() => {
        setResidentStatuses(ResidentsConstant.residentStatus);
        loadResidentsData();
    }, []);

    const loadResidentsData = async () => {
        let response = await fetchResidents();

        if (response && response.data && response.data.length > 0) {
            setResidents(response.data);
        } else {
            setResidents([]);
        }
    }

    const filteredResidentsData = async (status) => {
        setActiveResidentStatus(status);

        // Logic for filter residents data
    }

    return (
        <div className="wrapper d-flex align-items-stretch">
            <Sidebar />

            <div id="content" className="right-bar">
                <div className="right-side-header">
                    <div className="d-flex justify-content-between align-items-center pb-2">
                        <div className="d-flex align-items-center">
                            <Link to={'/'}>
                                <img src="/images/Back.svg" alt="Back" />
                            </Link>
                            <h2>Residents</h2>
                            <div className="tit_point">FY 2324</div>
                        </div>
                    </div>
                    <div className="breadcum">
                        <ul>
                            <li><a href="#">Tenants</a> <span>/</span></li>
                            <li>Residents</li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex justify-content-between align-items-center pb-32">
                    <div className="status-box">
                        {
                            residentStatuses.map((status, index) => <a
                                key={index}
                                href="#"
                                className={(status?.label === activeResidentStatus) ? 'active' : ''}
                                onClick={() => filteredResidentsData(status?.label)}
                            >{status?.label}</a>)
                        }
                    </div>
                    <div className="status-box">
                        <a href="#"><img src="/images/filter.svg" className="pr-1" alt="" /> Filter</a>
                    </div>
                </div>
                <div className="page-table-box">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Resident ID</th>
                                <th>Property</th>
                                <th>Phone No</th>
                                <th>City</th>
                                <th className="w130">Unpaid amount</th>
                                <th>PM</th>
                                <th className="w100">Unpaid bill</th>
                                <th className="w120">Status</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(residents && residents.length > 0) ? residents.map((item, index) =>
                                <tr key={index}>
                                    <td>{item?.resident_name}</td>
                                    <td>{item?.id}</td>
                                    <td>{item?.property_name}</td>
                                    <td>{item?.mobile_number}</td>
                                    <td>{item?.city_name}</td>
                                    <td className="text-right">1,34,000</td>
                                    <td>Brooklyn Simmons</td>
                                    <td className="text-right">34,4343</td>
                                    {/* 
                                        Status Class Names ->
                                        Success: bg_green_txt
                                        Warning: bg_warning_txt
                                        Error: bg_red_txt
                                    */}
                                    <td><a href="#" className="bg_green_txt">Paid</a></td>
                                    <td>
                                        <Link to={`/residents-details/${item?.id}`}>
                                            <img src="/images/right_arrow.svg" alt="Details Icon" />
                                        </Link>
                                    </td>
                                </tr>
                            ) :
                                <tr>
                                    <td colSpan={9}>No data found</td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ResidentList;
