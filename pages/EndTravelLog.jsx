import styled from "styled-components/native"
import { useRoute } from "@react-navigation/native"
import { useEffect } from "react";
import { getAllTravelLog } from "../entities/MyLog/api/MyLogApi";
import { getDetailTravelLog } from "../entities/DetailTravelLog/api/DetailTravelLogApi";

export default function EndTravelLog() {
    const route = useRoute();
    const { travelId } = route.params;
    const [travelDetails, setTravelDetails] = useState({
        title: null,
        startDate: null,
        endDate: null,
        createdAt:null,
        updatedAt: null,
        travelOpen: null,
        cityName: null,
        countryName: null,
    });

    useEffect(() => {
        getDetailTravelLog(travelId).then((res, i) => {
            console.log("상세 조회 통신 성공!: " + res);
            setTravelDetails({
                title: res?.title || null,
                startDate: res?.start_date || null,
                endDate: res?.end_date || null,
                createdAt: res?.createdAt || null,
                updatedAt: res?.updatedAt || null,
                travelOpen: res?.travel_open || null,
                cityName: res?.city_name || null,
                countryName: res?.country_name || null,
            });
        })
    },[])

    return (
        <MainLayout>
            <TitleText>{travelDetails.title}</TitleText>
            <DateContainer>
                <DateText>{travelDetails.startDate} ~ {travelDetails.startDate}</DateText>
            </DateContainer>
            

        </MainLayout>
    )
}