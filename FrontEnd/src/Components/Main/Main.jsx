import SectionImage from "../SectionImage/SectionImage";
import SectionVideo from "../SectionVideo/SectionVideo";
function Main(){
    return (
        <>
            <section id="gallery" className="gallery">
                <div className="w-full px-4">
                    <div className="flex flex-wrap justify-center">
                        {/* <SectionVideo/> */}
                        <SectionImage/>
                        <SectionImage/>
                        <SectionImage/>
                        <SectionImage/>
                        <SectionImage/>
                        <SectionImage/>
                        {/* <SectionVideo/>
                        <SectionVideo/>
                        <SectionVideo/>
                        <SectionVideo/> */}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Main;