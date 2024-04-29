import SessionSlider from "../patterns/session-slider";
import SessionTabComponent from "./session-tab-component";

const SessionContents = () => {

    return (
        <>
            <SessionTabComponent />
            <div className="mt-4">
                <SessionSlider sessions={[]} />
            </div>
        </>
    )
}


export default SessionContents;