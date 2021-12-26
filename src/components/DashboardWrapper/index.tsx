import Leftnav from "../../components/LeftNav";
import "./DashboardWrapper.css";

export default function DashboardWrapper({ children }) {

    return (
        <div className="container-fluid dashBoard-container ">
            <div className="row">
                <div className="col-md-2 d-none d-md-block bg-light sidebar bg-blue-gradiant" style={{ height: '110hv' }}>

                    <Leftnav />
                </div>
                <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 flex-fill " style={{ height: '110hv', backgroundColor: '#F4F6FA' }}>
                    {children}
                </div>
            </div>

        </div>
    );
}