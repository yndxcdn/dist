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
	/*yandex_pbjs.enableAnalytics({
        provider: "yandex",
        options: {
          counters: []
        }
    });*/
});

const adfoxBiddersMap = {
  "pb_rtbhouse": "3182624",
  "pb_smartadserver": "3182634",
  "pb_adf": "3182638",
  "pb_pubmatic": "3182639",
  "pb_smilewanted": "3182642",
  "pb_yandex": "3182677"
};

const adfoxAdUnits = [
   {
    "code": "adfox_172777952982146122",
    "sizes": [
      [
        320,
        100
      ]
    ],
    "bids": [
      {
        "bidder": "pb_rtbhouse",
        "params": {
          "publisherId": "v4GnkHMXFvfW0XWFA4bn",
          "region": "prebid-eu"
        }
      },{
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-12064458-2"
        }
      },
      {
        "bidder": "pb_smartadserver",
        "params": {
          "siteId": 614659,
          "pageId": 2022993,
          "formatId": 126089
        }
      },
      {
        "bidder": "pb_adf",
        "params": {
          "mid": 1994074,
          "adxDomain": "adx.adform.net"
        }
      },
      {
        "bidder": "pb_pubmatic",
        "params": {
          "publisherId": "161759",
          "adSlot": "6266609"
        }
      },
      {
        "bidder": "pb_smilewanted",
        "params": {
          "zoneId": "d-sail.com_hb_display"
        }
      }
    ]
  },{
    "code": "adfox_172778370173116122",
    "sizes": [
      [
        728,
        90
      ]
    ],
    "bids": [
      {
        "bidder": "pb_rtbhouse",
        "params": {
          "publisherId": "v4GnkHMXFvfW0XWFA4bn",
          "region": "prebid-eu"
        }
      },{
        "bidder": "pb_yandex",
        "params": {
          "placementId": "R-A-12064458-3"
        }
      },
      {
        "bidder": "pb_smartadserver",
        "params": {
          "siteId": 614659,
          "pageId": 2022993,
          "formatId": 125928
        }
      },
      {
        "bidder": "pb_adf",
        "params": {
          "mid": 1994076,
          "adxDomain": "adx.adform.net"
        }
      },
      {
        "bidder": "pb_pubmatic",
        "params": {
          "publisherId": "161759",
          "adSlot": "6266610"
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