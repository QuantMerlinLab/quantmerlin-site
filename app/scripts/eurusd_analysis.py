import yfinance as yf
import pandas as pd
import numpy as np
import json
from ta.momentum import RSIIndicator
from ta.trend import MACD, EMAIndicator
from ta.volatility import AverageTrueRange
from datetime import datetime

print("SCRIPT STARTED")

df = yf.download(ticker, period="6mo", interval="1d")

print(df.tail())
print(df.empty)

# -------------------------
# DOWNLOAD EUR/USD DATA
# -------------------------
ticker = "EURUSD=X"
df = yf.download(ticker, period="6mo", interval="1d")

if df.empty:
    raise Exception("Impossible de récupérer les données EUR/USD")


# -------------------------
# INDICATORS
# -------------------------
df["RSI"] = RSIIndicator(close=df["Close"], window=14).rsi()

macd = MACD(close=df["Close"])
df["MACD"] = macd.macd()
df["MACD_SIGNAL"] = macd.macd_signal()

df["EMA20"] = EMAIndicator(close=df["Close"], window=20).ema_indicator()
df["EMA50"] = EMAIndicator(close=df["Close"], window=50).ema_indicator()
df["EMA200"] = EMAIndicator(close=df["Close"], window=200).ema_indicator()

atr = AverageTrueRange(
    high=df["High"],
    low=df["Low"],
    close=df["Close"],
    window=14
)

df["ATR"] = atr.average_true_range()


# -------------------------
# LATEST VALUES
# -------------------------
latest = df.iloc[-1]
previous = df.iloc[-2]

price = round(float(latest["Close"]), 4)
change_pct = round(((price - float(previous["Close"])) / float(previous["Close"])) * 100, 2)

rsi = round(float(latest["RSI"]), 2)
ema20 = round(float(latest["EMA20"]), 4)
ema50 = round(float(latest["EMA50"]), 4)
ema200 = round(float(latest["EMA200"]), 4)
atr_value = round(float(latest["ATR"]), 4)

support = round(float(df["Low"].tail(20).min()), 4)
resistance = round(float(df["High"].tail(20).max()), 4)


# -------------------------
# BIAS ENGINE
# -------------------------
score = 0

if price > ema20:
    score += 1

if price > ema50:
    score += 1

if rsi > 50:
    score += 1

if latest["MACD"] > latest["MACD_SIGNAL"]:
    score += 1

if score >= 3:
    bias = "Bullish"
elif score == 2:
    bias = "Neutral"
else:
    bias = "Bearish"


# -------------------------
# MACRO NARRATIVE
# -------------------------
if bias == "Bullish":
    macro_summary = (
        "Le momentum quantitatif reste favorable à l’euro, avec une structure technique positive "
        "et un affaiblissement relatif du dollar américain."
    )
elif bias == "Bearish":
    macro_summary = (
        "La dynamique quantitative favorise le dollar américain, reflétant une demande accrue de sécurité "
        "ou un environnement macro moins favorable à l’euro."
    )
else:
    macro_summary = (
        "Les signaux techniques restent mixtes, suggérant une phase d’hésitation du marché "
        "dans l’attente de nouveaux catalyseurs macroéconomiques."
    )


analysis = (
    f"L’EUR/USD évolue actuellement autour de {price}, avec une variation journalière de {change_pct}%. "
    f"Le RSI ressort à {rsi}, tandis que les moyennes mobiles EMA20 ({ema20}) et EMA50 ({ema50}) "
    f"fournissent une lecture {bias.lower()} du marché. "
    f"Le support technique immédiat se situe vers {support}, avec une résistance vers {resistance}. "
    f"{macro_summary}"
)


# -------------------------
# EXPORT JSON
# -------------------------
output = {
    "pair": "EUR/USD",
    "date": datetime.now().strftime("%Y-%m-%d"),
    "price": price,
    "change_pct": change_pct,
    "rsi": rsi,
    "ema20": ema20,
    "ema50": ema50,
    "ema200": ema200,
    "atr": atr_value,
    "support": support,
    "resistance": resistance,
    "bias": bias,
    "macro_summary": macro_summary,
    "analysis": analysis
}

print(output)
with open("public/data/eurusd.json", "w", encoding="utf-8") as f:
    json.dump(output, f, ensure_ascii=False, indent=4)

print("EUR/USD analysis generated successfully.")