import { Link } from "react-router-dom";

function Articles() {
    const articles = [{
        id: 1, title: '5 Passive Income Ideas to Make You Money in 2023', text: `Extra income is good. Extra income without having to lift a finger is even better.Passive income is money that goes into your bank account without you having to do much — or any — active work.Residual streams of income can be a great way to accumulate wealth, particularly if your earning potential is stunted at your day job.But the most popular passive income streams, such as dividends, investment interest, and rental income, usually require a lot of money upfront to get started.
        Fortunately, it's also possible to engineer a passive income stream from scratch.If you know you want extra money in a hands- off way, you can reverse - engineer a side hustle or small business idea accordingly to ensure it pays you while you sleep.
        Here are 5 passive income ideas to consider in 2023.`},
        { id: 2, title: "You Took Out Debt in 2022. Here's What to Do With It in 2023", text: `If your finances are in the red heading into the new year, you're not alone. Total debt across U.S. households reached $16.51 trillion in the third quarter of 2022, exceeding pre-pandemic levels and reflecting a surge in consumer prices and demand. The biggest contributors were credit card balances, which increased at their fastest pace in two decades, and home loans. 
        If you're worried about a debt hangover in 2023, you can set up a plan of attack. Here's how you can review your finances, figure out which debts to prioritize and choose a payoff strategy.` },
        { id: 3, title: '3 Things Money Experts Are Doing Now to Make Tax Season a Breeze', text: `Taxes might be the furthest thing from your mind right now, but there is a lot you can do before the end of January filing date to make the 2022 tax filing season easier. 
        It starts with preparation. Whether you plan to use a professional tax preparer or software or handle the return on your own, you will need to assemble information and gather receipts and tax documents. The sooner you start, the better - especially if you have complicated investments or are a business owner. It'll help you come January when you get hit with a blizzard of tax forms (Form W-2, Forms 1099 including 1099-MISC, 1099-INT, 1099-K). 
        It's also not too late to reduce your taxable income for the year, and it could significantly trim your tax bill. So we asked some of our favorite financial experts for their best tips to make tax season a breeze. Here's what they had to say.` }];
    return (
        <div>
            <ul>
                {
                    articles.map(({ id, title }) => {
                        return (
                            <div className="title" key={id}>
                                <li><Link to={`/${id}`}>{title}</Link></li>
                            </div>)
                    })
                }
            </ul>
        </div>
    )
}
export default Articles;