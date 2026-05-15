import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import axios from "axios";
import StockCharts from "./StockCharts";
function StockCompare() {
  const metricsList = [
    "Price",
    "Volatility",
    "Market Cap",
    "ESG Score",
    "Return on Equity",
    "Sharpe Ratio",
  ];

  const notStockList = ["-", "-", "-", "-", "-", "-"];

  const notchartlist=["-","-"];

  const [stocks, setStocks] = useState([null, null]);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [tickerInput, setTickerInput] = useState("");
  const [verdict, setVerdict] = useState(null);


  const handleOpenModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setTickerInput("");
    setShowModal(false);
  };

  const handleAddStock = async () => {
    try {
      const ticker = tickerInput.trim().toUpperCase();
      if (!ticker) return;
      const dummyComparisonTicker = "AAPL"; // required to trigger compare (can be replaced with API to fetch single stock info)

      const res = await axios.post("http://localhost:8000/compare", {
        ticker1: ticker,
        ticker2: dummyComparisonTicker,
      });

      const priceRes = await axios.get(
        `http://localhost:8000/historical/${ticker}`
      );
      const historicalPrices = priceRes.data;

      const stockData = {
        ticker,
        metrics: {
          Price: res.data.metrics.price[0],
          Volatility: res.data.metrics.beta[0],
          "Market Cap": res.data.metrics.market_cap[0],
          "ESG Score": res.data.metrics.esg_score[0],
          "Return on Equity": res.data.metrics.roe[0],
          "Sharpe Ratio": res.data.metrics.sharpe_ratio[0],
          historical: historicalPrices,
        },
      };

      const updatedStocks = [...stocks];
      updatedStocks[currentIndex] = stockData;
      setStocks(updatedStocks);
      handleCloseModal();

      const bothStocks = updatedStocks.filter(Boolean);
if (bothStocks.length === 2) {
  try {
    const compareRes = await axios.post("http://localhost:8000/compare", {
      ticker1: updatedStocks[0].ticker,
      ticker2: updatedStocks[1].ticker,
    });

    setVerdict(compareRes.data.verdict);
  } catch (e) {
    console.error("Error getting verdict:", e);
    setVerdict("Couldn't fetch verdict.");
  }
}
    } catch (err) {
      console.error("Error fetching stock:", err);
      alert("Could not fetch stock data. Check ticker.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center p-10 pb-0">
        <div className="w-70 h-30 border-1 border-zinc-700 flex flex-wrap px-3 py-2">
          <h1 className=" text-white text-lg font-semibold ml-12 text-center">
            Compare Stocks
          </h1>
          <p className="text-xs text-white text-center">
            Detailed comparison based on Price | Volatility | Market Cap | ESG
            Score | Return on Equity | Sharpe Ratio{" "}
          </p>
        </div>
        <div className="w-70 h-30 border-1 border-zinc-700 flex flex-col items-center justify-center">
          <IoIosAddCircleOutline
            onClick={() => handleOpenModal(0)}
            className="text-blue-500 mb-3 text-4xl"
          />
          <p className="text-white font-semibold">Add Stock</p>
        </div>
        <div className="w-70 h-30 border-1 border-zinc-700 flex flex-col items-center justify-center">
          <IoIosAddCircleOutline
            onClick={() => handleOpenModal(1)}
            className="text-blue-500 mb-3 text-4xl"
          />
          <p className="text-white font-semibold">Add Stock</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[54.7vw] border-1 border-t-0 border-zinc-700 px-4 py-4 flex items-center justify-between">
          <p className="text-white font-bold text-lg">Stocks Details</p>
          <FaCaretDown className="text-white text-lg" />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-70 h-auto border-1 border-zinc-700">
          {metricsList.map((m, i) => (
            <>
              <div
                key={i}
                className="text-white text-sm font-medium mt-4 ml-2 p-2"
              >
                {m}
              </div>
              <hr className="text-zinc-700" />
            </>
          ))}
        </div>
        {stocks.map((stock, i) => (
          <>
            <div key={i} className="w-70 h-auto border-1 border-zinc-700">
              {!stock ? (
                <div>
                  {notStockList.map((ns, i) => (
                    <>
                      <div
                        key={i}
                        className="text-white text-sm font-medium mt-4 ml-2 p-2"
                      >
                        {ns}
                      </div>
                      <hr className="text-zinc-700" />
                    </>
                  ))}
                </div>
              ) : (
                <div>
                  <>
                    <div className="text-white text-md  text-center font-medium">
                      {stock.ticker}
                    </div>
                    {metricsList.map((m, i) => (
                      <>
                        <div
                          key={i}
                          className="text-white text-sm font-medium mt-3 ml-2 p-2"
                        >
                          {stock.metrics[m] ?? "-"}
                        </div>
                        <hr className="text-zinc-700" />
                      </>
                    ))}
                  </>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <div className="w-[54.7vw] flex h-auto border-1 border-zinc-700">
          {stocks.map((stock, i) =>
            stock ? (
              <div key={i} className="w-full h-auto px-2 border-1 border-zinc-700">
                <StockCharts data={stock.metrics.historical} />
              </div>
            ) : (
                <>
                <div className="w-70 h-70 border-1 border-zinc-700">
                   
                    {notchartlist.map((nt,i)=>(
                        <div className="text-center text-white text-lg">{nt}</div>
                    ))}
                </div>
                </>
            )
          )}
        </div>
      </div>
      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-zinc-800 p-6 rounded-xl w-full max-w-md border border-zinc-700">
            <h3 className="text-lg font-bold mb-2 text-white">Add a Stock</h3>
            <input
              type="text"
              placeholder="Enter ticker (e.g. AAPL)"
              value={tickerInput}
              onChange={(e) => setTickerInput(e.target.value)}
              className="w-full p-2 rounded bg-zinc-900 text-white border border-zinc-600 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-zinc-700 text-white rounded hover:bg-zinc-600"
              >
                Cancel
              </button>
              <button
                onClick={handleAddStock}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Add Stock
              </button>
            </div>
          </div>
        </div>
      )}
      {verdict && (
  <div className="flex items-center justify-center mt-6 mb-10">
    <div className="bg-zinc-800 border border-green-500 text-white rounded-xl px-6 py-4 w-[70vw] text-center">
      <h3 className="text-green-400 text-lg font-semibold mb-2">🧠 FinGenius Verdict</h3>
      <p className="text-zinc-300 text-sm">{verdict}</p>
    </div>
  </div>
)}

    </>
  );
}

export default StockCompare;
