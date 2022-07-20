export const namespace = [
  {
    type: "asset",
    functions: [
      {
        name: "getAssetsFromSpaceId",
        parameters: ["assetCategory"],
        hoverContent: {
          description:
            "The getAssetsFromSpaceId function retrieves all assets from a specified space.",
          paramsType: "\n @param **`Map`** or **`List`** - record \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getAssetCategoryFields",
        parameters: ["assetCategoryId"],
        hoverContent: {
          description:
            "The getAssetCategoryFields function retrieves all fields from a specified asset category.",
          paramsType: "\n @param **`Number`** - assetCategoryId \n",
          returns: "\n Returns **`List`**",
        },
      },
    ],
  },
  {
    type: "workorder",
    functions: [
      {
        name: "getAvgResolutionTime",
        parameters: ["count", "startTime", "endTime"],
        hoverContent: {
          description:
            "The getAvgResolutionTime function takes the count, startTime and endTime(in millis) as input and returns list containing average Resolution Time By Category.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getWorkOrdersByCompletionTime",
        parameters: ["count", "startTime", "endTime"],
        hoverContent: {
          description:
            "The getWorkOrdersByCompletionTime function takes the count, startTime and endTime(in millis) as input and returns list containing the workorder completion time of sites.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNTechnicians",
        parameters: ["count", "startTime", "endTime"],
        hoverContent: {
          description:
            "The getTopNTechnicians function takes the count, startTime and endTime(in millis) as input and returns list containing the technicians completed workorder high workorders.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsWithPlannedTypeCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsWithPlannedTypeCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the count of buildings with plan.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNTeamsWithOpenCloseCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNTeamsWithOpenCloseCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the teams with highest open and closed workorder count.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNTechWithAvgResolutionTime",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNTechWithAvgResolutionTime function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the technicians average resolution time which refers to the technician taken time for completing many workorder which is averaged and returned.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsWithUnPlannedTypeCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsWithUnPlannedTypeCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the count of unplanned buildings.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNTechWithOpenCloseCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNTechWithOpenCloseCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list containing the technicians with open and closed workorder count.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsPlannedClosedTotalWoCount",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsPlannedClosedTotalWoCount function takes the count, startTime,endTime(in millis)and siteId as input and returns list of closed palnned buildings total workorder count.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsWithRecurringUnPlannedCountForResource",
        parameters: ["startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsWithRecurringUnPlannedCountForResource function takes the startTime,endTime(in millis)and siteId as input and returns list containing the buildings with unplanned count because of resource.",
          paramsType:
            "\n @param **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getTopNBuildingsWithUnPlannedCountForCategories",
        parameters: ["count", "startTime", "endTime", "siteId"],
        hoverContent: {
          description:
            "The getTopNBuildingsWithUnPlannedCountForCategories function takes the count,startTime,endTime(in millis)and siteId as input and returns list containing the buildings with unplanned count because of category.",
          paramsType:
            "\n @param **`Number`** - count, **`Number`** - startTime, **`Number`** - endTime, **`Number`** - siteId  \n",
          returns: "\n Returns **`List`**",
        },
      },
    ],
  },
  {
    type: "default",
    functions: [
      {
        name: "allMatch",
        parameters: ["listVariable"],
        hoverContent: {
          description:
            "The allMatch() function takes list as an argument and returns true if all values in that list are same, or returns false.",
          paramsType: "\n @param **`list`** - listVariable  \n",
          returns: "\n Returns **`Boolean`**",
        },
      },
      {
        name: "getMainEnergyMeter",
        parameters: ["buildingId"],
        hoverContent: {
          description:
            "The getMainEnergyMeter() function takes buildingId as an argument and returns Main energy meter ID of the building.",
          paramsType: "\n @param **`list`** - listVariable  \n",
          returns: "\n Returns **`Boolean`**",
        },
      },
    ],
  },
  {
    type: "module",
  },
  {
    type: "readings",
  },
  {
    type: "notification",
  },
  {
    type: "math",
  },
  {
    type: "http",
  },
  {
    type: "connectedApp",
  },
  {
    type: "date",
  },
  {
    type: "number",
  },
  {
    type: "resource",
  },
  {
    type: "field",
  },
  {
    type: "file",
  },
  {
    type: "xml",
  },
  {
    type: "businessHours",
  },
  {
    type: "control",
  },
  {
    type: "criteria",
  },
];
