import loading_icon from "../assets/loading.gif";

export default function LoadingSpinner() {
    return (
        <>
            <br/>
            <br/>
            <img className="loading-icon" src={loading_icon} alt="loading-icon" />
            <br/>
            <p className="main-header">Generating your results... Do not refresh this page.</p>
        </>
    );
}