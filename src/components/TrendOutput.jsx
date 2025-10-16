import { useAIContent } from '../hooks/useAIContent';

export default function TrendOutput() {
    const { aiContent, isLoading, error, refresh } = useAIContent();
    
    if (isLoading) {
        return <p className="main-header">Generating your results...</p>;
    }

    if (error) {
        return <p>Error loading content. Please try refreshing.</p>;
    }

    return (
        <>
            <section className="text-within" id="container">

                <button className="btn btn-primary" onClick={refresh}>Refresh AI Results</button>

                <section className="trend-info">
                    <h1>Latest Career News/Keys Points/Summary</h1>
                    {aiContent.latestTrends.map((trend, index) => (
                        <>
                            <h3 key={index}><strong>News: {trend.careerNews}<br/></strong></h3>
                            <p key={index}>KeyPoints: {trend.keyPoints}<br/><br/>Summary: {trend.summary}</p>
                        </>
                    ))}
                </section>

                <section className="trend-visualization">
                    <h1>Visualization</h1>
                </section>

            </section>
        </>
    )
}