# Zacks.com API

Fetches data from zacks.com for a given stock ticker.

# Example Response

```javascript
const zacksApi = require('zacks-api');

zacksApi.getData('MU').then((result) => console.log(result));
```

```json
{
    "MU": {
        "exchange": "Real Time Quote from BATS",
        "dividend_yield": "0",
        "last": "52.81",
        "ticker": "MU",
        "ticker_type": "S",
        "updated": "Aug 3, 2018 03:58 PM",
        "zacks_rank_text": "Strong Buy",
        "volume": "22636105",
        "percent_net_change": "-1.142",
        "zacks_rank": "1",
        "name": "Micron Technology, Inc.",
        "net_change": "-.61",
        "source": {
            "sungard": {
                "bidasksize": "100x900",
                "dividend_freq": "",
                "prev_close_date": "08/03/2018 16:00:00",
                "volatility": "1.61",
                "zacks_recommendation": "",
                "timestamp": "15:59",
                "exchange": "NASDAQ",
                "shares": "",
                "pos_size": "800017",
                "open": "53.3",
                "yrlow": "26.85",
                "type": "S",
                "yield": "0",
                "market_cap": "48883.46",
                "ask": "52.85",
                "dividend": "",
                "dividend_date": "",
                "earnings": "10.44",
                "close": "53.4",
                "day_low": "52.26",
                "last_trade_datetime": "08/03/2018 16:00:00",
                "volume": "",
                "yrhigh": "64.66",
                "day_high": "53.4",
                "bid": "52.8",
                "name": "Micron Technology, Inc.",
                "pe_ratio": "4.46",
                "updated": "08/03/2018 16:00:00"
            },
            "bats": {
                "ask_size": "1400",
                "routed": "47332",
                "last_trade_datetime": "08/03/2018 15:58:05",
                "matched": "1210699",
                "bid_size": "1772",
                "net_pct_change": "NULL",
                "updated": "08/03/2018 15:58:08",
                "end_mkt_day_price": "NULL",
                "ask_price": "52.79",
                "bid_price": "52.78",
                "last": "44",
                "pre_after_updated": "08/03/2018 19:58:09",
                "net_price_change": "NULL",
                "pre_after_price": "52.8",
                "net_change": "NULL"
            },
            "pre": {
                "after_percent_net_change": ".02",
                "after_net_change": "12/19/2017 19:58:07"
            }
        },
        "market_time": false,
        "previous_close": "52.81",
        "SUNGARD_BID": "35.46",
        "SUNGARD_YRLOW": "20.64",
        "SUNGARD_EARNINGS": "0",
        "SUNGARD_VOLATILITY": "",
        "SUNGARD_PE_RATIO": "2.54",
        "SUNGARD_DAY_LOW": "0",
        "SUNGARD_MARKET_CAP": "34.64",
        "FEED_NET_CHANGE": "26-SEP-2014",
        "BATS_PRE_AFTER_UPDATED": "02-DEC-2014",
        "SUNGARD_YRHIGH": "36.22",
        "SUNGARD_DIVIDEND_FREQ": "000",
        "SUNGARD_PREV_CLOSE_DATE": "35.57",
        "BATS_ASK_PRICE": "1356928",
        "SUNGARD_NAME": "MICRON TECH INC",
        "SUNGARD_TIMESTAMP": "11:50",
        "SUNGARD_VOLUME": "",
        "SUNGARD_BIDASKSIZE": "6x22",
        "SUNGARD_YIELD": "N",
        "SUNGARD_DAY_HIGH": "1.72",
        "SUNGARD_ZACKS_RECOMMENDATION": "S",
        "SUNGARD_SHARES": "1",
        "SUNGARD_DIVIDEND": "073",
        "SUNGARD_DIVIDEND_DATE": "455",
        "BATS_BID_SIZE": "113734",
        "BATS_BID_PRICE": "350",
        "BATS_LAST_TRADE_DATETIME": "33.67",
        "FEED_VOLUME": "26-SEP-2014",
        "BATS_ASK_SIZE": "02-DEC-2014",
        "FEED_TICKER": "MU",
        "SUNGARD_POS_SIZE": "159",
        "SUNGARD_EXCHANGE": "NASD",
        "SUNGARD_TYPE": "13.97",
        "SUNGARD_LAST_TRADE_DATETIME": "02-DEC-2014",
        "SUNGARD_UPDATED": "37468.1",
        "BATS_ROUTED": "02-DEC-2014",
        "BATS_UPDATED": "1000",
        "FEED_LAST": "33.65",
        "FEED_PERCENT_NET_CHANGE": "35.38",
        "FEED_SOURCE": ".39",
        "BATS_PRE_AFTER_PRICE": "1.115",
        "SUNGARD_OPEN": "35.05",
        "SUNGARD_CLOSE": "34.99",
        "SUNGARD_ASK": "35.47",
        "BATS_MATCHED": "",
        "FEED_UPDATED": "6445735",
        "pre_after_net_change": "-.01",
        "pre_after_percent_net_change": "-.02",
        "previous_close_date": "08/03/2018"
    }
}
```