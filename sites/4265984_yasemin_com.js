var yandex_pbjs = yandex_pbjs || {};
yandex_pbjs.que = yandex_pbjs.que || [];

const adfoxUserTimeout = 1500;

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

yandex_pbjs.que.push(function () {
	yandex_pbjs.setConfig({
		priceGranularity: customPriceConfig,
        userSync: customUserSyncConfig,
        'criteo': {
          fastBidVersion: 'latest'
        }
    });
	yandex_pbjs.enableAnalytics({
        provider: "yandex",
        options: {
          counters: [55934701]
        }
    });
});

const adfoxBiddersMap = {
  "pb_rtbhouse": "3162887",
  "pb_smartadserver": "3165591",
  "pb_adf": "3162861",
  "pb_smilewanted": "3165589",
  "pb_pubmatic": "3165587",
  "pb_yandex": "3162903"
};

const adfoxAdUnits = [
  {
    "code": "adfox_17256203479576259",
    "sizes": [
      [
        300,
        250
      ]
    ],
    "bids": [
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
          "pageId": 2015726,
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
        "bidder": "pb_smilewanted",
        "params": {
          "zoneId": "d-sail.com_hb_display"
        }
      },
      {
        "bidder": "pb_pubmatic",
        "params": {
          "publisherId": "161759",
          "adSlot": "6223296"
        }
      },
      {
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-4265984-4"
        }
      }
    ]
  },{
  "code": "adfox_17278998016642259",
  "sizes": [
    [
      320,
      100
    ]
  ],
  "bids": [{
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
        "pageId": 2015726,
        "formatId": 126089
      }
    },
    {
      "bidder": "pb_adf",
      "params": {
        "mid": 1994530,
        "adxDomain": "adx.adform.net"
      }
    },
    {
      "bidder": "pb_smilewanted",
      "params": {
        "zoneId": "d-sail.com_hb_display"
      }
    },
    {
      "bidder": "pb_pubmatic",
      "params": {
        "publisherId": "161759",
        "asSlot": "6271097"
      }
    },
    {
      "bidder": "pb_yandex",
      "params": {
        "placementId": "R-A-4265984-6"
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