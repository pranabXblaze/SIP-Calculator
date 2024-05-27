import React, { useEffect, useRef, useState } from "react";
import { PieChart, Pie, Cell, Legend ,Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from "react-router-dom";
import StockDashboard from "./ExploreSection/StocksDashborad";


export default function Home() {
  const [sipAmount, setSipAmount] = useState(1000);
  const [expectedReturns, setExpectedReturns] = useState(12);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);
  const [startMonth, setStartMonth] = useState("");
  const [startYear, setStartYear] = useState("");
  const [investedAmount, setInvestedAmount] = useState(0);
  const [maturityValue, setMaturityValue] = useState(0);
  const [totalReturns, setTotalReturns] = useState(0);
  const [activeSIP, setActiveSIP] = useState(true);
  const [activeLump, setActiveLump] = useState(false);

  const chartRef = useRef(null);

  const handleHighlight = () => {
    setActiveSIP(!activeSIP);
    setActiveLump(!activeLump);
  };


  useEffect(() => {
    if (chartRef.current) chartRef.current.destroy();
  }, []);

  const handleCalculate = () => {
    const sipAmountNum = parseFloat(sipAmount);
    const expectedReturnsNum = parseFloat(expectedReturns) / 100;
    const investmentPeriodNum = parseFloat(investmentPeriod);
    const inflationRateNum = parseFloat(inflationRate) / 100;

    const investedAmountCalc = sipAmountNum * 12 * investmentPeriodNum;
    const maturityValueCalc = calculateMaturityValue(
      sipAmountNum,
      expectedReturnsNum,
      investmentPeriodNum,
      inflationRateNum
    );
    const totalReturnsCalc = maturityValueCalc - investedAmountCalc;

    setInvestedAmount(investedAmountCalc);
    setMaturityValue(maturityValueCalc);
    setTotalReturns(totalReturnsCalc);
  };

  const calculateMaturityValue = (
    sipAmount,
    expectedReturns,
    investmentPeriod,
    inflationRate
  ) => {
    let maturityValue = 0;
    let realReturns = (1 + expectedReturns) / (1 + inflationRate) - 1;
    for (let i = 1; i <= investmentPeriod * 12; i++) {
      maturityValue =
        maturityValue + sipAmount * Math.pow(1 + realReturns / 12, i);
    }
    return maturityValue;
  };

  const handleReset = () => {
    setSipAmount(1000);
    setExpectedReturns(12);
    setInvestmentPeriod(10);
    setInflationRate(6);
    setStartMonth("");
    setStartYear("");
    setInvestedAmount(0);
    setMaturityValue(0);
    setTotalReturns(0);
  };
  const data = [
    { name: 'Investment amount', value: investedAmount },
    { name: 'Total returns', value: totalReturns },
    { name: 'Total value', value: maturityValue },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


  return (
    <div className="grid grid-rows-3 w-full gap-3">
    <section className="w-full mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center py-8">
      <section className="w-full bg-blue-500 text-white p-10 rounded-lg">
        <h1 className="text-3xl font-bold mb-4">
          Calculate your wealth potential
        </h1>
        <p className="mb-6">
          Start investing with a Systematic Investment Plan
        </p>
        <a
          href="#calculator"
          className="bg-white text-blue-500 py-2 px-4 rounded-md hover:bg-blue-100"
        >
          Get Started
        </a>
      </section>
      <div className="flex">
        {/*Stocks & Mf carousel */}
         <StockDashboard/>
      </div>
      </div>
      {/* SIP Calculator Section */}
      <section id="calculator" className="mb-8 shadow-lg rounded-xl border-none outline-2 bg-white">
      <div className="flex justify-start">
      <Link
              className={`hover:underline text-black font-semibold py-4 px-6 my-3 mx-4 rounded-xl text-center ${
                activeSIP ?  'bg-green-500 opacity-30 text-green-700' : ''
              }`}
              to="/" onClick={handleHighlight}
            >
              SIP
            </Link>
            <Link
              className={`hover:underline text-black font-semibold py-4 px-6 my-3 mx-4 rounded-xl text-center ${
                activeLump ? 'bg-green-500 opacity-30 text-green-700' : ''
              }`}
              to="/" onClick={handleHighlight}
            >
              Lumpsum
            </Link>
          </div>
        <h2 className="text-2xl p-4 font-bold mb-4">SIP Calculator</h2>
        {(activeSIP) && (
          <form>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sip-amount" className="block font-medium mb-2">
                Monthly SIP Amount:
              </label>
              <input
                type="number"
                id="sip-amount"
                value={sipAmount}
                onChange={(e) => setSipAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="expected-return"
                className="block font-medium mb-2"
              >
                Expected Return:
              </label>
              <input
                type="number"
                id="expected-return"
                value={expectedReturns}
                onChange={(e) => setExpectedReturns(e.target.value)}
                placeholder="Enter amount in percentage"
                className= "w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="investment-period"
                className="block font-medium mb-2"
              >
                Investment Period:
              </label>
              <input
                type="number"
                id="investment-period"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(e.target.value)}
                placeholder="Enter amount in years"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="inflation-rate"
                className="block font-medium mb-2"
              >
                Inflation Rate:
              </label>
              <input
                type="number"
                id="inflation-rate"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
                placeholder="Enter amount in percentage"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="sip-start-month"
                className="block font-medium mb-2"
              >
                Start Month:
              </label>
              <input
                type="month"
                id="sip-start-month"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
                placeholder="Enter month"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="sip-start-year"
                className="block font-medium mb-2"
              >
                Start Year:
              </label>
              <input
                type="number"
                id="sip-start-year"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                placeholder="Enter"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
          </div>

          <div className="flex justify-start mt-4">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
              onClick={handleCalculate}
            >
              Calculate
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
        )
        }
        {(activeLump) && (
          <form>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="sip-amount" className="block font-medium mb-2">
                Total Investment:
              </label>
              <input
                type="number"
                id="sip-amount"
                value={sipAmount}
                onChange={(e) => setSipAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="expected-return"
                className="block font-medium mb-2"
              >
                Expected Return:
              </label>
              <input
                type="number"
                id="expected-return"
                value={expectedReturns}
                onChange={(e) => setExpectedReturns(e.target.value)}
                placeholder="Enter amount in percentage"
                className= "w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="investment-period"
                className="block font-medium mb-2"
              >
                Investment Period:
              </label>
              <input
                type="number"
                id="investment-period"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(e.target.value)}
                placeholder="Enter amount in years"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="inflation-rate"
                className="block font-medium mb-2"
              >
                Inflation Rate:
              </label>
              <input
                type="number"
                id="inflation-rate"
                value={inflationRate}
                onChange={(e) => setInflationRate(e.target.value)}
                placeholder="Enter amount in percentage"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="sip-start-month"
                className="block font-medium mb-2"
              >
                Start Month:
              </label>
              <input
                type="month"
                id="sip-start-month"
                value={startMonth}
                onChange={(e) => setStartMonth(e.target.value)}
                placeholder="Enter month"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
            <div>
              <label
                htmlFor="sip-start-year"
                className="block font-medium mb-2"
              >
                Start Year:
              </label>
              <input
                type="number"
                id="sip-start-year"
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
                placeholder="Enter"
                className="w-1/2 border border-gray-300 rounded-md py-2 px-3"
              />
            </div>
          </div>

          <div className="flex justify-start mt-4">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
              onClick={handleCalculate}
            >
              Calculate
            </button>
            <button
              type="button"
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
        )}
        
        {(investedAmount !== 0 ||
          maturityValue !== 0 ||
          totalReturns !== 0) && (
          <div id="result" className="bg-gray-100 p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-4">Calculation Result</h3>
            <p className="text-lg">
              Invested Amount: ₹{investedAmount.toFixed(2)}
            </p>
            <p className="text-lg">
              Expected Total Value: ₹{maturityValue.toFixed(2)}
            </p>
            <p className="text-lg">Total Returns: ₹{totalReturns.toFixed(2)}</p>
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Investment Overview:</h4>
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
                  <Legend />
                  <Tooltip />
                 </PieChart>
       </ResponsiveContainer>
            </div>
            <a
              href="#"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4 inline-block"
            >
              View SIP Schedule
            </a>
          </div>
        )}
      </section>
      </section>
      {/* Add other sections */}
      <div className="grid grid-rows-12 gap-2">
      
      <div className="row-span-9 text-center content-center w-[200px] md:w-[620px] mr-12 ml-5 dark:text-white space-y-4 bg-[#A39BA8] border-2 border-black rounded-lg">
      <h2><strong>SIP Calculator – Systematic Investment Plan Calculator</strong></h2>
      <p><span className="font-medium">
        Prospective investors can think that SIPs and mutual funds are the same.
         However, SIPs are merely a method of investing in mutual funds, the other method being a lump sum. 
         A&nbsp;</span>SIP calculator<span className="font-medium">&nbsp;is a tool that helps you determine the returns you can avail when parking your funds in such investment tools. Systematic Investment Plan or 
         <a href="#">SIP</a> is a process of investing a fixed sum of money in mutual funds at regular intervals. SIPs usually allow you to invest weekly, quarterly, or monthly.
         </span><strong>&nbsp;</strong></p>

         <h2><strong>What is a SIP Calculator?</strong></h2>
         <p><span className="font-medium">A SIP calculator is a simple tool that allows individuals to get an idea of the returns on their <a href="/home">mutual fund</a> investments made through SIP. 
         SIP investments in mutual funds have become one of the most popular investment options for millennials lately.</span></p>
         <p><span className="font-medium">These&nbsp;</span>mutual fund sip calculators
         <span className="font-medium">&nbsp;are designed to give potential investors an estimate on their mutual fund investments. However, the actual returns offered by a mutual fund scheme varies depending on various factors. 
         The SIP calculator does not provide clarification for the exit load and expense ratio (if any).</span></p>
         <p><span className="font-medium">This calculator will calculate the wealth gain and expected returns for your monthly SIP investment. 
         Indeed, you get a rough estimate on the maturity amount for any of your monthly SIP, based on a projected annual return rate.</span></p>

         <h2><strong>How can a SIP return calculator help you?</strong></h2>

         <p><span className="font-medium">SIPs are a more lucrative mode of investing funds compared to a 
          <a href="/lump-sum">lump sum</a> amount according to several mutual fund experts. 
         It helps you become financially disciplined and create a habit of savings that can benefit you in the future.</span></p>
         <p><span className="font-medium">A&nbsp;</span>SIP calculator online
         <span className="font-medium">&nbsp;is a beneficial tool, which shows the estimated returns you will earn after the investment tenure.</span></p>
         <p><span  className="font-medium">Few of the benefits of SIP calculators include –</span></p>
         <ol>
<li ><span className="font-medium">Assists you to determine the amount you want to invest in.</span></li>
<li ><span className="font-medium">Tells you the total amount you have invested.</span></li>
<li ><span className="font-medium">Gives an estimated value of the returns.</span></li>
</ol>
<h2><strong>How do SIP calculators work?</strong></h2>
<p><span className="font-medium">A SIP plan calculator works on the following formula – </span></p>
<p><span className="font-medium">M = P × (([1 + i]^n – 1) / i) × (1 + i).</span></p>
<p><span className="font-medium">In the above formula –</span></p>
<ul>
<li><span className="font-medium">M is the amount you receive upon maturity.</span></li>
<li><span className="font-medium">P is the amount you invest at regular intervals.</span></li>
<li><span className="font-medium">n is the number of payments you have made.</span></li>
<li><span className="font-medium">i is the periodic rate of interest.</span></li>
</ul>
<p><span className="font-medium">Take for example you want to invest Rs. 1,000 per month for 12 months at a periodic rate of interest of 12%.</span></p>
<p><span className="font-medium">then the monthly rate of return will be 12%/12 = 1/100=0.01</span></p>
<p><span >Hence, M = 1,000X (([1 +0.01 ]^{12} – 1) / 0.01) x (1 + 0.01)</span></p>
<p>which gives Rs 12,809 Rs approximately in a year.</p>
<p><span className="font-medium">The rate of interest on a SIP will differ as per market conditions. 
It may increase or decrease, which will change the estimated returns.</span></p>
      </div>
      </div>
    </div>
  );
}
