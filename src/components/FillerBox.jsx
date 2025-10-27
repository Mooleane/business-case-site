import filler_stock from "../assets/filler_stock.jpeg"

export default function FillerBox() {
    return (
        <section className="filler-box">
            <img className="fit-img" src={filler_stock} alt="Image" />
            <h1 className="bottom-left-header">Scans your profile for personalized advice</h1>
        </section>
    )
}