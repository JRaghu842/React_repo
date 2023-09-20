// This is for the purpose of testing, specifically for testing search functionality is working as expected or not.
// inside Search.test.js we need Dummy data for restaurants this is that data

export const RESTAURENT_DATA = {
  statusCode: 0,
  data: {
    tid: "dcceb604-6426-4f21-948d-e825de28b849",
    sid: "9g106994-ab2a-4f59-a888-6b60dce5312c",
    success: {
      cards: [
        {
          relevance: {},
          gridWidget: {
            header: {
              action: {},
              headerStyling: {
                padding: {},
              },
            },
            layout: {
              rows: 1,
              columns: 2,
              itemSpacing: 12,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 16,
                  top: 16,
                  right: 16,
                  bottom: 12,
                },
              },
              scrollBar: {
                scrollStyling: {
                  padding: {},
                },
              },
              autoScrollConfig: {},
              separatorConfig: {},
            },
            imageGridCards: {
              info: [
                {
                  id: "410097",
                  imageId: "rng/md/carousel/production/ak4f9kufbxgb8fprancy",
                  action: {
                    link: "swiggy://restaurantList",
                    text: "Restaurant",
                    type: "DEEPLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "RESTAURANT",
                    altTextCta: "Click to know more about Restaurants.",
                  },
                },
                {
                  id: "409959",
                  imageId: "rng/md/carousel/production/rxhxvcibw2jlbihmwqwh",
                  action: {
                    link: "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                    text: "Night",
                    type: "DEEPLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "INSTAMART",
                    altTextCta: "Click to know more about Instamart.",
                  },
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.5,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 0.79518074,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "ScrollNavSplitP2_latebinding",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "410097",
                    imageId: "rng/md/carousel/production/ak4f9kufbxgb8fprancy",
                    action: {
                      link: "swiggy://restaurantList",
                      text: "Restaurant",
                      type: "DEEPLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "RESTAURANT",
                      altTextCta: "Click to know more about Restaurants.",
                    },
                    entityId: "swiggy://restaurantList",
                    frequencyCapping: {},
                  },
                  {
                    id: "409959",
                    imageId: "rng/md/carousel/production/rxhxvcibw2jlbihmwqwh",
                    action: {
                      link: "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                      text: "Night",
                      type: "DEEPLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "INSTAMART",
                      altTextCta: "Click to know more about Instamart.",
                    },
                    entityId:
                      "swiggy://stores/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                    frequencyCapping: {},
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.5,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.79518074,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
            footer: {
              labelWrapper: {},
            },
          },
        },
        {
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN",
          },
          gridWidget: {
            header: {
              title: "Top Picks For You",
              action: {},
              imageId: "sl9oogwe7n5dusolt5xe",
              headerStyling: {
                padding: {
                  left: 16,
                  top: 15,
                  bottom: 24,
                },
              },
            },
            layout: {
              rows: 1,
              columns: 16,
              horizontalScrollEnabled: true,
              shouldSnap: true,
              itemSpacing: 12,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 16,
                  right: 16,
                  bottom: 12,
                },
              },
              scrollBar: {
                scrollStyling: {
                  padding: {},
                },
              },
              autoScrollConfig: {},
              separatorConfig: {},
            },
            imageGridCards: {
              style: {
                width: {},
                height: {},
              },
            },
            id: "Updated_4_favourites_SimRestoRelevance",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "374455",
                      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
                      cloudinaryImageId: "ar820jxombs5o1g9i6py",
                      locality: "1st Stage",
                      areaName: "BTM Layout",
                      costForTwo: "₹300 for two",
                      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
                      avgRating: 4.7,
                      veg: true,
                      feeDetails: {
                        restaurantId: "374455",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 8800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 8800,
                      },
                      parentId: "582",
                      avgRatingString: "4.7",
                      totalRatingsString: "1K+",
                      promoted: true,
                      adTrackingId:
                        "cid=8383159~p=1~eid=0000018a-b450-c716-56dd-815100ef0135~srvts=1695242307350~45995",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 7,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "7.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=374455",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "48581",
                      name: "Rotti Walla",
                      cloudinaryImageId: "kvlaq1ugkoozqr741zrv",
                      locality: "Appareddy Palya",
                      areaName: "Indiranagar",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "North Indian",
                        "Chinese",
                        "Snacks",
                        "Beverages",
                        "Tandoor",
                      ],
                      avgRating: 4,
                      feeDetails: {
                        restaurantId: "48581",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "9541",
                      avgRatingString: "4.0",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 6.5,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "6.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 03:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textExtendedBadges: {},
                          textBased: {},
                          imageBased: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=48581",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "337335",
                      name: "Kannur food kitchen",
                      cloudinaryImageId: "a27weqanhnszqiuzsoik",
                      locality: "1st  Stage",
                      areaName: "BTM Layout",
                      costForTwo: "₹200 for two",
                      cuisines: ["Kerala", "Biryani", "Beverages"],
                      avgRating: 3.8,
                      feeDetails: {
                        restaurantId: "337335",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 8800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 8800,
                      },
                      parentId: "114756",
                      avgRatingString: "3.8",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 7.6,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "7.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textExtendedBadges: {},
                          textBased: {},
                          imageBased: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=337335",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "121603",
                      name: "Kannur Food Point",
                      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
                      locality: "SG Palya",
                      areaName: "Tavarekere",
                      costForTwo: "₹300 for two",
                      cuisines: ["Kerala", "Chinese"],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "121603",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "20974",
                      avgRatingString: "3.9",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 6.7,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "6.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 02:50:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=121603",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "368035",
                      name: "Chai Days",
                      cloudinaryImageId: "g1gfroixu4pkwrwewhy3",
                      locality: "KHB Colony",
                      areaName: "Koramangala",
                      costForTwo: "₹200 for two",
                      cuisines: ["Bakery", "Beverages", "Snacks"],
                      avgRating: 4.4,
                      feeDetails: {
                        restaurantId: "368035",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "8760",
                      avgRatingString: "4.4",
                      totalRatingsString: "1K+",
                      promoted: true,
                      adTrackingId:
                        "cid=8426973~p=2~eid=0000018a-b450-c716-56dd-815200ef023c~srvts=1695242307350~45995",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 6.3,
                        serviceability: "SERVICEABLE",
                        slaString: "24 mins",
                        lastMileTravelString: "6.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 02:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=368035",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "709119",
                      name: "Irani Std. Tea",
                      cloudinaryImageId: "1e756ee8d230b65d570f7e8e70f7062c",
                      locality: "6th Main Rd",
                      areaName: "Indiranagar",
                      costForTwo: "₹200 for two",
                      cuisines: ["Beverages", "Snacks", "Fast Food"],
                      avgRating: 3.5,
                      feeDetails: {
                        restaurantId: "709119",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 8800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 8800,
                      },
                      parentId: "374583",
                      avgRatingString: "3.5",
                      totalRatingsString: "50+",
                      sla: {
                        deliveryTime: 27,
                        lastMileTravel: 7.1,
                        serviceability: "SERVICEABLE",
                        slaString: "27 mins",
                        lastMileTravelString: "7.1 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      isNewlyOnboarded: true,
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=709119",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "571337",
                      name: "Sri Ram Bhojanalay",
                      cloudinaryImageId: "tvl09sj6rhx2ltw9repf",
                      locality: "HAL 2nd Stage",
                      areaName: "Indiranagar",
                      costForTwo: "₹5 for two",
                      cuisines: [
                        "North Indian",
                        "Bengali",
                        "South Indian",
                        "Fast Food",
                        "Chinese",
                        "Biryani",
                        "Desserts",
                        "Kerala",
                        "Punjabi",
                      ],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "571337",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "194292",
                      avgRatingString: "3.9",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 6.4,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "6.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "UPTO ₹40",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=571337",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "454000",
                      name: "Biryani Hotel",
                      cloudinaryImageId: "fl1nptfbc7qc32jvxsmt",
                      locality: "5th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹150 for two",
                      cuisines: ["Biryani", "Indian", "Arabian"],
                      avgRating: 3.5,
                      feeDetails: {
                        restaurantId: "454000",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "264919",
                      avgRatingString: "3.5",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 6.8,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "6.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 06:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=454000",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "633068",
                      name: "Gudbud Sundaes",
                      cloudinaryImageId: "zqj598fybsvq27zzdoxh",
                      locality: "4th Block",
                      areaName: "Jayanagar",
                      costForTwo: "₹400 for two",
                      cuisines: ["Desserts", "Ice Cream"],
                      avgRating: 3.2,
                      feeDetails: {
                        restaurantId: "633068",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "379572",
                      avgRatingString: "3.2",
                      totalRatingsString: "20+",
                      promoted: true,
                      adTrackingId:
                        "cid=8426297~p=3~eid=0000018a-b450-c716-56dd-815300ef033d~srvts=1695242307350~45995",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 6.8,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "6.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 03:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textExtendedBadges: {},
                          textBased: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=633068",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "240148",
                      name: "Gudbud",
                      cloudinaryImageId: "ezkvppoifkkmfebdqydh",
                      locality: "Ejipura",
                      areaName: "Koramangala",
                      costForTwo: "₹300 for two",
                      cuisines: ["Ice Cream", "Desserts"],
                      avgRating: 4.4,
                      feeDetails: {
                        restaurantId: "240148",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 8800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 8800,
                      },
                      parentId: "11110",
                      avgRatingString: "4.4",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 7.5,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "7.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=240148",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "570178",
                      name: "Om Sai Ram Food Junction",
                      cloudinaryImageId: "fuqvwvihgfdmwtycyrqi",
                      locality: "HAL 2nd Stage",
                      areaName: "Indiranagar",
                      costForTwo: "₹5 for two",
                      cuisines: [
                        "North Indian",
                        "Bengali",
                        "South Indian",
                        "Fast Food",
                        "Chinese",
                        "Biryani",
                        "Desserts",
                        "Kerala",
                        "Punjabi",
                        "Snacks",
                      ],
                      avgRating: 3.8,
                      feeDetails: {
                        restaurantId: "570178",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "151799",
                      avgRatingString: "3.8",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 6.4,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "6.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  description: "",
                                  shortDescription: "options available",
                                  fontColor: "#7E808C",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=570178",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "590579",
                      name: "vaibhav biriyani",
                      cloudinaryImageId: "wy9eo7turb3g0tzohh2s",
                      locality: "1st Block",
                      areaName: "Rajajinagar",
                      costForTwo: "₹500 for two",
                      cuisines: ["Biryani", "Indian"],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "590579",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 8800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 8800,
                      },
                      parentId: "353201",
                      avgRatingString: "3.9",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 7.4,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "7.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textExtendedBadges: {},
                          textBased: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=590579",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "505",
                      name: "Bite Me Cupcakes",
                      cloudinaryImageId: "074ed13bca5fd2ee7c69b0ca0149635e",
                      locality: "Kodihalli",
                      areaName: "Domlur",
                      costForTwo: "₹150 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "European",
                        "Ice Cream",
                        "Juices",
                        "Waffle",
                        "Sweets",
                      ],
                      avgRating: 4.1,
                      feeDetails: {
                        restaurantId: "505",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 8300,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 8300,
                      },
                      parentId: "47437",
                      avgRatingString: "4.1",
                      totalRatingsString: "5K+",
                      promoted: true,
                      adTrackingId:
                        "cid=8052226~p=4~eid=0000018a-b450-c716-56dd-815400ef0478~srvts=1695242307350~45995",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 6.5,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "6.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 05:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "D",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textExtendedBadges: {},
                          textBased: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=505",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "132622",
                      name: "Marwadi Chaat & Tiffin Services Shanti nagar",
                      cloudinaryImageId: "e8f48a82caf1cdc428448f64dba7b61e",
                      locality: "Lakshmi road",
                      areaName: "Shanthi Nagar",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "Rajasthani",
                        "North Indian",
                        "Snacks",
                        "Chaat",
                      ],
                      avgRating: 3.7,
                      veg: true,
                      feeDetails: {
                        restaurantId: "132622",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 3500,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3500,
                      },
                      parentId: "20091",
                      avgRatingString: "3.7",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=132622",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "34269",
                      name: "Hamza hotel",
                      cloudinaryImageId: "rea8vn4ubttcd6gcue3p",
                      locality: "HKP road",
                      areaName: "Shivajinagar",
                      costForTwo: "₹300 for two",
                      cuisines: ["Continental", "Street Food"],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "34269",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 3500,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3500,
                      },
                      parentId: "21662",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 20,
                        lastMileTravel: 2.7,
                        serviceability: "SERVICEABLE",
                        slaString: "20 mins",
                        lastMileTravelString: "2.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 03:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  description: "",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=34269",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "303982",
                      name: "Sinful Desserts",
                      cloudinaryImageId: "a33e4b8f95de51a4bf5639b226e69ca2",
                      locality: "Domlur",
                      areaName: "Domlur",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "European",
                        "Ice Cream",
                        "Juices",
                        "Waffle",
                        "Sweets",
                      ],
                      avgRating: 4.1,
                      feeDetails: {
                        restaurantId: "303982",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "11311",
                      avgRatingString: "4.1",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 6.5,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "6.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 05:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textExtendedBadges: {},
                          textBased: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=303982",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                ],
                theme: "RESTAURANT_GROUP_FAVOURITE_THEME",
                widgetType: "WIDGET_TYPE_FAVOURITES",
                style: {},
                collectionId: "45995",
              },
            },
            footer: {
              labelWrapper: {},
            },
          },
        },
        {
          relevance: {},
          gridWidget: {
            header: {
              action: {},
              headerStyling: {
                padding: {},
              },
            },
            layout: {
              rows: 1,
              columns: 4,
              horizontalScrollEnabled: true,
              shouldSnap: true,
              itemSpacing: 20,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 20,
                  top: 12,
                  right: 20,
                  bottom: 8,
                },
              },
              scrollBar: {
                scrollThumbColor: "#E46D47",
                scrollTrackColor: "#E4E4E4",
                width: 54,
                height: 4,
                scrollStyling: {
                  padding: {
                    top: 6,
                    bottom: 12,
                  },
                },
              },
              autoScrollConfig: {
                isScrollEnabled: true,
                autoScrollDuration: 4,
                autoScrollResetDuration: 4,
              },
              separatorConfig: {},
            },
            imageGridCards: {
              info: [
                {
                  id: "1259280",
                  imageId:
                    "rng/md/carousel/production/686d86288557d0a78fbea2212f2195e0",
                  action: {
                    link: "swiggy://collectionV2?collection_id=92872&tags=layout_ux4",
                    text: "All new super",
                    type: "DEEPLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "GET 50% OFF ON FIRST ORDER",
                    altTextCta: "ORDER NOW",
                  },
                },
                {
                  id: "1247287",
                  imageId:
                    "rng/md/carousel/production/1fecc74c586ac380f5a3b884d10fcb30",
                  action: {
                    link: "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3219&custom_back=true&entryId=1234&entryName=topicalBanner4",
                    text: "Tropical_IM",
                    type: "DEEPLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "Explore Instamart",
                    altTextCta: "Shop Now",
                  },
                },
                {
                  id: "735389",
                  imageId:
                    "rng/md/carousel/production/47558c4252f15596658023bf89420b11",
                  action: {
                    link: "swiggy://collectionV2?collection_id=78542&tags=layout_ux4",
                    text: "Holi",
                    type: "DEEPLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "Get Upto 60% off",
                    altTextCta: "Order Now",
                  },
                },
                {
                  id: "1235917",
                  imageId:
                    "rng/md/carousel/production/e916e65c76352149cdd4d9eeac402e81",
                  action: {
                    link: "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3161&custom_back=true&entryId=1234&entryName=topical2Banner4",
                    text: "Tropical_IM",
                    type: "DEEPLINK",
                  },
                  entityType: "BANNER",
                  accessibility: {
                    altText: "Explore Instamart",
                    altTextCta: "Shop Now",
                  },
                },
              ],
              style: {
                width: {
                  type: "TYPE_RELATIVE",
                  value: 0.8,
                  reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                },
                height: {
                  type: "TYPE_RELATIVE",
                  value: 0.82432,
                  reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                },
              },
            },
            id: "Homepage_Version4_Topical_Fullbleed",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                info: [
                  {
                    id: "1259280",
                    imageId:
                      "rng/md/carousel/production/686d86288557d0a78fbea2212f2195e0",
                    action: {
                      link: "swiggy://collectionV2?collection_id=92872&tags=layout_ux4",
                      text: "All new super",
                      type: "DEEPLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "GET 50% OFF ON FIRST ORDER",
                      altTextCta: "ORDER NOW",
                    },
                    entityId: "92872",
                    frequencyCapping: {},
                  },
                  {
                    id: "1247287",
                    imageId:
                      "rng/md/carousel/production/1fecc74c586ac380f5a3b884d10fcb30",
                    action: {
                      link: "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3219&custom_back=true&entryId=1234&entryName=topicalBanner4",
                      text: "Tropical_IM",
                      type: "DEEPLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "Explore Instamart",
                      altTextCta: "Shop Now",
                    },
                    entityId:
                      "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3219&custom_back=true&entryId=1234&entryName=topicalBanner4",
                    frequencyCapping: {},
                  },
                  {
                    id: "735389",
                    imageId:
                      "rng/md/carousel/production/47558c4252f15596658023bf89420b11",
                    action: {
                      link: "swiggy://collectionV2?collection_id=78542&tags=layout_ux4",
                      text: "Holi",
                      type: "DEEPLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "Get Upto 60% off",
                      altTextCta: "Order Now",
                    },
                    entityId: "78542",
                    frequencyCapping: {},
                  },
                  {
                    id: "1235917",
                    imageId:
                      "rng/md/carousel/production/e916e65c76352149cdd4d9eeac402e81",
                    action: {
                      link: "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3161&custom_back=true&entryId=1234&entryName=topical2Banner4",
                      text: "Tropical_IM",
                      type: "DEEPLINK",
                    },
                    entityType: "BANNER",
                    accessibility: {
                      altText: "Explore Instamart",
                      altTextCta: "Shop Now",
                    },
                    entityId:
                      "swiggy://stores/instamart/campaign-collection/listing?custom_back=true&layoutId=3161&custom_back=true&entryId=1234&entryName=topical2Banner4",
                    frequencyCapping: {},
                  },
                ],
                style: {
                  width: {
                    type: "TYPE_RELATIVE",
                    value: 0.8,
                    reference: "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH",
                  },
                  height: {
                    type: "TYPE_RELATIVE",
                    value: 0.82432,
                    reference: "RELATIVE_DIMENSION_REFERENCE_WIDTH",
                  },
                },
              },
            },
            footer: {
              labelWrapper: {},
            },
          },
        },
        {
          relevance: {},
          gridWidget: {
            header: {
              title: "All Restaurants Nearby",
              subtitle: "Discover unique tastes near you",
              action: {},
              imageId: "rng/md/production/ipai4xhkoy9ovshdnyn6",
              headerStyling: {
                padding: {
                  left: 16,
                  top: 24,
                  bottom: 24,
                },
              },
            },
            layout: {
              rows: 25,
              columns: 1,
              lineSpacing: 24,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  right: 12,
                  bottom: 8,
                },
              },
              scrollBar: {
                scrollStyling: {
                  padding: {},
                },
              },
              autoScrollConfig: {},
              separatorConfig: {},
            },
            imageGridCards: {
              style: {
                width: {},
                height: {},
              },
            },
            id: "restaurantCollectionDeliveringNowTheme",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.RestaurantInfoWithStyle",
                restaurants: [
                  {
                    info: {
                      id: "374455",
                      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
                      cloudinaryImageId: "ar820jxombs5o1g9i6py",
                      locality: "1st Stage",
                      areaName: "BTM Layout",
                      costForTwo: "₹300 for two",
                      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
                      avgRating: 4.7,
                      veg: true,
                      feeDetails: {
                        restaurantId: "374455",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 8800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 8800,
                      },
                      parentId: "582",
                      avgRatingString: "4.7",
                      totalRatingsString: "1K+",
                      promoted: true,
                      adTrackingId:
                        "cid=8383159~p=1~eid=0000018a-b450-c709-1e26-a6f5001a0110~srvts=1695242307337~45826",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 7,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "7.0 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 23:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=374455",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "48581",
                      name: "Rotti Walla",
                      cloudinaryImageId: "kvlaq1ugkoozqr741zrv",
                      locality: "Appareddy Palya",
                      areaName: "Indiranagar",
                      costForTwo: "₹200 for two",
                      cuisines: [
                        "North Indian",
                        "Chinese",
                        "Snacks",
                        "Beverages",
                        "Tandoor",
                      ],
                      avgRating: 4,
                      feeDetails: {
                        restaurantId: "48581",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "9541",
                      avgRatingString: "4.0",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 6.5,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "6.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 03:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=48581",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "121603",
                      name: "Kannur Food Point",
                      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
                      locality: "SG Palya",
                      areaName: "Tavarekere",
                      costForTwo: "₹300 for two",
                      cuisines: ["Kerala", "Chinese"],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "121603",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "20974",
                      avgRatingString: "3.9",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 6.7,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "6.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 02:50:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=121603",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "368035",
                      name: "Chai Days",
                      cloudinaryImageId: "g1gfroixu4pkwrwewhy3",
                      locality: "KHB Colony",
                      areaName: "Koramangala",
                      costForTwo: "₹200 for two",
                      cuisines: ["Bakery", "Beverages", "Snacks"],
                      avgRating: 4.4,
                      feeDetails: {
                        restaurantId: "368035",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "8760",
                      avgRatingString: "4.4",
                      totalRatingsString: "1K+",
                      promoted: true,
                      adTrackingId:
                        "cid=8426973~p=2~eid=0000018a-b450-c709-1e26-a6f6001a0237~srvts=1695242307337~45826",
                      sla: {
                        deliveryTime: 24,
                        lastMileTravel: 6.3,
                        serviceability: "SERVICEABLE",
                        slaString: "24 mins",
                        lastMileTravelString: "6.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 02:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=368035",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "571337",
                      name: "Sri Ram Bhojanalay",
                      cloudinaryImageId: "tvl09sj6rhx2ltw9repf",
                      locality: "HAL 2nd Stage",
                      areaName: "Indiranagar",
                      costForTwo: "₹5 for two",
                      cuisines: [
                        "North Indian",
                        "Bengali",
                        "South Indian",
                        "Fast Food",
                        "Chinese",
                        "Biryani",
                        "Desserts",
                        "Kerala",
                        "Punjabi",
                      ],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "571337",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "194292",
                      avgRatingString: "3.9",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 6.4,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "6.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "UPTO ₹40",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=571337",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "454000",
                      name: "Biryani Hotel",
                      cloudinaryImageId: "fl1nptfbc7qc32jvxsmt",
                      locality: "5th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹150 for two",
                      cuisines: ["Biryani", "Indian", "Arabian"],
                      avgRating: 3.5,
                      feeDetails: {
                        restaurantId: "454000",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "264919",
                      avgRatingString: "3.5",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 6.8,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "6.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 06:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=454000",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "764214",
                      name: "BODYPOWER CAFE",
                      cloudinaryImageId: "75c49a5d43681cb2406227ae82f6c781",
                      locality: "Indiranagar",
                      areaName: "Indiranagar",
                      costForTwo: "₹400 for two",
                      cuisines: ["South Indian", "Beverages"],
                      feeDetails: {
                        restaurantId: "764214",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 6800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 6800,
                      },
                      parentId: "280671",
                      avgRatingString: "--",
                      promoted: true,
                      adTrackingId:
                        "cid=8430617~p=3~eid=0000018a-b450-c709-1e26-a6f7001a0345~srvts=1695242307337~45826",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 5.8,
                        serviceability: "SERVICEABLE",
                        slaString: "28 mins",
                        lastMileTravelString: "5.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 06:59:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textExtendedBadges: {},
                          textBased: {},
                          imageBased: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=764214",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "570178",
                      name: "Om Sai Ram Food Junction",
                      cloudinaryImageId: "fuqvwvihgfdmwtycyrqi",
                      locality: "HAL 2nd Stage",
                      areaName: "Indiranagar",
                      costForTwo: "₹5 for two",
                      cuisines: [
                        "North Indian",
                        "Bengali",
                        "South Indian",
                        "Fast Food",
                        "Chinese",
                        "Biryani",
                        "Desserts",
                        "Kerala",
                        "Punjabi",
                        "Snacks",
                      ],
                      avgRating: 3.8,
                      feeDetails: {
                        restaurantId: "570178",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "151799",
                      avgRatingString: "3.8",
                      totalRatingsString: "500+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 6.4,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "6.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  description: "",
                                  shortDescription: "options available",
                                  fontColor: "#7E808C",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=570178",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "576839",
                      name: "Om meals and paratha junction",
                      cloudinaryImageId: "u4c6vysici1ztf62f7hd",
                      locality: "HAL 2nd Stage",
                      areaName: "Domlur",
                      costForTwo: "₹5 for two",
                      cuisines: [
                        "North Indian",
                        "Thalis",
                        "Chinese",
                        "South Indian",
                        "Beverages",
                        "Snacks",
                        "Biryani",
                        "Kerala",
                        "American",
                      ],
                      avgRating: 3.8,
                      feeDetails: {
                        restaurantId: "576839",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "21651",
                      avgRatingString: "3.8",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 27,
                        lastMileTravel: 6.4,
                        serviceability: "SERVICEABLE",
                        slaString: "27 mins",
                        lastMileTravelString: "6.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "UPTO ₹40",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=576839",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "633068",
                      name: "Gudbud Sundaes",
                      cloudinaryImageId: "zqj598fybsvq27zzdoxh",
                      locality: "4th Block",
                      areaName: "Jayanagar",
                      costForTwo: "₹400 for two",
                      cuisines: ["Desserts", "Ice Cream"],
                      avgRating: 3.2,
                      feeDetails: {
                        restaurantId: "633068",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "379572",
                      avgRatingString: "3.2",
                      totalRatingsString: "20+",
                      promoted: true,
                      adTrackingId:
                        "cid=8426297~p=4~eid=0000018a-b450-c709-1e26-a6f8001a0467~srvts=1695242307337~45826",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 6.8,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "6.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 03:30:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textExtendedBadges: {},
                          textBased: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "40% OFF",
                        subHeader: "UPTO ₹80",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=633068",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "132622",
                      name: "Marwadi Chaat & Tiffin Services Shanti nagar",
                      cloudinaryImageId: "e8f48a82caf1cdc428448f64dba7b61e",
                      locality: "Lakshmi road",
                      areaName: "Shanthi Nagar",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "Rajasthani",
                        "North Indian",
                        "Snacks",
                        "Chaat",
                      ],
                      avgRating: 3.7,
                      veg: true,
                      feeDetails: {
                        restaurantId: "132622",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 3500,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3500,
                      },
                      parentId: "20091",
                      avgRatingString: "3.7",
                      totalRatingsString: "5K+",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textExtendedBadges: {},
                          textBased: {},
                          imageBased: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=132622",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "196047",
                      name: "New Taj Darbar",
                      cloudinaryImageId: "nfieyqgxk1omknxfbluj",
                      locality: "Saint Mary's Church Road",
                      areaName: "Shivajinagar",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "Biryani",
                        "Indian",
                        "Chinese",
                        "Tandoor",
                        "Seafood",
                      ],
                      avgRating: 3.5,
                      feeDetails: {
                        restaurantId: "196047",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 3500,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3500,
                      },
                      parentId: "148190",
                      avgRatingString: "3.5",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 28,
                        lastMileTravel: 2.6,
                        serviceability: "SERVICEABLE",
                        slaString: "28 mins",
                        lastMileTravelString: "2.6 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=196047",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "505",
                      name: "Bite Me Cupcakes",
                      cloudinaryImageId: "074ed13bca5fd2ee7c69b0ca0149635e",
                      locality: "Kodihalli",
                      areaName: "Domlur",
                      costForTwo: "₹150 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "European",
                        "Ice Cream",
                        "Juices",
                        "Waffle",
                        "Sweets",
                      ],
                      avgRating: 4.1,
                      feeDetails: {
                        restaurantId: "505",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 8300,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 8300,
                      },
                      parentId: "47437",
                      avgRatingString: "4.1",
                      totalRatingsString: "5K+",
                      promoted: true,
                      adTrackingId:
                        "cid=8052226~p=5~eid=0000018a-b450-c709-1e26-a6f9001a0516~srvts=1695242307337~45826",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 6.5,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "6.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 05:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "D",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=505",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "34269",
                      name: "Hamza hotel",
                      cloudinaryImageId: "rea8vn4ubttcd6gcue3p",
                      locality: "HKP road",
                      areaName: "Shivajinagar",
                      costForTwo: "₹300 for two",
                      cuisines: ["Continental", "Street Food"],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "34269",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 3500,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 3500,
                      },
                      parentId: "21662",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 20,
                        lastMileTravel: 2.7,
                        serviceability: "SERVICEABLE",
                        slaString: "20 mins",
                        lastMileTravelString: "2.7 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 03:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  description: "",
                                  shortDescription: "options available",
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "20% OFF",
                        subHeader: "UPTO ₹50",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=34269",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "303982",
                      name: "Sinful Desserts",
                      cloudinaryImageId: "a33e4b8f95de51a4bf5639b226e69ca2",
                      locality: "Domlur",
                      areaName: "Domlur",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "European",
                        "Ice Cream",
                        "Juices",
                        "Waffle",
                        "Sweets",
                      ],
                      avgRating: 4.1,
                      feeDetails: {
                        restaurantId: "303982",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "11311",
                      avgRatingString: "4.1",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 6.5,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "6.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 05:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=303982",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "298791",
                      name: "Kabab Biryani Corner",
                      cloudinaryImageId: "hkf5yjlbrwsyk6fafo4g",
                      locality: "Vivek Nagar",
                      areaName: "Richmond Road",
                      costForTwo: "₹200 for two",
                      cuisines: ["Indian", "Tandoor", "Chinese"],
                      avgRating: 3,
                      feeDetails: {
                        restaurantId: "298791",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 5100,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 5100,
                      },
                      parentId: "113069",
                      avgRatingString: "3.0",
                      totalRatingsString: "50+",
                      promoted: true,
                      adTrackingId:
                        "cid=8365031~p=6~eid=0000018a-b450-c709-1e26-a6fa001a0646~srvts=1695242307337~45826",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 4.4,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "4.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 06:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=298791",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "580691",
                      name: "Rollsking",
                      cloudinaryImageId: "vzhxq7jvtpx1qllxdbpp",
                      locality: "5th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹300 for two",
                      cuisines: ["North Indian", "Fast Food", "Beverages"],
                      avgRating: 4.1,
                      feeDetails: {
                        restaurantId: "580691",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "4697",
                      avgRatingString: "4.1",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 6.5,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "6.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 08:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textExtendedBadges: {},
                          textBased: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "50% OFF",
                        subHeader: "UPTO ₹100",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=580691",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "303980",
                      name: "The Bangalore Creamery",
                      cloudinaryImageId: "7eb4741b9a035ea6e2bcca5c206b40cc",
                      locality: "Kodigehalli",
                      areaName: "Indiranagar",
                      costForTwo: "₹250 for two",
                      cuisines: [
                        "Bakery",
                        "Desserts",
                        "Beverages",
                        "European",
                        "Ice Cream",
                        "Juices",
                        "Waffle",
                        "Sweets",
                      ],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "303980",
                        fees: [
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "10995",
                      avgRatingString: "4.2",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 22,
                        lastMileTravel: 6.5,
                        serviceability: "SERVICEABLE",
                        slaString: "22 mins",
                        lastMileTravelString: "6.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 05:00:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  description: "",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "30% OFF",
                        subHeader: "UPTO ₹75",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=303980",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "5934",
                      name: "Burger King",
                      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹350 for two",
                      cuisines: ["Burgers", "American"],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "5934",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "166",
                      avgRatingString: "4.2",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 6.5,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "6.5 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 05:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=5934",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "65797",
                      name: "Leon's - Burgers & Wings (Leon Grill)",
                      cloudinaryImageId: "r4ufflqojich0r29efvc",
                      locality: "Koramangala",
                      areaName: "Koramangala",
                      costForTwo: "₹300 for two",
                      cuisines: [
                        "American",
                        "Snacks",
                        "Turkish",
                        "Portuguese",
                        "Continental",
                      ],
                      avgRating: 4.3,
                      feeDetails: {
                        restaurantId: "65797",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "371281",
                      avgRatingString: "4.3",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 23,
                        lastMileTravel: 6.3,
                        serviceability: "SERVICEABLE",
                        slaString: "23 mins",
                        lastMileTravelString: "6.3 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 04:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=65797",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "640595",
                      name: "The Pastry Zone\t",
                      cloudinaryImageId: "d9bdeab7d0bd14ed6549d99e09cb219e",
                      locality: "7th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹450 for two",
                      cuisines: ["Desserts", "Bakery", "Sweets", "Ice Cream"],
                      avgRating: 3.9,
                      veg: true,
                      feeDetails: {
                        restaurantId: "640595",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "212397",
                      avgRatingString: "3.9",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 6.4,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "6.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-27 00:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=640595",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "506322",
                      name: "Louis Burger",
                      cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
                      locality: "2nd stage domlur",
                      areaName: "Indiranagar",
                      costForTwo: "₹600 for two",
                      cuisines: ["Burgers", "American", "Fast Food"],
                      avgRating: 4.2,
                      feeDetails: {
                        restaurantId: "506322",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 8300,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 8300,
                      },
                      parentId: "22485",
                      avgRatingString: "4.2",
                      totalRatingsString: "1K+",
                      sla: {
                        deliveryTime: 26,
                        lastMileTravel: 6.4,
                        serviceability: "SERVICEABLE",
                        slaString: "26 mins",
                        lastMileTravelString: "6.4 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 04:00:00",
                        opened: true,
                      },
                      badges: {
                        imageBadges: [
                          {
                            imageId: "newg.png",
                            description: "Gourmet",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {
                            badgeObject: [
                              {
                                attributes: {
                                  imageId: "newg.png",
                                  description: "Gourmet",
                                },
                              },
                            ],
                          },
                          textExtendedBadges: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "₹125 OFF",
                        subHeader: "ABOVE ₹249",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=506322",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "23678",
                      name: "McDonald's",
                      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
                      locality: "5th Block",
                      areaName: "Koramangala",
                      costForTwo: "₹400 for two",
                      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
                      avgRating: 4.3,
                      feeDetails: {
                        restaurantId: "23678",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "630",
                      avgRatingString: "4.3",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 25,
                        lastMileTravel: 6.8,
                        serviceability: "SERVICEABLE",
                        slaString: "25 mins",
                        lastMileTravelString: "6.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 02:45:00",
                        opened: true,
                      },
                      badges: {
                        textExtendedBadges: [
                          {
                            iconId: "guiltfree/GF_Logo_android_3x",
                            shortDescription: "options available",
                            fontColor: "#7E808C",
                          },
                        ],
                      },
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textBased: {},
                          imageBased: {},
                          textExtendedBadges: {
                            badgeObject: [
                              {
                                attributes: {
                                  fontColor: "#7E808C",
                                  iconId: "guiltfree/GF_Logo_android_3x",
                                  description: "",
                                  shortDescription: "options available",
                                },
                              },
                            ],
                          },
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "10% OFF",
                        subHeader: "ABOVE ₹999",
                        discountTag: "FLAT DEAL",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=23678",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "10583",
                      name: "Pizza Hut",
                      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
                      locality: "Frazer Town",
                      areaName: "Frazer Town",
                      costForTwo: "₹350 for two",
                      cuisines: ["Pizzas"],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "10583",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 5100,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 5100,
                      },
                      parentId: "721",
                      avgRatingString: "3.9",
                      totalRatingsString: "10K+",
                      sla: {
                        deliveryTime: 27,
                        lastMileTravel: 4.8,
                        serviceability: "SERVICEABLE",
                        slaString: "27 mins",
                        lastMileTravelString: "4.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 03:00:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      aggregatedDiscountInfoV2: {},
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          textExtendedBadges: {},
                          textBased: {},
                          imageBased: {},
                        },
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=10583",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                  {
                    info: {
                      id: "487291",
                      name: "Chinese Panda",
                      cloudinaryImageId: "as1mhpzyaxzd7gdativz",
                      locality: "Armane Nagar",
                      areaName: "Sanjay Nagar",
                      costForTwo: "₹300 for two",
                      cuisines: ["Biryani", "Tandoor", "Indian"],
                      avgRating: 3.9,
                      feeDetails: {
                        restaurantId: "487291",
                        fees: [
                          {
                            name: "BASE_DISTANCE",
                            fee: 7800,
                          },
                          {
                            name: "BASE_TIME",
                          },
                          {
                            name: "ANCILLARY_SURGE_FEE",
                          },
                        ],
                        totalFee: 7800,
                      },
                      parentId: "3890",
                      avgRatingString: "3.9",
                      totalRatingsString: "100+",
                      sla: {
                        deliveryTime: 27,
                        lastMileTravel: 6.8,
                        serviceability: "SERVICEABLE",
                        slaString: "27 mins",
                        lastMileTravelString: "6.8 km",
                        iconType: "ICON_TYPE_EMPTY",
                      },
                      availability: {
                        nextCloseTime: "2023-09-21 04:31:00",
                        opened: true,
                      },
                      badges: {},
                      isOpen: true,
                      type: "F",
                      badgesV2: {
                        entityBadges: {
                          imageBased: {},
                          textExtendedBadges: {},
                          textBased: {},
                        },
                      },
                      aggregatedDiscountInfoV3: {
                        header: "60% OFF",
                        subHeader: "UPTO ₹120",
                      },
                      differentiatedUi: {
                        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        differentiatedUiMediaDetails: {
                          mediaType: "ADS_MEDIA_ENUM_IMAGE",
                          lottie: {},
                          video: {},
                        },
                      },
                      reviewsSummary: {},
                      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      restaurantOfferPresentationInfo: {},
                    },
                    analytics: {},
                    cta: {
                      link: "swiggy://menu?restaurant_id=487291",
                      text: "RESTAURANT_MENU",
                      type: "DEEPLINK",
                    },
                  },
                ],
                theme: "DELIVERING_NOW",
                collectionId: "45826",
              },
            },
            footer: {
              labelWrapper: {
                "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.Label",
                text: "See all restaurants",
                textColor: "#ffffff",
                fontSize: 17,
                fontName: "FONT_NAME_BOLD",
                alignment: "ALIGNMENT_CENTER",
                borderRadius: 6,
                margin: {
                  left: 16,
                  top: 16,
                  right: 16,
                  bottom: 16,
                },
                padding: {
                  top: 18,
                  bottom: 18,
                },
                backgroundColor: "#e46d47",
                cta: {
                  link: "swiggy://restaurantList",
                  text: "See all restaurants",
                  type: "DEEPLINK",
                },
                maxLines: 1,
              },
            },
          },
        },
      ],
      firstOffsetRequest: true,
      cacheExpiryTime: {
        value: 600,
      },
      nextFetch: 3,
    },
    requestId: "11bcea04-a6e3-4a36-8353-a770d8fcdd38",
  },
  tid: "dcceb604-6426-4f21-948d-e825de28b849",
  sid: "9g106994-ab2a-4f59-a888-6b60dce5312c",
  deviceId: "60562465-5084-81f0-0b85-df934ae45387",
  csrfToken: "2tIlP1xwOJHN-7y8bV0CNIZg-B4kJ93eL924aUBU",
};
