import { Tab, Tabs } from 'react-bootstrap';

// Tabs
import DetailsTab from '../onboarding-info/details.tab';
import PropertyTab from '../onboarding-info/property.tab';
import CollageContactsTab from '../onboarding-info/collage-contacts.tab';
import KycTab from '../onboarding-info/kyc.tab';
import AgreementTab from '../onboarding-info/agreement.tab';
import PocCheckinTab from '../onboarding-info/poc-checkin.tab';



import '../../../css/resident-details-tab.css';

function OnBoardingInfoTab({ props }) {
    return (
        <>
            {/* Details Tab View */}
            <Tabs
                defaultActiveKey="details"
                id="resident-onboarding-view"
                className="mb-3"
            >
                <Tab eventKey="details" title="Details">
                    <DetailsTab />
                </Tab>
                <Tab eventKey="property" title="Property">
                    <PropertyTab />
                </Tab>
                <Tab eventKey="college-contacts" title="College & Contacts">
                    <CollageContactsTab />
                </Tab>
                <Tab eventKey="kyc" title="KYC">
                    <KycTab />
                </Tab>
                <Tab eventKey="agreement" title="Agreement">
                    <AgreementTab />
                </Tab>
                <Tab eventKey="poc-checkin" title="POC & Check-in">
                    <PocCheckinTab />
                </Tab>
            </Tabs>
        </>
    );

}

export default OnBoardingInfoTab;