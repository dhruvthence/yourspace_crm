import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Tab, Tabs } from 'react-bootstrap';

import Sidebar from "../../components/sidebar/sidebar";

// TABS
import ScheduleTab from "../../components/tabs/resident-details/schedule.tab";
import LedgerTab from "../../components/tabs/resident-details/ledger.tab";
import OnBoardingInfoTab from "../../components/tabs/resident-details/onboarding-info.tab";
import ReferAFriendTab from "../../components/tabs/resident-details/refer-a-friend.tab";
import ExitTab from "../../components/tabs/resident-details/exit.tab";

import { fetchResidentDetails } from "../../helpers/services/api.services";

function ResidentDetails() {

    let [residentInfo, setResidentInfo] = useState({});
    const { residentId } = useParams();

    useEffect(() => {
        loadResidentsDetails();
    }, []);

    const loadResidentsDetails = async () => {
        let response = await fetchResidentDetails(residentId);

        if (response && response.status === "success") {
            console.log("response.data>>>>", response.data);
            setResidentInfo(response.data);
        }
    }

    return (
        <div className="wrapper d-flex align-items-stretch">
            <Sidebar />
            <div id="content" className="right-bar">
                <div className="rdp-right-side-header">
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

                {/* Details Tab View */}
                <Tabs
                    defaultActiveKey="schedule"
                    id="resident-details-view"
                    className="mb-3"
                >
                    <Tab eventKey="schedule" title="Schedule">
                        <ScheduleTab />
                    </Tab>
                    <Tab eventKey="ledger" title="Ledger">
                        <LedgerTab />
                    </Tab>
                    <Tab eventKey="onboarding-info" title="Onboarding-info">
                        <OnBoardingInfoTab />
                    </Tab>
                    <Tab eventKey="refer-a-friend" title="Refer a friend">
                        <ReferAFriendTab />
                    </Tab>
                    <Tab eventKey="exit" title="Exit">
                        <ExitTab />
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default ResidentDetails;