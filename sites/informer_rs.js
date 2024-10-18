var yandex_pbjs = yandex_pbjs || {};
yandex_pbjs.que = yandex_pbjs.que || [];

const adfoxUserTimeout = 3000;

const customPriceConfig = "high";

const customUserSyncConfig = {
  filterSettings: {
    iframe: {
      bidders: '*',
      filter: 'include'
    }
  },
  topics: {
    bidders: [{
      bidder: 'yandex',
      iframeURL: 'https://yandex.ru/ads/prebid/topics_frame.html'
    }]
  },
  userIds: [{
    name: 'yandex',
    bidders: ['yandex'],
    storage: {
      type: 'cookie',
      name: '_ym_uid',
      expires: 365,
    }
  }],
};

const adfoxCurrencyConfig = {
	adServerCurrency: "EUR",
	conversionRateFile: "https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json",
    defaultRates: { "USD": { "USD": 1, "EUR": 0.91}, "EUR": {"USD": 1.09, "EUR": 1} }
};

yandex_pbjs.que.push(function () {
	yandex_pbjs.setConfig({
		priceGranularity: customPriceConfig,
        userSync: customUserSyncConfig,
        'criteo': {
          fastBidVersion: 'latest'
        }
    });
});

var adfoxBiddersMap = {
  "pb_yandex": "3011595",
  "pb_rtbhouse": "3146311",
  "pb_smartadserver": "3146320",
  "pb_adf": "3146300",
  "pb_pubmatic": "3146309",
  "pb_smilewanted": "3146322"
};

var adfoxAdUnits = [
  {
    "code": "adfox_172563350851311713",
    "sizes": [
      [
        300,
        250
      ]
    ],
    "bids": [
      {
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-6092995-16"
        }
      },
      {
        "bidder": "pb_rtbhouse",
        "params": {
          "publisherId": "v4GnkHMXFvfW0XWFA4bn",
          "region": "prebid-eu"
        }
      },
      {
        "bidder": "pb_smartadserver",
        "params": {
          "siteId": 614659,
          "pageId": 2015778,
          "formatId": 125924
        }
      },
      {
        "bidder": "pb_adf",
        "params": {
          "mid": 1982518,
          "adxDomain": "adx.adform.net"
        }
      },
      {
        "bidder": "pb_pubmatic",
        "params": {
          "publisherId": "161759",
          "adSlot": "6228059"
        }
      },
      {
        "bidder": "pb_smilewanted",
        "params": {
          "zoneId": "d-sail.com_hb_display"
        }
      }
    ]
  },
   {
    "code": "adfox_172563352995331713",
    "sizes": [
      [
        300,
        250
      ]
    ],
    "bids": [
      {
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-6092995-17"
        }
      },
      {
        "bidder": "pb_rtbhouse",
        "params": {
          "publisherId": "v4GnkHMXFvfW0XWFA4bn",
          "region": "prebid-eu"
        }
      },
      {
        "bidder": "pb_smartadserver",
        "params": {
          "siteId": 614659,
          "pageId": 2015778,
          "formatId": 126087
        }
      },
      {
        "bidder": "pb_adf",
        "params": {
          "mid": 1982520,
          "adxDomain": "adx.adform.net"
        }
      },
      {
        "bidder": "pb_pubmatic",
        "params": {
          "publisherId": "161759",
          "adSlot": "6228060"
        }
      },
      {
        "bidder": "pb_smilewanted",
        "params": {
          "zoneId": "d-sail.com_hb_display"
        }
      }
    ]
  }
];

window.YaHeaderBiddingSettings = {
   biddersMap: adfoxBiddersMap,
   pbjs: yandex_pbjs,
   adUnits: adfoxAdUnits,
   timeout: adfoxUserTimeout,
};

function adfoxRefresh(adfoxDelay = 30000, adfoxLimit = 20) {
	var adfoxRefCounter = 1, adfoxTimer = setTimeout(function adfoxRequest() {
		if (adfoxRefCounter > adfoxLimit) {
			clearTimeout(adfoxTimer);
		} else {
			window.Ya.adfoxCode.reload(null, {
				onlyIfWasVisible: true
			});
			adfoxTimer = setTimeout(adfoxRequest, adfoxDelay);
		};
		adfoxRefCounter++;
	}, adfoxDelay);
};

/* default delay=30000ms and limit=20 times */
/* you can override delay and limit in the function with parameters like (10000,10) */
adfoxRefresh();