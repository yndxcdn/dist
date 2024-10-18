var pbjs = pbjs || {};
pbjs.que = pbjs.que || [];

var userTimeout = 1500;

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

pbjs.que.push(function () {
	pbjs.setConfig({
		priceGranularity: customPriceConfig,
        userSync: customUserSyncConfig,
        'criteo': {
          fastBidVersion: 'latest'
        }
    });
	pbjs.enableAnalytics({
        provider: "yandex",
        options: {
          counters: [44597494]
        }
    });
});

var adfoxBiddersMap = {
  "pb_yandex": "3011595",
  "pb_rtbhouse": "3146311",
  "pb_smartadserver": "3146320"
};

var adUnits = [
  {
    "code": "fox_17238075349411713_9968",
    "sizes": [
      [
        320,
        100
      ]
    ],
    "bids": [
      {
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-6069203-9"
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
          "siteId": "614659",
          "pageId": "2014843",
          "formatId": "126089"
        }
      }
    ]
  },
  {
    "code": "fox_17238075657081713_9969",
    "sizes": [
      [
        320,
        100
      ]
    ],
    "bids": [
      {
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-6069203-9"
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
          "siteId": "614659",
          "pageId": "2014843",
          "formatId": "127319"
        }
      }
    ]
  },
  {
    "code": "fox_172380735389961713_9966",
    "sizes": [
      [
        240,
        400
      ]
    ],
    "bids": [
      {
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-6069203-9"
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
          "siteId": "614659",
          "pageId": "2014843",
          "formatId": "125926"
        }
      }
    ]
  },
  {
    "code": "fox_172380741194661713_9967",
    "sizes": [
      [
        240,
        400
      ]
    ],
    "bids": [
      {
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-6069203-9"
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
          "siteId": "614659",
          "pageId": "2014843",
          "formatId": "126098"
        }
      }
    ]
  },
  {
    "code": "fox_172380745356841713_1523",
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
          "placementId": "R-A-6069203-9"
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
          "siteId": "614659",
          "pageId": "2014843",
          "formatId": "125924"
        }
      }
    ]
  },
  {
    "code": "fox_172380750726091713_1524",
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
          "placementId": "R-A-6069203-9"
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
          "siteId": "614659",
          "pageId": "2014843",
          "formatId": "126087"
        }
      }
    ]
  },
  {
    "code": "fox_17250071198971713_9970",
    "sizes": [
      [
        300,
        100
      ]
    ],
    "bids": [
      {
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-6069203-9"
        }
      },
      {
        "bidder": "pb_rtbhouse",
        "params": {
          "publisherId": "v4GnkHMXFvfW0XWFA4bn",
          "region": "prebid-eu"
        }
      }
    ]
  }
];

window.YaHeaderBiddingSettings = {
   biddersMap: adfoxBiddersMap,
   pbjs: pbjs,
   adUnits: adUnits,
   timeout: userTimeout
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