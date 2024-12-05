import styled from "styled-components/native"
import { useRoute, useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { getDetailTravelLog } from "./api/DetailTravelLogApi";
import { getPhotoPieces, getMemoPieces } from "../MyLog/api/MyLogApi";
import { getPhotoPiece, getMemoPiece } from "../CreateTravelPiece/api/CreateTravelPieceApi";
import TopBar from "./TopBar";
import CALENDAR from '../../assets/calendar-purple.png';
import { Image, View, ScrollView, Text } from "react-native";
import StandardButton from "../../shared/component/StandardButton";
import touristAttractionData from '../../shared/component/db/country.json'

export default function EndTravelLog({ travel_id, recordCountArray, setIsClickEndTravelBtn }) {
    const route = useRoute();
    const navigation = useNavigation();
    const [allPieceCount, setAllPieceCount] = useState(0); // 총 조각 개수 상태 추가
    const [photoUris, setPhotoUris] = useState([]);
    const [memoDatas, setMemoDatas] = useState([]);
    const [isContinueButtonVisible, setIsContinueButtonVisible] = useState(true); // 버튼 상태 추가

    //const { travel_id } = route.params;
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = String(date.getFullYear()).slice(-2); // 연도 두 자리
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월
        const day = String(date.getDate()).padStart(2, '0'); // 일
        return `${year}.${month}.${day}`;
    };

    const [travelDetails, setTravelDetails] = useState({
        title: null,
        startDate: null,
        endDate: null,
        createdAt: null,
        updatedAt: null,
        travelOpen: null,
        cityName: null,
        countryName: null,
    });

    useEffect(() => {
        getDetailTravelLog(travel_id).then((res, i) => {
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
    }, [])

    const transformedRecordCountArray = [
        { label: "사진", count: recordCountArray?.photo || 0 },
        { label: "메모", count: recordCountArray?.memo || 0 },
        { label: "티켓", count: recordCountArray?.ticket || 0 },
    ];
    const handleBackPress = () => {
        //navigation.navigate("DetailTravelLog", {travel_id:travel_id});
        setIsClickEndTravelBtn(false);
        console.log("뒤로가기 버튼 클릭!");
    }
    const handleClosePress = () => {
        navigation.navigate("MyLog");
        console.log("닫기 버튼 클릭!");
    }
    // 총 조각 개수 계산
    useEffect(() => {
        const total = recordCountArray?.photo + recordCountArray?.memo + recordCountArray?.ticket;
        setAllPieceCount(total);
    }, []);

    useEffect(() => {
        const fetchPhotoUris = async () => {
            try {
                // 사진 조각 ID 가져오기
                const photoRecords = await getPhotoPieces();
                //console.log(photoRecords.photos);
                const photoRecordIds = photoRecords.photos.map((record) => record.travel_record_id);
                for (const id of photoRecordIds) {
                    const piece = await getPhotoPiece(id);
                    // console.log("사진 URL:", piece?.url);

                    // URL이 유효한 경우 배열에 추가
                    if (photoUris.length === 0) {
                        if (piece?.url) {
                            setPhotoUris((prevUris) => [...prevUris, piece.url]); // 기존 배열에 새 URL 추가
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching photo records:", error);
            } finally {
                setIsLoading(false);
            }
        };
        const fetchMemo = async () => {
            try {
                // 메모 조각 ID 가져오기
                const memoRecords = await getMemoPieces();
                console.log("memoRecords: " + JSON.stringify(memoRecords));
                const memoRecordIds = memoRecords.memos.map((record) => record.travel_record_id);
                //console.log("메모 내용:", memoRecordIds);
                const newMemoData = [];
                for (const id of memoRecordIds) {
                    const piece = await getMemoPiece(id);
                    //console.log("메모 내용:", piece);
                    newMemoData.push({
                        description: piece.description, // 메모 내용
                        createdAt: piece.created_at,   // 생성 시간
                    });

                    // URL이 유효한 경우 배열에 추가
                    if (memoDatas.length === 0) {
                        if (piece?.description) {
                            setMemoDatas(newMemoData); // 기존 배열에 새 URL 추가
                        }
                    }
                }
            } catch (error) {
                console.error("Error fetching photo records:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPhotoUris();
        fetchMemo();
    }, [travel_id]);

    const handleContinuePress = () => {
        setIsContinueButtonVisible(false); // 버튼 숨기기
        console.log("여행기 이어보기 버튼 클릭!");
    };

    useEffect(() => {
        if (photoUris.length > 0) {
            console.log("sdfsdf");
        }

    }, [photoUris])
  // 이모지를 가져오는 함수
  const getCountryEmoji = (countryName) => {
    const match = touristAttractionData.touristAttraction.find(
        (item) => item.country === countryName
    );
    return match?.emoji || "🏳️"; // 일치하는 값이 없으면 기본값 설정
};
    console.log("조각 기록 개수: " + JSON.stringify(recordCountArray));

    return (
        <ScrollViewContainer>
            <MainLayout>
                <TopBar onClosePress={handleClosePress} />
                <TitleText>{travelDetails.title}</TitleText>
                <Wrap>
                    <Image source={CALENDAR} />
                    <DateText>{formatDate(travelDetails.startDate)} ~ {formatDate(travelDetails.endDate)}</DateText>
                </Wrap>
                <RecordCountContainer>
                    <HighlightTextView>
                        총 <HighlightText>{allPieceCount}개의 여행 조각들</HighlightText>을 모았어요!
                    </HighlightTextView>
                    <Divider />
                    <CountsContainer>
                        {transformedRecordCountArray.map((item, index) => (
                            <CountBox key={index}>
                                <CountNumber>{item.count}개</CountNumber>
                                <CountLabel>{item.label}</CountLabel>
                            </CountBox>
                        ))}
                    </CountsContainer>
                </RecordCountContainer>
                <CountryText>{getCountryEmoji(travelDetails.countryName)}{travelDetails.cityName}, {travelDetails.countryName}</CountryText>
                <ImageContainer>
                    {photoUris.map((photoUri, index) => {
                        //console.log("사진 URL:", photoUri);
                        return (
                            (
                                <Image
                                    key={index}
                                    source={{ uri: photoUri }}
                                    style={{ width: 100, height: 100, margin: 5 }}

                                />
                            )
                        )
                    })}
                </ImageContainer>

                {isContinueButtonVisible ? (
                    <StandardButton
                    text="여행기 이어보기"
                    onPress={handleContinuePress}
                    
                    />
                ) : (
                    <MemoContainer>
                        <MemoIconText>🤔</MemoIconText>
                        <CountNumber>이런 생각을 남겼어요 !</CountNumber>
                        {memoDatas.map((memo, i) => {
                            return (
                                <MemoView>
                                <HighlightText>{formatDate(memo.createdAt)}</HighlightText>
                                <Text>{memo.description}</Text>
                                
                                </MemoView>
                            )
                        })}


                    </MemoContainer>

                )}
            </MainLayout>
        </ScrollViewContainer>
    )
}

const ScrollViewContainer = styled.ScrollView`
flex: 1;
padding: 40px 20px 0;
`;

const MainLayout = styled.View`
width: 100%;
align-items: center;
`;

const TitleText = styled.Text`
color: #393939;
font-size: 22px;
font-weight: 700;
letter-spacing: -0.5px;
margin-bottom: 10px;
text-align: center;
`;

const DateContainer = styled.View`
    margin-top: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: #f7f8fa;
`;

const DateText = styled.Text`
    color: #64F;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.3px;
`;

const RecordCountContainer = styled.View`
background-color: #FFF;
padding: 12px;
width: 100%;
margin: 21px 0;
`;

const HighlightTextView = styled.Text`
    font-size: 16px;
    color: #393939;
    font-weight: 600;
    text-align: center;
`;

const HighlightText = styled.Text`
    color: #FD2D69;
    font-weight: 700;
`;

const Divider = styled.View`
    height: 2px;
    width: 98%;
    background-color: #EAEAEA;
    margin: 10px 0;
`;

const CountsContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 0 20px;
`;

const CountBox = styled.View`
    align-items: center;
    flex: 1;
`;

const CountNumber = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #393939;
`;

const CountLabel = styled.Text`
    font-size: 14px;
    color: #636363;
    margin-top: 5px;
`;

const Wrap = styled.View`
flex-direction : row;
align-items:center;
gap: 5px;
`

const CountryText = styled.Text`
font-weight: 700;
`;

const ImageContainer = styled.View`
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const MemoContainer = styled.View`
align-items: center;
width: 100%;
gap: 10px;

`;

const MemoIconText = styled.Text`
font-size: 50px;
`;

const DateTextBold = styled.Text`
color: #64F;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: -0.3px;
`;

const MemoView = styled.View`
background-color: white;
width: 100%;
justify-content: center;
align-items: center;
gap: 10px;
padding: 10px;
`;