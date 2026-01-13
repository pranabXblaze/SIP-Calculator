📈 Stocks News & SIP Calculator
A professional, responsive web application designed for modern investors. This tool provides a precision Systematic Investment Plan (SIP) Calculator alongside a real-time Stock Market News feed to keep you informed while you plan your financial future.
🚀 Features
1. SIP Calculator
·	Precision Planning: Calculate the future value of your monthly investments with ease.
·	Dynamic Sliders: Interactive UI components to adjust investment amount, duration, and expected return rate.
·	Wealth Breakdown: Instantly view your total investment amount, estimated returns, and total value.
·	Visual Representation: Clear distinction between invested capital and wealth gained through compounding.
2. Live Stock News
·	Curated Feed: Stay updated with the latest headlines from the financial world.
·	Market Sentiment: Track news that influences market volatility and stock performance.
·	Minimalist Design: A clean, card-based layout for easy reading on mobile and desktop devices.
🧮 Mathematical Formula
The application uses the standard formula for the future value of a Systematic Investment Plan:
$$M = P \times \frac{(1 + i)^n - 1}{i} \times (1 + i)$$

Where:
·	$M$ = Maturity amount (Future Value)
·	$P$ = Monthly investment amount
·	$i$ = Periodic rate of interest (Annual Rate / 12 / 100)
·	$n$ = Total number of payments (Months)
🛠 Tech Stack
·	Frontend:React.js (Functional Components & Hooks)
·	Styling:Tailwind CSS for utility-first, responsive design.
·	Icons:Lucide React for high-quality, lightweight icons.
·	Deployment:Vercel for fast global delivery.
·	News Integration: Fetch API used to pull live financial data.
💻 Local Development

1. Follow these steps to set up the project locally:
	
2.	Clone the Repository
```
git clone https://github.com/pranabXblaze/SIP-Calculator/
cd stocks-news-sip-calculator
```

4.	Install Dependencies
```
npm install
```
	
6.	Environment Setup
Create a .env file in the root directory and add your news API credentials:

```
REACT_APP_NEWS_API_KEY=your_actual_api_key_here
```

6.	Run the App
```
npm start
```
9.	The app will be available at
  ```
    http://localhost:3000.
  ```
📱 Screenshots

SIP Calculator	Stock News Feed
<img width="1900" height="817" alt="image" src="https://github.com/user-attachments/assets/70961146-e6e8-460d-99f5-2b345ae32545" />

<img width="1906" height="905" alt="image" src="https://github.com/user-attachments/assets/25dae44d-cba0-415b-a3f2-1784d2a333fd" />


🤝 Contributing
1.	Fork the project.
2.	Create your feature branch (git checkout -b feature/AmazingFeature).
3.	Commit your changes (git commit -m 'Add some AmazingFeature').
4.	Push to the branch (git push origin feature/AmazingFeature).
5.	Open a Pull Request.

📜 License
Distributed under the MIT License. See LICENSE for more information.
Disclaimer: The calculations provided by this tool are estimates and do not guarantee actual returns. Stock market investments are subject to market risks. Please consult with a financial advisor before investing.


