import React from 'react'
import { useAIContent } from '../hooks/useAIContent';
import RefreshAI from './RefreshAI.jsx';

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
        
            <RefreshAI refresh={refresh} />

            <section className="text-within" id="container">

                <section className="trend-info">
                    <h1>Latest Career News/Keys Points/Summary</h1>
                    <hr/>
                    {aiContent?.latestTrends?.map((trend, index) => (
                        <React.Fragment key={`trend-${index}`}>
                            <h3><strong>News: {trend.careerNews}<br/></strong></h3>
                            <p>Key Points: {trend.keyPoints}<br/><br/>Summary: {trend.summary}</p>
                        </React.Fragment>
                    ))}
                </section>

                <section className="trend-visualization">
                    <h1>Statistics</h1>
                    <hr/>
                    {aiContent?.data?.map((stat, index) => (
                        <p key={`stat-${index}`}>{stat.statistic}<br/><br/></p>
                    ))}
                </section>

            </section>
        </>
    )
}