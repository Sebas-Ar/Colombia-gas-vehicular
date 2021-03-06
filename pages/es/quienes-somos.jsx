import MainFooter from '../../components/Footer/MainFooter'
import Head from '../../components/Head/Head'
import SliderMain from '../../components/Slider/SliderMain'
import ClientMain from "../../components/Sections/ClientMain"
import SlideIcons from '../../components/slides-quienes-somos/SlideIcons'
import SlideText from '../../components/slides-quienes-somos/SlideText'
import MainLayout from "../../layout/MainLayout"

const Index = () => {

    const slideList = [
        <ClientMain
            backgroundImg="/img/colombiagas/primera.webp"
            backgroundMini="/img/colombiagas/fachada-main.webp"
            sizeScreen
            padding
            ContentAside={
                <SlideText />
            }
        />,
        <ClientMain
            backgroundImg="/img/colombiagas/slide-segunda.webp"
            backgroundMini="/img/colombiagas/fachada-second.webp"
            sizeScreen
            padding
            ContentAside={
                <SlideIcons />
            }
        />,
    ]

    return <MainLayout>
        <Head>
            <title>Quiénes Somos</title>
        </Head>

        {/* <SliderDoble
			mainImg="/img/colombiagas/fachada-main.webp"
			secondImg="/img/colombiagas/fachada-second.webp"

			slideList={slideList}
		/> */}


        <SliderMain
            sizeScreen
            top
            slideList={slideList}
        />

        <br />
        <br />

        <MainFooter />

    </MainLayout>
}

export default Index