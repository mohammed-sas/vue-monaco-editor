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
          paramsType: "\n @param **`Number`** - buildingId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "convertUnit",
        parameters: ["value", "fromUnitId", "toUnitId"],
        hoverContent: {
          description:
            "The convertUnit() function takes value, fromUnit and toUnit as arguments and returns converted value.",
          paramsType:
            "\n @param **`Number`** - value, **`Number`** - fromUnitId, **`Number`** - toUnitId    \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "getFilePrivateUrl",
        parameters: ["fileID"],
        hoverContent: {
          description:
            "The getFilePrivateUrl() function will generate a new unique private URL for the given fileId.",
          paramsType: "\n @param **`Number`** - fileID  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getUnit",
        parameters: ["fieldName", "moduleName"],
        hoverContent: {
          description:
            "The getUnit() function used to get display unit of the given fieldName and moduleName.",
          paramsType:
            "\n @param **`String`** - fieldName, **`String`** - moduleName   \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "exportURL",
        parameters: ["URL"],
        hoverContent: {
          description: "The exportURL() function used to export an URL as PDF.",
          paramsType: "\n @param **`String`** - URL  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getOrgFileUrl",
        parameters: ["fileId"],
        hoverContent: {
          description:
            "The getOrgDownloadUrl() function is used to get Org file URL of the given fileId.",
          paramsType: "\n @param **`Number`** - fileId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getOrgDownloadUrl",
        parameters: ["fileId"],
        hoverContent: {
          description:
            "The getOrgDownloadUrl() function is used to get download URL of the given fileId.",
          paramsType: "\n @param **`Number`** - fileId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "encodeFileToBase64Binary",
        parameters: ["fileId"],
        hoverContent: {
          description:
            "The encodeFileToBase64Binary() function is used to get encoded file in base64 binary format of the given fileId.",
          paramsType: "\n @param **`Number`** - fileId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getTinyUrl",
        parameters: ["URL"],
        hoverContent: {
          description:
            "The getTinyUrl() function is used to genrate short (tiny) URL from long URL.",
          paramsType: "\n @param **`String`** - URL  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getFileName",
        parameters: ["fileId"],
        hoverContent: {
          description:
            "The getFileName() function used to get file name from the file id.",
          paramsType: "\n @param **`Number`** - fileId  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "picklist",
        parameters: ["module"],
        hoverContent: {
          description:
            "The picklist() function takes module name as input and returns picklist.",
          paramsType: "\n @param **`String`** - module  \n",
          returns: "\n Returns **`Map`**",
        },
      },
      {
        name: "getUserName",
        parameters: [],
        hoverContent: {
          description:
            "The getUserName() function returns the name of the current user logged in.",
          paramsType: "\n @param    \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "getUserEmail",
        parameters: [],
        hoverContent: {
          description:
            "The getUserEmail() function returns the name of the current user logged in.",
          paramsType: "\n @param    \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "mergeJson",
        parameters: ["parsedMap", "parsedMap2"],
        hoverContent: {
          description:
            "The mergeJson() function returns the merged json, it takes two json map as input.",
          paramsType:
            "\n @param **`Map`** - parsedMap, **`Map`** - parsedMap2  \n",
          returns: "\n Returns **`jsonMap`**",
        },
      },
      {
        name: "getTimeIntervals",
        parameters: ["startTime", "endTime", "seperationTime"],
        hoverContent: {
          description:
            "The getTimeIntervals() function returns the list of intervals for the given startTime and endTime, provided in what interval should the time should be splitted.",
          paramsType:
            "\n @param **`Number`** - startTime, **`Number`** - endTime, **`Number`** - seperationTime  \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getUserNameForId",
        parameters: ["id"],
        hoverContent: {
          description:
            "The getUserNameForId() function returns the name of the given orgId.",
          paramsType: "\n @param **`Number`** - id  \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "isUserInSiteScope",
        parameters: ["siteId", "assignedToId"],
        hoverContent: {
          description:
            "The isUserInSiteScope() function returns whether true or false, if the assigned user id is present inside the site .",
          paramsType:
            "\n @param **`Number`** - siteId, **`Number`** - assignedToId  \n",
          returns: "\n Returns **`Boolean`**",
        },
      },
      {
        name: "getLatLngForSite",
        parameters: ["siteId"],
        hoverContent: {
          description:
            "The getLatLngForSite() function returns the url containing latitude and longitude of the site for given siteId.",
          paramsType: "\n @param **`Number`** - siteId \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "encodeUrl",
        parameters: ["url"],
        hoverContent: {
          description:
            "The encodeUrl() function returns the utf-8 encode url for the given url as input.",
          paramsType: "\n @param **`String`** - url \n",
          returns: "\n Returns **`String`**",
        },
      },
      {
        name: "exportURLAsFile",
        parameters: ["url"],
        hoverContent: {
          description:
            "The exportURLAsFile() function takes url as input and returns the file id",
          paramsType: "\n @param **`String`** - url \n",
          returns: "\n Returns **`Number`**",
        },
      },
      {
        name: "tagAssetAsRotating",
        parameters: ["assetId"],
        hoverContent: {
          description:
            "The tagAssetAsRotating() function takes the asset id as input, for which the tag is set as rotating.",
          paramsType: "\n @param **`Number`** - assetId \n",
          returns: "\n Returns **`Void`**",
        },
      },
      {
        name: "updateStatus",
        parameters: ["record", "moduleName", "statusName"],
        hoverContent: {
          description:
            "The updateStatus() function takes the record, module name and status name as input and updates the status of that record.",
          paramsType:
            "\n @param **`Map`** - record, **`String`** - moduleName, **`String`** - statusName  \n",
          returns: "\n Returns **`Void`**",
        },
      },
      {
        name: "getDelegations",
        parameters: [],
        hoverContent: {
          description:
            "getDelegation function returns the list of assigned delegation.",
          paramsType: "\n @param   \n",
          returns: "\n Returns **`List`**",
        },
      },
      {
        name: "getBlobFile",
        parameters: ["url", "headers", "params", "fileName", "assetId"],
        hoverContent: {
          description:
            "The getBlobFile function hits the url,gets the file and saves the file and returns the fileId.",
          paramsType:
            "\n @param **`String`** - url, **`Map`** - headers, **`Map`** - params, **`String`** - fileName, **`String`** - assetId   \n",
          returns: "\n Returns **`Number`**",
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
