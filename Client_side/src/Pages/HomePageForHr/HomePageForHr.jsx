import BannerForHr from "./BannerForHr/BannerForHr";
import ReqofReturnandNonReturnAsset from "./EmployeeReqForReturn-non-return/ReqofReturnandNonReturnAsset";
import LimitedStock from "./LimitesStock/LimitedStock";
import MyEmployeeCardSection from "./MyEmployeeCard/MyEmployeeCardSection";
import PedingReqHr from "./PendingReq/PedingReqHr";
import TopRqquestItems from "./TopMostRequestitems/TopRqquestItems";
const HomePageForHr = () => {
    return (
        <section>
            <BannerForHr/>
            <PedingReqHr/>
            <TopRqquestItems/>
            <LimitedStock/>
            <ReqofReturnandNonReturnAsset/>
            <MyEmployeeCardSection/>
        </section>
    );
};

export default HomePageForHr;