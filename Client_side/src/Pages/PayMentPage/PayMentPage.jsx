import { Helmet } from "react-helmet-async";
import PaymentSection from "../../Component/Packages/PaymentSection";

const PayMentPage = () => {
    return (
        <section className="container mx-auto pt-20">
            <Helmet>
                <title>
                    AssetFlow | Payment
                </title>
            </Helmet>
        <PaymentSection/>
    </section>
    );
};

export default PayMentPage;