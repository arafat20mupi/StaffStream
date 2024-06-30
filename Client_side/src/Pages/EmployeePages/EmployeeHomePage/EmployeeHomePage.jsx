import PendingRequestSectionForEmployee from '../PendingRequestSectionForEmployee/PendingRequestSectionForEmployee'
import BannerForEmployee from './BannerForEmployee/BannerForEmployee';
import EmployeeTeam from './EmployeeTeam/EmployeeTeam';
import MyMountlyRequest from './MyMontlyRequest/MyMountlyRequest';
const EmployeeHomePage = () => {
    return (
        <section>
            <BannerForEmployee/>
            <PendingRequestSectionForEmployee/>
            <MyMountlyRequest/>
            <EmployeeTeam/>
        </section>
    );
};

export default EmployeeHomePage;